"""CV copy, one entry per locale.

Job titles, product names, technical terms of art and the technology lists stay in
English in every locale: that is how the Brazilian and Spanish technology markets
write them on a resume. Prose, section headings and dates are translated.

Keep this in step with src/data/content/ on the site. The numbers about Ulpia are
measured values from the ulpia repository's benchmarks/ directory, not estimates.
The availability line exists because the CV is read outside Brazil: it says where
Richard works from, in which time zone, and that relocation to Santiago is on the table.
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
        "availability": "Remote across Latin America, 0 to 1 hour from Santiago | Open to relocation to Santiago, Chile (Mercosur temporary residence)",
        "sections": {
            "summary": "Professional Summary",
            "skills": "Technical Skills",
            "experience": "Professional Experience",
            "projects": "Selected Projects",
            "education": "Education",
            "certifications": "Certifications",
            "languages": "Languages",
        },
        "summary": (
            "Tech Lead and Full-Stack Software Engineer working across AI infrastructure and commerce systems, "
            "with independent IT and software work since 2018. Creator of Ulpia, an open-source memory and retrieval "
            "layer for AI agents written in Rust: RAG with no embedding model in the path, a first-class abstention "
            "verdict, sub-millisecond warm queries, an MCP server, and an evaluation harness (the 500 questions of "
            "LongMemEval-S, a blind adversarial set) published under Apache 2.0 in the same repository. Leads "
            "engineering at Casa Seth across infoproducts, Mercado Pago and Pix payments, attribution, server-side "
            "conversion tracking, financial reconciliation, and the BiblinhaPlay subscription platform. Combines "
            "architecture leadership with implementation, incident response, CI/CD, and production ownership."
        ),
        "skills": [
            ("Languages", "TypeScript, JavaScript, Rust, SQL; working knowledge of Python and Bash"),
            ("AI & Retrieval Systems", "Retrieval for AI agents (RAG without embeddings), LLM evaluation (benchmarks, blind adversarial sets, abstention), local-first memory architecture, deterministic retrieval, SQLite FTS5, Reciprocal Rank Fusion, confidence gating, Model Context Protocol (MCP), benchmark design"),
            ("Web & Mobile", "React, TanStack Start/Router/Query, Next.js, Expo, React Native, Three.js, Vite, Tailwind CSS"),
            ("Backend & Data", "Node.js, PostgreSQL, Supabase, Drizzle ORM, Better Auth, REST APIs, Edge Functions, RLS, RBAC"),
            ("Commerce & Analytics", "Mercado Pago, Pix (Brazil's instant account-to-account rail), hosted checkout, idempotent webhooks, entitlements, revenue reconciliation, UTM attribution, server-side conversion tracking, PostHog"),
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
                    "Design and build a local-first memory and retrieval layer for fleets of AI agents in Rust, RAG with no embedding model, keeping every model out of the retrieval path so retrieval runs offline and results are reproducible and explainable when wrong.",
                    "Built a two-scorer retrieval engine over a declared-keyword index and SQLite full-text search, fused with Reciprocal Rank Fusion, and measured which scorer wins which job rather than assuming they were interchangeable.",
                    "Made refusal a first-class verdict behind a confidence gate: on a blind, adversarially checked question set, 28 of 30 out-of-scope questions are not answered confidently by the deterministic layer alone.",
                    "Wrote the evaluation harness alongside the product: warm route latency of 0.68 ms p50 and 1.16 ms p95 in process, and 97 percent on abstention across the 500 questions of LongMemEval-S, with every result stamped with its command, commit, machine, and date.",
                    "Shipped an MCP server exposing four read-only tools to Claude Desktop and other MCP clients, deliberately keeping write access off the surface a model can reach.",
                    "Maintain roughly 17,000 lines of Rust across three crates with a single runtime dependency, over 200 tests, CI on GitHub Actions, and 36 architecture decision records carrying the reasoning behind each trade.",
                ],
            },
            {
                "company": "Casa Seth",
                "title": "Tech Lead & Software Engineer",
                "period": "April 2026 - Present",
                "location": "Brazil",
                "bullets": [
                    "Lead architecture and hands-on delivery across the company's infoproducts, digital commerce funnels, and the measurement systems that report what each of them earned.",
                    "Own conversion engineering end to end: Mercado Pago and Pix checkout, server-controlled pricing, UTM attribution, first-party browser and server event tracking with deduplication, revenue reconciliation, and operational dashboards.",
                    "Designed a generative-image pipeline with idempotent jobs, bounded concurrency, caching, persistence, and telemetry, so a failed job retries without duplicating paid work.",
                    "Lead BiblinhaPlay, the subscription learning and entertainment platform serving roughly 500 users across a production web/PWA and an Expo/React Native client, covering video streaming, music, printables, interactive games, and gamification.",
                    "Designed server-side authentication and authorization, plan-based entitlements, hosted subscription checkout, verified idempotent webhooks, payment reconciliation, protected media streaming, and immutable content releases with atomic activation and rollback.",
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
                "company": "Freelance",
                "title": "Independent Software Engineer",
                "period": "2018 - Present",
                "location": "Franca, Brazil",
                "bullets": [
                    "Deliver full-stack web applications using TypeScript, React, Next.js, Node.js, Supabase, PostgreSQL, Vite, Tailwind CSS, and Vercel.",
                    "Built a live-event registration system with Brazilian identity (CPF) and WhatsApp validation, responsive staff workflows, and participant tracking.",
                    "Built service-business chat and administrative workflows that turn conversations into structured budget requests and follow-up tasks.",
                    "Own frontend, backend, database design, deployment, maintenance, and live support, using Vitest and TDD to prevent regressions.",
                    "From 2018 to 2025 the same practice also covered IT support and systems work for people and small businesses, remote and on site: hardware, Windows, Linux and Android, software installation and configuration, and troubleshooting.",
                ],
            },
            {
                "company": "São Joaquim Hospital e Maternidade",
                "title": "IT Support & Operations Assistant",
                "period": "August 2017 - April 2018",
                "location": "Franca, Brazil",
                "bullets": [
                    "Technical and operational support across the departments of a hospital, including the MV2000 patient-record system, service orders, and day-to-day incident handling.",
                    "First point of contact for the Ombudsman department, and the link between reception, nursing, medical, and technical teams when a workflow stalled.",
                ],
            },
            {
                "company": "Escola Remington",
                "title": "Technical Instructor & IT Support Technician",
                "period": "April 2015 - April 2016",
                "location": "Franca, Brazil",
                "bullets": [
                    "Hired by the school out of its own classroom, during the web development and design course I was enrolled on there.",
                    "Taught web design and creative software, and kept the Windows lab running: installation, configuration, and updates across every workstation.",
                    "Supported students and staff during daily operations, from software issues to the lab network.",
                ],
            },
        ],
        "projects": [
            {
                "title": "Ulpia",
                "subtitle": "Local-First Retrieval for AI Agents, Rust, Apache 2.0",
                "url": "https://ulpia.io",
                "items": [
                    "Memory and retrieval layer for fleets of AI agents, RAG with no embedding model in the retrieval path, so it runs offline, returns the same answer twice, and can report that no file covers a question instead of returning the least wrong one.",
                    "Two-scorer engine over a declared-keyword index and SQLite FTS5, fused with Reciprocal Rank Fusion, behind a confidence gate that turns abstention into a first-class verdict.",
                    "Evaluated, not asserted: 28 of 30 out-of-scope questions declined by the deterministic layer on a blind adversarial set, 0.68 ms p50 warm route latency, 97 percent abstention across LongMemEval-S.",
                    "MCP server with four read-only tools for Claude Desktop and other clients, a git-derived privacy model where an untracked file is never served, and a Tauri tray client on Windows.",
                ],
            },
            {
                "title": "Casa Seth",
                "subtitle": "Infoproducts, Commerce & Conversion Systems",
                "url": "https://biblinhaplay.com",
                "items": [
                    "Shared domain and UI packages across independently deployed product funnels on Supabase and Postgres Edge Functions.",
                    "Mercado Pago and Pix checkout, server-controlled pricing, UTM attribution, browser and server event deduplication, revenue reconciliation, and operator-led physical fulfillment workflows.",
                    "BiblinhaPlay, the subscription platform inside the house: roughly 500 users, a production web/PWA and an Expo/React Native client, entitlement-based access, HTTP Range media delivery, immutable content snapshots, and the BiblinhaCraft Three.js voxel experience.",
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
        "education": "<b>B.Sc. in Software Engineering</b> | Universidade de Franca | 2025 - 2029, in progress",
        "certifications": [
            "Santander Bootcamp: Rust and AI-Integrated Application Development | June 2026",
            "Computational Forensics and Digital Evidence Investigation, Universidade Cruzeiro do Sul | June 2026",
            "LEAD1x: Exercising Leadership: Foundational Principles, HarvardX / edX | May 2026",
            "Networking Basics, Cisco Networking Academy | July 2025",
            "Introduction to Cybersecurity, Cisco Networking Academy | July 2023",
            "Professional Qualification in Web Development and Design (104 hours), Escola Remington | April 2015",
        ],
        "languages": "Portuguese - Native | English - Advanced (C1) | Spanish - Fluent",
    },

    # --------------------------------------------------------------- Portuguese
    "pt-BR": {
        "output": "richard-wollyce-cv-pt-br.pdf",
        "doc_title": "Richard Wollyce - Tech Lead e Full-Stack Software Engineer",
        "subject": "Currículo profissional",
        "location": "Franca, SP, Brasil",
        "availability": "Remoto para a América Latina, 0 a 1 hora de diferença para Santiago | Disponível para realocação para Santiago, Chile (residência temporária Mercosul)",
        "sections": {
            "summary": "Resumo Profissional",
            "skills": "Competências Técnicas",
            "experience": "Experiência Profissional",
            "projects": "Projetos em Destaque",
            "education": "Formação",
            "certifications": "Certificações",
            "languages": "Idiomas",
        },
        "summary": (
            "Tech Lead e Full-Stack Software Engineer atuando entre infraestrutura de IA e sistemas de comércio, "
            "com trabalho independente em TI e software desde 2018. Criador do Ulpia, uma camada de memória e "
            "retrieval open source para agentes de IA escrita em Rust: RAG sem modelo de embedding no caminho, recusa "
            "como veredito de primeira classe, consultas quentes abaixo de um milissegundo, servidor MCP e um harness "
            "de avaliação (as 500 perguntas do LongMemEval-S, um conjunto adversarial às cegas) publicado sob Apache "
            "2.0 no mesmo repositório. Lidera a engenharia na Casa Seth em infoprodutos, pagamentos via Mercado Pago "
            "e Pix, atribuição, rastreamento de conversão server-side, conciliação financeira e a plataforma de "
            "assinatura BiblinhaPlay. Une liderança de arquitetura a implementação, resposta a incidentes, CI/CD e "
            "responsabilidade em produção."
        ),
        "skills": [
            ("Linguagens", "TypeScript, JavaScript, Rust, SQL; conhecimento prático de Python e Bash"),
            ("Sistemas de IA e Recuperação", "Retrieval para agentes de IA (RAG sem embeddings), avaliação de LLM (benchmarks, conjuntos adversariais às cegas, abstenção), arquitetura de memória local-first, recuperação determinística, SQLite FTS5, Reciprocal Rank Fusion, portão de confiança, Model Context Protocol (MCP), desenho de benchmarks"),
            ("Web e Mobile", "React, TanStack Start/Router/Query, Next.js, Expo, React Native, Three.js, Vite, Tailwind CSS"),
            ("Backend e Dados", "Node.js, PostgreSQL, Supabase, Drizzle ORM, Better Auth, REST APIs, Edge Functions, RLS, RBAC"),
            ("Comércio e Analytics", "Mercado Pago, Pix, checkout hospedado, webhooks idempotentes, entitlements, conciliação de receita, atribuição por UTM, rastreamento de conversão server-side, PostHog"),
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
                    "Projeto e construo em Rust uma camada de memória e retrieval local-first para frotas de agentes de IA, RAG sem modelo de embedding, com todo modelo fora do caminho da recuperação, de modo que a recuperação roda offline e os resultados são reprodutíveis e explicáveis quando erram.",
                    "O motor de recuperação tem dois scorers, um índice de palavras-chave declaradas e a busca full-text do SQLite, fundidos com Reciprocal Rank Fusion; medi qual scorer vence qual tarefa em vez de supor que eram intercambiáveis.",
                    "A recusa é um veredito de primeira classe atrás de um portão de confiança: em um conjunto de perguntas escrito às cegas e revisado de forma adversarial, 28 de 30 perguntas fora de escopo não recebem resposta confiante da camada determinística.",
                    "Escrevi o harness de avaliação junto com o produto: latência de rota quente de 0,68 ms p50 e 1,16 ms p95 em processo, e 97 por cento em abstenção nas 500 perguntas do LongMemEval-S, com cada resultado carimbado com seu comando, commit, máquina e data.",
                    "Servidor MCP com quatro ferramentas somente leitura para o Claude Desktop e outros clientes MCP; o acesso de escrita fica deliberadamente fora da superfície que um modelo alcança.",
                    "Cerca de 17.000 linhas de Rust em três crates com uma única dependência de runtime, mais de 200 testes, CI no GitHub Actions e 36 registros de decisão de arquitetura com o raciocínio de cada troca.",
                ],
            },
            {
                "company": "Casa Seth",
                "title": "Tech Lead & Software Engineer",
                "period": "Abril de 2026 - Atual",
                "location": "Brasil",
                "bullets": [
                    "Lidero a arquitetura e a entrega prática dos infoprodutos da empresa, dos funis de comércio digital e dos sistemas de medição que reportam quanto cada um deles rendeu.",
                    "A engenharia de conversão de ponta a ponta é minha: checkout no Mercado Pago e no Pix, precificação controlada no servidor, atribuição por UTM, rastreamento first-party de eventos no navegador e no servidor com deduplicação, conciliação de receita e dashboards operacionais.",
                    "Um pipeline de geração de imagens com jobs idempotentes, concorrência limitada, cache, persistência e telemetria, de forma que um job que falha é reprocessado sem duplicar trabalho já pago.",
                    "BiblinhaPlay, plataforma de assinatura de aprendizado e entretenimento com cerca de 500 usuários, entre um web/PWA em produção e um cliente Expo/React Native: streaming de vídeo, música, materiais para impressão, jogos interativos e gamificação.",
                    "Do lado da cobrança: autenticação e autorização no servidor, entitlements por plano, checkout de assinatura hospedado, webhooks verificados e idempotentes, conciliação de pagamentos, streaming de mídia protegida e publicações imutáveis de conteúdo com ativação atômica e rollback.",
                ],
            },
            {
                "company": "MG Laser",
                "title": "Software Engineer",
                "period": "Novembro de 2025 - Abril de 2026",
                "location": "Franca, Brasil",
                "bullets": [
                    "ERP de estoque, vendas e operação diária, construído e mantido para várias equipes ao mesmo tempo.",
                    "As planilhas deram lugar a formulários estruturados com validação automatizada, e com isso caíram os erros de digitação manual.",
                    "Melhorei o desempenho de tabelas de alto volume com paginação e chamadas RPC direcionadas no PostgreSQL, com Row-Level Security e Role-Based Access Control decidindo o que cada papel enxerga.",
                    "Deploy, monitoramento e infraestrutura em uma VPS Linux autogerenciada; após uma queda crítica em produção, o serviço voltou em menos de 10 minutos e sem perda de dados.",
                ],
            },
            {
                "company": "Freelance",
                "title": "Independent Software Engineer",
                "period": "2018 - Atual",
                "location": "Franca, Brasil",
                "bullets": [
                    "Aplicações web full-stack para clientes com TypeScript, React, Next.js, Node.js, Supabase, PostgreSQL, Vite, Tailwind CSS e Vercel.",
                    "Um sistema de inscrição para eventos ao vivo com validação de CPF e WhatsApp, fluxos responsivos para a equipe e acompanhamento de participantes.",
                    "Para negócios de serviço, fluxos de chat e administração que transformam conversas em pedidos de orçamento estruturados e tarefas de follow-up.",
                    "Respondo por frontend, backend, modelagem de banco, deploy, manutenção e suporte ao vivo, com Vitest e TDD para evitar regressões.",
                    "De 2018 a 2025 a mesma atividade também cobriu suporte de TI e sistemas para pessoas e pequenas empresas, remoto e presencial: hardware, Windows, Linux e Android, instalação e configuração de software e resolução de problemas.",
                ],
            },
            {
                "company": "São Joaquim Hospital e Maternidade",
                "title": "IT Support & Operations Assistant",
                "period": "Agosto de 2017 - Abril de 2018",
                "location": "Franca, Brasil",
                "bullets": [
                    "Suporte técnico e operacional entre os setores de um hospital, incluindo o sistema de prontuário MV2000, ordens de serviço e o tratamento dos incidentes do dia a dia.",
                    "Primeiro contato da Ouvidoria e a ponte entre recepção, enfermagem, corpo médico e equipe técnica quando um fluxo travava.",
                ],
            },
            {
                "company": "Escola Remington",
                "title": "Technical Instructor & IT Support Technician",
                "period": "Abril de 2015 - Abril de 2016",
                "location": "Franca, Brasil",
                "bullets": [
                    "A escola me contratou de dentro da própria sala de aula, durante o curso de desenvolvimento web e design que eu fazia lá.",
                    "Dei aulas de web design e de software criativo e mantive o laboratório Windows funcionando: instalação, configuração e atualização em todas as estações.",
                    "Suporte a alunos e funcionários durante a operação diária, de problema de software à rede do laboratório.",
                ],
            },
        ],
        "projects": [
            {
                "title": "Ulpia",
                "subtitle": "Retrieval Local-First para Agentes de IA, Rust, Apache 2.0",
                "url": "https://ulpia.io",
                "items": [
                    "Camada de memória e retrieval para frotas de agentes de IA, RAG sem nenhum modelo de embedding no caminho da recuperação, então roda offline, devolve a mesma resposta duas vezes e consegue reportar que nenhum arquivo cobre a pergunta em vez de devolver o menos errado.",
                    "Motor de dois scorers sobre um índice de palavras-chave declaradas e SQLite FTS5, fundidos com Reciprocal Rank Fusion, atrás de um portão de confiança que torna a abstenção um veredito de primeira classe.",
                    "Avaliado, não afirmado: 28 de 30 perguntas fora de escopo recusadas pela camada determinística em um conjunto adversarial escrito às cegas, latência de rota quente de 0,68 ms p50 e 97 por cento de abstenção no LongMemEval-S.",
                    "Servidor MCP com quatro ferramentas somente leitura para o Claude Desktop e outros clientes, um modelo de privacidade derivado do git em que um arquivo não rastreado nunca é servido, e um cliente de bandeja em Tauri no Windows.",
                ],
            },
            {
                "title": "Casa Seth",
                "subtitle": "Infoprodutos, Comércio e Sistemas de Conversão",
                "url": "https://biblinhaplay.com",
                "items": [
                    "Pacotes compartilhados de domínio e de UI entre funis de produto publicados de forma independente, sobre Supabase e Edge Functions do Postgres.",
                    "Checkout no Mercado Pago e no Pix, precificação controlada no servidor, atribuição por UTM, deduplicação de eventos de navegador e servidor, conciliação de receita e fluxos de expedição física conduzidos por operador.",
                    "BiblinhaPlay, a plataforma de assinatura dentro da casa: cerca de 500 usuários, um web/PWA em produção e um cliente Expo/React Native, acesso por entitlement, entrega de mídia por HTTP Range, snapshots imutáveis de conteúdo e a experiência voxel BiblinhaCraft em Three.js.",
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
        "education": "<b>Bacharelado em Engenharia de Software</b> | Universidade de Franca | 2025 - 2029, em andamento",
        "certifications": [
            "Santander Bootcamp: Rust and AI-Integrated Application Development | Junho de 2026",
            "Perícia Computacional e Investigação de Evidências Digitais, Universidade Cruzeiro do Sul | Junho de 2026",
            "LEAD1x: Exercising Leadership: Foundational Principles, HarvardX / edX | Maio de 2026",
            "Networking Basics, Cisco Networking Academy | Julho de 2025",
            "Introduction to Cybersecurity, Cisco Networking Academy | Julho de 2023",
            "Qualificação Profissional em Desenvolvimento Web e Design (104 horas), Escola Remington | Abril de 2015",
        ],
        "languages": "Português - Nativo | Inglês - Avançado (C1) | Espanhol - Fluente",
    },

    # ------------------------------------------------------------------ Spanish
    "es": {
        "output": "richard-wollyce-cv-es.pdf",
        "doc_title": "Richard Wollyce - Tech Lead y Full-Stack Software Engineer",
        "subject": "Currículum profesional",
        "location": "Franca, SP, Brasil",
        "availability": "Remoto para Chile y Latinoamérica (0 a 1 hora de diferencia con Santiago) | Disponible para reubicación en Santiago (residencia temporal Mercosur)",
        "sections": {
            "summary": "Resumen Profesional",
            "skills": "Competencias Técnicas",
            "experience": "Experiencia Profesional",
            "projects": "Proyectos Destacados",
            "education": "Formación",
            "certifications": "Certificaciones",
            "languages": "Idiomas",
        },
        "summary": (
            "Tech Lead y Full-Stack Software Engineer entre infraestructura de IA y sistemas de pago, con trabajo "
            "independiente en TI y software desde 2018. Creador de Ulpia, capa de memoria y retrieval open source "
            "para agentes de IA escrita en Rust: RAG sin modelo de embedding en el camino, la negativa como veredicto "
            "de primera clase, consultas en caliente por debajo del milisegundo, servidor MCP y un harness de "
            "evaluación (LongMemEval-S, set adversarial ciego) publicado bajo Apache 2.0 en el mismo repositorio. "
            " Lidera la ingeniería en Casa Seth en infoproductos, pagos con Mercado Pago y Pix, "
            "atribución, seguimiento de conversión del lado del servidor, conciliación financiera y la plataforma de "
            "suscripción BiblinhaPlay, en producción en Brasil. Combina liderazgo de arquitectura con "
            "implementación, respuesta a incidentes, CI/CD y responsabilidad en producción."
        ),
        "skills": [
            ("Lenguajes", "TypeScript, JavaScript, Rust, SQL; conocimiento práctico de Python y Bash"),
            ("IA aplicada y Retrieval", "Retrieval para agentes de IA (RAG sin embeddings), evaluación de LLM (benchmarks, sets adversariales ciegos, abstención), arquitectura de memoria local-first, recuperación determinista, SQLite FTS5, Reciprocal Rank Fusion, compuerta de confianza, Model Context Protocol (MCP), diseño de benchmarks"),
            ("Web y Móvil", "React, TanStack Start/Router/Query, Next.js, Expo, React Native, Three.js, Vite, Tailwind CSS"),
            ("Backend y Datos", "Node.js, PostgreSQL, Supabase, Drizzle ORM, Better Auth, REST APIs, Edge Functions, RLS, RBAC"),
            ("Comercio y Analytics", "Mercado Pago, Pix (transferencia instantánea cuenta a cuenta en Brasil, como Khipu o Fintoc), checkout alojado, webhooks idempotentes, entitlements, conciliación de ingresos, atribución por UTM, seguimiento de conversión del lado del servidor, PostHog"),
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
                    "Diseño y construyo en Rust una capa de memoria y retrieval local-first para flotas de agentes de IA: RAG sin modelo de embedding, así que la recuperación corre offline y los resultados se repiten igual y se pueden explicar cuando se equivocan.",
                    "El motor corre dos scorers, un índice de palabras clave declaradas y la búsqueda full-text de SQLite, fusionados con Reciprocal Rank Fusion; medí cuál gana en cada tarea en vez de suponer que eran intercambiables.",
                    "La negativa es un veredicto de primera clase detrás de una compuerta de confianza: sobre un set de preguntas escrito a ciegas y revisado de forma adversarial, 28 de 30 preguntas fuera de alcance no reciben respuesta confiada de la capa determinista.",
                    "Harness de evaluación escrito junto con el producto: 0,68 ms p50 y 1,16 ms p95 de latencia en caliente, 97 por ciento en abstención sobre las 500 preguntas de LongMemEval-S, y cada resultado sellado con comando, commit, máquina y fecha.",
                    "Servidor MCP con cuatro herramientas de solo lectura para Claude Desktop y otros clientes; el acceso de escritura queda fuera de la superficie que alcanza un modelo, a propósito.",
                    "Alrededor de 17.000 líneas de Rust en tres crates con una única dependencia de runtime, más de 200 pruebas, CI en GitHub Actions y 36 registros de decisión de arquitectura con el porqué de cada compromiso.",
                ],
            },
            {
                "company": "Casa Seth",
                "title": "Tech Lead & Software Engineer",
                "period": "Abril de 2026 - Actual",
                "location": "Brasil",
                "bullets": [
                    "Lidero la arquitectura y la entrega de los infoproductos de la empresa, los embudos de comercio digital y los sistemas de medición que reportan cuánto rindió cada uno.",
                    "La ingeniería de conversión de extremo a extremo es mía: checkout con Mercado Pago y Pix, precios controlados en el servidor, atribución por UTM, seguimiento first-party de eventos en navegador y servidor con deduplicación, conciliación de ingresos y paneles operativos.",
                    "Un pipeline de generación de imágenes con trabajos idempotentes, concurrencia acotada, caché, persistencia y telemetría, para que un trabajo fallido se reintente sin duplicar trabajo ya pagado.",
                    "BiblinhaPlay, plataforma de suscripción de aprendizaje y entretenimiento con cerca de 500 usuarios, en un web/PWA en producción y un cliente Expo/React Native: streaming de video, música, material imprimible, juegos y gamificación.",
                    "Del lado del cobro: autenticación y autorización en el servidor, entitlements por plan, checkout de suscripción alojado, webhooks verificados e idempotentes, conciliación de pagos, streaming de medios protegidos y publicaciones inmutables de contenido con activación atómica y rollback.",
                ],
            },
            {
                "company": "MG Laser",
                "title": "Software Engineer",
                "period": "Noviembre de 2025 - Abril de 2026",
                "location": "Franca, Brasil",
                "bullets": [
                    "ERP de inventario, ventas y operación diaria, construido y mantenido para varios equipos a la vez.",
                    "Las hojas de cálculo se reemplazaron por formularios estructurados con validación automática, y con eso bajaron los errores de carga manual.",
                    "Mejoré el rendimiento de las tablas de alto volumen con paginación y llamadas RPC dirigidas en PostgreSQL, con Row-Level Security y Role-Based Access Control decidiendo qué ve cada rol.",
                    "Despliegue, monitoreo e infraestructura en un VPS Linux autoadministrado; tras una caída crítica en producción, el servicio volvió en menos de 10 minutos y sin pérdida de datos.",
                ],
            },
            {
                "company": "Freelance",
                "title": "Independent Software Engineer",
                "period": "2018 - Actual",
                "location": "Franca, Brasil",
                "bullets": [
                    "Aplicaciones web full-stack para clientes con TypeScript, React, Next.js, Node.js, Supabase, PostgreSQL, Vite, Tailwind CSS y Vercel.",
                    "Un sistema de inscripción para eventos en vivo con validación de identidad brasileña (CPF) y de WhatsApp, flujos responsivos para el equipo y seguimiento de participantes.",
                    "Para negocios de servicios, flujos de chat y administración que convierten conversaciones en solicitudes de presupuesto estructuradas y tareas de seguimiento.",
                    "Respondo por frontend, backend, diseño de base de datos, despliegue, mantenimiento y soporte en vivo, con Vitest y TDD para evitar regresiones.",
                    "Entre 2018 y 2025 la misma actividad cubrió también soporte de TI y sistemas para personas y pequeñas empresas, remoto y presencial: hardware, Windows, Linux y Android, instalación y configuración de software y resolución de problemas.",
                ],
            },
            {
                "company": "São Joaquim Hospital e Maternidade",
                "title": "IT Support & Operations Assistant",
                "period": "Agosto de 2017 - Abril de 2018",
                "location": "Franca, Brasil",
                "bullets": [
                    "Soporte técnico y operativo entre los departamentos de un hospital, incluido el sistema de historias clínicas MV2000, las órdenes de servicio y los incidentes del día a día.",
                    "Primer contacto de la oficina de reclamos (Ouvidoria) y el enlace entre recepción, enfermería, equipo médico y equipo técnico cuando un flujo se trababa.",
                ],
            },
            {
                "company": "Escola Remington",
                "title": "Technical Instructor & IT Support Technician",
                "period": "Abril de 2015 - Abril de 2016",
                "location": "Franca, Brasil",
                "bullets": [
                    "La escuela me contrató desde su propia aula, durante el curso de desarrollo web y diseño que yo cursaba allí.",
                    "Di clases de diseño web y de software creativo y mantuve el laboratorio Windows en marcha: instalación, configuración y actualización en todas las estaciones.",
                    "Soporte a estudiantes y personal durante la operación diaria, desde problemas de software hasta la red del laboratorio.",
                ],
            },
        ],
        "projects": [
            {
                "title": "Ulpia",
                "subtitle": "Retrieval Local-First para Agentes de IA, Rust, Apache 2.0",
                "url": "https://ulpia.io",
                "items": [
                    "Capa de memoria y retrieval para flotas de agentes de IA, RAG sin ningún modelo de embedding en el camino, así que funciona sin conexión, devuelve la misma respuesta dos veces y puede reportar que ningún archivo cubre la pregunta en lugar de devolver el menos equivocado.",
                    "Motor de dos scorers sobre un índice de palabras clave declaradas y SQLite FTS5, fusionados con Reciprocal Rank Fusion, detrás de una compuerta de confianza que convierte la abstención en un veredicto de primera clase.",
                    "Evaluado, no afirmado: 28 de 30 preguntas fuera de alcance rechazadas por la capa determinista sobre un set adversarial escrito a ciegas, 0,68 ms p50 de latencia en caliente y 97 por ciento de abstención en LongMemEval-S.",
                    "Servidor MCP con cuatro herramientas de solo lectura para Claude Desktop y otros clientes, un modelo de privacidad derivado de git donde un archivo no rastreado nunca se sirve, y un cliente de bandeja en Tauri para Windows.",
                ],
            },
            {
                "title": "Casa Seth",
                "subtitle": "Infoproductos, Comercio y Sistemas de Conversión",
                "url": "https://biblinhaplay.com",
                "items": [
                    "Paquetes compartidos de dominio y de UI entre embudos de producto desplegados de forma independiente, sobre Supabase y Edge Functions de Postgres.",
                    "Checkout con Mercado Pago y Pix, precios controlados en el servidor, atribución por UTM, deduplicación de eventos de navegador y servidor, conciliación de ingresos y flujos de envío físico conducidos por operador.",
                    "BiblinhaPlay, la plataforma de suscripción dentro de la casa: cerca de 500 usuarios, un web/PWA en producción y un cliente Expo/React Native, acceso por entitlement, entrega de medios por HTTP Range, snapshots inmutables de contenido y la experiencia voxel BiblinhaCraft en Three.js.",
                ],
            },
            {
                "title": "RoadToCyberSec.com",
                "subtitle": "Educación en Ciberseguridad",
                "url": None,
                "items": [
                    "Hub de aprendizaje estructurado sobre análisis de amenazas, MFA, navegación segura, respuesta a incidentes, fundamentos de redes y manejo de evidencia digital, publicado como documentación consultable en Mintlify para públicos técnicos y no técnicos.",
                ],
            },
        ],
        "education": "<b>Ingeniería de Software (B.Sc.)</b> | Universidade de Franca | 2025 - 2029, en curso, egreso estimado 2029",
        "certifications": [
            "Santander Bootcamp: Rust and AI-Integrated Application Development | Junio de 2026",
            "Informática Forense e Investigación de Evidencia Digital, Universidade Cruzeiro do Sul | Junio de 2026",
            "LEAD1x: Exercising Leadership: Foundational Principles, HarvardX / edX | Mayo de 2026",
            "Networking Basics, Cisco Networking Academy | Julio de 2025",
            "Introduction to Cybersecurity, Cisco Networking Academy | Julio de 2023",
            "Cualificación Profesional en Desarrollo Web y Diseño (104 horas), Escola Remington | Abril de 2015",
        ],
        "languages": "Portugués - Nativo | Inglés - Avanzado (C1) | Español - Fluido",
    },
}
