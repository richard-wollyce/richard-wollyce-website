// Cargos, nomes de produto, termos técnicos consagrados e as pills de tecnologia
// permanecem em inglês, que é como o mercado brasileiro de tecnologia escreve.
const content = {
  locale: 'pt-BR',
  location: 'Franca, São Paulo, Brasil',
  cvPath: '/richard-wollyce-cv-pt-br.pdf',

  hero: {
    headline: 'Prazer, sou Richard Wollyce',
    title: 'Tech Lead & Full-Stack Software Engineer',
    subheadline:
      'Construo infraestrutura de software, produtos digitais e sistemas de conversão de ponta a ponta. Criador do Ulpia, camada local-first de retrieval para IA em Rust, e Tech Lead na Casa Seth, onde lidero arquitetura, pagamentos e engenharia de receita.',
    ctaPrimary: { label: 'Vamos conversar', href: '#contact' },
    ctaSecondary: { label: 'Ver projetos', href: '#work' },
    trustStrip: [
      { icon: 'bolt', text: 'Criador do Ulpia, camada open source de retrieval para agentes de IA, escrita em Rust' },
      { icon: 'chart', text: 'Infoprodutos, pagamentos e sistemas de conversão na Casa Seth' },
      { icon: 'check', text: 'Quem projetou é quem responde quando quebra em produção' },
    ],
  },

  certifications: [
    {
      id: 'efset-english',
      title: 'EF SET English Certificate: C1 Advanced, 68/100',
      issuer: 'EF Education First',
      date: 'Emitido em setembro de 2026',
    },
    {
      id: 'santander-rust-ai',
      title: 'Santander Bootcamp: Rust and AI-Integrated Application Development',
      issuer: 'Santander Bootcamp',
      date: 'Emitido em junho de 2026',
    },
    {
      id: 'computational-forensics',
      title: 'Perícia Computacional e Investigação de Evidências Digitais',
      issuer: 'Universidade Cruzeiro do Sul',
      date: 'Emitido em junho de 2026',
    },
    {
      id: 'harvardx-leadership',
      title: 'LEAD1x: Exercising Leadership: Foundational Principles',
      issuer: 'HarvardX / edX',
      date: 'Emitido em maio de 2026',
    },
    {
      id: 'cisco-networking-basics',
      title: 'Networking Basics',
      issuer: 'Cisco Networking Academy',
      date: 'Emitido em julho de 2025',
    },
    {
      id: 'cisco-intro-cybersecurity',
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      date: 'Emitido em julho de 2023',
    },
    {
      id: 'remington-web',
      title: 'Qualificação Profissional em Desenvolvimento Web e Design',
      issuer: 'Escola Remington',
      date: 'Emitido em abril de 2015',
    },
  ],

  projects: [
    {
      id: 'ulpia',
      name: 'Ulpia',
      category: 'Infraestrutura de AI Memory Local-First',
      summary:
        'Camada de memória open source para agentes de IA, escrita em Rust e publicada sob Apache 2.0. RAG determinístico sem modelos de embedding: combina índice de palavras-chave e busca full-text via Reciprocal Rank Fusion para garantir respostas offline, consistentes e com abstenção confiável.',
      highlights: [
        'Dois scorers combinados por Reciprocal Rank Fusion: índice de palavras-chave declaradas e busca full-text com SQLite FTS5.',
        'Portão determinístico de confiança para abstenção: 28 de 30 consultas fora de escopo rejeitadas com segurança em testes adversariais.',
        'Latência em rota quente de 0,68 ms (p50) e 1,16 ms (p95) em processo, com 97% de taxa de abstenção no LongMemEval-S.',
        'Servidor MCP integrado com 4 ferramentas somente leitura para Claude Desktop e outros clientes.',
        'Modelo de privacidade baseado em Git: arquivos não rastreados pelo repositório são estritamente ignorados.',
        'Cerca de 17.000 linhas de Rust em 3 crates, dependência única de runtime, mais de 200 testes e 36 ADRs documentados.',
      ],
      stack: ['Rust', 'RAG', 'AI Agents', 'LLM Evaluation', 'Information Retrieval', 'SQLite FTS5', 'MCP', 'Tauri', 'Cargo', 'GitHub Actions', 'Apache 2.0'],
      link: 'https://ulpia.io',
      repo: 'https://github.com/richard-wollyce/ulpia',
    },
    {
      id: 'casa-seth',
      name: 'Casa Seth',
      category: 'Infoprodutos, Comércio & Sistemas de Conversão',
      summary:
        'Ecossistema de comércio digital e infoprodutos onde lidero engenharia e arquitetura. Abrange desde a experiência do usuário até a infraestrutura de medição, checkouts, conciliação e o BiblinhaPlay (assinatura web/mobile com ~500 usuários).',
      highlights: [
        'Infraestrutura de receita completa: rastreamento de conversão server-side e client-side, deduplicação de eventos, atribuição por UTM e conciliação contábil.',
        'Pipeline idempotente de geração de imagens com concorrência controlada, cache, telemetria e recuperação de falhas.',
        'Monorepo modular em TypeScript compartilhando regras de negócio, UI e fluxos transacionais entre funis independentes.',
        'BiblinhaPlay em produção para ~500 assinantes com Web/PWA e aplicativo Expo/React Native, gerenciamento de entitlements e mídia protegida.',
        'BiblinhaCraft: experiência voxel interativa em Three.js desenvolvida do zero, com terreno procedural e suporte a toque.',
        'Integração de checkout digital com logística física: validação de endereços, geração de arquivos de impressão e fluxos de pedido.',
      ],
      stack: ['TypeScript', 'React', 'TanStack Start', 'Expo', 'React Native', 'Three.js', 'PostgreSQL', 'Supabase', 'Drizzle ORM', 'Mercado Pago', 'Turborepo', 'Vercel'],
      link: 'https://biblinhaplay.com',
      linkLabel: 'BiblinhaPlay',
      repo: null,
    },
    {
      id: 'roadtocybersec',
      name: 'RoadToCyberSec.com',
      category: 'Hub de Aprendizado em Cibersegurança',
      summary:
        'Trilha de aprendizado e hub de material de cibersegurança, escrito para quem está começando, para quem desenvolve e para quem não é da área técnica.',
      highlights: [
        'Escrevi e organizei o material inteiro, incluindo a ordem em que ele deve ser lido.',
        'Os módulos vão de fundamentos e análise de ameaças até segurança de senhas e MFA, navegação segura, higiene de dispositivos, resposta a incidentes, fundamentos de redes e tratamento de evidências digitais.',
        'Roda no Mintlify, com busca no índice da documentação e uma trilha que não obriga ninguém a adivinhar por onde começar.',
      ],
      stack: ['Mintlify', 'Markdown', 'Cybersecurity Education', 'Technical Documentation'],
      link: 'https://roadtocybersec.com',
      repo: null,
    },
  ],

  experience: [
    {
      id: 'ulpia',
      company: 'Ulpia (Open Source)',
      role: 'Creator & Maintainer',
      location: 'Apache 2.0, ulpia.io',
      period: 'Agosto de 2026 - Atual',
      bullets: [
        'Desenvolvimento de motor de busca local-first em Rust com SQLite FTS5 e Reciprocal Rank Fusion para agentes de IA.',
        'Implementação de portão determinístico de confiança para rejeição segura de consultas fora de escopo.',
        'Harness de avaliação automatizado medindo abstenção adversarial, latência e o benchmark LongMemEval-S.',
        'Implementação de servidor Model Context Protocol (MCP) com 4 ferramentas somente leitura para Claude e agentes externos.',
        'Arquitetura modular de 17.000 linhas de Rust em 3 crates, suite com mais de 200 testes e 36 ADRs documentados.',
      ],
    },
    {
      id: 'casa-seth',
      company: 'Casa Seth',
      role: 'Tech Lead & Software Engineer',
      location: 'Brasil',
      period: 'Abril de 2026 - Atual',
      bullets: [
        'Liderança técnica de engenharia e arquitetura em produtos digitais, funis de conversão e sistemas de receita.',
        'Desenvolvimento de checkout com Pix e Mercado Pago, atribuição por UTM, rastreamento server-side e dashboards de métricas.',
        'Arquitetura do pipeline idempotente de processamento de imagens com controle de concorrência e telemetria.',
        'Entrega e sustentação do BiblinhaPlay (Web/PWA e Expo/React Native) com streaming, gamificação e controle de entitlements.',
        'Arquitetura de monorepo TypeScript com TanStack Start, React, React Native, PostgreSQL e Drizzle ORM.',
        'Desenvolvimento do BiblinhaCraft com Three.js, terreno procedural e streaming progressivo.',
      ],
    },
    {
      id: 'mg-laser',
      company: 'MG Laser',
      role: 'Software Engineer',
      location: 'Franca, Brasil',
      period: 'Novembro de 2025 - Abril de 2026',
      bullets: [
        'Stack: TypeScript, React, Vite, Tailwind CSS, Node.js, Supabase, PostgreSQL, VPS Linux, EasyPanel.',
        'Construí e mantive o ERP de estoque, vendas e operação diária que várias equipes usavam todo dia.',
        'Onde antes era planilha, passou a ser formulário estruturado com validação automática, e os erros de digitação diminuíram.',
        'Tabela grande que demorava para abrir ficou rápida com paginação e chamadas RPC direcionadas.',
        'O acesso aos dados ficou fechado por Row-Level Security (RLS) e Role-Based Access Control (RBAC), então cada papel de usuário enxerga só os registros que lhe cabem.',
        'Deploy, monitoramento e uma VPS Linux autogerenciada eram comigo. Numa queda crítica em produção, o serviço voltou em menos de 10 minutos, sem perda de dados.',
      ],
    },
    {
      id: 'contractor',
      company: 'Freelance',
      role: 'Independent Software Engineer',
      location: 'Franca, Brasil',
      period: '2018 - Atual',
      bullets: [
        'Desenvolvimento de aplicações web full-stack com TypeScript, React, Next.js, Node.js, PostgreSQL e Tailwind CSS.',
        'Sistema corporativo de credenciamento e gestão de participantes para eventos presenciais.',
        'Chatbot com painel operacional para captação estruturada de leads e orçamentos comerciais.',
        'Landing pages de alta conversão com checkouts integrados, webhooks idempotentes e automação operacional.',
        'Práticas de TDD com Vitest, modelagem de dados relacional e deploy automatizado em VPS Linux e Vercel.',
        'Atendimento e suporte técnico em infraestrutura, redes e sistemas corporativos.',
      ],
    },
    {
      id: 'sao-joaquim',
      company: 'São Joaquim Hospital e Maternidade',
      role: 'IT Support & Operations Assistant',
      location: 'Franca, Brasil',
      period: 'Agosto de 2017 - Abril de 2018',
      bullets: [
        'Suporte técnico e operacional entre os setores de um hospital, incluindo o sistema de prontuário MV2000, ordens de serviço e o tratamento dos incidentes do dia a dia.',
        'Primeiro contato da Ouvidoria e a ponte entre recepção, enfermagem, corpo médico e equipe técnica quando um fluxo travava.',
      ],
    },
    {
      id: 'remington',
      company: 'Escola Remington',
      role: 'Technical Instructor & IT Support Technician',
      location: 'Franca, Brasil',
      period: 'Abril de 2015 - Abril de 2016',
      bullets: [
        'Instrutor técnico em desenvolvimento web, design e ferramentas digitais.',
        'Administração, manutenção e suporte técnico aos laboratórios Windows e à infraestrutura de rede.',
        'Atendimento diário a alunos e funcionários para resolução de problemas técnicos.',
      ],
    },
  ],

  technicalStrength: [
    {
      id: 'systems-ai',
      title: 'Engenharia de Sistemas & IA',
      icon: 'terminal',
      description:
        'Infraestrutura de retrieval e memória para agentes de IA em Rust, com benchmarking rigoroso e arquitetura local-first.',
      technologies: ['Rust', 'RAG', 'AI Agents', 'LLM Evaluation', 'Information Retrieval', 'SQLite FTS5', 'Reciprocal Rank Fusion', 'MCP', 'Local-First', 'Benchmarking', 'Tauri'],
    },
    {
      id: 'platform-leadership',
      title: 'Arquitetura de Plataforma & Liderança',
      icon: 'diagram',
      description:
        'Lidero arquitetura e entrega em produtos web e mobile, e continuo dono deles depois que sobem para produção.',
      technologies: ['System Design', 'Software Architecture', 'Monorepos', 'Domain Modeling', 'Technical Leadership', 'ADRs', 'TypeScript', 'UML'],
    },
    {
      id: 'commerce-conversion',
      title: 'Comércio & Engenharia de Conversão',
      icon: 'shield',
      description:
        'Arquitetura de checkout, reconciliação financeira e rastreamento server-side com idempotência e alta confiabilidade.',
      technologies: ['Mercado Pago', 'Pix', 'Hosted Checkout', 'Webhooks', 'Idempotency', 'Entitlements', 'Reconciliation', 'Server-Side Tracking', 'Attribution', 'PostHog'],
    },
    {
      id: 'web-mobile',
      title: 'Web & Mobile',
      icon: 'layout',
      description:
        'Aplicação web responsiva, PWA e app mobile nativo, incluindo tela de streaming e 3D jogável pensado para toque.',
      technologies: ['React', 'TanStack Start', 'Next.js', 'Expo', 'React Native', 'Three.js', 'Vite', 'Tailwind CSS', 'PWA'],
    },
    {
      id: 'backend-data',
      title: 'Backend & Dados',
      icon: 'server',
      description:
        'Desenho API, autenticação, modelo de dados e o fluxo de conteúdo protegido que web e mobile dividem.',
      technologies: ['Node.js', 'PostgreSQL', 'Supabase', 'Drizzle ORM', 'Better Auth', 'Edge Functions', 'RLS', 'RBAC', 'Protected Media'],
    },
    {
      id: 'infrastructure-quality',
      title: 'Infraestrutura & Qualidade',
      icon: 'code',
      description:
        'Deploy, teste, monitoramento, incidente e recuperação, tanto em serviço gerenciado quanto em máquina que eu mesmo administro.',
      technologies: ['Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'Nginx', 'Vercel', 'Vitest', 'Playwright', 'Maestro', 'TDD'],
    },
  ],

  about: {
    paragraphs: [
      'Sou Tech Lead e Full-Stack Software Engineer com foco em arquitetura de sistemas, engenharia de IA e comércio digital. Pego requisitos complexos de produto e devolvo software confiável em produção, mantendo a responsabilidade por todo o seu ciclo de vida.',
      'Minha atuação combina desenvolvimento de sistemas de baixo nível (como o Ulpia, camada de memória para agentes em Rust) com plataformas escaláveis de comércio eletrônico na Casa Seth, cobrindo pagamentos, rastreamento de receita e aplicativos web e mobile.',
      'Prezo por código enxuto, fronteiras de domínio bem definidas, operações idempotentes e testes automatizados que garantem estabilidade. Trabalho de Franca (SP), remotamente para toda a América Latina, e estou aberto a recolocação para Santiago, Chile.',
    ],
  },

  education: {
    degree: 'Bacharelado em Engenharia de Software',
    institution: 'Universidade de Franca',
    period: '2025 - 2029, em andamento',
  },

  languages: [
    { name: 'Português (Brasil)', level: 'Nativo' },
    { name: 'Inglês', level: 'C1 Advanced (EF SET 68/100)' },
    { name: 'Espanhol', level: 'Fluente' },
  ],

  ui: {
    nav: {
      certifications: 'Certificações',
      experience: 'Experiência',
      projects: 'Projetos',
      skills: 'Competências',
      about: 'Sobre',
      contact: 'Contato',
      home: 'Richard Wollyce - Início',
      mainNavigation: 'Navegação principal',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      skipToContent: 'Pular para o conteúdo principal',
    },
    certifications: { title: 'Certificações' },
    experience: {
      title: 'Experiência',
      subtitle: 'Onde eu trabalhei, o que subiu para produção e o que ainda está sob minha responsabilidade.',
    },
    work: {
      title: 'Projetos',
      subtitle: 'O que eu mostro quando perguntam o que eu faço: retrieval para agentes de IA, comércio e conversão, e ensino de cibersegurança.',
      accessProject: 'Visitar o projeto',
      visit: (name) => `Visitar ${name}`,
      visitAria: (name) => `Visitar o site do ${name}`,
      repository: 'Repositório',
      repositoryAria: (name) => `Ver o repositório do ${name} no GitHub`,
      techStack: 'Stack',
    },
    strength: {
      title: 'Competências Técnicas',
      subtitle: 'O que eu sei fazer em frontend, backend, dados e infraestrutura, sem inflar a lista.',
      technologies: 'Tecnologias & Frameworks',
    },
    about: {
      title: 'Sobre mim',
      education: 'Formação',
      languages: 'Idiomas',
    },
    contact: {
      title: 'Onde me encontrar',
      subtitle: 'Quer falar sobre sistemas, retrieval para IA ou uma vaga de engenharia, remota na América Latina ou no Chile? É só chamar.',
      email: 'E-mail',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      downloadCv: 'Baixar currículo',
      cvFormat: 'Disponível em PDF',
    },
    footer: { rights: 'Todos os direitos reservados.' },
    theme: { toLight: 'Mudar para o tema claro', toDark: 'Mudar para o tema escuro' },
    language: {
      switcherAria: 'Escolher idioma',
    },
    rail: {
      previous: 'Anterior',
      next: 'Próximo',
      regionLabel: (section) => `${section}, lista horizontal`,
      position: (current, total) => `Card ${current} de ${total}`,
    },
  },
};

export default content;
