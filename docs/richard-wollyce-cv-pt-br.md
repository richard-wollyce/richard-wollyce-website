<!-- Gerado a partir de scripts/cv_content.py por scripts/generate-cv.py. Nao edite a mao. -->

# Richard Wollyce Santos de Souza

**Tech Lead | Full-Stack Software Engineer | AI Systems**

Franca, SP, Brasil  
mail@richardwollyce.com  
richardwollyce.com  
github.com/richard-wollyce  
linkedin.com/in/richardwollyce-/  
+55 (16) 9 9159-7978

## Resumo Profissional

Tech Lead e Full-Stack Software Engineer atuando entre infraestrutura de IA e sistemas de comércio. Criador do Ulpia, uma camada de memória local-first open source para agentes de IA escrita em Rust, com recuperação determinística, recusa como veredito de primeira classe, consultas quentes abaixo de um milissegundo e servidor MCP; publicado sob Apache 2.0 com os benchmarks no mesmo repositorio. Lidera a engenharia na Casa Seth em infoprodutos, pagamentos via Pix, atribuição, rastreamento de conversão server-side, conciliação financeira e a plataforma de assinatura BiblinhaPlay. Une liderança de arquitetura a implementação, resposta a incidentes, CI/CD e responsabilidade em produção.

## Competências Técnicas

**Linguagens:** TypeScript, JavaScript, Rust, SQL; conhecimento prático de Python e Bash  
**Sistemas de IA e Recuperação:** Arquitetura de memória local-first, recuperação determinística, SQLite FTS5, Reciprocal Rank Fusion, abstenção e portão de confiança, Model Context Protocol (MCP), RAG, desenho de benchmarks  
**Web e Mobile:** React, TanStack Start/Router/Query, Next.js, Expo, React Native, Three.js, Vite, Tailwind CSS  
**Backend e Dados:** Node.js, PostgreSQL, Supabase, Drizzle ORM, Better Auth, REST APIs, Edge Functions, RLS, RBAC  
**Comércio e Analytics:** Pix, checkout hospedado, webhooks idempotentes, entitlements, conciliação de receita, atribuição por UTM, rastreamento de conversão server-side, PostHog, Mercado Pago  
**Plataformas e Entrega:** Docker, Linux, Nginx, GitHub Actions, Vercel, EAS, CI/CD, Cargo, Tauri, BaseHub  
**Qualidade:** Vitest, Playwright, Maestro, TDD, lint automatizado, checagem de tipos, portões de build, monitoramento em produção

## Experiência Profissional

### Creator & Maintainer | Ulpia (Open Source)

**Apache 2.0 | ulpia.io | Agosto de 2026 - Atual**

- Projeto e construo uma camada de memória local-first para frotas de agentes de IA em Rust, mantendo todo modelo fora do caminho da recuperação, de modo que os resultados são offline, reprodutíveis e explicáveis quando erram.
- Construí um motor de recuperação de dois scorers sobre um índice de palavras-chave declaradas e a busca full-text do SQLite, fundidos com Reciprocal Rank Fusion, e medi qual scorer vence qual tarefa em vez de supor que eram intercambiáveis.
- Transformei a recusa em veredito de primeira classe atrás de um portão de confiança: em um conjunto de perguntas escrito às cegas e revisado de forma adversarial, 28 de 30 perguntas fora de escopo não são respondidas com confianca apenas pela camada determinística.
- Escrevi o harness de benchmark junto com o produto: latência de rota quente de 0,68 ms p50 e 1,16 ms p95 em processo, e 97 por cento em abstenção nas 500 perguntas do LongMemEval-S, com cada resultado carimbado com seu comando, commit, máquina e data.
- Entreguei um servidor MCP expondo quatro ferramentas somente leitura ao Claude Desktop e a outros clientes MCP, mantendo deliberadamente o acesso de escrita fora da superfície que um modelo alcança.
- Mantenho cerca de 17.000 linhas de Rust em três crates com uma única dependência de runtime, mais de 200 testes, CI no GitHub Actions e 33 registros de decisão de arquitetura que carregam o raciocínio de cada troca.

### Tech Lead & Software Engineer | Casa Seth

**Brasil | Abril de 2026 - Atual**

- Lidero a arquitetura e a entrega pratica dos infoprodutos da empresa, dos funis de comércio digital e dos sistemas de medição que reportam quanto cada um deles rendeu.
- Sou responsável pela engenharia de conversão de ponta a ponta: checkout no Pix, precificação controlada no servidor, atribuição por UTM, rastreamento first-party de eventos no navegador e no servidor com deduplicação, conciliação de receita e dashboards operacionais.
- Projetei um pipeline de geração de imagens com jobs idempotentes, concorrência limitada, cache, persistência e telemetria, de forma que um job que falha e reprocessado sem duplicar trabalho ja pago.
- Lidero o BiblinhaPlay, plataforma de assinatura de aprendizado e entretenimento com cerca de 500 usuários, entre um web/PWA em produção e um cliente Expo/React Native, cobrindo streaming de video, música, materiais para impressão, jogos interativos e gamificação.
- Estruturei um monorepo TypeScript com pnpm, Turborepo, React, TanStack Start, pacotes compartilhados de UI e de e-mail transacional, PostgreSQL/Supabase, Drizzle ORM e portões automatizados de qualidade.
- Projetei autenticação e autorização no servidor, entitlements por plano, checkout de assinatura hospedado, webhooks verificados e idempotentes, conciliação de pagamentos, streaming de mídia protegida e publicações imutáveis de conteudo com ativação atômica e rollback.
- Construí o BiblinhaCraft, uma experiência voxel em Three.js com terreno procedural determinístico, streaming regional sob demanda, migração versionada de saves, missões e controles pensados para toque.

