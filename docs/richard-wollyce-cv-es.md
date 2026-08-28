<!-- Generado a partir de scripts/cv_content.py por scripts/generate-cv.py. No editar a mano. -->

# Richard Wollyce Santos de Souza

**Tech Lead | Full-Stack Software Engineer | AI Systems**

Franca, SP, Brasil  
mail@richardwollyce.com  
richardwollyce.com  
github.com/richard-wollyce  
linkedin.com/in/richardwollyce-/  
+55 (16) 9 9159-7978

## Resumen Profesional

Tech Lead y Full-Stack Software Engineer trabajando entre infraestructura de IA y sistemas de comercio. Creador de Ulpia, una capa de memoria local-first open source para agentes de IA escrita en Rust, con recuperación determinista, la negativa como veredicto de primera clase, consultas en caliente por debajo del milisegundo y servidor MCP; publicada bajo Apache 2.0 con sus benchmarks en el mismo repositorio. Lidera la ingeniería en Casa Seth en infoproductos, pagos con Pix, atribución, seguimiento de conversión del lado del servidor, conciliación financiera y la plataforma de suscripción BiblinhaPlay. Combina liderazgo de arquitectura con implementación, respuesta a incidentes, CI/CD y responsabilidad en producción.

## Competencias Técnicas

**Lenguajes:** TypeScript, JavaScript, Rust, SQL; conocimiento práctico de Python y Bash  
**Sistemas de IA y Recuperación:** Arquitectura de memoria local-first, recuperación determinista, SQLite FTS5, Reciprocal Rank Fusion, abstención y compuerta de confianza, Model Context Protocol (MCP), RAG, diseño de benchmarks  
**Web y Móvil:** React, TanStack Start/Router/Query, Next.js, Expo, React Native, Three.js, Vite, Tailwind CSS  
**Backend y Datos:** Node.js, PostgreSQL, Supabase, Drizzle ORM, Better Auth, REST APIs, Edge Functions, RLS, RBAC  
**Comercio y Analytics:** Pix, checkout alojado, webhooks idempotentes, entitlements, conciliación de ingresos, atribución por UTM, seguimiento de conversión del lado del servidor, PostHog, Mercado Pago  
**Plataformas y Entrega:** Docker, Linux, Nginx, GitHub Actions, Vercel, EAS, CI/CD, Cargo, Tauri, BaseHub  
**Calidad:** Vitest, Playwright, Maestro, TDD, linting automatizado, verificación de tipos, compuertas de build, monitoreo en producción

## Experiencia Profesional

### Creator & Maintainer | Ulpia (Open Source)

**Apache 2.0 | ulpia.io | Agosto de 2026 - Actual**

- Diseño y construyo una capa de memoria local-first para flotas de agentes de IA en Rust, manteniendo todo modelo fuera del camino de recuperación, de modo que los resultados son offline, reproducibles y explicables cuando se equivocan.
- Construí un motor de recuperación de dos scorers sobre un índice de palabras clave declaradas y la busqueda full-text de SQLite, fusionados con Reciprocal Rank Fusion, y medí qué scorer gana en que tarea en vez de suponer que eran intercambiables.
- Convertí la negativa en un veredicto de primera clase detrás de una compuerta de confianza: sobre un conjunto de preguntas escrito a ciegas y revisado de forma adversarial, 28 de 30 preguntas fuera de alcance no se responden con confianza solo con la capa determinista.
- Escribí el harness de benchmark junto con el producto: latencia de ruta en caliente de 0,68 ms p50 y 1,16 ms p95 en proceso, y 97 por ciento en abstención sobre las 500 preguntas de LongMemEval-S, con cada resultado sellado con su comando, commit, maquina y fecha.
- Entregué un servidor MCP que expone cuatro herramientas de solo lectura a Claude Desktop y otros clientes MCP, manteniendo deliberadamente el acceso de escritura fuera de la superficie que alcanza un modelo.
- Mantengo alrededor de 17.000 líneas de Rust en tres crates con una única dependencia de runtime, más de 200 pruebas, CI en GitHub Actions y 33 registros de decisión de arquitectura que llevan el razonamiento de cada compromiso.

### Tech Lead & Software Engineer | Casa Seth

**Brasil | Abril de 2026 - Actual**

- Lidero la arquitectura y la entrega practica de los infoproductos de la empresa, los embudos de comercio digital y los sistemas de medición que reportan cuánto rindió cada uno.
- Soy responsable de la ingeniería de conversión de extremo a extremo: checkout con Pix, precios controlados en el servidor, atribución por UTM, seguimiento first-party de eventos en navegador y servidor con deduplicacion, conciliación de ingresos y paneles operativos.
- Diseñé un pipeline de generacion de imagenes con trabajos idempotentes, concurrencia acotada, cache, persistencia y telemetría, de modo que un trabajo fallido se reintenta sin duplicar trabajo ya pagado.
- Lidero BiblinhaPlay, la plataforma de suscripción de aprendizaje y entretenimiento con cerca de 500 usuarios, entre un web/PWA en producción y un cliente Expo/React Native, que cubre streaming de video, musica, material imprimible, juegos interactivos y gamificacion.
- Estructure un monorepo TypeScript con pnpm, Turborepo, React, TanStack Start, paquetes compartidos de UI y de correo transaccional, PostgreSQL/Supabase, Drizzle ORM y compuertas automatizadas de calidad.
- Diseñé autenticacion y autorizacion del lado del servidor, entitlements por plan, checkout de suscripción alojado, webhooks verificados e idempotentes, conciliación de pagos, streaming de medios protegidos y publicaciones inmutables de contenido con activación atómica y rollback.
- Construí BiblinhaCraft, una experiencia voxel en Three.js con terreno procedural determinista, streaming regional bajo demanda, migracion versionada de guardados, misiones y controles pensados para el tactil.

