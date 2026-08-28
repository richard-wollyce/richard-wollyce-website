// Cargos, nomes de produto, termos tecnicos de arte e as pills de tecnologia
// permanecem em ingles, que e como o mercado brasileiro de tecnologia escreve.
const content = {
  locale: 'pt-BR',
  location: 'Franca, Sao Paulo, Brasil',
  cvPath: '/richard-wollyce-cv-pt-br.pdf',

  hero: {
    headline: 'Olá, eu sou o Richard Wollyce',
    title: 'Tech Lead & Full-Stack Software Engineer',
    subheadline:
      'Construo os sistemas dos quais outros softwares dependem. O Ulpia, minha camada de memória open source para agentes de IA, é escrito em Rust e responde offline em menos de um milissegundo. O resto do meu trabalho é comércio: infoprodutos, pagamentos e a camada de medição que diz quais deles realmente venderam.',
    ctaPrimary: { label: 'Vamos conversar', href: '#contact' },
    ctaSecondary: { label: 'Ver projetos', href: '#work' },
    trustStrip: [
      { icon: 'bolt', text: 'Criador do Ulpia, um sistema de AI Memory open source em Rust' },
      { icon: 'chart', text: 'Infoprodutos, pagamentos e sistemas de conversão na Casa Seth' },
      { icon: 'check', text: 'Da arquitetura à responsabilidade em produção' },
    ],
  },

  certifications: [
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
      date: 'Emitido em 2 de junho de 2026',
    },
    {
      id: 'harvardx-leadership',
      title: 'LEAD1x: Exercising Leadership: Foundational Principles',
      issuer: 'HarvardX / edX',
      date: 'Emitido em maio de 2026',
    },
    {
      id: 'cisco-intro-cybersecurity',
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      date: 'Emitido em julho de 2023',
    },
    {
      id: 'cisco-networking-basics',
      title: 'Networking Basics',
      issuer: 'Cisco Networking Academy',
      date: 'Emitido em julho de 2025',
    },
  ],

  projects: [
    {
      id: 'ulpia',
      name: 'Ulpia',
      category: 'Infraestrutura de AI Memory Local-First',
      summary:
        'Uma camada de memória open source para frotas de agentes de IA, escrita em Rust e publicada sob Apache 2.0. A recuperação é software comum, sem nenhum modelo de embedding no caminho, então roda offline, devolve a mesma resposta duas vezes e consegue dizer que ninguém cobre uma pergunta em vez de entregar o arquivo menos errado.',
      highlights: [
        'Projetei um motor de recuperação com dois scorers: um índice de palavras-chave construído a partir das chaves que cada arquivo declara, mais busca full-text do SQLite, fundidos com Reciprocal Rank Fusion, e então medi qual scorer vence qual tarefa em vez de supor que eram intercambiáveis.',
        'Transformei a recusa em um veredito de primeira classe. Em um conjunto de perguntas escrito às cegas e revisado de forma adversarial, 28 de 30 perguntas fora de escopo não são respondidas com confiança apenas pela camada determinística.',
        'Medi o pipeline de ponta a ponta: latência de rota quente de 0,68 ms p50 e 1,16 ms p95 em processo, e 97 por cento em abstenção nas 500 perguntas do LongMemEval-S, justamente a habilidade que o artigo do próprio benchmark aponta como a que mais falha nesses sistemas.',
        'Entreguei como servidor MCP com quatro ferramentas somente leitura, de modo que o Claude e qualquer outra coisa que fale MCP leiam a mesma base. Não existe, deliberadamente, nenhuma ferramenta de escrita ao alcance de um modelo.',
        'Construí o modelo de privacidade em cima do git, e não de configuração: um arquivo que o git não rastreia é um arquivo que o sistema não serve, e ele se recusa a abrir uma base quando o git não pode ser consultado.',
        'Cerca de 17.000 linhas de Rust em três crates com uma única dependência de runtime, mais de 200 testes, 33 registros de decisão de arquitetura e um harness de benchmark que carimba cada resultado com seu comando, commit, máquina e data.',
      ],
      stack: ['Rust', 'SQLite FTS5', 'Information Retrieval', 'MCP', 'Tauri', 'Cargo', 'GitHub Actions', 'Apache 2.0'],
      link: 'https://ulpia.io',
      repo: 'https://github.com/richard-wollyce/ulpia',
    },
    {
      id: 'casa-seth',
      name: 'Casa Seth',
      category: 'Infoprodutos, Comércio & Sistemas de Conversão',
      summary:
        'A casa em que lidero a engenharia. Ela entrega produtos digitais e infoprodutos, e a camada de medição embaixo deles: checkout no Pix, atribuição, rastreamento de conversão server-side e conciliação financeira. O BiblinhaPlay, assinatura multiplataforma de aprendizado e entretenimento com cerca de 500 usuários, é o produto mais antigo dentro dela.',
      highlights: [
        'Construí a instrumentação de receita sobre a qual a casa roda: rastreamento de conversão first-party no navegador e no servidor, deduplicação de eventos, atribuição por UTM, conciliação de receita e dashboards que os operadores usam para decidir o que rodar de novo.',
        'Projetei um pipeline de geração de imagens com jobs idempotentes, concorrência limitada, cache, persistência e telemetria, de forma que um job que falha é reprocessado sem duplicar trabalho nem cobrar o cliente duas vezes.',
        'Estruturei pacotes compartilhados de domínio e de UI entre funis de produto publicados de forma independente, centralizando pagamentos, recuperação de sessão, atribuição e integrações de backend.',
        'Entrego e opero o BiblinhaPlay para cerca de 500 usuários, em um web/PWA em produção e um cliente Expo/React Native: streaming de vídeo, música, materiais para impressão, jogos interativos e gamificação atrás de acesso por entitlement.',
        'Conduzi a cobrança do BiblinhaPlay de ponta a ponta com checkout de assinatura hospedado, webhooks verificados e idempotentes, entitlements por plano, entrega de mídia protegida vinculada à sessão e um pipeline imutável de publicação de conteúdo com ativação atômica e rollback.',
        'Construí o BiblinhaCraft, uma experiência voxel em Three.js com terreno determinístico, streaming progressivo de regiões, saves versionados e controles pensados para toque.',
        'Liguei o checkout digital à produção física com validação de endereço, processamento pronto para impressão, uma fila operacional e fluxos de status de pedido.',
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
        'Uma trilha de aprendizado e um hub de recursos de cibersegurança para iniciantes, desenvolvedores e profissionais não técnicos.',
      highlights: [
        'Escrevi e organizei o material de aprendizado para iniciantes, desenvolvedores e profissionais não técnicos.',
        'Desenhei módulos cobrindo fundamentos, análise de ameaças, segurança de senhas e MFA, navegação segura, higiene de dispositivos, resposta a incidentes, fundamentos de redes e tratamento de evidências digitais.',
        'Hospedado no Mintlify, com índice de documentação pesquisável e uma trilha de aprendizado clara.',
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
        'Projeto e construo uma camada de memória local-first para frotas de agentes de IA em Rust, sem nenhum modelo de embedding no caminho da recuperação, de modo que os resultados são offline, reprodutíveis e explicáveis quando estão errados.',
        'Construí um motor de dois scorers sobre um índice de palavras-chave e a busca full-text do SQLite, fundidos com Reciprocal Rank Fusion, mais um portão de confiança que deixa o sistema recusar uma pergunta que nenhum arquivo cobre.',
        'Escrevi o harness de benchmark junto com o produto: abstenção contra um conjunto adversarial escrito às cegas, latência e as 500 perguntas completas do LongMemEval-S, cada resultado carimbado com comando, commit, máquina e data.',
        'Expus a biblioteca por MCP com quatro ferramentas somente leitura para o Claude Desktop e qualquer outro cliente MCP, mantendo acesso de escrita fora da superfície que um modelo alcança.',
        'Mantenho cerca de 17.000 linhas de Rust em três crates com uma dependência de runtime, mais de 200 testes, CI no GitHub Actions e 33 registros de decisão de arquitetura que carregam o raciocínio por trás de cada troca.',
      ],
    },
    {
      id: 'casa-seth',
      company: 'Casa Seth',
      role: 'Tech Lead & Software Engineer',
      location: 'Brasil',
      period: 'Abril de 2026 - Atual',
      bullets: [
        'Lidero arquitetura e entrega em toda a casa: infoprodutos, funis de comércio digital e os sistemas de medição que reportam quanto cada um deles rendeu.',
        'Sou responsável pela engenharia de conversão de ponta a ponta, incluindo checkout no Pix, precificação controlada no servidor, atribuição por UTM, deduplicação de eventos de navegador e servidor, conciliação de receita e dashboards operacionais.',
        'Projetei um pipeline de geração de imagens com jobs idempotentes, concorrência limitada, cache, telemetria e retentativas que não conseguem duplicar trabalho já pago.',
        'Lidero o BiblinhaPlay, produto de assinatura de aprendizado e entretenimento com cerca de 500 usuários, com um web/PWA em produção e um cliente Expo/React Native cobrindo vídeo, música, materiais para impressão, jogos e gamificação.',
        'Estruturei um monorepo TypeScript com TanStack Start, React, Expo/React Native, PostgreSQL, Drizzle e pacotes reutilizáveis de UI e de e-mail transacional.',
        'Projetei checkout de assinatura hospedado, autorização baseada em entitlement, webhooks idempotentes, entrega de mídia protegida e um pipeline de conteúdo versionado com ativação atômica e rollback.',
        'Construí o BiblinhaCraft em Three.js com terreno procedural, streaming progressivo de regiões, progressão persistente e controles pensados para toque.',
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
        'Construí e mantive um ERP de estoque, vendas e operação diária usado por várias equipes.',
        'Substituí fluxos em planilha por formulários estruturados e validação automatizada, reduzindo erros de digitação manual.',
        'Reduzi o tempo de carregamento de tabelas grandes com paginação e chamadas RPC direcionadas.',
        'Protegi o acesso aos dados com Row-Level Security (RLS) e Role-Based Access Control (RBAC), restringindo registros aos papéis de usuário adequados.',
        'Cuidei de deploy, monitoramento e de uma VPS Linux autogerenciada; restaurei o serviço após uma queda crítica em produção em menos de 10 minutos, sem perda de dados.',
      ],
    },
    {
      id: 'contractor',
      company: 'Independente / Contrato',
      role: 'Independent Software Engineer',
      location: 'Franca, Brasil',
      period: null,
      bullets: [
        'Construo aplicações web full-stack para clientes usando TypeScript, React, Next.js, Node.js, Supabase, PostgreSQL, Vite, Tailwind CSS e Vercel.',
        'Construí um sistema de inscrição para eventos ao vivo usado por equipes de várias empresas, com validação de CPF e WhatsApp, interface responsiva e fluxos de acompanhamento de participantes.',
        'Construí e mantenho um chatbot e um painel administrativo para um estúdio de tatuagem e barbearia, transformando conversas em pedidos de orçamento estruturados e tarefas de follow-up.',
        'Construí landing pages e ferramentas internas com integrações de pagamento e webhooks para automatizar checkout e o trabalho do dia a dia.',
        'Sou responsável por frontend, backend, modelagem de banco, deploy, manutenção e suporte ao vivo, usando TDD com Vitest para evitar regressões e refatorar com segurança.',
      ],
    },
  ],

  technicalStrength: [
    {
      id: 'systems-ai',
      title: 'Engenharia de Sistemas & IA',
      icon: 'terminal',
      description:
        'Construo infraestrutura de recuperação e memória em Rust, medida contra benchmarks que escrevi para poderem falhar.',
      technologies: ['Rust', 'Information Retrieval', 'SQLite FTS5', 'Reciprocal Rank Fusion', 'MCP', 'Local-First', 'Benchmarking', 'Deterministic Systems', 'Cargo', 'Tauri'],
    },
    {
      id: 'platform-leadership',
      title: 'Arquitetura de Plataforma & Liderança',
      icon: 'diagram',
      description:
        'Lidero arquitetura e entrega em produtos web e mobile, e continuo responsável depois que eles entram em produção.',
      technologies: ['System Design', 'Software Architecture', 'Monorepos', 'Domain Modeling', 'Technical Leadership', 'Architecture Decision Records', 'TypeScript', 'JavaScript', 'UML', 'Technical Documentation'],
    },
    {
      id: 'commerce-conversion',
      title: 'Comércio & Engenharia de Conversão',
      icon: 'shield',
      description:
        'Construo o caminho do dinheiro e a medição embaixo dele, com eventos seguros para reprocessar e números que fecham.',
      technologies: ['Pix', 'Hosted Checkout', 'Webhooks', 'Idempotency', 'Entitlements', 'Billing Reconciliation', 'Server-Side Tracking', 'Attribution', 'Conversion Analytics', 'PostHog', 'A/B Testing'],
    },
    {
      id: 'web-mobile',
      title: 'Web & Mobile',
      icon: 'layout',
      description:
        'Construo aplicações web responsivas, PWAs e apps mobile nativos, incluindo interfaces de streaming e jogabilidade 3D pensada para toque.',
      technologies: ['React', 'TanStack Start', 'Next.js', 'Expo', 'React Native', 'Three.js', 'Vite', 'Tailwind CSS', 'Responsive UI', 'PWA'],
    },
    {
      id: 'backend-data',
      title: 'Backend & Dados',
      icon: 'server',
      description:
        'Projeto APIs, autenticação, modelos de dados e fluxos de conteúdo protegido compartilhados entre web e mobile.',
      technologies: ['Node.js', 'PostgreSQL', 'Supabase', 'Drizzle ORM', 'Better Auth', 'REST APIs', 'Edge Functions', 'RLS', 'RBAC', 'Protected Media'],
    },
    {
      id: 'infrastructure-quality',
      title: 'Infraestrutura & Qualidade',
      icon: 'code',
      description:
        'Cuido de deploy, testes, monitoramento, incidentes e recuperação, tanto em serviços gerenciados quanto em infraestrutura própria.',
      technologies: ['Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'Nginx', 'Vercel', 'Vitest', 'Playwright', 'Maestro', 'TDD', 'Biome', 'Lefthook'],
    },
  ],

  about: {
    paragraphs: [
      'Sou Tech Lead e Full-Stack Software Engineer. Transformo requisitos de produto em software que funciona e continuo responsável depois que ele entra no ar.',
      'Meu projeto principal é o Ulpia, uma camada de memória open source para agentes de IA escrita em Rust. Ela mantém todo modelo fora do caminho da recuperação, e é isso que permite rodar offline, responder igual duas vezes e admitir quando nenhum arquivo da biblioteca cobre a sua pergunta. É Apache 2.0, e os benchmarks capazes de constrangê-la estão publicados no mesmo repositório.',
      'Na Casa Seth lidero o lado do comércio: infoprodutos, fluxos de pagamento e os sistemas de atribuição e conversão que reportam quanto cada lançamento realmente rendeu. O BiblinhaPlay, plataforma de assinatura com cerca de 500 usuários entre web e mobile, é o produto que construí primeiro e que ainda opero.',
      'Fico perto do código. Defino fronteiras claras, mantenho integrações sensíveis no servidor, planejo a recuperação e valido os fluxos críticos.',
    ],
  },

  education: {
    degree: 'Bacharelado em Engenharia de Software',
    institution: 'Universidade de Franca',
    period: '2025 - 2029',
  },

  languages: [
    { name: 'Português (Brasil)', level: 'Nativo' },
    { name: 'Inglês', level: 'Avançado (C1)' },
    { name: 'Espanhol', level: 'Intermediário' },
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
      subtitle: 'Um histórico de engenharia em produção, responsabilidade sobre sistemas seguros e entrega confiável de software.',
    },
    work: {
      title: 'Projetos',
      subtitle: 'Sistemas selecionados entre infraestrutura de AI Memory, operações de comércio e conversão, e educação em cibersegurança.',
      accessProject: 'Acessar projeto',
      visit: (name) => `Visitar ${name}`,
      visitAria: (name) => `Visitar o site do ${name}`,
      repository: 'Repositório',
      repositoryAria: (name) => `Ver o repositório do ${name} no GitHub`,
      techStack: 'Stack',
    },
    strength: {
      title: 'Força Técnica',
      subtitle: 'Um recorte estruturado das capacidades centrais construídas em frontend, backend, dados e infraestrutura.',
      technologies: 'Tecnologias & Frameworks',
    },
    about: {
      title: 'Sobre mim',
      education: 'Formação',
      languages: 'Idiomas',
    },
    contact: {
      title: 'Vamos nos conectar',
      subtitle: 'Quer falar sobre sistemas, segurança ou vagas de engenharia full-stack? É só chamar.',
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
      modalTitle: 'Escolha seu idioma',
      modalBody:
        'Este site é escrito em inglês. Há versões em português e espanhol, e você pode trocar a qualquer momento pelas bandeiras no menu.',
      keepEnglish: 'Continuar em inglês',
      close: 'Fechar',
      current: 'Idioma atual',
    },
  },
};

export default content;
