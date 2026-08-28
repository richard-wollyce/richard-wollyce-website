// Cargos, nomes de produto, termos técnicos consagrados e as pills de tecnologia
// permanecem em inglês, que é como o mercado brasileiro de tecnologia escreve.
const content = {
  locale: 'pt-BR',
  location: 'Franca, São Paulo, Brasil',
  cvPath: '/richard-wollyce-cv-pt-br.pdf',

  hero: {
    headline: 'Olá, eu sou o Richard Wollyce',
    title: 'Tech Lead & Full-Stack Software Engineer',
    subheadline:
      'Construo a camada de baixo, o software em que outro software se apoia. O Ulpia é a minha camada de memória open source para agentes de IA. Escrito em Rust, roda offline e responde em menos de um milissegundo. O resto do meu trabalho é comércio digital. Infoproduto, pagamento e a camada de medição que diz qual deles vendeu de verdade.',
    ctaPrimary: { label: 'Vamos conversar', href: '#contact' },
    ctaSecondary: { label: 'Ver projetos', href: '#work' },
    trustStrip: [
      { icon: 'bolt', text: 'Criador do Ulpia, sistema open source de AI Memory escrito em Rust' },
      { icon: 'chart', text: 'Infoprodutos, pagamentos e sistemas de conversão na Casa Seth' },
      { icon: 'check', text: 'Quem projetou é quem responde quando quebra em produção' },
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
        'Camada de memória open source para frotas de agentes de IA, escrita em Rust e publicada sob Apache 2.0. A recuperação aqui é software comum, sem nenhum modelo de embedding no meio do caminho. Por isso ela roda offline, devolve a mesma resposta duas vezes e sabe dizer que nenhum arquivo cobre a pergunta, em vez de entregar o menos errado da pilha.',
      highlights: [
        'O motor de busca tem dois scorers. Um índice de palavras-chave montado a partir das chaves que cada arquivo declara e a busca full-text do SQLite, fundidos por Reciprocal Rank Fusion. Depois fui medir qual dos dois ganha em que tipo de pergunta, porque supor que eram intercambiáveis teria sido mais rápido e errado.',
        'Não saber virou uma resposta legítima do sistema, e não uma falha dele. Num conjunto de perguntas escrito às cegas e revisado de forma adversarial, 28 das 30 perguntas fora de escopo passam sem resposta confiante só com a camada determinística.',
        'Medi a rota quente em processo, 0,68 ms p50 e 1,16 ms p95 de latência. Nas 500 perguntas do LongMemEval-S, 97 por cento em abstenção, que é exatamente onde o artigo do próprio benchmark diz que esses sistemas mais falham.',
        'A biblioteca sai como servidor MCP com quatro ferramentas somente leitura, então o Claude e qualquer outra coisa que fale MCP leem a mesma base. Ferramenta de escrita ao alcance de um modelo não existe aqui, e isso é decisão, não pendência.',
        'O modelo de privacidade se apoia no git, e não num arquivo de configuração. Arquivo que o git não rastreia é arquivo que o sistema não serve, e se o git não puder ser consultado ele se recusa a abrir a base.',
        'São cerca de 17.000 linhas de Rust em três crates e uma única dependência de runtime. Mais de 200 testes, 33 registros de decisão de arquitetura e um harness de benchmark que carimba todo resultado com o comando, o commit, a máquina e a data que o produziram.',
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
        'A casa onde lidero a engenharia. Produto digital e infoproduto de um lado, e do outro a camada de medição que fica embaixo deles: checkout no Pix, atribuição, rastreamento de conversão server-side e conciliação financeira. O produto mais antigo lá dentro é o BiblinhaPlay, assinatura de aprendizado e entretenimento que roda em web e mobile para cerca de 500 usuários.',
      highlights: [
        'A instrumentação de receita em que a casa inteira se apoia é minha. Rastreamento de conversão first-party no navegador e no servidor, deduplicação de eventos, atribuição por UTM, conciliação de receita e os dashboards em que os operadores olham para decidir o que vale a pena repetir.',
        'No pipeline de geração de imagens, os jobs são idempotentes, com concorrência limitada, cache, persistência e telemetria. Job que falha volta para a fila sem duplicar trabalho nem cobrar o cliente duas vezes.',
        'Os funis de produto sobem de forma independente, mas dividem os mesmos pacotes de domínio e de UI, e é ali que ficam pagamento, recuperação de sessão, atribuição e as integrações de backend.',
        'Entrego e opero o BiblinhaPlay para cerca de 500 usuários, com um web/PWA em produção e um cliente Expo/React Native. Streaming de vídeo, música, materiais para impressão, jogos interativos e gamificação, tudo atrás de acesso por entitlement.',
        'Cuido da cobrança do BiblinhaPlay inteira, do checkout de assinatura hospedado até o rollback, passando por webhooks verificados e idempotentes, entitlements por plano, entrega de mídia protegida presa à sessão e um pipeline imutável de publicação de conteúdo com ativação atômica.',
        'O BiblinhaCraft é uma experiência voxel em Three.js que escrevi do zero, com terreno determinístico, streaming progressivo de regiões, saves versionados e controle pensado para toque.',
        'O mesmo checkout digital também alimenta produção física, com validação de endereço, preparo de arquivo para impressão, uma fila operacional e os fluxos de status do pedido.',
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
        'Projeto e escrevo em Rust uma camada de memória local-first para frotas de agentes de IA. Não tem modelo de embedding nenhum no caminho da recuperação, e é por isso que o resultado é offline, reprodutível e explicável quando está errado.',
        'São dois scorers em cima de um índice de palavras-chave e da busca full-text do SQLite, fundidos por Reciprocal Rank Fusion, mais um portão de confiança que dá ao sistema o direito de recusar uma pergunta que nenhum arquivo cobre.',
        'O harness de benchmark nasceu junto com o produto, e não depois dele. Mede abstenção contra um conjunto adversarial escrito às cegas, latência e as 500 perguntas completas do LongMemEval-S, e carimba cada resultado com comando, commit, máquina e data.',
        'A biblioteca sai por MCP com quatro ferramentas somente leitura, para o Claude Desktop e para qualquer outro cliente MCP. Escrita fica fora da superfície que um modelo alcança.',
        'Hoje são cerca de 17.000 linhas de Rust em três crates e uma dependência de runtime, com mais de 200 testes, CI no GitHub Actions e 33 registros de decisão de arquitetura, que existem para guardar o motivo de cada troca e não só o resultado dela.',
      ],
    },
    {
      id: 'casa-seth',
      company: 'Casa Seth',
      role: 'Tech Lead & Software Engineer',
      location: 'Brasil',
      period: 'Abril de 2026 - Atual',
      bullets: [
        'Lidero arquitetura e entrega em toda a casa, dos infoprodutos aos funis de comércio digital e aos sistemas de medição que dizem quanto cada um deles rendeu.',
        'Respondo pela engenharia de conversão inteira, do checkout no Pix e do preço decidido no servidor até a atribuição por UTM, a deduplicação de eventos entre navegador e servidor, a conciliação de receita e os dashboards operacionais.',
        'Desenhei o pipeline de geração de imagens com job idempotente, concorrência limitada, cache, telemetria e uma retentativa que não consegue duplicar trabalho já pago.',
        'Respondo pelo BiblinhaPlay, assinatura de aprendizado e entretenimento com cerca de 500 usuários, num web/PWA em produção e num cliente Expo/React Native que cobrem vídeo, música, materiais para impressão, jogos e gamificação.',
        'Tudo isso vive num monorepo TypeScript que eu montei, com TanStack Start, React, Expo/React Native, PostgreSQL, Drizzle e pacotes reaproveitáveis de UI e de e-mail transacional.',
        'Do lado da assinatura, desenhei checkout hospedado, autorização por entitlement, webhooks idempotentes, entrega de mídia protegida e um pipeline de conteúdo versionado com ativação atômica e rollback.',
        'Escrevi o BiblinhaCraft em Three.js, com terreno procedural, streaming progressivo de regiões, progressão que persiste e controle pensado para toque.',
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
      company: 'Independente / Contrato',
      role: 'Independent Software Engineer',
      location: 'Franca, Brasil',
      period: null,
      bullets: [
        'Atendo clientes com aplicação web full-stack em TypeScript, React, Next.js, Node.js, Supabase, PostgreSQL, Vite, Tailwind CSS e Vercel.',
        'Um sistema de inscrição para eventos ao vivo, hoje usado por equipes de várias empresas, com validação de CPF e WhatsApp, interface responsiva e acompanhamento de participante.',
        'Para um estúdio de tatuagem e barbearia, construí e ainda mantenho um chatbot com painel administrativo. A conversa entra solta e sai como pedido de orçamento estruturado e tarefa de follow-up.',
        'Também faço landing page e ferramenta interna com integração de pagamento e webhook, para tirar da mão o checkout e o trabalho repetido do dia a dia.',
        'Nesses projetos eu sou o frontend, o backend, a modelagem de banco, o deploy, a manutenção e o suporte ao vivo. TDD com Vitest é o que me deixa refatorar sem quebrar o que já estava funcionando.',
      ],
    },
  ],

  technicalStrength: [
    {
      id: 'systems-ai',
      title: 'Engenharia de Sistemas & IA',
      icon: 'terminal',
      description:
        'Infraestrutura de recuperação e memória escrita em Rust, medida contra benchmarks que eu escrevi para poderem falhar.',
      technologies: ['Rust', 'Information Retrieval', 'SQLite FTS5', 'Reciprocal Rank Fusion', 'MCP', 'Local-First', 'Benchmarking', 'Deterministic Systems', 'Cargo', 'Tauri'],
    },
    {
      id: 'platform-leadership',
      title: 'Arquitetura de Plataforma & Liderança',
      icon: 'diagram',
      description:
        'Lidero arquitetura e entrega em produtos web e mobile, e continuo dono deles depois que sobem para produção.',
      technologies: ['System Design', 'Software Architecture', 'Monorepos', 'Domain Modeling', 'Technical Leadership', 'Architecture Decision Records', 'TypeScript', 'JavaScript', 'UML', 'Technical Documentation'],
    },
    {
      id: 'commerce-conversion',
      title: 'Comércio & Engenharia de Conversão',
      icon: 'shield',
      description:
        'Faço o caminho do dinheiro e a medição embaixo dele, com eventos seguros de reprocessar e números que fecham.',
      technologies: ['Pix', 'Hosted Checkout', 'Webhooks', 'Idempotency', 'Entitlements', 'Billing Reconciliation', 'Server-Side Tracking', 'Attribution', 'Conversion Analytics', 'PostHog', 'A/B Testing'],
    },
    {
      id: 'web-mobile',
      title: 'Web & Mobile',
      icon: 'layout',
      description:
        'Aplicação web responsiva, PWA e app mobile nativo, incluindo tela de streaming e 3D jogável pensado para toque.',
      technologies: ['React', 'TanStack Start', 'Next.js', 'Expo', 'React Native', 'Three.js', 'Vite', 'Tailwind CSS', 'Responsive UI', 'PWA'],
    },
    {
      id: 'backend-data',
      title: 'Backend & Dados',
      icon: 'server',
      description:
        'Desenho API, autenticação, modelo de dados e o fluxo de conteúdo protegido que web e mobile dividem.',
      technologies: ['Node.js', 'PostgreSQL', 'Supabase', 'Drizzle ORM', 'Better Auth', 'REST APIs', 'Edge Functions', 'RLS', 'RBAC', 'Protected Media'],
    },
    {
      id: 'infrastructure-quality',
      title: 'Infraestrutura & Qualidade',
      icon: 'code',
      description:
        'Deploy, teste, monitoramento, incidente e recuperação, tanto em serviço gerenciado quanto em máquina que eu mesmo administro.',
      technologies: ['Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'Nginx', 'Vercel', 'Vitest', 'Playwright', 'Maestro', 'TDD', 'Biome', 'Lefthook'],
    },
  ],

  about: {
    paragraphs: [
      'Sou Tech Lead e Full-Stack Software Engineer. Pego requisito de produto e devolvo software que funciona. Depois que ele entra no ar, continua sendo meu.',
      'O projeto que ocupa a maior parte do meu tempo é o Ulpia, camada de memória open source para agentes de IA escrita em Rust. Modelo nenhum entra no caminho da recuperação, e é isso que permite rodar offline, responder igual duas vezes e admitir quando nenhum arquivo da biblioteca cobre a pergunta. É Apache 2.0, e os benchmarks capazes de desmentir tudo isso estão no mesmo repositório.',
      'Na Casa Seth eu cuido do lado do comércio, que é infoproduto, fluxo de pagamento e os sistemas de atribuição e conversão que dizem quanto cada lançamento rendeu de verdade. O BiblinhaPlay, assinatura com cerca de 500 usuários entre web e mobile, foi o primeiro produto que construí lá e continua comigo.',
      'Continuo perto do código. Gosto de fronteira bem definida, integração sensível não sai do servidor, o plano de recuperação existe antes de alguém precisar dele, e todo fluxo crítico eu testo manualmente.',
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
      subtitle: 'Onde eu trabalhei, o que subiu para produção e o que ainda está sob minha responsabilidade.',
    },
    work: {
      title: 'Projetos',
      subtitle: 'O que eu mostro quando perguntam o que eu faço: infraestrutura de AI Memory, comércio e conversão, e ensino de cibersegurança.',
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
      subtitle: 'Quer falar sobre sistemas, segurança ou uma vaga de engenharia full-stack? É só chamar.',
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
  },
};

export default content;
