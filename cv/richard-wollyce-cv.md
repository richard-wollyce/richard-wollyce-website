<!-- Generated into cv/ from scripts/cv_content.py by scripts/generate-cv.py. Do not edit by hand. -->

# Richard Wollyce Santos de Souza

**Tech Lead | Full-Stack Software Engineer | AI Systems**

Franca, SP, Brazil  
mail@richardwollyce.com  
richardwollyce.com  
github.com/richard-wollyce  
linkedin.com/in/richardwollyce-/  
+55 (16) 9 9159-7978

Remote across Latin America, 0 to 1 hour from Santiago | Open to relocation to Santiago, Chile (Mercosur temporary residence)

## Professional Summary

Tech Lead and Full-Stack Software Engineer working across AI infrastructure and commerce systems, with independent IT and software work since 2018. Creator of Ulpia, an open-source memory and retrieval layer for AI agents written in Rust: RAG with no embedding model in the path, a first-class abstention verdict, sub-millisecond warm queries, an MCP server, and an evaluation harness (the 500 questions of LongMemEval-S, a blind adversarial set) published under Apache 2.0 in the same repository. Leads engineering at Casa Seth across infoproducts, Mercado Pago and Pix payments, attribution, server-side conversion tracking, financial reconciliation, and the BiblinhaPlay subscription platform. Combines architecture leadership with implementation, incident response, CI/CD, and production ownership.

## Technical Skills

