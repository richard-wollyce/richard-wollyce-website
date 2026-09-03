<!-- Generado en cv/ a partir de scripts/cv_content.py por scripts/generate-cv.py. No editar a mano. -->

# Richard Wollyce Santos de Souza

**Tech Lead | Full-Stack Software Engineer | AI Systems**

Franca, SP, Brasil  
mail@richardwollyce.com  
richardwollyce.com  
github.com/richard-wollyce  
linkedin.com/in/richardwollyce-/  
+55 (16) 9 9159-7978

Remoto para Chile y Latinoamérica (0 a 1 hora de diferencia con Santiago) | Disponible para reubicación en Santiago (residencia temporal Mercosur)

## Resumen Profesional

Tech Lead y Full-Stack Software Engineer entre infraestructura de IA y sistemas de pago, con trabajo independiente en TI y software desde 2018. Creador de Ulpia, capa de memoria y retrieval open source para agentes de IA escrita en Rust: RAG sin modelo de embedding en el camino, la negativa como veredicto de primera clase, consultas en caliente por debajo del milisegundo, servidor MCP y un harness de evaluación (LongMemEval-S, set adversarial ciego) publicado bajo Apache 2.0 en el mismo repositorio.  Lidera la ingeniería en Casa Seth en infoproductos, pagos con Mercado Pago y Pix, atribución, seguimiento de conversión del lado del servidor, conciliación financiera y la plataforma de suscripción BiblinhaPlay, en producción en Brasil. Combina liderazgo de arquitectura con implementación, respuesta a incidentes, CI/CD y responsabilidad en producción.

## Competencias Técnicas

**Lenguajes:** TypeScript, JavaScript, Rust, SQL; conocimiento práctico de Python y Bash  
**IA aplicada y Retrieval:** Retrieval para agentes de IA (RAG sin embeddings), evaluación de LLM (benchmarks, sets adversariales ciegos, abstención), arquitectura de memoria local-first, recuperación determinista, SQLite FTS5, Reciprocal Rank Fusion, compuerta de confianza, Model Context Protocol (MCP), diseño de benchmarks  
**Web y Móvil:** React, TanStack Start/Router/Query, Next.js, Expo, React Native, Three.js, Vite, Tailwind CSS  
**Backend y Datos:** Node.js, PostgreSQL, Supabase, Drizzle ORM, Better Auth, REST APIs, Edge Functions, RLS, RBAC  
**Comercio y Analytics:** Mercado Pago, Pix (transferencia instantánea cuenta a cuenta en Brasil, como Khipu o Fintoc), checkout alojado, webhooks idempotentes, entitlements, conciliación de ingresos, atribución por UTM, seguimiento de conversión del lado del servidor, PostHog  
**Plataformas y Entrega:** Docker, Linux, Nginx, GitHub Actions, Vercel, EAS, CI/CD, Cargo, Tauri, BaseHub  
**Calidad:** Vitest, Playwright, Maestro, TDD, linting automatizado, verificación de tipos, compuertas de build, monitoreo en producción

## Experiencia Profesional

### Creator & Maintainer | Ulpia (Open Source)

**Apache 2.0 | ulpia.io | Agosto de 2026 - Actual**

- Diseño y construyo en Rust una capa de memoria y retrieval local-first para flotas de agentes de IA: RAG sin modelo de embedding, así que la recuperación corre offline y los resultados se repiten igual y se pueden explicar cuando se equivocan.
- El motor corre dos scorers, un índice de palabras clave declaradas y la búsqueda full-text de SQLite, fusionados con Reciprocal Rank Fusion; medí cuál gana en cada tarea en vez de suponer que eran intercambiables.
- La negativa es un veredicto de primera clase detrás de una compuerta de confianza: sobre un set de preguntas escrito a ciegas y revisado de forma adversarial, 28 de 30 preguntas fuera de alcance no reciben respuesta confiada de la capa determinista.
- Harness de evaluación escrito junto con el producto: 0,68 ms p50 y 1,16 ms p95 de latencia en caliente, 97 por ciento en abstención sobre las 500 preguntas de LongMemEval-S, y cada resultado sellado con comando, commit, máquina y fecha.
- Servidor MCP con cuatro herramientas de solo lectura para Claude Desktop y otros clientes; el acceso de escritura queda fuera de la superficie que alcanza un modelo, a propósito.
- Alrededor de 17.000 líneas de Rust en tres crates con una única dependencia de runtime, más de 200 pruebas, CI en GitHub Actions y 36 registros de decisión de arquitectura con el porqué de cada compromiso.

