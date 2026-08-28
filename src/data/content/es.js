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
      'Construyo la parte de abajo, la que el resto del software da por hecha. Ulpia, mi capa de memoria open source para agentes de IA, está escrita en Rust, funciona sin conexión y responde en menos de un milisegundo. La otra mitad de mi trabajo es comercio, entre infoproductos, pagos y la medición que después dice cuáles vendieron de verdad.',
    ctaPrimary: { label: 'Hablemos', href: '#contact' },
    ctaSecondary: { label: 'Ver proyectos', href: '#work' },
    trustStrip: [
      { icon: 'bolt', text: 'Creador de Ulpia, un sistema de AI Memory open source escrito en Rust' },
      { icon: 'chart', text: 'Infoproductos, pagos y sistemas de conversión en Casa Seth' },
      { icon: 'check', text: 'Diseño el sistema y después respondo por él en producción' },
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
        'Capa de memoria open source para flotas de agentes de IA, escrita en Rust y publicada bajo Apache 2.0. La recuperación es código corriente y no pasa por ningún modelo de embedding, y de ahí sale todo lo demás. Funciona sin conexión, contesta lo mismo la segunda vez, y cuando ningún archivo cubre la pregunta lo dice en lugar de entregar el menos equivocado.',
      highlights: [
        'El motor de recuperación corre dos scorers a la vez, un índice de palabras clave armado con las claves que declara cada archivo y la búsqueda full-text de SQLite, y los fusiona con Reciprocal Rank Fusion. Después medí cuál de los dos gana en cada tarea, porque darlos por intercambiables habría sido más cómodo que cierto.',
        'Decir "no lo sé" es aquí una respuesta con el mismo estatus que cualquier otra. Contra un conjunto de preguntas escrito a ciegas y revisado después de forma adversarial, la capa determinista sola se niega a contestar con confianza 28 de las 30 preguntas que caen fuera de alcance.',
        'Los números del pipeline completo están medidos, no estimados. La ruta en caliente tarda 0,68 ms p50 y 1,16 ms p95 en proceso, y la abstención llega al 97 por ciento sobre las 500 preguntas de LongMemEval-S, que es justo la capacidad que el artículo del propio benchmark señala como la que peor se le da a estos sistemas.',
        'Se publica como servidor MCP con cuatro herramientas de solo lectura, así que Claude y cualquier otro cliente que hable MCP leen la misma biblioteca. Herramientas de escritura al alcance de un modelo no hay ninguna, y eso es a propósito.',
        'La privacidad no descansa en un archivo de configuración sino en git. Un archivo que git no rastrea es un archivo que el sistema no sirve, y si no puede preguntarle a git, se niega a abrir la base.',
        'Son alrededor de 17.000 líneas de Rust repartidas en tres crates y con una única dependencia de runtime, más de 200 pruebas y 33 registros de decisión de arquitectura. El harness de benchmark sella cada resultado con el comando, el commit, la máquina y la fecha con los que salió.',
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
        'La casa cuya ingeniería lidero. Publica productos digitales e infoproductos, y debajo lleva la capa de medición que los sostiene, con checkout por Pix, atribución, seguimiento de conversión del lado del servidor y conciliación financiera. El producto más antiguo de la casa es BiblinhaPlay, una suscripción multiplataforma de aprendizaje y entretenimiento con cerca de 500 usuarios.',
      highlights: [
        'La instrumentación de ingresos sobre la que funciona la casa es mía, desde el seguimiento de conversión first-party en navegador y servidor hasta la deduplicación de eventos, la atribución por UTM y la conciliación. Al final de esa cadena están los paneles con los que los operadores deciden qué vuelven a lanzar.',
        'Diseñé un pipeline de generación de imágenes con trabajos idempotentes, concurrencia acotada, caché, persistencia y telemetría, para que un trabajo que falla se reintente sin duplicar trabajo ni cobrarle dos veces al cliente.',
        'Los embudos de producto se despliegan por separado, pero comparten los mismos paquetes de dominio y de UI, así que los pagos, la recuperación de sesión, la atribución y las integraciones de backend viven en un solo sitio.',
        'Entrego y opero BiblinhaPlay para cerca de 500 usuarios, con un web/PWA en producción y un cliente Expo/React Native. Detrás del acceso por entitlement hay streaming de video, música, material imprimible, juegos interactivos y gamificación.',
        'La facturación de BiblinhaPlay la monté entera, con checkout de suscripción alojado, webhooks verificados e idempotentes, entitlements por plan y entrega de medios protegidos ligada a la sesión. El contenido se publica por un pipeline inmutable, con activación atómica y rollback.',
        'BiblinhaCraft salió de la misma casa, una experiencia voxel en Three.js con terreno determinista, streaming progresivo de regiones, guardados versionados y controles pensados para el táctil.',
        'Cuando la compra digital termina en producción física, lo que une las dos puntas es la validación de direcciones, el procesamiento listo para imprimir, una cola operativa y los flujos de estado del pedido.',
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
        'Diseño y escribo en Rust una capa de memoria local-first para flotas de agentes de IA. En el camino de recuperación no hay ningún modelo de embedding, y por eso los resultados salen offline, se repiten igual y se pueden explicar cuando se equivocan.',
        'El motor junta dos scorers, un índice de palabras clave y la búsqueda full-text de SQLite, unidos por Reciprocal Rank Fusion, y encima lleva una compuerta de confianza con la que el sistema puede declinar una pregunta que ningún archivo cubre.',
        'El harness de benchmark lo escribí a la vez que el producto, no después. Mide abstención contra un conjunto adversarial escrito a ciegas, mide latencia, corre las 500 preguntas completas de LongMemEval-S y sella cada resultado con comando, commit, máquina y fecha.',
        'Abrí la biblioteca por MCP con cuatro herramientas de solo lectura, para Claude Desktop y para cualquier otro cliente MCP. El acceso de escritura se queda fuera de lo que un modelo puede alcanzar.',
        'Mantengo alrededor de 17.000 líneas de Rust en tres crates con una dependencia de runtime, más de 200 pruebas y CI en GitHub Actions. Los 33 registros de decisión de arquitectura guardan el porqué de cada compromiso, que es la parte que se pierde primero.',
      ],
    },
    {
      id: 'casa-seth',
      company: 'Casa Seth',
      role: 'Tech Lead & Software Engineer',
      location: 'Brasil',
      period: 'Abril de 2026 - Actual',
      bullets: [
        'Lidero la arquitectura y la entrega en toda la casa, desde los infoproductos y los embudos de comercio digital hasta los sistemas de medición que dicen cuánto rindió cada uno.',
        'La ingeniería de conversión entera pasa por mí, con checkout por Pix, precios controlados en el servidor, atribución por UTM, deduplicación de eventos entre navegador y servidor, conciliación de ingresos y paneles operativos.',
        'Diseñé un pipeline de generación de imágenes con trabajos idempotentes, concurrencia acotada, caché y telemetría, y con reintentos incapaces de duplicar un trabajo que el cliente ya pagó.',
        'BiblinhaPlay, el producto de suscripción de aprendizaje y entretenimiento con cerca de 500 usuarios, lo dirijo yo. Tiene un web/PWA en producción y un cliente Expo/React Native que cubre video, música, material imprimible, juegos y gamificación.',
        'Armé el monorepo TypeScript donde vive todo eso, con TanStack Start, React, Expo/React Native, PostgreSQL, Drizzle y paquetes reutilizables de UI y de correo transaccional.',
        'El cobro y el acceso son míos de punta a punta, con checkout de suscripción alojado, autorización por entitlement, webhooks idempotentes, entrega de medios protegidos y un pipeline de contenido versionado con activación atómica y rollback.',
        'Construí BiblinhaCraft en Three.js, con terreno procedural, streaming progresivo de regiones, progresión que se guarda y controles pensados para el táctil.',
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
      company: 'Independiente / Contrato',
      role: 'Independent Software Engineer',
      location: 'Franca, Brasil',
      period: null,
      bullets: [
        'Construyo aplicaciones web full-stack para clientes, con TypeScript, React, Next.js, Node.js, Supabase, PostgreSQL, Vite, Tailwind CSS y Vercel.',
        'Un sistema de inscripción para eventos en vivo, usado por equipos de varias empresas, con validación de CPF y de WhatsApp, interfaz responsiva y seguimiento de los participantes.',
        'Para un estudio de tatuajes y barbería mantengo un chatbot y un panel administrativo que convierten la conversación en solicitudes de presupuesto estructuradas y en tareas de seguimiento.',
        'También salieron de aquí landing pages y herramientas internas con integraciones de pago y webhooks, para automatizar el checkout y el trabajo del día a día.',
        'Respondo por el frontend, el backend, el diseño de la base de datos, el despliegue, el mantenimiento y el soporte en vivo. Trabajo con TDD y Vitest, que es lo que me deja refactorizar sin romper lo que ya funcionaba.',
      ],
    },
  ],

  technicalStrength: [
    {
      id: 'systems-ai',
      title: 'Ingeniería de Sistemas & IA',
      icon: 'terminal',
      description:
        'Infraestructura de recuperación y memoria en Rust, medida contra benchmarks que escribí para que pudieran dejarme mal.',
      technologies: ['Rust', 'Information Retrieval', 'SQLite FTS5', 'Reciprocal Rank Fusion', 'MCP', 'Local-First', 'Benchmarking', 'Deterministic Systems', 'Cargo', 'Tauri'],
    },
    {
      id: 'platform-leadership',
      title: 'Arquitectura de Plataforma & Liderazgo',
      icon: 'diagram',
      description:
        'Llevo la arquitectura y la entrega de productos web y móviles, y sigo respondiendo por ellos cuando ya están en producción.',
      technologies: ['System Design', 'Software Architecture', 'Monorepos', 'Domain Modeling', 'Technical Leadership', 'Architecture Decision Records', 'TypeScript', 'JavaScript', 'UML', 'Technical Documentation'],
    },
    {
      id: 'commerce-conversion',
      title: 'Comercio & Ingeniería de Conversión',
      icon: 'shield',
      description:
        'Construyo el camino del dinero y la medición que lo acompaña, con eventos que se pueden reintentar sin miedo y cifras que cuadran.',
      technologies: ['Pix', 'Hosted Checkout', 'Webhooks', 'Idempotency', 'Entitlements', 'Billing Reconciliation', 'Server-Side Tracking', 'Attribution', 'Conversion Analytics', 'PostHog', 'A/B Testing'],
    },
    {
      id: 'web-mobile',
      title: 'Web & Móvil',
      icon: 'layout',
      description:
        'Aplicaciones web responsivas, PWAs y apps móviles nativas, con interfaces de streaming y juego 3D pensado para el táctil.',
      technologies: ['React', 'TanStack Start', 'Next.js', 'Expo', 'React Native', 'Three.js', 'Vite', 'Tailwind CSS', 'Responsive UI', 'PWA'],
    },
    {
      id: 'backend-data',
      title: 'Backend & Datos',
      icon: 'server',
      description:
        'Diseño APIs, autenticación, modelos de datos y flujos de contenido protegido que web y móvil comparten.',
      technologies: ['Node.js', 'PostgreSQL', 'Supabase', 'Drizzle ORM', 'Better Auth', 'REST APIs', 'Edge Functions', 'RLS', 'RBAC', 'Protected Media'],
    },
    {
      id: 'infrastructure-quality',
      title: 'Infraestructura & Calidad',
      icon: 'code',
      description:
        'Me toca el despliegue, las pruebas, el monitoreo, los incidentes y la recuperación, tanto en servicios gestionados como en infraestructura propia.',
      technologies: ['Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'Nginx', 'Vercel', 'Vitest', 'Playwright', 'Maestro', 'TDD', 'Biome', 'Lefthook'],
    },
  ],

  about: {
    paragraphs: [
      'Soy Tech Lead y Full-Stack Software Engineer. Convierto requisitos de producto en software que funciona, y después sigo respondiendo por él cuando ya está publicado.',
      'Mi proyecto principal es Ulpia, una capa de memoria open source escrita en Rust para agentes de IA. Deja cualquier modelo fuera del camino de recuperación, y de ahí le viene lo demás: funciona sin conexión, contesta igual la segunda vez y admite cuando ningún archivo de la biblioteca cubre tu pregunta. Es Apache 2.0, y los benchmarks capaces de dejarla en evidencia están publicados en el mismo repositorio.',
      'En Casa Seth llevo el lado comercial, que son los infoproductos, los flujos de pago y los sistemas de atribución y conversión que dicen cuánto rindió de verdad cada lanzamiento. BiblinhaPlay, la plataforma de suscripción con cerca de 500 usuarios entre web y móvil, fue lo primero que construí ahí y lo sigo operando.',
      'Sigo cerca del código. Marco fronteras claras, dejo las integraciones sensibles del lado del servidor y pienso la recuperación antes de que haga falta. Los flujos que no pueden fallar los valido yo.',
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
      subtitle: 'Dónde trabajé, qué construí ahí y de qué sigo respondiendo.',
    },
    work: {
      title: 'Proyectos',
      subtitle: 'Infraestructura de AI Memory por un lado, comercio y conversión por otro, y educación en ciberseguridad.',
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
      subtitle: 'Si es sobre sistemas, seguridad o una vacante de ingeniería full-stack, aquí estoy.',
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
