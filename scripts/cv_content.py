"""CV copy, one entry per locale.

Job titles, product names, technical terms of art and the technology lists stay in
English in every locale: that is how the Brazilian and Spanish technology markets
write them on a resume. Prose, section headings and dates are translated.

Keep this in step with src/data/content/ on the site. The numbers about Ulpia are
measured values from the ulpia repository's benchmarks/ directory, not estimates.
"""

from __future__ import annotations

# The plain facts. Both renderers compose their own decoration from these, so the
# PDF's <link> markup never leaks into the Markdown mirror.
PHONE = "+55 (16) 9 9159-7978"
EMAIL = "mail@richardwollyce.com"
WEBSITE = "richardwollyce.com"
LINKEDIN = "linkedin.com/in/richardwollyce-/"
GITHUB = "github.com/richard-wollyce"

NAME = "RICHARD WOLLYCE SANTOS DE SOUZA"
NAME_TITLE = "Richard Wollyce Santos de Souza"
AUTHOR = "Richard Wollyce Santos de Souza"
ROLE_LINE = "TECH LEAD | FULL-STACK SOFTWARE ENGINEER | AI SYSTEMS"
ROLE_LINE_TITLE = "Tech Lead | Full-Stack Software Engineer | AI Systems"

_MUTED = "#52605C"


def _pdf_link(url: str, label: str) -> str:
    return f'<link href="{url}" color="{_MUTED}">{label}</link>'


CONTACT_LINE_SUFFIX = f"{PHONE} | " + _pdf_link(f"mailto:{EMAIL}", EMAIL)

LINKS_LINE = " | ".join(
    _pdf_link(f"https://{target}", target) for target in (WEBSITE, LINKEDIN, GITHUB)
)