### Software Engineer | MG Laser

**Franca, Brasil | Noviembre de 2025 - Abril de 2026**

- Construí y mantuve un ERP que cubre inventario, ventas y operación diaria en varios equipos.
- Reemplace flujos en hojas de calculo por formularios estructurados y validacion automatizada, reduciendo errores de carga manual.
- Mejoré el rendimiento de tablas de alto volumen con paginacion y llamadas RPC dirigidas en PostgreSQL, aplicando Row-Level Security y Role-Based Access Control.
- Gestioné despliegue, monitoreo e infraestructura en un VPS Linux autoadministrado; restauré el servicio tras una caída crítica en producción en menos de 10 minutos y sin pérdida de datos.

### Independent Software Engineer | Independiente / Contrato

**Franca, Brasil | En curso**

- Entrego aplicaciones web full-stack con TypeScript, React, Next.js, Node.js, Supabase, PostgreSQL, Vite, Tailwind CSS y Vercel.
- Construí un sistema de inscripcion para eventos en vivo con validacion de identidad brasileña y WhatsApp, flujos responsivos para el equipo y seguimiento de participantes.
- Construí flujos de chat y administracion para negocios de servicios, convirtiendo conversaciones en solicitudes de presupuesto estructuradas y tareas de seguimiento.
- Soy responsable de frontend, backend, diseño de base de datos, despliegue, mantenimiento y soporte en vivo, usando Vitest y TDD para evitar regresiones.

## Trabajos de Ingeniería Seleccionados

### Ulpia | Infraestructura de AI Memory Local-First, Rust, Apache 2.0
https://ulpia.io

- Capa de memoria para flotas de agentes de IA sin ningún modelo de embedding en el camino de recuperación, así que funciona sin conexión, devuelve la misma respuesta dos veces y puede reportar que ningún archivo cubre la pregunta en lugar de devolver el menos equivocado.
- Motor de dos scorers sobre un índice de palabras clave declaradas y SQLite FTS5, fusionados con Reciprocal Rank Fusion, detrás de una compuerta de confianza que convierte la abstención en un veredicto de primera clase.
- Medido, no afirmado: 28 de 30 preguntas fuera de alcance rechazadas por la capa determinista sobre un conjunto adversarial escrito a ciegas, latencia de ruta en caliente de 0,68 ms p50 y 97 por ciento de abstención en LongMemEval-S.
- Servidor MCP con cuatro herramientas de solo lectura para Claude Desktop y otros clientes, un modelo de privacidad derivado de git donde un archivo no rastreado nunca se sirve, y un cliente de bandeja en Tauri para Windows.

### Casa Seth | Infoproductos, Comercio y Sistemas de Conversión
https://biblinhaplay.com

- Paquetes compartidos de dominio y de UI entre embudos de producto desplegados de forma independiente, sobre Supabase y Edge Functions de Postgres.
- Checkout con Pix, precios controlados en el servidor, atribución por UTM, deduplicacion de eventos de navegador y servidor, conciliación de ingresos y flujos de envío físico conducidos por operador.
- Validacion de pedido pagado, generacion idempotente de imagenes, cache, control de concurrencia, telemetría, almacenamiento y benchmarking fiel a producción.
- BiblinhaPlay, la plataforma de suscripción de aprendizaje y entretenimiento dentro de la casa, con cerca de 500 usuarios entre un web/PWA en producción y un cliente Expo/React Native: streaming de video, musica, material imprimible, juegos, acceso por entitlement, entrega de medios por HTTP Range, snapshots inmutables de contenido y la experiencia voxel BiblinhaCraft en Three.js.

### RoadToCyberSec.com | Educación en Ciberseguridad

- Escribí un hub de aprendizaje estructurado que cubre análisis de amenazas, MFA, navegación segura, respuesta a incidentes, fundamentos de redes y manejo de evidencia digital.
- Publiqué el material en una experiencia de documentación consultable en Mintlify, para públicos técnicos y no técnicos.

## Formación

**Licenciatura en Ingeniería de Software** | Universidade de Franca | 2025 - 2029

## Certificaciones

- Santander Bootcamp: Rust and AI-Integrated Application Development | Junio de 2026
- Informática Forense e Investigación de Evidencia Digital, Universidade Cruzeiro do Sul | Junio de 2026
- LEAD1x: Exercising Leadership: Foundational Principles, HarvardX / edX | Mayo de 2026
- Networking Basics, Cisco Networking Academy | Julio de 2025
- Introduction to Cybersecurity, Cisco Networking Academy | Julio de 2023

## Idiomas

- Portugués: Nativo
- Inglés: Avanzado (C1)
- Español: Intermedio
