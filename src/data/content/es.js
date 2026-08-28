// Los cargos, nombres de producto, terminos tecnicos y las pills de tecnologia
// se mantienen en ingles, que es como los escribe el mercado tecnologico hispano.
const content = {
  locale: 'es',
  location: 'Franca, Sao Paulo, Brasil',
  cvPath: '/richard-wollyce-cv-es.pdf',

  hero: {
    headline: 'Hola, soy Richard Wollyce',
    title: 'Tech Lead & Full-Stack Software Engineer',
    subheadline:
      'Construyo los sistemas de los que depende el resto del software. Ulpia, mi capa de memoria open source para agentes de IA, está escrita en Rust y responde sin conexión en menos de un milisegundo. El resto de mi trabajo es comercio: infoproductos, pagos y la capa de medición que dice cuáles de ellos vendieron de verdad.',
    ctaPrimary: { label: 'Hablemos', href: '#contact' },
    ctaSecondary: { label: 'Ver proyectos', href: '#work' },
    trustStrip: [
      { icon: 'bolt', text: 'Creador de Ulpia, un sistema de AI Memory open source en Rust' },
      { icon: 'chart', text: 'Infoproductos, pagos y sistemas de conversión en Casa Seth' },
      { icon: 'check', text: 'De la arquitectura a la responsabilidad en producción' },
    ],
  },

  certifications: [
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
      date: 'Emitido el 2 de junio de 2026',
    },
    {
      id: 'harvardx-leadership',
      title: 'LEAD1x: Exercising Leadership: Foundational Principles',
      issuer: 'HarvardX / edX',
      date: 'Emitido en mayo de 2026',
    },
    {
      id: 'cisco-intro-cybersecurity',
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      date: 'Emitido en julio de 2023',
    },
    {
      id: 'cisco-networking-basics',
      title: 'Networking Basics',
      issuer: 'Cisco Networking Academy',
      date: 'Emitido en julio de 2025',
    },
  ],

  projects: [
    {
      id: 'ulpia',
      name: 'Ulpia',
      category: 'Infraestructura de AI Memory Local-First',
      summary:
        'Una capa de memoria open source para flotas de agentes de IA, escrita en Rust y publicada bajo Apache 2.0. La recuperación es software corriente, sin ningún modelo de embedding en el camino, así que funciona sin conexión, devuelve la misma respuesta dos veces y puede decir que nadie cubre una pregunta en lugar de entregar el archivo menos equivocado.',
      highlights: [
        'Diseñé un motor de recuperación con dos scorers: un índice de palabras clave construido a partir de las claves que declara cada archivo, más la búsqueda full-text de SQLite, fusionados con Reciprocal Rank Fusion, y después medí qué scorer gana en qué tarea en vez de suponer que eran intercambiables.',
        'Convertí la negativa en un veredicto de primera clase. Sobre un conjunto de preguntas escrito a ciegas y revisado de forma adversarial, 28 de 30 preguntas fuera de alcance no se responden con confianza solo con la capa determinista.',
        'Medí el pipeline de extremo a extremo: latencia de ruta en caliente de 0,68 ms p50 y 1,16 ms p95 en proceso, y 97 por ciento en abstención sobre las 500 preguntas de LongMemEval-S, precisamente la capacidad que el propio artículo del benchmark señala como la que más falla en estos sistemas.',
        'Lo entregué como servidor MCP con cuatro herramientas de solo lectura, de modo que Claude y cualquier otro cliente que hable MCP lean la misma base. No existe, deliberadamente, ninguna herramienta de escritura al alcance de un modelo.',
        'Construí el modelo de privacidad sobre git y no sobre configuración: un archivo que git no rastrea es un archivo que el sistema no sirve, y se niega a abrir una base cuando git no puede ser consultado.',
        'Alrededor de 17.000 líneas de Rust en tres crates con una única dependencia de runtime, más de 200 pruebas, 33 registros de decisión de arquitectura y un harness de benchmark que sella cada resultado con su comando, commit, máquina y fecha.',
      ],
      stack: ['Rust', 'SQLite FTS5', 'Information Retrieval', 'MCP', 'Tauri', 'Cargo', 'GitHub Actions', 'Apache 2.0'],
      link: 'https://ulpia.io',
      repo: 'https://github.com/richard-wollyce/ulpia',
    },
    {
      id: 'casa-seth',
      name: 'Casa Seth',
      category: 'Infoproductos, Comercio & Sistemas de Conversión',
      summary:
        'La casa cuya ingeniería lidero. Publica productos digitales e infoproductos, y la capa de medición que va debajo: checkout con Pix, atribución, seguimiento de conversión del lado del servidor y conciliación financiera. BiblinhaPlay, una suscripción multiplataforma de aprendizaje y entretenimiento con cerca de 500 usuarios, es el producto más antiguo dentro de ella.',
      highlights: [
        'Construí la instrumentación de ingresos sobre la que funciona la casa: seguimiento de conversión first-party en navegador y servidor, deduplicación de eventos, atribución por UTM, conciliación de ingresos y paneles que los operadores usan para decidir qué volver a lanzar.',
        'Diseñé un pipeline de generación de imágenes con trabajos idempotentes, concurrencia acotada, caché, persistencia y telemetría, de modo que un trabajo fallido se reintenta sin duplicar trabajo ni cobrarle dos veces al cliente.',
        'Estructuré paquetes compartidos de dominio y de UI entre embudos de producto desplegados de forma independiente, centralizando pagos, recuperación de sesión, atribución e integraciones de backend.',
        'Entrego y opero BiblinhaPlay para cerca de 500 usuarios, con un web/PWA en producción y un cliente Expo/React Native: streaming de video, música, material imprimible, juegos interactivos y gamificación detrás de acceso por entitlement.',
        'Llevé la facturación de BiblinhaPlay de extremo a extremo con checkout de suscripción alojado, webhooks verificados e idempotentes, entitlements por plan, entrega de medios protegidos ligada a la sesión y un pipeline inmutable de publicación de contenido con activación atómica y rollback.',
        'Construí BiblinhaCraft, una experiencia voxel en Three.js con terreno determinista, streaming progresivo de regiones, guardados versionados y controles pensados para el táctil.',
        'Conecté el checkout digital con la producción física mediante validación de direcciones, procesamiento listo para imprimir, una cola operativa y flujos de estado de pedido.',
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
        'Una ruta de aprendizaje y un hub de recursos de ciberseguridad para principiantes, desarrolladores y profesionales no técnicos.',
      highlights: [
        'Escribí y organicé el material de aprendizaje para principiantes, desarrolladores y profesionales no técnicos.',
        'Diseñé módulos que cubren fundamentos, análisis de amenazas, seguridad de contraseñas y MFA, navegación segura, higiene de dispositivos, respuesta a incidentes, fundamentos de redes y manejo de evidencia digital.',
        'Alojado en Mintlify, con un índice de documentación consultable y una ruta de aprendizaje clara.',
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
        'Diseño y construyo una capa de memoria local-first para flotas de agentes de IA en Rust, sin ningún modelo de embedding en el camino de recuperación, de modo que los resultados son offline, reproducibles y explicables cuando se equivocan.',
        'Construí un motor de dos scorers sobre un índice de palabras clave y la búsqueda full-text de SQLite, fusionados con Reciprocal Rank Fusion, más una compuerta de confianza que permite al sistema declinar una pregunta que ningún archivo cubre.',
        'Escribí el harness de benchmark junto con el producto: abstención contra un conjunto adversarial escrito a ciegas, latencia y las 500 preguntas completas de LongMemEval-S, cada resultado sellado con comando, commit, máquina y fecha.',
        'Expuse la biblioteca por MCP con cuatro herramientas de solo lectura para Claude Desktop y cualquier otro cliente MCP, manteniendo el acceso de escritura fuera de la superficie que alcanza un modelo.',
        'Mantengo alrededor de 17.000 líneas de Rust en tres crates con una dependencia de runtime, más de 200 pruebas, CI en GitHub Actions y 33 registros de decisión de arquitectura que llevan el razonamiento detrás de cada compromiso.',
      ],
    },
    {
      id: 'casa-seth',
      company: 'Casa Seth',
      role: 'Tech Lead & Software Engineer',
      location: 'Brasil',
      period: 'Abril de 2026 - Actual',
      bullets: [
        'Lidero arquitectura y entrega en toda la casa: infoproductos, embudos de comercio digital y los sistemas de medición que reportan cuánto rindió cada uno.',
        'Soy responsable de la ingeniería de conversión de extremo a extremo, incluyendo checkout con Pix, precios controlados en el servidor, atribución por UTM, deduplicación de eventos de navegador y servidor, conciliación de ingresos y paneles operativos.',
        'Diseñé un pipeline de generación de imágenes con trabajos idempotentes, concurrencia acotada, caché, telemetría y reintentos que no pueden duplicar trabajo ya pagado.',
        'Lidero BiblinhaPlay, el producto de suscripción de aprendizaje y entretenimiento con cerca de 500 usuarios, con un web/PWA en producción y un cliente Expo/React Native que cubre video, música, material imprimible, juegos y gamificación.',
        'Estructuré un monorepo TypeScript con TanStack Start, React, Expo/React Native, PostgreSQL, Drizzle y paquetes reutilizables de UI y de correo transaccional.',
        'Diseñé checkout de suscripción alojado, autorización basada en entitlement, webhooks idempotentes, entrega de medios protegidos y un pipeline de contenido versionado con activación atómica y rollback.',
        'Construí BiblinhaCraft en Three.js con terreno procedural, streaming progresivo de regiones, progresión persistente y controles pensados para el táctil.',
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
        'Construí y mantuve un ERP de inventario, ventas y operación diaria usado por varios equipos.',
        'Reemplacé flujos en hojas de cálculo por formularios estructurados y validación automatizada, reduciendo errores de carga manual.',
        'Reduje el tiempo de carga de tablas grandes con paginación y llamadas RPC dirigidas.',
        'Aseguré el acceso a los datos con Row-Level Security (RLS) y Role-Based Access Control (RBAC), restringiendo registros a los roles de usuario adecuados.',
        'Gestioné despliegue, monitoreo y un VPS Linux autoadministrado; restauré el servicio tras una caída crítica en producción en menos de 10 minutos y sin pérdida de datos.',
      ],
    },
    {
      id: 'contractor',
      company: 'Independiente / Contrato',
      role: 'Independent Software Engineer',
      location: 'Franca, Brasil',
      period: null,
      bullets: [
        'Construyo aplicaciones web full-stack para clientes con TypeScript, React, Next.js, Node.js, Supabase, PostgreSQL, Vite, Tailwind CSS y Vercel.',
        'Construí un sistema de inscripción para eventos en vivo usado por equipos de varias empresas, con validación de CPF y WhatsApp, interfaz responsiva y flujos de seguimiento de participantes.',
        'Construí y mantengo un chatbot y un panel administrativo para un estudio de tatuajes y barbería, convirtiendo conversaciones en solicitudes de presupuesto estructuradas y tareas de seguimiento.',
        'Construí landing pages y herramientas internas con integraciones de pago y webhooks para automatizar el checkout y el trabajo diario.',
        'Soy responsable de frontend, backend, diseño de base de datos, despliegue, mantenimiento y soporte en vivo, usando TDD con Vitest para evitar regresiones y refactorizar con seguridad.',
      ],
    },
  ],

  technicalStrength: [
    {
      id: 'systems-ai',
      title: 'Ingeniería de Sistemas & IA',
      icon: 'terminal',
      description:
        'Construyo infraestructura de recuperación y memoria en Rust, medida contra benchmarks que escribí para que pudieran fallar.',
      technologies: ['Rust', 'Information Retrieval', 'SQLite FTS5', 'Reciprocal Rank Fusion', 'MCP', 'Local-First', 'Benchmarking', 'Deterministic Systems', 'Cargo', 'Tauri'],
    },
    {
      id: 'platform-leadership',
      title: 'Arquitectura de Plataforma & Liderazgo',
      icon: 'diagram',
      description:
        'Lidero arquitectura y entrega en productos web y móviles, y sigo siendo responsable una vez que están en producción.',
      technologies: ['System Design', 'Software Architecture', 'Monorepos', 'Domain Modeling', 'Technical Leadership', 'Architecture Decision Records', 'TypeScript', 'JavaScript', 'UML', 'Technical Documentation'],
    },
    {
      id: 'commerce-conversion',
      title: 'Comercio & Ingeniería de Conversión',
      icon: 'shield',
      description:
        'Construyo el camino del dinero y la medición que va debajo, con eventos seguros de reintentar y números que cuadran.',
      technologies: ['Pix', 'Hosted Checkout', 'Webhooks', 'Idempotency', 'Entitlements', 'Billing Reconciliation', 'Server-Side Tracking', 'Attribution', 'Conversion Analytics', 'PostHog', 'A/B Testing'],
    },
    {
      id: 'web-mobile',
      title: 'Web & Móvil',
      icon: 'layout',
      description:
        'Construyo aplicaciones web responsivas, PWAs y apps móviles nativas, incluyendo interfaces de streaming y juego 3D pensado para el táctil.',
      technologies: ['React', 'TanStack Start', 'Next.js', 'Expo', 'React Native', 'Three.js', 'Vite', 'Tailwind CSS', 'Responsive UI', 'PWA'],
    },
    {
      id: 'backend-data',
      title: 'Backend & Datos',
      icon: 'server',
      description:
        'Diseño APIs, autenticación, modelos de datos y flujos de contenido protegido compartidos entre web y móvil.',
      technologies: ['Node.js', 'PostgreSQL', 'Supabase', 'Drizzle ORM', 'Better Auth', 'REST APIs', 'Edge Functions', 'RLS', 'RBAC', 'Protected Media'],
    },
    {
      id: 'infrastructure-quality',
      title: 'Infraestructura & Calidad',
      icon: 'code',
      description:
        'Me encargo del despliegue, las pruebas, el monitoreo, los incidentes y la recuperación, tanto en servicios gestionados como en infraestructura propia.',
      technologies: ['Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'Nginx', 'Vercel', 'Vitest', 'Playwright', 'Maestro', 'TDD', 'Biome', 'Lefthook'],
    },
  ],

  about: {
    paragraphs: [
      'Soy Tech Lead y Full-Stack Software Engineer. Convierto requisitos de producto en software que funciona y sigo siendo responsable después de publicarlo.',
      'Mi proyecto principal es Ulpia, una capa de memoria open source para agentes de IA escrita en Rust. Mantiene todo modelo fuera del camino de recuperación, y eso es lo que le permite funcionar sin conexión, responder igual dos veces y admitir cuando ningún archivo de la biblioteca cubre tu pregunta. Es Apache 2.0, y los benchmarks capaces de dejarla en evidencia están publicados en el mismo repositorio.',
      'En Casa Seth lidero el lado comercial: infoproductos, flujos de pago y los sistemas de atribución y conversión que reportan cuánto rindió realmente cada lanzamiento. BiblinhaPlay, la plataforma de suscripción con cerca de 500 usuarios entre web y móvil, es el producto que construí primero y que sigo operando.',
      'Me mantengo cerca del código. Defino fronteras claras, mantengo las integraciones sensibles del lado del servidor, planifico la recuperación y valido los flujos críticos.',
    ],
  },

  education: {
    degree: 'Licenciatura en Ingeniería de Software',
    institution: 'Universidade de Franca',
    period: '2025 - 2029',
  },

  languages: [
    { name: 'Portugués (Brasil)', level: 'Nativo' },
    { name: 'Inglés', level: 'Avanzado (C1)' },
    { name: 'Español', level: 'Intermedio' },
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
      subtitle: 'Un historial de ingeniería en producción, responsabilidad sobre sistemas seguros y entrega confiable de software.',
    },
    work: {
      title: 'Proyectos',
      subtitle: 'Sistemas seleccionados entre infraestructura de AI Memory, operaciones de comercio y conversión, y educación en ciberseguridad.',
      accessProject: 'Acceder al proyecto',
      visit: (name) => `Visitar ${name}`,
      visitAria: (name) => `Visitar el sitio de ${name}`,
      repository: 'Repositorio',
      repositoryAria: (name) => `Ver el repositorio de ${name} en GitHub`,
      techStack: 'Stack',
    },
    strength: {
      title: 'Fortaleza Técnica',
      subtitle: 'Un desglose estructurado de las capacidades centrales construidas en frontend, backend, datos e infraestructura.',
      technologies: 'Tecnologías & Frameworks',
    },
    about: {
      title: 'Sobre mí',
      education: 'Formación',
      languages: 'Idiomas',
    },
    contact: {
      title: 'Conectemos',
      subtitle: '¿Quieres hablar de sistemas, seguridad o vacantes de ingeniería full-stack? Escríbeme.',
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
  },
};

export default content;