### Tech Lead & Software Engineer | Casa Seth

**Brasil | Abril de 2026 - Actual**

- Lidero la arquitectura y la entrega de los infoproductos de la empresa, los embudos de comercio digital y los sistemas de medición que reportan cuánto rindió cada uno.
- La ingeniería de conversión de extremo a extremo es mía: checkout con Mercado Pago y Pix, precios controlados en el servidor, atribución por UTM, seguimiento first-party de eventos en navegador y servidor con deduplicación, conciliación de ingresos y paneles operativos.
- Un pipeline de generación de imágenes con trabajos idempotentes, concurrencia acotada, caché, persistencia y telemetría, para que un trabajo fallido se reintente sin duplicar trabajo ya pagado.
- BiblinhaPlay, plataforma de suscripción de aprendizaje y entretenimiento con cerca de 500 usuarios, en un web/PWA en producción y un cliente Expo/React Native: streaming de video, música, material imprimible, juegos y gamificación.
- Del lado del cobro: autenticación y autorización en el servidor, entitlements por plan, checkout de suscripción alojado, webhooks verificados e idempotentes, conciliación de pagos, streaming de medios protegidos y publicaciones inmutables de contenido con activación atómica y rollback.

### Software Engineer | MG Laser

**Franca, Brasil | Noviembre de 2025 - Abril de 2026**

- ERP de inventario, ventas y operación diaria, construido y mantenido para varios equipos a la vez.
- Las hojas de cálculo se reemplazaron por formularios estructurados con validación automática, y con eso bajaron los errores de carga manual.
- Mejoré el rendimiento de las tablas de alto volumen con paginación y llamadas RPC dirigidas en PostgreSQL, con Row-Level Security y Role-Based Access Control decidiendo qué ve cada rol.
- Despliegue, monitoreo e infraestructura en un VPS Linux autoadministrado; tras una caída crítica en producción, el servicio volvió en menos de 10 minutos y sin pérdida de datos.

### Independent Software Engineer | Freelance

**Franca, Brasil | 2018 - Actual**

- Aplicaciones web full-stack para clientes con TypeScript, React, Next.js, Node.js, Supabase, PostgreSQL, Vite, Tailwind CSS y Vercel.
- Un sistema de inscripción para eventos en vivo con validación de identidad brasileña (CPF) y de WhatsApp, flujos responsivos para el equipo y seguimiento de participantes.
- Para negocios de servicios, flujos de chat y administración que convierten conversaciones en solicitudes de presupuesto estructuradas y tareas de seguimiento.
- Respondo por frontend, backend, diseño de base de datos, despliegue, mantenimiento y soporte en vivo, con Vitest y TDD para evitar regresiones.
- Entre 2018 y 2025 la misma actividad cubrió también soporte de TI y sistemas para personas y pequeñas empresas, remoto y presencial: hardware, Windows, Linux y Android, instalación y configuración de software y resolución de problemas.

### IT Support & Operations Assistant | São Joaquim Hospital e Maternidade

**Franca, Brasil | Agosto de 2017 - Abril de 2018**