CONTENT: dict[str, dict] = {
    # ------------------------------------------------------------------ English
    "en": {
        "output": "richard-wollyce-cv.pdf",
        "doc_title": "Richard Wollyce - Tech Lead and Full-Stack Software Engineer",
        "subject": "Professional curriculum vitae",
        "location": "Franca, SP, Brazil",
        "sections": {
            "summary": "Professional Summary",
            "skills": "Technical Skills",
            "experience": "Professional Experience",
            "projects": "Selected Engineering Work",
            "education": "Education",
            "certifications": "Certifications",
            "languages": "Languages",
        },
        "summary": (
            "Tech Lead and Full-Stack Software Engineer working across AI infrastructure and commerce systems. "
            "Creator of Ulpia, an open-source local-first memory layer for AI agents written in Rust, with "
            "deterministic retrieval, a first-class abstention verdict, sub-millisecond warm queries, and an MCP "
            "server; published under Apache 2.0 with its benchmarks in the same repository. Leads engineering at "
            "Casa Seth across infoproducts, Pix payments, attribution, server-side conversion tracking, financial "
            "reconciliation, and the BiblinhaPlay subscription platform. Combines architecture leadership with "
            "implementation, incident response, CI/CD, and production ownership."
        ),
        "skills": [
            ("Languages", "TypeScript, JavaScript, Rust, SQL; working knowledge of Python and Bash"),
            ("AI & Retrieval Systems", "Local-first memory architecture, deterministic retrieval, SQLite FTS5, Reciprocal Rank Fusion, abstention and confidence gating, Model Context Protocol (MCP), RAG, benchmark design"),
            ("Web & Mobile", "React, TanStack Start/Router/Query, Next.js, Expo, React Native, Three.js, Vite, Tailwind CSS"),
            ("Backend & Data", "Node.js, PostgreSQL, Supabase, Drizzle ORM, Better Auth, REST APIs, Edge Functions, RLS, RBAC"),
            ("Commerce & Analytics", "Pix, hosted checkout, idempotent webhooks, entitlements, revenue reconciliation, UTM attribution, server-side conversion tracking, PostHog, Mercado Pago"),
            ("Platforms & Delivery", "Docker, Linux, Nginx, GitHub Actions, Vercel, EAS, CI/CD, Cargo, Tauri, BaseHub"),
            ("Quality", "Vitest, Playwright, Maestro, TDD, automated linting, type checking, build gates, production monitoring"),
        ],
        "experience": [
            {
                "company": "Ulpia (Open Source)",
                "title": "Creator & Maintainer",
                "period": "August 2026 - Present",
                "location": "Apache 2.0 | ulpia.io",
                "bullets": [
                    "Design and build a local-first memory layer for fleets of AI agents in Rust, keeping every model out of the retrieval path so results are offline, reproducible, and explainable when wrong.",
                    "Built a two-scorer retrieval engine over a declared-keyword index and SQLite full-text search, fused with Reciprocal Rank Fusion, and measured which scorer wins which job rather than assuming they were interchangeable.",
                    "Made refusal a first-class verdict behind a confidence gate: on a blind, adversarially checked question set, 28 of 30 out-of-scope questions are not answered confidently by the deterministic layer alone.",
                    "Wrote the benchmark harness alongside the product: warm route latency of 0.68 ms p50 and 1.16 ms p95 in process, and 97 percent on abstention across the 500 questions of LongMemEval-S, with every result stamped with its command, commit, machine, and date.",
                    "Shipped an MCP server exposing four read-only tools to Claude Desktop and other MCP clients, deliberately keeping write access off the surface a model can reach.",
                    "Maintain roughly 17,000 lines of Rust across three crates with a single runtime dependency, over 200 tests, CI on GitHub Actions, and 33 architecture decision records carrying the reasoning behind each trade.",
                ],
            },
            {
                "company": "Casa Seth",
                "title": "Tech Lead & Software Engineer",
                "period": "April 2026 - Present",
                "location": "Brazil",
                "bullets": [
                    "Lead architecture and hands-on delivery across the company's infoproducts, digital commerce funnels, and the measurement systems that report what each of them earned.",
                    "Own conversion engineering end to end: Pix checkout, server-controlled pricing, UTM attribution, first-party browser and server event tracking with deduplication, revenue reconciliation, and operational dashboards.",
                    "Designed a generative-image pipeline with idempotent jobs, bounded concurrency, caching, persistence, and telemetry, so a failed job retries without duplicating paid work.",
                    "Lead BiblinhaPlay, the subscription learning and entertainment platform serving roughly 500 users across a production web/PWA and an Expo/React Native client, covering video streaming, music, printables, interactive games, and gamification.",
                    "Structured a TypeScript monorepo with pnpm, Turborepo, React, TanStack Start, shared UI and transactional-email packages, PostgreSQL/Supabase, Drizzle ORM, and automated quality gates.",
                    "Designed server-side authentication and authorization, plan-based entitlements, hosted subscription checkout, verified idempotent webhooks, payment reconciliation, protected media streaming, and immutable content releases with atomic activation and rollback.",
                    "Built BiblinhaCraft, a Three.js voxel experience with deterministic procedural terrain, lazy regional streaming, versioned save migration, missions, and touch-first controls.",
                ],
            },
            {
                "company": "MG Laser",
                "title": "Software Engineer",
                "period": "November 2025 - April 2026",
                "location": "Franca, Brazil",
                "bullets": [
                    "Built and maintained an ERP covering inventory, sales, and daily operations across multiple teams.",
                    "Replaced spreadsheet workflows with structured forms and automated validation, reducing manual data-entry errors.",
                    "Improved high-volume table performance through pagination and targeted PostgreSQL RPC calls while enforcing Row-Level Security and Role-Based Access Control.",
                    "Managed deployment, monitoring, and infrastructure on a self-managed Linux VPS; restored service after a critical production outage in under 10 minutes with no data loss.",
                ],
            },
            {
                "company": "Independent / Contract",
                "title": "Independent Software Engineer",
                "period": "Ongoing",
                "location": "Franca, Brazil",
                "bullets": [
                    "Deliver full-stack web applications using TypeScript, React, Next.js, Node.js, Supabase, PostgreSQL, Vite, Tailwind CSS, and Vercel.",
                    "Built a live-event registration system with Brazilian identity and WhatsApp validation, responsive staff workflows, and participant tracking.",
                    "Built service-business chat and administrative workflows that turn conversations into structured budget requests and follow-up tasks.",
                    "Own frontend, backend, database design, deployment, maintenance, and live support, using Vitest and TDD to prevent regressions.",
                ],
            },
        ],
        "projects": [
            {
                "title": "Ulpia",
                "subtitle": "Local-First AI Memory Infrastructure, Rust, Apache 2.0",
                "url": "https://ulpia.io",
                "items": [
                    "Memory layer for fleets of AI agents with no embedding model in the retrieval path, so it runs offline, returns the same answer twice, and can report that no file covers a question instead of returning the least wrong one.",
                    "Two-scorer engine over a declared-keyword index and SQLite FTS5, fused with Reciprocal Rank Fusion, behind a confidence gate that turns abstention into a first-class verdict.",
                    "Measured, not asserted: 28 of 30 out-of-scope questions declined by the deterministic layer on a blind adversarial set, 0.68 ms p50 warm route latency, 97 percent abstention across LongMemEval-S.",
                    "MCP server with four read-only tools for Claude Desktop and other clients, a git-derived privacy model where an untracked file is never served, and a Tauri tray client on Windows.",
                ],
            },
            {
                "title": "Casa Seth",
                "subtitle": "Infoproducts, Commerce & Conversion Systems",
                "url": "https://biblinhaplay.com",
                "items": [
                    "Shared domain and UI packages across independently deployed product funnels on Supabase and Postgres Edge Functions.",
                    "Pix checkout, server-controlled pricing, UTM attribution, browser and server event deduplication, revenue reconciliation, and operator-led physical fulfillment workflows.",
                    "Paid-order validation, idempotent image generation, caching, concurrency control, telemetry, storage, and production-faithful benchmarking.",
                    "BiblinhaPlay, the subscription learning and entertainment platform inside the house, serving roughly 500 users across a production web/PWA and an Expo/React Native client: video streaming, music, printables, games, entitlement-based access, HTTP Range media delivery, immutable content snapshots, and the BiblinhaCraft Three.js voxel experience.",
                ],
            },
            {
                "title": "RoadToCyberSec.com",
                "subtitle": "Cybersecurity Education",
                "url": None,
                "items": [
                    "Authored a structured learning hub covering threat analysis, MFA, safe browsing, incident response, networking fundamentals, and digital evidence handling.",
                    "Published the material through a searchable Mintlify documentation experience for technical and non-technical learners.",
                ],
            },
        ],
        "education": "<b>B.Sc. in Software Engineering</b> | Universidade de Franca | 2025 - 2029",
        "certifications": [
            "Santander Bootcamp: Rust and AI-Integrated Application Development | June 2026",
            "Computational Forensics and Digital Evidence Investigation, Universidade Cruzeiro do Sul | June 2026",
            "LEAD1x: Exercising Leadership: Foundational Principles, HarvardX / edX | May 2026",
            "Networking Basics, Cisco Networking Academy | July 2025",
            "Introduction to Cybersecurity, Cisco Networking Academy | July 2023",
        ],
        "languages": "Portuguese - Native | English - Advanced (C1) | Spanish - Intermediate",
    },

    # --------------------------------------------------------------- Portuguese
    "pt-BR": {
        "output": "richard-wollyce-cv-pt-br.pdf",
        "doc_title": "Richard Wollyce - Tech Lead e Full-Stack Software Engineer",
        "subject": "Currículo profissional",
        "location": "Franca, SP, Brasil",
        "sections": {
            "summary": "Resumo Profissional",
            "skills": "Competências Técnicas",
            "experience": "Experiência Profissional",
            "projects": "Trabalhos de Engenharia Selecionados",
            "education": "Formação",
            "certifications": "Certificações",
            "languages": "Idiomas",
        },
        "summary": (
            "Tech Lead e Full-Stack Software Engineer atuando entre infraestrutura de IA e sistemas de comércio. "
            "Criador do Ulpia, uma camada de memória local-first open source para agentes de IA escrita em Rust, com "
            "recuperação determinística, recusa como veredito de primeira classe, consultas quentes abaixo de um "
            "milissegundo e servidor MCP; publicado sob Apache 2.0 com os benchmarks no mesmo repositorio. Lidera a "
            "engenharia na Casa Seth em infoprodutos, pagamentos via Pix, atribuição, rastreamento de conversão "
            "server-side, conciliação financeira e a plataforma de assinatura BiblinhaPlay. Une liderança de "
            "arquitetura a implementação, resposta a incidentes, CI/CD e responsabilidade em produção."
        ),
        "skills": [
            ("Linguagens", "TypeScript, JavaScript, Rust, SQL; conhecimento prático de Python e Bash"),
            ("Sistemas de IA e Recuperação", "Arquitetura de memória local-first, recuperação determinística, SQLite FTS5, Reciprocal Rank Fusion, abstenção e portão de confiança, Model Context Protocol (MCP), RAG, desenho de benchmarks"),
            ("Web e Mobile", "React, TanStack Start/Router/Query, Next.js, Expo, React Native, Three.js, Vite, Tailwind CSS"),
            ("Backend e Dados", "Node.js, PostgreSQL, Supabase, Drizzle ORM, Better Auth, REST APIs, Edge Functions, RLS, RBAC"),
            ("Comércio e Analytics", "Pix, checkout hospedado, webhooks idempotentes, entitlements, conciliação de receita, atribuição por UTM, rastreamento de conversão server-side, PostHog, Mercado Pago"),
            ("Plataformas e Entrega", "Docker, Linux, Nginx, GitHub Actions, Vercel, EAS, CI/CD, Cargo, Tauri, BaseHub"),
            ("Qualidade", "Vitest, Playwright, Maestro, TDD, lint automatizado, checagem de tipos, portões de build, monitoramento em produção"),
        ],
        "experience": [
            {
                "company": "Ulpia (Open Source)",
                "title": "Creator & Maintainer",
                "period": "Agosto de 2026 - Atual",
                "location": "Apache 2.0 | ulpia.io",
                "bullets": [
                    "Projeto e construo uma camada de memória local-first para frotas de agentes de IA em Rust, mantendo todo modelo fora do caminho da recuperação, de modo que os resultados são offline, reprodutíveis e explicáveis quando erram.",
                    "Construí um motor de recuperação de dois scorers sobre um índice de palavras-chave declaradas e a busca full-text do SQLite, fundidos com Reciprocal Rank Fusion, e medi qual scorer vence qual tarefa em vez de supor que eram intercambiáveis.",
                    "Transformei a recusa em veredito de primeira classe atrás de um portão de confiança: em um conjunto de perguntas escrito às cegas e revisado de forma adversarial, 28 de 30 perguntas fora de escopo não são respondidas com confianca apenas pela camada determinística.",
                    "Escrevi o harness de benchmark junto com o produto: latência de rota quente de 0,68 ms p50 e 1,16 ms p95 em processo, e 97 por cento em abstenção nas 500 perguntas do LongMemEval-S, com cada resultado carimbado com seu comando, commit, máquina e data.",
                    "Entreguei um servidor MCP expondo quatro ferramentas somente leitura ao Claude Desktop e a outros clientes MCP, mantendo deliberadamente o acesso de escrita fora da superfície que um modelo alcança.",
                    "Mantenho cerca de 17.000 linhas de Rust em três crates com uma única dependência de runtime, mais de 200 testes, CI no GitHub Actions e 33 registros de decisão de arquitetura que carregam o raciocínio de cada troca.",
                ],
            },
            {
                "company": "Casa Seth",
                "title": "Tech Lead & Software Engineer",
                "period": "Abril de 2026 - Atual",
                "location": "Brasil",
                "bullets": [
                    "Lidero a arquitetura e a entrega pratica dos infoprodutos da empresa, dos funis de comércio digital e dos sistemas de medição que reportam quanto cada um deles rendeu.",
                    "Sou responsável pela engenharia de conversão de ponta a ponta: checkout no Pix, precificação controlada no servidor, atribuição por UTM, rastreamento first-party de eventos no navegador e no servidor com deduplicação, conciliação de receita e dashboards operacionais.",
                    "Projetei um pipeline de geração de imagens com jobs idempotentes, concorrência limitada, cache, persistência e telemetria, de forma que um job que falha e reprocessado sem duplicar trabalho ja pago.",
                    "Lidero o BiblinhaPlay, plataforma de assinatura de aprendizado e entretenimento com cerca de 500 usuários, entre um web/PWA em produção e um cliente Expo/React Native, cobrindo streaming de video, música, materiais para impressão, jogos interativos e gamificação.",
                    "Estruturei um monorepo TypeScript com pnpm, Turborepo, React, TanStack Start, pacotes compartilhados de UI e de e-mail transacional, PostgreSQL/Supabase, Drizzle ORM e portões automatizados de qualidade.",
                    "Projetei autenticação e autorização no servidor, entitlements por plano, checkout de assinatura hospedado, webhooks verificados e idempotentes, conciliação de pagamentos, streaming de mídia protegida e publicações imutáveis de conteudo com ativação atômica e rollback.",
                    "Construí o BiblinhaCraft, uma experiência voxel em Three.js com terreno procedural determinístico, streaming regional sob demanda, migração versionada de saves, missões e controles pensados para toque.",
                ],
            },
            {
                "company": "MG Laser",
                "title": "Software Engineer",
                "period": "Novembro de 2025 - Abril de 2026",
                "location": "Franca, Brasil",
                "bullets": [
                    "Construí e mantive um ERP cobrindo estoque, vendas e operação diária em várias equipes.",
                    "Substituí fluxos em planilha por formulários estruturados e validação automatizada, reduzindo erros de digitação manual.",
                    "Melhorei o desempenho de tabelas de alto volume com paginação e chamadas RPC direcionadas no PostgreSQL, aplicando Row-Level Security e Role-Based Access Control.",
                    "Cuidei de deploy, monitoramento e infraestrutura em uma VPS Linux autogerenciada; restaurei o serviço após uma queda crítica em produção em menos de 10 minutos e sem perda de dados.",
                ],
            },
            {
                "company": "Independente / Contrato",
                "title": "Independent Software Engineer",
                "period": "Em andamento",
                "location": "Franca, Brasil",
                "bullets": [
                    "Entrego aplicações web full-stack usando TypeScript, React, Next.js, Node.js, Supabase, PostgreSQL, Vite, Tailwind CSS e Vercel.",
                    "Construí um sistema de inscrição para eventos ao vivo com validação de CPF e WhatsApp, fluxos responsivos para a equipe e acompanhamento de participantes.",
                    "Construí fluxos de chat e administração para negócios de serviço, transformando conversas em pedidos de orçamento estruturados e tarefas de follow-up.",
                    "Sou responsável por frontend, backend, modelagem de banco, deploy, manutenção e suporte ao vivo, usando Vitest e TDD para evitar regressões.",
                ],
            },
        ],
        "projects": [
            {
                "title": "Ulpia",
                "subtitle": "Infraestrutura de AI Memory Local-First, Rust, Apache 2.0",
                "url": "https://ulpia.io",
                "items": [
                    "Camada de memória para frotas de agentes de IA sem nenhum modelo de embedding no caminho da recuperação, então roda offline, devolve a mesma resposta duas vezes e consegue reportar que nenhum arquivo cobre a pergunta em vez de devolver o menos errado.",
                    "Motor de dois scorers sobre um índice de palavras-chave declaradas e SQLite FTS5, fundidos com Reciprocal Rank Fusion, atrás de um portão de confiança que torna a abstenção um veredito de primeira classe.",
                    "Medido, não afirmado: 28 de 30 perguntas fora de escopo recusadas pela camada determinística em um conjunto adversarial escrito às cegas, latência de rota quente de 0,68 ms p50 e 97 por cento de abstenção no LongMemEval-S.",
                    "Servidor MCP com quatro ferramentas somente leitura para o Claude Desktop e outros clientes, um modelo de privacidade derivado do git em que um arquivo não rastreado nunca é servido, e um cliente de bandeja em Tauri no Windows.",
                ],
            },
            {
                "title": "Casa Seth",
                "subtitle": "Infoprodutos, Comércio e Sistemas de Conversão",
                "url": "https://biblinhaplay.com",
                "items": [
                    "Pacotes compartilhados de domínio e de UI entre funis de produto publicados de forma independente, sobre Supabase e Edge Functions do Postgres.",
                    "Checkout no Pix, precificação controlada no servidor, atribuição por UTM, deduplicação de eventos de navegador e servidor, conciliação de receita e fluxos de expedição física conduzidos por operador.",
                    "Validação de pedido pago, geracao idempotente de imagens, cache, controle de concorrência, telemetria, armazenamento e benchmarking fiel à produção.",
                    "BiblinhaPlay, a plataforma de assinatura de aprendizado e entretenimento dentro da casa, com cerca de 500 usuários entre um web/PWA em produção e um cliente Expo/React Native: streaming de video, música, materiais para impressão, jogos, acesso por entitlement, entrega de mídia por HTTP Range, snapshots imutaveis de conteudo e a experiência voxel BiblinhaCraft em Three.js.",
                ],
            },
            {
                "title": "RoadToCyberSec.com",
                "subtitle": "Educação em Cibersegurança",
                "url": None,
                "items": [
                    "Escrevi um hub de aprendizado estruturado cobrindo análise de ameaças, MFA, navegação segura, resposta a incidentes, fundamentos de redes e tratamento de evidências digitais.",
                    "Publiquei o material em uma experiência de documentação pesquisável no Mintlify, para públicos técnicos e não técnicos.",
                ],
            },
        ],
        "education": "<b>Bacharelado em Engenharia de Software</b> | Universidade de Franca | 2025 - 2029",
        "certifications": [
            "Santander Bootcamp: Rust and AI-Integrated Application Development | Junho de 2026",
            "Perícia Computacional e Investigação de Evidencias Digitais, Universidade Cruzeiro do Sul | Junho de 2026",
            "LEAD1x: Exercising Leadership: Foundational Principles, HarvardX / edX | Maio de 2026",
            "Networking Basics, Cisco Networking Academy | Julho de 2025",
            "Introduction to Cybersecurity, Cisco Networking Academy | Julho de 2023",
        ],
        "languages": "Português - Nativo | Inglês - Avançado (C1) | Espanhol - Intermediário",
    },

    # ------------------------------------------------------------------ Spanish
    "es": {
        "output": "richard-wollyce-cv-es.pdf",
        "doc_title": "Richard Wollyce - Tech Lead y Full-Stack Software Engineer",
        "subject": "Currículum profesional",
        "location": "Franca, SP, Brasil",
        "sections": {
            "summary": "Resumen Profesional",
            "skills": "Competencias Técnicas",
            "experience": "Experiencia Profesional",
            "projects": "Trabajos de Ingeniería Seleccionados",
            "education": "Formación",
            "certifications": "Certificaciones",
            "languages": "Idiomas",
        },
        "summary": (
            "Tech Lead y Full-Stack Software Engineer trabajando entre infraestructura de IA y sistemas de comercio. "
            "Creador de Ulpia, una capa de memoria local-first open source para agentes de IA escrita en Rust, con "
            "recuperación determinista, la negativa como veredicto de primera clase, consultas en caliente por debajo "
            "del milisegundo y servidor MCP; publicada bajo Apache 2.0 con sus benchmarks en el mismo repositorio. "
            "Lidera la ingeniería en Casa Seth en infoproductos, pagos con Pix, atribución, seguimiento de conversión "
            "del lado del servidor, conciliación financiera y la plataforma de suscripción BiblinhaPlay. Combina "
            "liderazgo de arquitectura con implementación, respuesta a incidentes, CI/CD y responsabilidad en producción."
        ),
        "skills": [
            ("Lenguajes", "TypeScript, JavaScript, Rust, SQL; conocimiento práctico de Python y Bash"),
            ("Sistemas de IA y Recuperación", "Arquitectura de memoria local-first, recuperación determinista, SQLite FTS5, Reciprocal Rank Fusion, abstención y compuerta de confianza, Model Context Protocol (MCP), RAG, diseño de benchmarks"),
            ("Web y Móvil", "React, TanStack Start/Router/Query, Next.js, Expo, React Native, Three.js, Vite, Tailwind CSS"),
            ("Backend y Datos", "Node.js, PostgreSQL, Supabase, Drizzle ORM, Better Auth, REST APIs, Edge Functions, RLS, RBAC"),
            ("Comercio y Analytics", "Pix, checkout alojado, webhooks idempotentes, entitlements, conciliación de ingresos, atribución por UTM, seguimiento de conversión del lado del servidor, PostHog, Mercado Pago"),
            ("Plataformas y Entrega", "Docker, Linux, Nginx, GitHub Actions, Vercel, EAS, CI/CD, Cargo, Tauri, BaseHub"),
            ("Calidad", "Vitest, Playwright, Maestro, TDD, linting automatizado, verificación de tipos, compuertas de build, monitoreo en producción"),
        ],
        "experience": [
            {
                "company": "Ulpia (Open Source)",
                "title": "Creator & Maintainer",
                "period": "Agosto de 2026 - Actual",
                "location": "Apache 2.0 | ulpia.io",
                "bullets": [
                    "Diseño y construyo una capa de memoria local-first para flotas de agentes de IA en Rust, manteniendo todo modelo fuera del camino de recuperación, de modo que los resultados son offline, reproducibles y explicables cuando se equivocan.",
                    "Construí un motor de recuperación de dos scorers sobre un índice de palabras clave declaradas y la busqueda full-text de SQLite, fusionados con Reciprocal Rank Fusion, y medí qué scorer gana en que tarea en vez de suponer que eran intercambiables.",
                    "Convertí la negativa en un veredicto de primera clase detrás de una compuerta de confianza: sobre un conjunto de preguntas escrito a ciegas y revisado de forma adversarial, 28 de 30 preguntas fuera de alcance no se responden con confianza solo con la capa determinista.",
                    "Escribí el harness de benchmark junto con el producto: latencia de ruta en caliente de 0,68 ms p50 y 1,16 ms p95 en proceso, y 97 por ciento en abstención sobre las 500 preguntas de LongMemEval-S, con cada resultado sellado con su comando, commit, maquina y fecha.",
                    "Entregué un servidor MCP que expone cuatro herramientas de solo lectura a Claude Desktop y otros clientes MCP, manteniendo deliberadamente el acceso de escritura fuera de la superficie que alcanza un modelo.",
                    "Mantengo alrededor de 17.000 líneas de Rust en tres crates con una única dependencia de runtime, más de 200 pruebas, CI en GitHub Actions y 33 registros de decisión de arquitectura que llevan el razonamiento de cada compromiso.",
                ],
            },
            {
                "company": "Casa Seth",
                "title": "Tech Lead & Software Engineer",
                "period": "Abril de 2026 - Actual",
                "location": "Brasil",
                "bullets": [
                    "Lidero la arquitectura y la entrega practica de los infoproductos de la empresa, los embudos de comercio digital y los sistemas de medición que reportan cuánto rindió cada uno.",
                    "Soy responsable de la ingeniería de conversión de extremo a extremo: checkout con Pix, precios controlados en el servidor, atribución por UTM, seguimiento first-party de eventos en navegador y servidor con deduplicacion, conciliación de ingresos y paneles operativos.",
                    "Diseñé un pipeline de generacion de imagenes con trabajos idempotentes, concurrencia acotada, cache, persistencia y telemetría, de modo que un trabajo fallido se reintenta sin duplicar trabajo ya pagado.",
                    "Lidero BiblinhaPlay, la plataforma de suscripción de aprendizaje y entretenimiento con cerca de 500 usuarios, entre un web/PWA en producción y un cliente Expo/React Native, que cubre streaming de video, musica, material imprimible, juegos interactivos y gamificacion.",
                    "Estructure un monorepo TypeScript con pnpm, Turborepo, React, TanStack Start, paquetes compartidos de UI y de correo transaccional, PostgreSQL/Supabase, Drizzle ORM y compuertas automatizadas de calidad.",
                    "Diseñé autenticacion y autorizacion del lado del servidor, entitlements por plan, checkout de suscripción alojado, webhooks verificados e idempotentes, conciliación de pagos, streaming de medios protegidos y publicaciones inmutables de contenido con activación atómica y rollback.",
                    "Construí BiblinhaCraft, una experiencia voxel en Three.js con terreno procedural determinista, streaming regional bajo demanda, migracion versionada de guardados, misiones y controles pensados para el tactil.",
                ],
            },
            {
                "company": "MG Laser",
                "title": "Software Engineer",
                "period": "Noviembre de 2025 - Abril de 2026",
                "location": "Franca, Brasil",
                "bullets": [
                    "Construí y mantuve un ERP que cubre inventario, ventas y operación diaria en varios equipos.",
                    "Reemplace flujos en hojas de calculo por formularios estructurados y validacion automatizada, reduciendo errores de carga manual.",
                    "Mejoré el rendimiento de tablas de alto volumen con paginacion y llamadas RPC dirigidas en PostgreSQL, aplicando Row-Level Security y Role-Based Access Control.",
                    "Gestioné despliegue, monitoreo e infraestructura en un VPS Linux autoadministrado; restauré el servicio tras una caída crítica en producción en menos de 10 minutos y sin pérdida de datos.",
                ],
            },
            {
                "company": "Independiente / Contrato",
                "title": "Independent Software Engineer",
                "period": "En curso",
                "location": "Franca, Brasil",
                "bullets": [
                    "Entrego aplicaciones web full-stack con TypeScript, React, Next.js, Node.js, Supabase, PostgreSQL, Vite, Tailwind CSS y Vercel.",
                    "Construí un sistema de inscripcion para eventos en vivo con validacion de identidad brasileña y WhatsApp, flujos responsivos para el equipo y seguimiento de participantes.",
                    "Construí flujos de chat y administracion para negocios de servicios, convirtiendo conversaciones en solicitudes de presupuesto estructuradas y tareas de seguimiento.",
                    "Soy responsable de frontend, backend, diseño de base de datos, despliegue, mantenimiento y soporte en vivo, usando Vitest y TDD para evitar regresiones.",
                ],
            },
        ],
        "projects": [
            {
                "title": "Ulpia",
                "subtitle": "Infraestructura de AI Memory Local-First, Rust, Apache 2.0",
                "url": "https://ulpia.io",
                "items": [
                    "Capa de memoria para flotas de agentes de IA sin ningún modelo de embedding en el camino de recuperación, así que funciona sin conexión, devuelve la misma respuesta dos veces y puede reportar que ningún archivo cubre la pregunta en lugar de devolver el menos equivocado.",
                    "Motor de dos scorers sobre un índice de palabras clave declaradas y SQLite FTS5, fusionados con Reciprocal Rank Fusion, detrás de una compuerta de confianza que convierte la abstención en un veredicto de primera clase.",
                    "Medido, no afirmado: 28 de 30 preguntas fuera de alcance rechazadas por la capa determinista sobre un conjunto adversarial escrito a ciegas, latencia de ruta en caliente de 0,68 ms p50 y 97 por ciento de abstención en LongMemEval-S.",
                    "Servidor MCP con cuatro herramientas de solo lectura para Claude Desktop y otros clientes, un modelo de privacidad derivado de git donde un archivo no rastreado nunca se sirve, y un cliente de bandeja en Tauri para Windows.",
                ],
            },
            {
                "title": "Casa Seth",
                "subtitle": "Infoproductos, Comercio y Sistemas de Conversión",
                "url": "https://biblinhaplay.com",
                "items": [
                    "Paquetes compartidos de dominio y de UI entre embudos de producto desplegados de forma independiente, sobre Supabase y Edge Functions de Postgres.",
                    "Checkout con Pix, precios controlados en el servidor, atribución por UTM, deduplicacion de eventos de navegador y servidor, conciliación de ingresos y flujos de envío físico conducidos por operador.",
                    "Validacion de pedido pagado, generacion idempotente de imagenes, cache, control de concurrencia, telemetría, almacenamiento y benchmarking fiel a producción.",
                    "BiblinhaPlay, la plataforma de suscripción de aprendizaje y entretenimiento dentro de la casa, con cerca de 500 usuarios entre un web/PWA en producción y un cliente Expo/React Native: streaming de video, musica, material imprimible, juegos, acceso por entitlement, entrega de medios por HTTP Range, snapshots inmutables de contenido y la experiencia voxel BiblinhaCraft en Three.js.",
                ],
            },
            {
                "title": "RoadToCyberSec.com",
                "subtitle": "Educación en Ciberseguridad",
                "url": None,
                "items": [
                    "Escribí un hub de aprendizaje estructurado que cubre análisis de amenazas, MFA, navegación segura, respuesta a incidentes, fundamentos de redes y manejo de evidencia digital.",
                    "Publiqué el material en una experiencia de documentación consultable en Mintlify, para públicos técnicos y no técnicos.",
                ],
            },
        ],
        "education": "<b>Licenciatura en Ingeniería de Software</b> | Universidade de Franca | 2025 - 2029",
        "certifications": [
            "Santander Bootcamp: Rust and AI-Integrated Application Development | Junio de 2026",
            "Informática Forense e Investigación de Evidencia Digital, Universidade Cruzeiro do Sul | Junio de 2026",
            "LEAD1x: Exercising Leadership: Foundational Principles, HarvardX / edX | Mayo de 2026",
            "Networking Basics, Cisco Networking Academy | Julio de 2025",
            "Introduction to Cybersecurity, Cisco Networking Academy | Julio de 2023",
        ],
        "languages": "Portugués - Nativo | Inglés - Avanzado (C1) | Español - Intermedio",
    },
}
