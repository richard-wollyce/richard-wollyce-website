<!-- Gerado em cv/ a partir de scripts/cv_content.py por scripts/generate-cv.py. Nao edite a mao. -->

# Richard Wollyce Santos de Souza

**Tech Lead | Full-Stack Software Engineer | AI Systems**

Franca, SP, Brasil  
mail@richardwollyce.com  
richardwollyce.com  
github.com/richard-wollyce  
linkedin.com/in/richardwollyce-/  
+55 (16) 9 9159-7978

Remoto para a América Latina, 0 a 1 hora de diferença para Santiago | Disponível para realocação para Santiago, Chile (residência temporária Mercosul)

## Resumo Profissional

Tech Lead e Full-Stack Software Engineer atuando entre infraestrutura de IA e sistemas de comércio, com trabalho independente em TI e software desde 2018. Criador do Ulpia, uma camada de memória e retrieval open source para agentes de IA escrita em Rust: RAG sem modelo de embedding no caminho, recusa como veredito de primeira classe, consultas quentes abaixo de um milissegundo, servidor MCP e um harness de avaliação (as 500 perguntas do LongMemEval-S, um conjunto adversarial às cegas) publicado sob Apache 2.0 no mesmo repositório. Lidera a engenharia na Casa Seth em infoprodutos, pagamentos via Mercado Pago e Pix, atribuição, rastreamento de conversão server-side, conciliação financeira e a plataforma de assinatura BiblinhaPlay. Une liderança de arquitetura a implementação, resposta a incidentes, CI/CD e responsabilidade em produção.

## Competências Técnicas

**Linguagens:** TypeScript, JavaScript, Rust, SQL; conhecimento prático de Python e Bash  
**Sistemas de IA e Recuperação:** Retrieval para agentes de IA (RAG sem embeddings), avaliação de LLM (benchmarks, conjuntos adversariais às cegas, abstenção), arquitetura de memória local-first, recuperação determinística, SQLite FTS5, Reciprocal Rank Fusion, portão de confiança, Model Context Protocol (MCP), desenho de benchmarks  
**Web e Mobile:** React, TanStack Start/Router/Query, Next.js, Expo, React Native, Three.js, Vite, Tailwind CSS  
**Backend e Dados:** Node.js, PostgreSQL, Supabase, Drizzle ORM, Better Auth, REST APIs, Edge Functions, RLS, RBAC  
**Comércio e Analytics:** Mercado Pago, Pix, checkout hospedado, webhooks idempotentes, entitlements, conciliação de receita, atribuição por UTM, rastreamento de conversão server-side, PostHog  
**Plataformas e Entrega:** Docker, Linux, Nginx, GitHub Actions, Vercel, EAS, CI/CD, Cargo, Tauri, BaseHub  
**Qualidade:** Vitest, Playwright, Maestro, TDD, lint automatizado, checagem de tipos, portões de build, monitoramento em produção

## Experiência Profissional

### Creator & Maintainer | Ulpia (Open Source)

**Apache 2.0 | ulpia.io | Agosto de 2026 - Atual**

- Projeto e construo em Rust uma camada de memória e retrieval local-first para frotas de agentes de IA, RAG sem modelo de embedding, com todo modelo fora do caminho da recuperação, de modo que a recuperação roda offline e os resultados são reprodutíveis e explicáveis quando erram.
- O motor de recuperação tem dois scorers, um índice de palavras-chave declaradas e a busca full-text do SQLite, fundidos com Reciprocal Rank Fusion; medi qual scorer vence qual tarefa em vez de supor que eram intercambiáveis.
- A recusa é um veredito de primeira classe atrás de um portão de confiança: em um conjunto de perguntas escrito às cegas e revisado de forma adversarial, 28 de 30 perguntas fora de escopo não recebem resposta confiante da camada determinística.
- Escrevi o harness de avaliação junto com o produto: latência de rota quente de 0,68 ms p50 e 1,16 ms p95 em processo, e 97 por cento em abstenção nas 500 perguntas do LongMemEval-S, com cada resultado carimbado com seu comando, commit, máquina e data.
- Servidor MCP com quatro ferramentas somente leitura para o Claude Desktop e outros clientes MCP; o acesso de escrita fica deliberadamente fora da superfície que um modelo alcança.
- Cerca de 17.000 linhas de Rust em três crates com uma única dependência de runtime, mais de 200 testes, CI no GitHub Actions e 36 registros de decisão de arquitetura com o raciocínio de cada troca.

### Tech Lead & Software Engineer | Casa Seth

**Brasil | Abril de 2026 - Atual**

- Lidero a arquitetura e a entrega prática dos infoprodutos da empresa, dos funis de comércio digital e dos sistemas de medição que reportam quanto cada um deles rendeu.
- A engenharia de conversão de ponta a ponta é minha: checkout no Mercado Pago e no Pix, precificação controlada no servidor, atribuição por UTM, rastreamento first-party de eventos no navegador e no servidor com deduplicação, conciliação de receita e dashboards operacionais.
- Um pipeline de geração de imagens com jobs idempotentes, concorrência limitada, cache, persistência e telemetria, de forma que um job que falha é reprocessado sem duplicar trabalho já pago.
- BiblinhaPlay, plataforma de assinatura de aprendizado e entretenimento com cerca de 500 usuários, entre um web/PWA em produção e um cliente Expo/React Native: streaming de vídeo, música, materiais para impressão, jogos interativos e gamificação.
- Do lado da cobrança: autenticação e autorização no servidor, entitlements por plano, checkout de assinatura hospedado, webhooks verificados e idempotentes, conciliação de pagamentos, streaming de mídia protegida e publicações imutáveis de conteúdo com ativação atômica e rollback.