**Languages:** TypeScript, JavaScript, Rust, SQL; working knowledge of Python and Bash  
**AI & Retrieval Systems:** Retrieval for AI agents (RAG without embeddings), LLM evaluation (benchmarks, blind adversarial sets, abstention), local-first memory architecture, deterministic retrieval, SQLite FTS5, Reciprocal Rank Fusion, confidence gating, Model Context Protocol (MCP), benchmark design  
**Web & Mobile:** React, TanStack Start/Router/Query, Next.js, Expo, React Native, Three.js, Vite, Tailwind CSS  
**Backend & Data:** Node.js, PostgreSQL, Supabase, Drizzle ORM, Better Auth, REST APIs, Edge Functions, RLS, RBAC  
**Commerce & Analytics:** Mercado Pago, Pix (Brazil's instant account-to-account rail), hosted checkout, idempotent webhooks, entitlements, revenue reconciliation, UTM attribution, server-side conversion tracking, PostHog  
**Platforms & Delivery:** Docker, Linux, Nginx, GitHub Actions, Vercel, EAS, CI/CD, Cargo, Tauri, BaseHub  
**Quality:** Vitest, Playwright, Maestro, TDD, automated linting, type checking, build gates, production monitoring

## Professional Experience

### Creator & Maintainer | Ulpia (Open Source)

**Apache 2.0 | ulpia.io | August 2026 - Present**

- Design and build a local-first memory and retrieval layer for fleets of AI agents in Rust, RAG with no embedding model, keeping every model out of the retrieval path so retrieval runs offline and results are reproducible and explainable when wrong.
- Built a two-scorer retrieval engine over a declared-keyword index and SQLite full-text search, fused with Reciprocal Rank Fusion, and measured which scorer wins which job rather than assuming they were interchangeable.
- Made refusal a first-class verdict behind a confidence gate: on a blind, adversarially checked question set, 28 of 30 out-of-scope questions are not answered confidently by the deterministic layer alone.
- Wrote the evaluation harness alongside the product: warm route latency of 0.68 ms p50 and 1.16 ms p95 in process, and 97 percent on abstention across the 500 questions of LongMemEval-S, with every result stamped with its command, commit, machine, and date.
- Shipped an MCP server exposing four read-only tools to Claude Desktop and other MCP clients, deliberately keeping write access off the surface a model can reach.
- Maintain roughly 17,000 lines of Rust across three crates with a single runtime dependency, over 200 tests, CI on GitHub Actions, and 36 architecture decision records carrying the reasoning behind each trade.

### Tech Lead & Software Engineer | Casa Seth

**Brazil | April 2026 - Present**

- Lead architecture and hands-on delivery across the company's infoproducts, digital commerce funnels, and the measurement systems that report what each of them earned.
- Own conversion engineering end to end: Mercado Pago and Pix checkout, server-controlled pricing, UTM attribution, first-party browser and server event tracking with deduplication, revenue reconciliation, and operational dashboards.
- Designed a generative-image pipeline with idempotent jobs, bounded concurrency, caching, persistence, and telemetry, so a failed job retries without duplicating paid work.
- Lead BiblinhaPlay, the subscription learning and entertainment platform serving roughly 500 users across a production web/PWA and an Expo/React Native client, covering video streaming, music, printables, interactive games, and gamification.
- Designed server-side authentication and authorization, plan-based entitlements, hosted subscription checkout, verified idempotent webhooks, payment reconciliation, protected media streaming, and immutable content releases with atomic activation and rollback.

### Software Engineer | MG Laser

**Franca, Brazil | November 2025 - April 2026**

- Built and maintained an ERP covering inventory, sales, and daily operations across multiple teams.
- Replaced spreadsheet workflows with structured forms and automated validation, reducing manual data-entry errors.
- Improved high-volume table performance through pagination and targeted PostgreSQL RPC calls while enforcing Row-Level Security and Role-Based Access Control.
- Managed deployment, monitoring, and infrastructure on a self-managed Linux VPS; restored service after a critical production outage in under 10 minutes with no data loss.

### Independent Software Engineer | Freelance

**Franca, Brazil | 2018 - Present**

- Deliver full-stack web applications using TypeScript, React, Next.js, Node.js, Supabase, PostgreSQL, Vite, Tailwind CSS, and Vercel.
- Built a live-event registration system with Brazilian identity (CPF) and WhatsApp validation, responsive staff workflows, and participant tracking.
- Built service-business chat and administrative workflows that turn conversations into structured budget requests and follow-up tasks.
- Own frontend, backend, database design, deployment, maintenance, and live support, using Vitest and TDD to prevent regressions.
- From 2018 to 2025 the same practice also covered IT support and systems work for people and small businesses, remote and on site: hardware, Windows, Linux and Android, software installation and configuration, and troubleshooting.

### IT Support & Operations Assistant | São Joaquim Hospital e Maternidade

**Franca, Brazil | August 2017 - April 2018**

- Technical and operational support across the departments of a hospital, including the MV2000 patient-record system, service orders, and day-to-day incident handling.
- First point of contact for the Ombudsman department, and the link between reception, nursing, medical, and technical teams when a workflow stalled.

### Technical Instructor & IT Support Technician | Escola Remington

**Franca, Brazil | April 2015 - April 2016**

- Hired out of the school's own classroom, during the web development and design course I was enrolled on there.
- Taught web design and creative software, and kept the Windows lab running: installation, configuration, and updates across every workstation.
- Supported students and staff during daily operations, from software issues to the lab network.

## Selected Projects

### Ulpia | Local-First Retrieval for AI Agents, Rust, Apache 2.0
https://ulpia.io

- Memory and retrieval layer for fleets of AI agents, RAG with no embedding model in the retrieval path, so it runs offline, returns the same answer twice, and can report that no file covers a question instead of returning the least wrong one.
- Two-scorer engine over a declared-keyword index and SQLite FTS5, fused with Reciprocal Rank Fusion, behind a confidence gate that turns abstention into a first-class verdict.
- Evaluated, not asserted: 28 of 30 out-of-scope questions declined by the deterministic layer on a blind adversarial set, 0.68 ms p50 warm route latency, 97 percent abstention across LongMemEval-S.
- MCP server with four read-only tools for Claude Desktop and other clients, a git-derived privacy model where an untracked file is never served, and a Tauri tray client on Windows.

### Casa Seth | Infoproducts, Commerce & Conversion Systems
https://biblinhaplay.com

- Shared domain and UI packages across independently deployed product funnels on Supabase and Postgres Edge Functions.
- Mercado Pago and Pix checkout, server-controlled pricing, UTM attribution, browser and server event deduplication, revenue reconciliation, and operator-led physical fulfillment workflows.
- BiblinhaPlay, the subscription platform inside the house: roughly 500 users, a production web/PWA and an Expo/React Native client, entitlement-based access, HTTP Range media delivery, immutable content snapshots, and the BiblinhaCraft Three.js voxel experience.

### RoadToCyberSec.com | Cybersecurity Education

- Authored a structured learning hub covering threat analysis, MFA, safe browsing, incident response, networking fundamentals, and digital evidence handling.
- Published the material through a searchable Mintlify documentation experience for technical and non-technical learners.

## Education

**B.Sc. in Software Engineering** | Universidade de Franca | 2025 - 2029, in progress

## Certifications

- Santander Bootcamp: Rust and AI-Integrated Application Development | June 2026
- Computational Forensics and Digital Evidence Investigation, Universidade Cruzeiro do Sul | June 2026
- LEAD1x: Exercising Leadership: Foundational Principles, HarvardX / edX | May 2026
- Networking Basics, Cisco Networking Academy | July 2025
- Introduction to Cybersecurity, Cisco Networking Academy | July 2023
- Professional Qualification in Web Development and Design (104 hours), Escola Remington | April 2015

## Languages

- Portuguese: Native
- English: Advanced (C1)
- Spanish: Fluent
