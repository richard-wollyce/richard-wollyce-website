from __future__ import annotations

import argparse
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_OUTPUT = ROOT / "public" / "richard-wollyce-cv.pdf"

ACCENT = colors.HexColor("#176B5B")
TEXT = colors.HexColor("#18201E")
MUTED = colors.HexColor("#52605C")
RULE = colors.HexColor("#D7DFDC")
PAGE_WIDTH, _ = A4
LEFT_MARGIN = 16 * mm
RIGHT_MARGIN = 16 * mm
TOP_MARGIN = 13 * mm
BOTTOM_MARGIN = 13 * mm
CONTENT_WIDTH = PAGE_WIDTH - LEFT_MARGIN - RIGHT_MARGIN


def build_styles() -> dict[str, ParagraphStyle]:
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=22,
            leading=24,
            textColor=TEXT,
            spaceAfter=2,
        ),
        "title": ParagraphStyle(
            "Title",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=11.5,
            leading=14,
            textColor=ACCENT,
            spaceAfter=5,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.5,
            leading=11,
            textColor=MUTED,
            spaceAfter=1,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10.5,
            leading=13,
            textColor=ACCENT,
            spaceBefore=7,
            spaceAfter=4,
            keepWithNext=True,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.7,
            leading=11.2,
            textColor=TEXT,
            spaceAfter=3,
        ),
        "skills": ParagraphStyle(
            "Skills",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.4,
            leading=10.8,
            textColor=TEXT,
            spaceAfter=2,
        ),
        "role": ParagraphStyle(
            "Role",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.5,
            leading=11.5,
            textColor=TEXT,
            keepWithNext=True,
        ),
        "meta": ParagraphStyle(
            "Meta",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.1,
            leading=10,
            textColor=MUTED,
            alignment=TA_RIGHT,
            keepWithNext=True,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.45,
            leading=10.7,
            textColor=TEXT,
            leftIndent=9,
            firstLineIndent=-7,
            spaceAfter=2.3,
        ),
        "project": ParagraphStyle(
            "Project",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.2,
            leading=11.2,
            textColor=TEXT,
            spaceAfter=2,
            keepWithNext=True,
        ),
        "small": ParagraphStyle(
            "Small",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.2,
            leading=10.4,
            textColor=TEXT,
            spaceAfter=2,
        ),
    }


def section(story: list, styles: dict[str, ParagraphStyle], title: str) -> None:
    story.append(Paragraph(escape(title.upper()), styles["section"]))
    story.append(HRFlowable(width="100%", thickness=0.55, color=RULE, spaceAfter=4))


def bullets(story: list, styles: dict[str, ParagraphStyle], items: list[str]) -> None:
    for item in items:
        story.append(Paragraph(f"- {escape(item)}", styles["bullet"]))


def role(
    story: list,
    styles: dict[str, ParagraphStyle],
    company: str,
    title: str,
    period: str,
    location: str,
    items: list[str],
) -> None:
    left = Paragraph(f"{escape(title)} | {escape(company)}", styles["role"])
    right = Paragraph(f"{escape(location)}<br/>{escape(period)}", styles["meta"])
    header = Table([[left, right]], colWidths=[CONTENT_WIDTH * 0.69, CONTENT_WIDTH * 0.31])
    header.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
            ]
        )
    )
    story.append(header)
    bullets(story, styles, items)
    story.append(Spacer(1, 3))


def project(
    story: list,
    styles: dict[str, ParagraphStyle],
    title: str,
    subtitle: str,
    items: list[str],
    url: str | None = None,
) -> None:
    heading = f"{escape(title)} | {escape(subtitle)}"
    if url:
        display_url = url.removeprefix("https://").removeprefix("http://").rstrip("/")
        heading += (
            f' | <link href="{escape(url)}" color="#176B5B">'
            f"{escape(display_url)}</link>"
        )

    block: list = [
        Paragraph(heading, styles["project"]),
    ]
    for item in items:
        block.append(Paragraph(f"- {escape(item)}", styles["bullet"]))
    block.append(Spacer(1, 3))
    story.append(KeepTogether(block))


def draw_page(canvas, document) -> None:
    canvas.saveState()
    canvas.setTitle("Richard Wollyce - Tech Lead and Full-Stack Software Engineer")
    canvas.setAuthor("Richard Wollyce Santos de Souza")
    canvas.setSubject("Professional curriculum vitae")
    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(0.4)
    canvas.line(LEFT_MARGIN, 9 * mm, PAGE_WIDTH - RIGHT_MARGIN, 9 * mm)
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(LEFT_MARGIN, 5.5 * mm, "richardwollyce.com")
    footer = f"Page {canvas.getPageNumber()}"
    canvas.drawRightString(PAGE_WIDTH - RIGHT_MARGIN, 5.5 * mm, footer)
    canvas.restoreState()


