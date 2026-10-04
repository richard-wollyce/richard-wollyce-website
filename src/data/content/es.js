// Los cargos, nombres de producto, términos técnicos y las pills de tecnología
// se mantienen en inglés, que es como los escribe el mercado tecnológico hispano.
const content = {
  locale: 'es',
  location: 'Franca, Sao Paulo, Brasil',
  cvPath: '/richard-wollyce-cv-es.pdf',

  hero: {
    headline: 'Hola, soy Richard Wollyce',
    title: 'Tech Lead & Full-Stack Software Engineer',
    subheadline:
      'Construyo infraestructura de software, productos digitales y sistemas de conversión de punta a punta. Creador de Ulpia (retrieval para IA en Rust) y Tech Lead en Casa Seth, donde lidero arquitectura, pagos e ingeniería de ingresos.',
    ctaPrimary: { label: 'Hablemos', href: '#contact' },
    ctaSecondary: { label: 'Ver proyectos', href: '#work' },
    trustStrip: [
      { icon: 'bolt', text: 'Creador de Ulpia, capa open source de retrieval para agentes de IA, escrita en Rust' },
      { icon: 'chart', text: 'Infoproductos, pagos y sistemas de conversión en Casa Seth' },
      { icon: 'check', text: 'Diseño el sistema y después respondo por él en producción' },
    ],
  },

  certifications: [
    {
      id: 'efset-english',
      title: 'EF SET English Certificate: C1 Advanced, 68/100',
      issuer: 'EF Education First',
      date: 'Emitido en septiembre de 2026',
    },
    {
      id: 'santander-rust-ai',
      title: 'Santander Bootcamp: Rust and AI-Integrated Application Development',
      issuer: 'Santander Bootcamp',
      date: 'Emitido en junio de 2026',
    },
    {
      id: 'computational-forensics',
      title: 'Informática Forense e Investigación de Evidencia Digital',
      issuer: 'Universidade Cruzeiro do Sul',
      date: 'Emitido en junio de 2026',
    },
    {
      id: 'harvardx-leadership',
      title: 'LEAD1x: Exercising Leadership: Foundational Principles',
      issuer: 'HarvardX / edX',
      date: 'Emitido en mayo de 2026',
    },
    {
      id: 'cisco-networking-basics',
      title: 'Networking Basics',
      issuer: 'Cisco Networking Academy',
      date: 'Emitido en julio de 2025',
    },
    {
      id: 'cisco-intro-cybersecurity',
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      date: 'Emitido en julio de 2023',
    },
    {
      id: 'remington-web',
      title: 'Cualificación Profesional en Desarrollo Web y Diseño',
      issuer: 'Escola Remington',
      date: 'Emitido en abril de 2015',
    },
  ],

  projects: [
    {
      id: 'ulpia',
      name: 'Ulpia',
      category: 'Infraestructura de AI Memory Local-First',
      summary:
        'Capa de memoria open source para agentes de IA, escrita en Rust y publicada bajo Apache 2.0. RAG determinista sin modelos de embedding: combina indexación por palabras clave y búsqueda full-text mediante Reciprocal Rank Fusion para garantizar respuestas offline, consistentes y con abstención confiable.',
      highlights: [
        'Doble scorer combinado por Reciprocal Rank Fusion: índice de palabras clave declaradas y búsqueda full-text con SQLite FTS5.',
        'Compuerta determinista de confianza para abstención: rechaza con seguridad 28 de 30 consultas fuera de alcance en pruebas adversariales.',
        'Latencia en ruta caliente de 0,68 ms (p50) y 1,16 ms (p95) en proceso, con 97% de abstención en LongMemEval-S.',
        'Servidor MCP integrado con 4 herramientas de solo lectura para Claude Desktop y otros clientes.',
        'Modelo de privacidad basado en Git: los archivos no rastreados por el repositorio son ignorados estrictamente.',
        'Aproximadamente 17.000 líneas de Rust en 3 crates, dependencia única de runtime, más de 200 pruebas y 36 ADRs documentados.',
      ],
      stack: ['Rust', 'RAG', 'AI Agents', 'LLM Evaluation', 'Information Retrieval', 'SQLite FTS5', 'MCP', 'Tauri', 'Cargo', 'GitHub Actions', 'Apache 2.0'],
      link: 'https://ulpia.io',
      repo: 'https://github.com/richard-wollyce/ulpia',
    },
    {
      id: 'casa-seth',
      name: 'Casa Seth',
      category: 'Infoproductos, Comercio & Sistemas de Conversión',
      summary:
        'Ecosistema de comercio digital e infoproductos donde lidero ingeniería y arquitectura. Abarca desde la experiencia del usuario hasta la infraestructura de medición, checkouts, conciliación y BiblinhaPlay (suscripción web/móvil con ~500 usuarios).',
      highlights: [
        'Infraestructura de ingresos integral: seguimiento de conversión first-party (navegador y servidor), deduplicación de eventos, atribución por UTM y conciliación.',
        'Pipeline idempotente de generación de imágenes con concurrencia acotada, caché, telemetría y reintentos automáticos.',
        'Monorepo modular en TypeScript compartiendo lógica de negocio, UI y flujos transaccionales entre embudos independientes.',
        'BiblinhaPlay en producción para ~500 suscriptores en Web/PWA y app Expo/React Native, con control de entitlements y medios protegidos.',
        'BiblinhaCraft: motor voxel interactivo en Three.js desarrollado desde cero, con terreno procedural y controles táctiles.',
        'Integración de checkout digital con logística física: validación de direcciones, procesamiento de archivos de impresión y flujos de pedidos.',
      ],
      stack: ['TypeScript', 'React', 'TanStack Start', 'Expo', 'React Native', 'Three.js', 'PostgreSQL', 'Supabase', 'Drizzle ORM', 'Mercado Pago', 'Turborepo', 'Vercel'],
      link: 'https://biblinhaplay.com',
      linkLabel: 'BiblinhaPlay',
      repo: null,
    },
    {
      id: 'roadtocybersec',
      name: 'RoadToCyberSec.com',
      category: 'Hub de Aprendizaje en Ciberseguridad',
      summary:
        'Una ruta de aprendizaje y un hub de recursos de ciberseguridad, pensado a la vez para quien empieza, para quien ya programa y para profesionales sin perfil técnico.',
      highlights: [
        'Escribí y ordené el material entero, módulo por módulo.',
        'Los módulos cubren fundamentos, análisis de amenazas, seguridad de contraseñas y MFA, navegación segura, higiene de dispositivos, respuesta a incidentes, fundamentos de redes y manejo de evidencia digital.',
        'Está alojado en Mintlify, con un índice de documentación que se puede buscar y una ruta que se sigue sin perderse.',
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
      period: 'Agosto de 2026 - Actual',
      bullets: [
        'Diseño y desarrollo de motor de búsqueda local-first en Rust con SQLite FTS5 y Reciprocal Rank Fusion para agentes de IA.',
        'Implementación de compuerta determinista de confianza para rechazar de forma segura consultas fuera de alcance.',
        'Creación de harness de evaluación automatizado con mediciones contra LongMemEval-S y bancos de prueba adversariales.',
        'Desarrollo de servidor Model Context Protocol (MCP) con 4 herramientas de solo lectura para Claude y entornos externos.',
        'Arquitectura modular de 17.000 líneas de Rust en 3 crates, suite con más de 200 pruebas y 36 ADRs documentados.',
      ],
    },
    {
      id: 'casa-seth',
      company: 'Casa Seth',
      role: 'Tech Lead & Software Engineer',
      location: 'Brasil',
      period: 'Abril de 2026 - Actual',
      bullets: [
        'Liderazgo técnico de ingeniería y arquitectura en productos digitales, embudos de conversión y sistemas de ingresos.',
        'Desarrollo de checkout con Pix y Mercado Pago, atribución por UTM, seguimiento server-side y paneles de control operativos.',
        'Arquitectura del pipeline idempotente de procesamiento de imágenes con control de concurrencia y telemetría.',
        'Entrega y mantenimiento de BiblinhaPlay (Web/PWA y Expo/React Native) con streaming, gamificación y control de entitlements.',
        'Estructuración de monorepo TypeScript con TanStack Start, React, React Native, PostgreSQL y Drizzle ORM.',
        'Desarrollo de BiblinhaCraft con Three.js, terreno procedural y streaming progresivo.',
      ],
    },
    {
      id: 'mg-laser',
      company: 'MG Laser',
      role: 'Software Engineer',
      location: 'Franca, Brasil',
      period: 'Noviembre de 2025 - Abril de 2026',
      bullets: [
        'Stack: TypeScript, React, Vite, Tailwind CSS, Node.js, Supabase, PostgreSQL, VPS Linux, EasyPanel.',
        'Construí y mantuve el ERP de inventario, ventas y operación diaria que usaban varios equipos.',
        'Las hojas de cálculo se fueron y en su lugar quedaron formularios estructurados con validación automática, que es lo que bajó los errores de carga manual.',
        'Bajé el tiempo de carga de las tablas grandes con paginación y llamadas RPC dirigidas.',
        'Cerré el acceso a los datos con Row-Level Security (RLS) y Role-Based Access Control (RBAC), de modo que cada rol ve solo los registros que le tocan.',
        'Me hice cargo del despliegue, del monitoreo y de un VPS Linux autoadministrado. Cuando se cayó producción, el servicio volvió en menos de 10 minutos y sin pérdida de datos.',
      ],
    },
    {
      id: 'contractor',
      company: 'Freelance',
      role: 'Independent Software Engineer',
      location: 'Franca, Brasil',
      period: '2018 - Actual',
      bullets: [
        'Desarrollo de aplicaciones web full-stack con TypeScript, React, Next.js, Node.js, PostgreSQL y Tailwind CSS.',
        'Plataforma empresarial de acreditación y gestión de asistentes para eventos presenciales.',
        'Chatbot con panel operativo para captura estructurada de prospectos y presupuestos comerciales.',
        'Landing pages de alta conversión con pasarelas de pago integradas y webhooks idempotentes.',
        'Prácticas de TDD con Vitest, modelado de datos relacional y despliegues automatizados en VPS Linux y Vercel.',
        'Soporte e infraestructura técnica para entornos corporativos, hardware y redes.',
      ],
    },
    {
      id: 'sao-joaquim',
      company: 'São Joaquim Hospital e Maternidade',
      role: 'IT Support & Operations Assistant',
      location: 'Franca, Brasil',
      period: 'Agosto de 2017 - Abril de 2018',
      bullets: [
        'Soporte técnico y operativo entre los departamentos de un hospital, incluido el sistema de historias clínicas MV2000, las órdenes de servicio y los incidentes del día a día.',
        'Primer contacto de la oficina de reclamos (Ouvidoria) y el enlace entre recepción, enfermería, equipo médico y equipo técnico cuando un flujo se trababa.',
      ],
    },
    {
      id: 'remington',
      company: 'Escola Remington',
      role: 'Technical Instructor & IT Support Technician',
      location: 'Franca, Brasil',
      period: 'Abril de 2015 - Abril de 2016',
      bullets: [
        'Instructor técnico en desarrollo web, diseño y herramientas digitales.',
        'Administración y mantenimiento de estaciones de trabajo Windows y redes de laboratorios.',
        'Soporte técnico diario para estudiantes y personal institucional.',
      ],
    },
  ],

  technicalStrength: [
    {
      id: 'systems-ai',
      title: 'Ingeniería de Sistemas & IA',
      icon: 'terminal',
      description:
        'Infraestructura de retrieval y memoria para agentes de IA en Rust, con benchmarking riguroso y enfoque local-first.',
      technologies: ['Rust', 'RAG', 'AI Agents', 'LLM Evaluation', 'Information Retrieval', 'SQLite FTS5', 'Reciprocal Rank Fusion', 'MCP', 'Local-First', 'Benchmarking', 'Tauri'],
    },
    {
      id: 'platform-leadership',
      title: 'Arquitectura de Plataforma & Liderazgo',
      icon: 'diagram',
      description:
        'Llevo la arquitectura y la entrega de productos web y móviles, y sigo respondiendo por ellos cuando ya están en producción.',
      technologies: ['System Design', 'Software Architecture', 'Monorepos', 'Domain Modeling', 'Technical Leadership', 'ADRs', 'TypeScript', 'UML'],
    },
    {
      id: 'commerce-conversion',
      title: 'Comercio & Ingeniería de Conversión',
      icon: 'shield',
      description:
        'Arquitectura de checkout, conciliación financiera y seguimiento server-side con idempotencia y confiabilidad.',
      technologies: ['Mercado Pago', 'Pix', 'Hosted Checkout', 'Webhooks', 'Idempotency', 'Entitlements', 'Reconciliation', 'Server-Side Tracking', 'Attribution', 'PostHog'],
    },
    {
      id: 'web-mobile',
      title: 'Web & Móvil',
      icon: 'layout',
      description:
        'Aplicaciones web responsivas, PWAs y apps móviles nativas, con interfaces de streaming y juego 3D pensado para el táctil.',
      technologies: ['React', 'TanStack Start', 'Next.js', 'Expo', 'React Native', 'Three.js', 'Vite', 'Tailwind CSS', 'PWA'],
    },
    {
      id: 'backend-data',
      title: 'Backend & Datos',
      icon: 'server',
      description:
        'Diseño APIs, autenticación, modelos de datos y flujos de contenido protegido que web y móvil comparten.',
      technologies: ['Node.js', 'PostgreSQL', 'Supabase', 'Drizzle ORM', 'Better Auth', 'Edge Functions', 'RLS', 'RBAC', 'Protected Media'],
    },
    {
      id: 'infrastructure-quality',
      title: 'Infraestructura & Calidad',
      icon: 'code',
      description:
        'Me toca el despliegue, las pruebas, el monitoreo, los incidentes y la recuperación, tanto en servicios gestionados como en infraestructura propia.',
      technologies: ['Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'Nginx', 'Vercel', 'Vitest', 'Playwright', 'Maestro', 'TDD'],
    },
  ],

  about: {
    paragraphs: [
      'Soy Tech Lead y Full-Stack Software Engineer especializado en arquitectura de sistemas, ingeniería de IA y comercio digital. Convierto requisitos complejos de producto en software confiable en producción, manteniendo la responsabilidad a lo largo de todo su ciclo de vida.',
      'Mi trabajo combina ingeniería de sistemas de bajo nivel (como Ulpia, capa de memoria para agentes en Rust) con plataformas escalables de comercio digital en Casa Seth, abarcando pagos, métricas de ingresos y aplicaciones web y móviles.',
      'Priorizo arquitecturas limpias, fronteras de dominio bien delimitadas, flujos idempotentes y pruebas automatizadas que aseguran estabilidad. Trabajo desde Franca, Brasil, de forma remota para toda Latinoamérica, y estoy abierto a reubicación en Santiago, Chile.',
    ],
  },

  education: {
    degree: 'Ingeniería de Software (B.Sc.)',
    institution: 'Universidade de Franca',
    period: '2025 - 2029, en curso',
  },

  languages: [
    { name: 'Portugués (Brasil)', level: 'Nativo' },
    { name: 'Inglés', level: 'C1 Advanced (EF SET 68/100)' },
    { name: 'Español', level: 'Fluido' },
  ],

  ui: {
    nav: {
      certifications: 'Certificaciones',
      experience: 'Experiencia',
      projects: 'Proyectos',
      skills: 'Competencias',
      about: 'Sobre mí',
      contact: 'Contacto',
      home: 'Richard Wollyce - Inicio',
      mainNavigation: 'Navegación principal',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      skipToContent: 'Saltar al contenido principal',
    },
    certifications: { title: 'Certificaciones' },
    experience: {
      title: 'Experiencia',
      subtitle: 'Dónde trabajé, qué construí ahí y de qué sigo respondiendo.',
    },
    work: {
      title: 'Proyectos',
      subtitle: 'Retrieval para agentes de IA por un lado, comercio y conversión por otro, y educación en ciberseguridad.',
      accessProject: 'Ver el proyecto',
      visit: (name) => `Visitar ${name}`,
      visitAria: (name) => `Visitar el sitio de ${name}`,
      repository: 'Repositorio',
      repositoryAria: (name) => `Ver el repositorio de ${name} en GitHub`,
      techStack: 'Stack',
    },
    strength: {
      title: 'Competencias técnicas',
      subtitle: 'Lo que sé hacer en frontend, backend, datos e infraestructura, y con qué lo hago.',
      technologies: 'Tecnologías & Frameworks',
    },
    about: {
      title: 'Sobre mí',
      education: 'Formación',
      languages: 'Idiomas',
    },
    contact: {
      title: 'Escríbeme',
      subtitle: 'Si es sobre sistemas, retrieval para IA o una vacante de ingeniería en Chile o remota en Latinoamérica, aquí estoy.',
      email: 'Correo',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      downloadCv: 'Descargar CV',
      cvFormat: 'Disponible en PDF',
    },
    footer: { rights: 'Todos los derechos reservados.' },
    theme: { toLight: 'Cambiar al tema claro', toDark: 'Cambiar al tema oscuro' },
    language: {
      switcherAria: 'Elegir idioma',
    },
    rail: {
      previous: 'Anterior',
      next: 'Siguiente',
      regionLabel: (section) => `${section}, lista horizontal`,
      position: (current, total) => `Tarjeta ${current} de ${total}`,
    },
  },
};

export default content;
