from __future__ import annotations

import argparse
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from cv_content import (
    AUTHOR,
    CONTACT_LINE_SUFFIX,
    CONTENT,
    EMAIL,
    GITHUB,
    LINKEDIN,
    LINKS_LINE,
    NAME,
    NAME_TITLE,
    PHONE,
    ROLE_LINE,
    ROLE_LINE_TITLE,
    WEBSITE,
)
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
# The PDFs are served by the site; the Markdown mirrors are the readable source of
# the same copy. Both are public, so cv/ is versioned and sits outside the ignored
# docs/ tree. Any new locale or format lands here too.
OUTPUT_DIR = ROOT / "public"
CV_DIR = ROOT / "cv"

ACCENT = colors.HexColor("#176B5B")
TEXT = colors.HexColor("#18201E")
MUTED = colors.HexColor("#52605C")
RULE = colors.HexColor("#D7DFDC")
PAGE_WIDTH, _ = A4
LEFT_MARGIN = 16 * mm
RIGHT_MARGIN = 16 * mm
TOP_MARGIN = 11.5 * mm
BOTTOM_MARGIN = 11.5 * mm
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
            spaceBefore=5,
            spaceAfter=2.5,
            keepWithNext=True,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.6,
            leading=10.9,
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
            fontSize=8.4,
            leading=10.4,
            textColor=TEXT,
            leftIndent=9,
            firstLineIndent=-7,
            spaceAfter=1.7,
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


def page_painter(doc_title: str, page_word: str):
    """The footer rule and page number, in the locale's own word for 'page'."""

    def draw_page(canvas, document) -> None:
        canvas.saveState()
        canvas.setTitle(doc_title)
        canvas.setAuthor(AUTHOR)
        canvas.setStrokeColor(RULE)
        canvas.setLineWidth(0.4)
        canvas.line(LEFT_MARGIN, 9 * mm, PAGE_WIDTH - RIGHT_MARGIN, 9 * mm)
        canvas.setFont("Helvetica", 7.5)
        canvas.setFillColor(MUTED)
        canvas.drawString(LEFT_MARGIN, 5.5 * mm, "richardwollyce.com")
        canvas.drawRightString(
            PAGE_WIDTH - RIGHT_MARGIN,
            5.5 * mm,
            f"{page_word} {canvas.getPageNumber()}",
        )
        canvas.restoreState()

    return draw_page


GENERATED_NOTE = {
    "en": "Generated into cv/ from scripts/cv_content.py by scripts/generate-cv.py. Do not edit by hand.",
    "pt-BR": "Gerado em cv/ a partir de scripts/cv_content.py por scripts/generate-cv.py. Nao edite a mao.",
    "es": "Generado en cv/ a partir de scripts/cv_content.py por scripts/generate-cv.py. No editar a mano.",
}


def _md_inline(value: str) -> str:
    """reportlab's <b> is the only markup the copy carries; Markdown wants **."""
    return value.replace("<b>", "**").replace("</b>", "**")


def render_markdown(locale: str) -> str:
    data = CONTENT[locale]
    labels = data["sections"]
    out: list[str] = []

    out.append(f"<!-- {GENERATED_NOTE[locale]} -->")
    out.append("")
    out.append(f"# {NAME_TITLE}")
    out.append("")
    out.append(f"**{ROLE_LINE_TITLE}**")
    out.append("")
    # Two trailing spaces are Markdown's hard line break.
    for line in (data["location"], EMAIL, WEBSITE, GITHUB, LINKEDIN):
        out.append(f"{line}  ")
    out.append(PHONE)
    if data.get("availability"):
        out.append("")
        out.append(data["availability"])
    out.append("")

    out.append(f'## {labels["summary"]}')
    out.append("")
    out.append(data["summary"])
    out.append("")

    out.append(f'## {labels["skills"]}')
    out.append("")
    for label, value in data["skills"]:
        out.append(f"**{label}:** {value}  ")
    out[-1] = out[-1].rstrip()
    out.append("")

    out.append(f'## {labels["experience"]}')
    out.append("")
    for job in data["experience"]:
        out.append(f'### {job["title"]} | {job["company"]}')
        out.append("")
        out.append(f'**{job["location"]} | {job["period"]}**')
        out.append("")
        for bullet in job["bullets"]:
            out.append(f"- {bullet}")
        out.append("")

    out.append(f'## {labels["projects"]}')
    out.append("")
    for item in data["projects"]:
        out.append(f'### {item["title"]} | {item["subtitle"]}')
        if item["url"]:
            out.append(item["url"])
        out.append("")
        for line in item["items"]:
            out.append(f"- {line}")
        out.append("")

    out.append(f'## {labels["education"]}')
    out.append("")
    out.append(_md_inline(data["education"]))
    out.append("")

    out.append(f'## {labels["certifications"]}')
    out.append("")
    for line in data["certifications"]:
        out.append(f"- {line}")
    out.append("")

    out.append(f'## {labels["languages"]}')
    out.append("")
    for entry in data["languages"].split(" | "):
        out.append(f"- {entry.replace(' - ', ': ', 1)}")
    out.append("")

    return chr(10).join(out)