def build_cv(output: Path) -> None:
    output.parent.mkdir(parents=True, exist_ok=True)
    styles = build_styles()
    document = SimpleDocTemplate(
        str(output),
        pagesize=A4,
        leftMargin=LEFT_MARGIN,
        rightMargin=RIGHT_MARGIN,
        topMargin=TOP_MARGIN,
        bottomMargin=BOTTOM_MARGIN,
        title="Richard Wollyce - Tech Lead and Full-Stack Software Engineer",
        author="Richard Wollyce Santos de Souza",
        subject="Professional curriculum vitae",
    )

    story: list = []

    story.append(Paragraph("RICHARD WOLLYCE SANTOS DE SOUZA", styles["name"]))
    story.append(Paragraph("TECH LEAD | FULL-STACK SOFTWARE ENGINEER", styles["title"]))
    story.append(
        Paragraph(
            "Franca, SP, Brazil | +55 (16) 9 9159-7978 | "
            '<link href="mailto:mail@richardwollyce.com" color="#52605C">mail@richardwollyce.com</link>',
            styles["contact"],
        )
    )
    story.append(
        Paragraph(
            '<link href="https://richardwollyce.com" color="#52605C">richardwollyce.com</link> | '
            '<link href="https://linkedin.com/in/richardwollyce-/" color="#52605C">linkedin.com/in/richardwollyce-/</link> | '
            '<link href="https://github.com/richard-wollyce" color="#52605C">github.com/richard-wollyce</link>',
            styles["contact"],
        )
    )
    story.append(Spacer(1, 3))

    section(story, styles, "Professional Summary")
    story.append(
        Paragraph(
            "Tech Lead and Full-Stack Software Engineer building and operating product platforms across web, mobile, backend, payments, protected media, gamification, 3D experiences, generative AI, analytics, and infrastructure. Hands-on experience designing TypeScript monorepos, PostgreSQL data models, entitlement systems, resilient content releases, and event-driven commerce workflows. Combines architecture leadership with implementation, incident response, CI/CD, and production ownership.",
            styles["body"],
        )
    )

    section(story, styles, "Technical Skills")
    skill_lines = [
        ("Languages", "TypeScript, JavaScript, SQL; working knowledge of Python, Rust, and Bash"),
        ("Web & Mobile", "React, TanStack Start/Router/Query, Next.js, Expo, React Native, Three.js, Vite, Tailwind CSS"),
        ("Backend & Data", "Node.js, PostgreSQL, Supabase, Drizzle ORM, Better Auth, REST APIs, Edge Functions, RLS, RBAC"),
        ("Platforms & Delivery", "Docker, Linux, Nginx, GitHub Actions, Vercel, EAS, CI/CD, BaseHub, PostHog, Mercado Pago"),
        ("Quality", "Vitest, Playwright, Maestro, TDD, automated linting, type checking, build gates, production monitoring"),
    ]
    for label, value in skill_lines:
        story.append(Paragraph(f"<b>{escape(label)}:</b> {escape(value)}", styles["skills"]))

    section(story, styles, "Professional Experience")
    role(
        story,
        styles,
        "Casa Seth",
        "Tech Lead & Software Engineer",
        "April 2026 - Present",
        "Brazil",
        [
            "Lead the architecture and hands-on delivery of BiblinhaPlay, spanning a production web/PWA, shared backend services, an Expo/React Native client in development, protected media, recurring billing, gamification, and interactive games.",
            "Structured a TypeScript monorepo with pnpm, Turborepo, React, TanStack Start, shared UI and transactional-email packages, PostgreSQL/Supabase, Drizzle ORM, and automated quality gates.",
            "Designed server-side authentication and authorization, plan-based entitlements, hosted subscription checkout, verified and idempotent webhooks, payment reconciliation, and protected media streaming.",
            "Engineered immutable content releases with validation, hash-aware manifests, public/private media separation, atomic activation, and rollback-friendly snapshots independent of CMS runtime availability.",
            "Built BiblinhaCraft, a Three.js voxel experience with deterministic procedural terrain, lazy regional streaming, versioned save migration, creative and survival modes, missions, and touch-first controls.",
            "Lead development across Casa Seth's wider multi-product platform, including shared product packages, generative-image workflows, Pix payments, attribution, financial reconciliation, operational dashboards, and physical-product operations.",
        ],
    )
    role(
        story,
        styles,
        "MG Laser",
        "Software Engineer",
        "November 2025 - April 2026",
        "Franca, Brazil",
        [
            "Built and maintained an ERP covering inventory, sales, and daily operations across multiple teams.",
            "Replaced spreadsheet workflows with structured forms and automated validation, reducing manual data-entry errors.",
            "Improved high-volume table performance through pagination and targeted PostgreSQL RPC calls while enforcing Row-Level Security and Role-Based Access Control.",
            "Managed deployment, monitoring, and infrastructure on a self-managed Linux VPS; restored service after a critical production outage in under 10 minutes with no data loss.",
        ],
    )

    story.append(PageBreak())

    section(story, styles, "Professional Experience - Continued")
    role(
        story,
        styles,
        "Independent / Contract",
        "Independent Software Engineer",
        "Ongoing",
        "Franca, Brazil",
        [
            "Deliver full-stack web applications using TypeScript, React, Next.js, Node.js, Supabase, PostgreSQL, Vite, Tailwind CSS, and Vercel.",
            "Built a live-event registration system with Brazilian identity and WhatsApp validation, responsive staff workflows, and participant tracking.",
            "Built service-business chat and administrative workflows that turn conversations into structured budget requests and follow-up tasks.",
            "Own frontend, backend, database design, deployment, maintenance, and live support, using Vitest and TDD to prevent regressions.",
        ],
    )

    section(story, styles, "Selected Engineering Work")
    project(
        story,
        styles,
        "BiblinhaPlay",
        "Cross-Platform Learning Ecosystem",
        [
            "Production web/PWA plus an Expo/React Native client in development, backed by shared APIs and server-controlled integrations.",
            "Subscription billing, entitlement-based access, authenticated media delivery, HTTP Range streaming, and immutable content snapshots.",
            "Persistent gamification and BiblinhaCraft, a custom Three.js voxel experience with procedural terrain and progressive world loading.",
            "Separate, not-yet-launched conversational AI R&D prototype with curated retrieval, adult consent, ASR/TTS, and child-safety-oriented guardrails.",
        ],
        url="https://biblinhaplay.com",
    )
    project(
        story,
        styles,
        "Casa Seth Product Platform",
        "Commerce & Operations",
        [
            "Shared domain and UI packages across independently deployed product funnels and Supabase/Postgres Edge Functions.",
            "Paid-order validation, idempotent image generation, caching, concurrency control, telemetry, storage, and production-faithful benchmarking.",
            "Pix checkout, server-controlled pricing, UTM attribution, browser/server event deduplication, revenue reconciliation, and operator-led physical fulfillment workflows.",
        ],
    )
    project(
        story,
        styles,
        "RoadToCyberSec.com",
        "Cybersecurity Education",
        [
            "Authored a structured learning hub covering threat analysis, MFA, safe browsing, incident response, networking fundamentals, and digital evidence handling.",
            "Published the material through a searchable Mintlify documentation experience for technical and non-technical learners.",
        ],
    )

    section(story, styles, "Education")
    story.append(Paragraph("<b>B.Sc. in Software Engineering</b> | Universidade de Franca | 2025 - 2029", styles["small"]))

    section(story, styles, "Certifications")
    certifications = [
        "Santander Bootcamp: Rust and AI-Integrated Application Development | June 2026",
        "Computational Forensics and Digital Evidence Investigation, Universidade Cruzeiro do Sul | June 2026",
        "LEAD1x: Exercising Leadership: Foundational Principles, HarvardX / edX | May 2026",
        "Networking Basics, Cisco Networking Academy | July 2025",
        "Introduction to Cybersecurity, Cisco Networking Academy | July 2023",
    ]
    bullets(story, styles, certifications)

    section(story, styles, "Languages")
    story.append(Paragraph("Portuguese - Native | English - Advanced (C1) | Spanish - Intermediate", styles["small"]))

    document.build(story, onFirstPage=draw_page, onLaterPages=draw_page)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate Richard Wollyce's CV PDF.")
    parser.add_argument(
        "--output",
        type=Path,
        default=DEFAULT_OUTPUT,
        help=f"Output PDF path (default: {DEFAULT_OUTPUT})",
    )
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_args()
    build_cv(args.output.resolve())
    print(args.output.resolve())