- Soporte técnico y operativo entre los departamentos de un hospital, incluido el sistema de historias clínicas MV2000, las órdenes de servicio y los incidentes del día a día.
- Primer contacto de la oficina de reclamos (Ouvidoria) y el enlace entre recepción, enfermería, equipo médico y equipo técnico cuando un flujo se trababa.

### Technical Instructor & IT Support Technician | Escola Remington

**Franca, Brasil | Abril de 2015 - Abril de 2016**

- La escuela me contrató desde su propia aula, durante el curso de desarrollo web y diseño que yo cursaba allí.
- Di clases de diseño web y de software creativo y mantuve el laboratorio Windows en marcha: instalación, configuración y actualización en todas las estaciones.
- Soporte a estudiantes y personal durante la operación diaria, desde problemas de software hasta la red del laboratorio.

## Proyectos Destacados

### Ulpia | Retrieval Local-First para Agentes de IA, Rust, Apache 2.0
https://ulpia.io

- Capa de memoria y retrieval para flotas de agentes de IA, RAG sin ningún modelo de embedding en el camino, así que funciona sin conexión, devuelve la misma respuesta dos veces y puede reportar que ningún archivo cubre la pregunta en lugar de devolver el menos equivocado.
- Motor de dos scorers sobre un índice de palabras clave declaradas y SQLite FTS5, fusionados con Reciprocal Rank Fusion, detrás de una compuerta de confianza que convierte la abstención en un veredicto de primera clase.
- Evaluado, no afirmado: 28 de 30 preguntas fuera de alcance rechazadas por la capa determinista sobre un set adversarial escrito a ciegas, 0,68 ms p50 de latencia en caliente y 97 por ciento de abstención en LongMemEval-S.
- Servidor MCP con cuatro herramientas de solo lectura para Claude Desktop y otros clientes, un modelo de privacidad derivado de git donde un archivo no rastreado nunca se sirve, y un cliente de bandeja en Tauri para Windows.

### Casa Seth | Infoproductos, Comercio y Sistemas de Conversión
https://biblinhaplay.com

- Paquetes compartidos de dominio y de UI entre embudos de producto desplegados de forma independiente, sobre Supabase y Edge Functions de Postgres.
- Checkout con Mercado Pago y Pix, precios controlados en el servidor, atribución por UTM, deduplicación de eventos de navegador y servidor, conciliación de ingresos y flujos de envío físico conducidos por operador.
- BiblinhaPlay, la plataforma de suscripción dentro de la casa: cerca de 500 usuarios, un web/PWA en producción y un cliente Expo/React Native, acceso por entitlement, entrega de medios por HTTP Range, snapshots inmutables de contenido y la experiencia voxel BiblinhaCraft en Three.js.

### RoadToCyberSec.com | Educación en Ciberseguridad

- Hub de aprendizaje estructurado sobre análisis de amenazas, MFA, navegación segura, respuesta a incidentes, fundamentos de redes y manejo de evidencia digital, publicado como documentación consultable en Mintlify para públicos técnicos y no técnicos.

## Formación

**Ingeniería de Software (B.Sc.)** | Universidade de Franca | 2025 - 2029, en curso, egreso estimado 2029

## Certificaciones

- EF SET English Certificate: C1 Advanced, 68/100, EF Education First | Septiembre de 2026
- Santander Bootcamp: Rust and AI-Integrated Application Development | Junio de 2026
- Informática Forense e Investigación de Evidencia Digital, Universidade Cruzeiro do Sul | Junio de 2026
- LEAD1x: Exercising Leadership: Foundational Principles, HarvardX / edX | Mayo de 2026
- Networking Basics, Cisco Networking Academy | Julio de 2025
- Introduction to Cybersecurity, Cisco Networking Academy | Julio de 2023
- Cualificación Profesional en Desarrollo Web y Diseño (104 horas), Escola Remington | Abril de 2015

## Idiomas

- Portugués: Nativo
- Inglés: C1 Advanced (EF SET 68/100)
- Español: Fluido