def build_markdown(locale: str, output: Path) -> None:
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(render_markdown(locale), encoding="utf-8")


PAGE_WORD = {"en": "Page", "pt-BR": "Página", "es": "Página"}


def build_cv(locale: str, output: Path) -> None:
    data = CONTENT[locale]
    labels = data["sections"]

    output.parent.mkdir(parents=True, exist_ok=True)
    styles = build_styles()
    document = SimpleDocTemplate(
        str(output),
        pagesize=A4,
        leftMargin=LEFT_MARGIN,
        rightMargin=RIGHT_MARGIN,
        topMargin=TOP_MARGIN,
        bottomMargin=BOTTOM_MARGIN,
        title=data["doc_title"],
        author=AUTHOR,
        subject=data["subject"],
    )

    story: list = []

    story.append(Paragraph(NAME, styles["name"]))
    story.append(Paragraph(ROLE_LINE, styles["title"]))
    story.append(
        Paragraph(f'{escape(data["location"])} | {CONTACT_LINE_SUFFIX}', styles["contact"])
    )
    story.append(Paragraph(LINKS_LINE, styles["contact"]))
    if data.get("availability"):
        story.append(Paragraph(escape(data["availability"]), styles["contact"]))
    story.append(Spacer(1, 3))

    section(story, styles, labels["summary"])
    story.append(Paragraph(escape(data["summary"]), styles["body"]))

    section(story, styles, labels["skills"])
    for label, value in data["skills"]:
        story.append(Paragraph(f"<b>{escape(label)}:</b> {escape(value)}", styles["skills"]))

    section(story, styles, labels["experience"])
    for job in data["experience"]:
        role(
            story,
            styles,
            job["company"],
            job["title"],
            job["period"],
            job["location"],
            job["bullets"],
        )

    section(story, styles, labels["projects"])
    for item in data["projects"]:
        project(story, styles, item["title"], item["subtitle"], item["items"], url=item["url"])

    section(story, styles, labels["education"])
    story.append(Paragraph(data["education"], styles["small"]))

    section(story, styles, labels["certifications"])
    bullets(story, styles, data["certifications"])

    section(story, styles, labels["languages"])
    story.append(Paragraph(escape(data["languages"]), styles["small"]))

    painter = page_painter(data["doc_title"], PAGE_WORD[locale])
    document.build(story, onFirstPage=painter, onLaterPages=painter)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate Richard Wollyce's CV in every locale.")
    parser.add_argument(
        "--locale",
        choices=[*CONTENT.keys(), "all"],
        default="all",
        help="Which locale to render (default: all).",
    )
    parser.add_argument(
        "--format",
        choices=["pdf", "md", "all"],
        default="all",
        help="Which format to render (default: all).",
    )
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=OUTPUT_DIR,
        help=f"Directory for the PDFs (default: {OUTPUT_DIR})",
    )
    parser.add_argument(
        "--md-dir",
        type=Path,
        default=CV_DIR,
        help=f"Directory for the Markdown mirrors (default: {CV_DIR})",
    )
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_args()
    targets = list(CONTENT.keys()) if args.locale == "all" else [args.locale]
    for code in targets:
        stem = Path(CONTENT[code]["output"]).stem
        if args.format in ("pdf", "all"):
            destination = (args.output_dir / CONTENT[code]["output"]).resolve()
            build_cv(code, destination)
            print(f"{code:>6}  {destination}")
        if args.format in ("md", "all"):
            destination = (args.md_dir / f"{stem}.md").resolve()
            build_markdown(code, destination)
            print(f"{code:>6}  {destination}")