### Software Engineer | MG Laser

**Franca, Brasil | Novembro de 2025 - Abril de 2026**

- Construí e mantive um ERP cobrindo estoque, vendas e operação diária em várias equipes.
- Substituí fluxos em planilha por formulários estruturados e validação automatizada, reduzindo erros de digitação manual.
- Melhorei o desempenho de tabelas de alto volume com paginação e chamadas RPC direcionadas no PostgreSQL, aplicando Row-Level Security e Role-Based Access Control.
- Cuidei de deploy, monitoramento e infraestrutura em uma VPS Linux autogerenciada; restaurei o serviço após uma queda crítica em produção em menos de 10 minutos e sem perda de dados.

### Independent Software Engineer | Independente / Contrato

**Franca, Brasil | Em andamento**

- Entrego aplicações web full-stack usando TypeScript, React, Next.js, Node.js, Supabase, PostgreSQL, Vite, Tailwind CSS e Vercel.
- Construí um sistema de inscrição para eventos ao vivo com validação de CPF e WhatsApp, fluxos responsivos para a equipe e acompanhamento de participantes.
- Construí fluxos de chat e administração para negócios de serviço, transformando conversas em pedidos de orçamento estruturados e tarefas de follow-up.
- Sou responsável por frontend, backend, modelagem de banco, deploy, manutenção e suporte ao vivo, usando Vitest e TDD para evitar regressões.

## Trabalhos de Engenharia Selecionados

### Ulpia | Infraestrutura de AI Memory Local-First, Rust, Apache 2.0
https://ulpia.io

- Camada de memória para frotas de agentes de IA sem nenhum modelo de embedding no caminho da recuperação, então roda offline, devolve a mesma resposta duas vezes e consegue reportar que nenhum arquivo cobre a pergunta em vez de devolver o menos errado.
- Motor de dois scorers sobre um índice de palavras-chave declaradas e SQLite FTS5, fundidos com Reciprocal Rank Fusion, atrás de um portão de confiança que torna a abstenção um veredito de primeira classe.
- Medido, não afirmado: 28 de 30 perguntas fora de escopo recusadas pela camada determinística em um conjunto adversarial escrito às cegas, latência de rota quente de 0,68 ms p50 e 97 por cento de abstenção no LongMemEval-S.
- Servidor MCP com quatro ferramentas somente leitura para o Claude Desktop e outros clientes, um modelo de privacidade derivado do git em que um arquivo não rastreado nunca é servido, e um cliente de bandeja em Tauri no Windows.

### Casa Seth | Infoprodutos, Comércio e Sistemas de Conversão
https://biblinhaplay.com

- Pacotes compartilhados de domínio e de UI entre funis de produto publicados de forma independente, sobre Supabase e Edge Functions do Postgres.
- Checkout no Pix, precificação controlada no servidor, atribuição por UTM, deduplicação de eventos de navegador e servidor, conciliação de receita e fluxos de expedição física conduzidos por operador.
- Validação de pedido pago, geracao idempotente de imagens, cache, controle de concorrência, telemetria, armazenamento e benchmarking fiel à produção.
- BiblinhaPlay, a plataforma de assinatura de aprendizado e entretenimento dentro da casa, com cerca de 500 usuários entre um web/PWA em produção e um cliente Expo/React Native: streaming de video, música, materiais para impressão, jogos, acesso por entitlement, entrega de mídia por HTTP Range, snapshots imutaveis de conteudo e a experiência voxel BiblinhaCraft em Three.js.

### RoadToCyberSec.com | Educação em Cibersegurança

- Escrevi um hub de aprendizado estruturado cobrindo análise de ameaças, MFA, navegação segura, resposta a incidentes, fundamentos de redes e tratamento de evidências digitais.
- Publiquei o material em uma experiência de documentação pesquisável no Mintlify, para públicos técnicos e não técnicos.

## Formação

**Bacharelado em Engenharia de Software** | Universidade de Franca | 2025 - 2029

## Certificações

- Santander Bootcamp: Rust and AI-Integrated Application Development | Junho de 2026
- Perícia Computacional e Investigação de Evidencias Digitais, Universidade Cruzeiro do Sul | Junho de 2026
- LEAD1x: Exercising Leadership: Foundational Principles, HarvardX / edX | Maio de 2026
- Networking Basics, Cisco Networking Academy | Julho de 2025
- Introduction to Cybersecurity, Cisco Networking Academy | Julho de 2023

## Idiomas

- Português: Nativo
- Inglês: Avançado (C1)
- Espanhol: Intermediário