### Software Engineer | MG Laser

**Franca, Brasil | Novembro de 2025 - Abril de 2026**

- ERP de estoque, vendas e operação diária, construído e mantido para várias equipes ao mesmo tempo.
- As planilhas deram lugar a formulários estruturados com validação automatizada, e com isso caíram os erros de digitação manual.
- Melhorei o desempenho de tabelas de alto volume com paginação e chamadas RPC direcionadas no PostgreSQL, com Row-Level Security e Role-Based Access Control decidindo o que cada papel enxerga.
- Deploy, monitoramento e infraestrutura em uma VPS Linux autogerenciada; após uma queda crítica em produção, o serviço voltou em menos de 10 minutos e sem perda de dados.

### Independent Software Engineer | Freelance

**Franca, Brasil | 2018 - Atual**

- Aplicações web full-stack para clientes com TypeScript, React, Next.js, Node.js, Supabase, PostgreSQL, Vite, Tailwind CSS e Vercel.
- Um sistema de inscrição para eventos ao vivo com validação de CPF e WhatsApp, fluxos responsivos para a equipe e acompanhamento de participantes.
- Para negócios de serviço, fluxos de chat e administração que transformam conversas em pedidos de orçamento estruturados e tarefas de follow-up.
- Respondo por frontend, backend, modelagem de banco, deploy, manutenção e suporte ao vivo, com Vitest e TDD para evitar regressões.
- De 2018 a 2025 a mesma atividade também cobriu suporte de TI e sistemas para pessoas e pequenas empresas, remoto e presencial: hardware, Windows, Linux e Android, instalação e configuração de software e resolução de problemas.

### IT Support & Operations Assistant | São Joaquim Hospital e Maternidade

**Franca, Brasil | Agosto de 2017 - Abril de 2018**

- Suporte técnico e operacional entre os setores de um hospital, incluindo o sistema de prontuário MV2000, ordens de serviço e o tratamento dos incidentes do dia a dia.
- Primeiro contato da Ouvidoria e a ponte entre recepção, enfermagem, corpo médico e equipe técnica quando um fluxo travava.

### Technical Instructor & IT Support Technician | Escola Remington

**Franca, Brasil | Abril de 2015 - Abril de 2016**

- Dei aulas de web design e de software criativo e mantive o laboratório Windows funcionando: instalação, configuração e atualização em todas as estações.
- Suporte a alunos e funcionários durante a operação diária, de problema de software à rede do laboratório.

## Projetos em Destaque

### Ulpia | Retrieval Local-First para Agentes de IA, Rust, Apache 2.0
https://ulpia.io

- Camada de memória e retrieval para frotas de agentes de IA, RAG sem nenhum modelo de embedding no caminho da recuperação, então roda offline, devolve a mesma resposta duas vezes e consegue reportar que nenhum arquivo cobre a pergunta em vez de devolver o menos errado.
- Motor de dois scorers sobre um índice de palavras-chave declaradas e SQLite FTS5, fundidos com Reciprocal Rank Fusion, atrás de um portão de confiança que torna a abstenção um veredito de primeira classe.
- Avaliado, não afirmado: 28 de 30 perguntas fora de escopo recusadas pela camada determinística em um conjunto adversarial escrito às cegas, latência de rota quente de 0,68 ms p50 e 97 por cento de abstenção no LongMemEval-S.
- Servidor MCP com quatro ferramentas somente leitura para o Claude Desktop e outros clientes, um modelo de privacidade derivado do git em que um arquivo não rastreado nunca é servido, e um cliente de bandeja em Tauri no Windows.

### Casa Seth | Infoprodutos, Comércio e Sistemas de Conversão
https://biblinhaplay.com

- Pacotes compartilhados de domínio e de UI entre funis de produto publicados de forma independente, sobre Supabase e Edge Functions do Postgres.
- Checkout no Mercado Pago e no Pix, precificação controlada no servidor, atribuição por UTM, deduplicação de eventos de navegador e servidor, conciliação de receita e fluxos de expedição física conduzidos por operador.
- BiblinhaPlay, a plataforma de assinatura dentro da casa: cerca de 500 usuários, um web/PWA em produção e um cliente Expo/React Native, acesso por entitlement, entrega de mídia por HTTP Range, snapshots imutáveis de conteúdo e a experiência voxel BiblinhaCraft em Three.js.

### RoadToCyberSec.com | Educação em Cibersegurança

- Escrevi um hub de aprendizado estruturado cobrindo análise de ameaças, MFA, navegação segura, resposta a incidentes, fundamentos de redes e tratamento de evidências digitais.
- Publiquei o material em uma experiência de documentação pesquisável no Mintlify, para públicos técnicos e não técnicos.

## Formação

**Bacharelado em Engenharia de Software** | Universidade de Franca | 2025 - 2029, em andamento

## Certificações

- Santander Bootcamp: Rust and AI-Integrated Application Development | Junho de 2026
- Perícia Computacional e Investigação de Evidências Digitais, Universidade Cruzeiro do Sul | Junho de 2026
- LEAD1x: Exercising Leadership: Foundational Principles, HarvardX / edX | Maio de 2026
- Networking Basics, Cisco Networking Academy | Julho de 2025
- Introduction to Cybersecurity, Cisco Networking Academy | Julho de 2023
- Qualificação Profissional em Desenvolvimento Web e Design (104 horas), Escola Remington | Abril de 2015

## Idiomas

- Português: Nativo
- Inglês: Avançado (C1)
- Espanhol: Fluente
