# Redesign editorial do portfólio de Richard Wollyce

Data: 2026-07-15

Status: direção visual e integração WebGL aprovadas. Lettering revisado para reproduzir a referência tipográfica. Esta especificação precede qualquer alteração no código de produção.

## 1. Resultado desejado

Transformar o site em um portfólio técnico editorial, memorável no primeiro contato e convincente para recrutadores, engineering managers e lideranças internacionais. A página deve comunicar imediatamente três fatos:

1. Richard lidera produtos complexos de ponta a ponta.
2. Seu trabalho cobre arquitetura, segurança, dados, integrações, experiência, entrega e operação em produção.
3. BiblinhaPlay é a principal prova dessa capacidade, dentro da atuação como Tech Lead e Software Engineer na Casa Seth desde aproximadamente abril de 2026, conforme o conteúdo já consolidado no projeto.

O redesign é uma revisão visual completa sobre conteúdo real. Não muda a identidade profissional, não inventa resultados e não expõe informações internas.

## 2. Restrições e princípios

- Preservar rotas, IDs de seção e destinos de links que já tenham valor para navegação, SEO ou analytics.
- Preservar os qualificadores atuais sobre estágio de produto e disponibilidade.
- Não publicar segredos, endpoints internos, nomes de provedores sensíveis, credenciais, regras antifraude ou detalhes que facilitem abuso.
- Não usar cartões repetitivos como linguagem dominante.
- Não usar retrato dentro de moldura quadrada, card ou janela.
- Não rasterizar o título principal. O lockup continua sendo texto semântico e selecionável.
- Não usar ruído, displacement ou distorção ondulada. O efeito desejado é condensação, alongamento e shear controlados.
- Não alterar o código do site antes da aprovação desta especificação.

## 3. Leitura de design

Brief inferido: portfólio internacional de Tech Lead com estética de pôster editorial, tipografia cinética e prova técnica concreta.

- Modo: redesign completo da linguagem visual, com preservação de conteúdo confiável.
- Estética: editorial poster meets engineering portfolio.
- Variância visual: 9 de 10. Composição assimétrica, escala tipográfica extrema e retrato sobreposto.
- Intensidade de movimento: 6 de 10. Movimento expressivo, mas sempre orientado a hierarquia e navegação.
- Densidade: 4 de 10. Poucos elementos por dobra, com conteúdo técnico profundo apenas onde agrega prova.
- Sistema: CSS nativo e componentes existentes, sem impor um design system de produto sobre a página de marketing pessoal.

## 4. Referência aprovada e artefatos

- Referência visual normativa: `docs/superpowers/specs/assets/portfolio-editorial-reference.png` (1487 por 1058 px).
- Protótipo local: `.superpowers/brainstorm/manual-1784142878/prototype/reference-faithful.html`
- Prévia clara intermediária: `.superpowers/brainstorm/manual-1784142878/assets/concepts/reference-faithful-warped-light.png`
- Prévia escura intermediária: `.superpowers/brainstorm/manual-1784142878/assets/concepts/reference-faithful-warped-dark.png`
- Retrato claro: `.superpowers/brainstorm/manual-1784142878/assets/photo-cutout/richard-editorial-cutout.png`
- Retrato escuro: `.superpowers/brainstorm/manual-1784142878/assets/photo-cutout/richard-editorial-cutout-dark.png`

Os artefatos em `.superpowers` são referências locais de design, não arquivos de produção nem dependências de implementação. As duas prévias registram a composição aprovada, mas ainda usam o lettering `Anybody` descartado e não são baseline tipográfico. A imagem normativa em `docs`, as medidas, os tokens e os critérios deste documento formam o baseline durável.

## 5. Arquitetura da página

Ordem recomendada:

1. Hero editorial com proposta de valor, retrato, navegação e CTA.
2. Prova rápida de escopo e ownership.
3. Selected Work com BiblinhaPlay em primeiro plano.
4. Experiência profissional.
5. Capacidades técnicas e decisões de engenharia.
6. Sobre, formação, certificações e idiomas.
7. Contato.

Os anchors públicos continuam estáveis: `#work`, `#experience`, `#about` e `#contact`. A navegação desktop usa esses quatro termos. O CTA principal usa o texto `Explore selected work`. O CTA secundário continua sendo `Download CV`.

## 6. Hero aprovado

### 6.1 Composição desktop

Canvas de referência: 1440 por 1024 px.

- Rail vertical de 84 px no lado esquerdo.
- Marca `RW` em burnt orange no topo.
- Navegação vertical com `Work`, `Experience`, `About` e `Contact`, apoiada por hairlines funcionais.
- Hero ocupa o restante da largura e termina 115 px antes do rodapé de domínios.
- Título monumental no plano de fundo.
- Retrato recortado, sem moldura, sobre o título e cortado pela linha inferior do hero.
- Bloco de identidade no canto superior direito.
- CTA no canto inferior esquerdo.
- Faixa inferior descrevendo domínios de solução, não uma lista de empresas.

Texto do título:

- `SYSTEMS`
- `THAT`
- `SHIP.`

Painel de identidade:

- `Richard Wollyce`
- `Tech Lead & Full-Stack Software Engineer`
- `I lead complex software products from architecture to production.`

Faixa de domínios:

- Platform architecture
- Security & data
- Payments & integrations
- Production operations

Fecho: `Architecture, delivery and production ownership.`

### 6.2 Lettering monumental

A família preferida para implementar o lettering é `Anton`, peso 400 — o peso único da família — por ser a alternativa livre mais próxima da referência nos desenhos de `S`, `A`, `T`, `M` e `P`, nas contraformas abertas e na massa industrial uniforme. A referência visual, e não o nome da fonte isoladamente, é a verdade normativa. `Anybody Variable` deixa de fazer parte do lockup porque seus terminais pinçados e suas contraformas orgânicas se afastam da referência. Se `Anton` não reproduzir as formas após a calibração por overlay, a implementação para e solicita aprovação antes de substituir a família. A fonte de produção deve ser self-hosted ou carregada por `next/font` para evitar troca de métricas durante o carregamento.

O título usa um único `h1` com três spans visíveis. Cada linha recebe transformação affine própria para alongamento vertical e ajuste horizontal. Não usar SVG, canvas, filtro de displacement, imagem ou outline convertido em path. O ponto de `SHIP.` recebe ajuste óptico independente: entre 72% e 80% da escala aparente do ponto padrão e com o espaço anterior reduzido, sem alterar o texto acessível.

No canvas de 1440 por 1024 px, as caixas de tinta abaixo são normativas e foram normalizadas a partir da referência de 1487 por 1058 px. As posições são relativas ao início do hero, depois do rail de 84 px:

| Linha | X | Y visível | Largura | Altura visível | Observação |
|---|---:|---:|---:|---:|---|
| SYSTEMS | 14 px | 0 px | 984 px | 318 px | topo deliberadamente recortado |
| THAT | 14 px | 323 px | 607 px | 240 px | intervalo mínimo com a primeira linha |
| SHIP. | 50 px | 569 px | 534 px | 195 px | ponto menor e opticamente aproximado |

Tamanho de fonte, transformação, tracking e offsets são meios de atingir essas caixas, não valores visuais autônomos. Para spans CSS, a calibração inicial é:

| Linha | Font size | `scaleX` | `scaleY` | Tracking | Stroke pré-transform | `transform-origin` |
|---|---:|---:|---:|---:|---:|---|
| SYSTEMS | 470 px | 0.630 | 1.000 | -0.024 em | 9 px | left top |
| THAT | 283 px | 1.235 | 1.000 | -0.018 em | 4 px | left top |
| SHIP. | 235 px | 1.245 | 1.000 | -0.018 em | 3.5 px | left top |

A implementação usa `clamp()` e variáveis CSS para preservar a relação entre as linhas. Shear perceptível não faz parte da referência e, se um ajuste óptico for indispensável, fica limitado a ±0.15 grau. O stroke deve resultar em aproximadamente 4 a 6 px visíveis após a transformação, mantendo counters abertos. A validação tipográfica ocorre por overlay contra a referência no mesmo viewport; não por comparação entre screenshots de proporções diferentes.

### 6.3 Retrato

A correção de cor é editorial e neutra. Ela remove o excesso amarelado sem regenerar rosto, corpo ou pose. O recorte usa alpha real e não contém fundo retangular.

- Versão clara sobre papel marfim.
- Versão escura com bordas descontaminadas para fundo carvão.
- O retrato sempre permanece livre, sobreposto ao título e cortado pelo limite do hero.
- Nunca apresentar a foto em card quadrado.
- O rosto deve manter área livre suficiente para não competir com o painel de identidade.

### 6.4 Cena WebGL do hero

A animação autoral do Unicorn Studio integra o hero como uma única cena decorativa:

- Project ID: `vW6LSKmFeRkV42794kQv`.
- SDK oficial fixado em `2.2.7`.
- URL fixada: `https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.2.7/dist/unicornStudio.umd.js`.
- Integridade do arquivo UMD fixada em `sha384-14HjVRDtBcQ7rEVDgWtdziQVa+NKHxCpaU1mcbxFnSE0g2DE0kuowLhWdcM4qiN5`, com `crossorigin="anonymous"`. Falha de integridade aciona o fallback estático.
- Integração direta pelo SDK oficial, sem `unicornstudio-react`, dentro de uma pequena Client Component dedicada ao ciclo de vida da cena.

Ordem obrigatória de camadas: papel e fallback → lettering monumental → cena WebGL → retrato recortado → navegação, identidade e CTAs. A cena fica acima das letras para criar profundidade, mas abaixo do retrato. Seu fundo precisa permanecer transparente e sua intensidade não pode comprometer a legibilidade do título.

O ponto de origem radial deve permanecer dentro da área opaca do retrato em todos os breakpoints. Assim, a foto esconde o início do radial e os vetores parecem emergir de trás do corpo. O posicionamento obrigatório não depende do manifest: o container recebe overscan, translate e scale suficientes para atingir o alinhamento. Na primeira execução isolada, `getVariableManifest()` e `getPresets()` são inspecionados e registrados no relatório de QA. Variáveis autorais de posição, escala, paleta ou intensidade podem substituir ajustes equivalentes do container quando existirem; não se alteram layers internos da cena por meios não documentados.

O container tem largura e altura explícitas, ocupa o hero de forma absoluta, recorta apenas o excedente externo e não participa do layout. Ele usa `pointer-events: none` e não pode capturar clique, foco, toque ou scroll. A reação de desktop deve continuar funcionando pelo listener global do SDK e será verificada no protótipo; se o SDK exigir eventos no canvas, a implementação não pode sacrificar a interatividade dos controles. O hero completo — papel, lettering, retrato, texto e CTAs — continua funcional se o canvas não carregar.

Tema claro e escuro reutilizam a mesma cena. Quando o manifest expuser variáveis ou presets de paleta, a troca usa `setVariables()` ou o preset documentado sem recriar o canvas. Se a cena não expuser controle de paleta, opacity e blend do container são calibrados por tema, sem duplicar projetos nem manipular layers internos.

Comportamento por dispositivo:

- Breakpoints publicados para a cena: Desktop de 1200 px a `Infinity`, Tablet de 768 a 1199 px e Mobile de 0 a 767 px.
- Perfil interativo somente com largura mínima de 1200 px, `(hover: hover)` e `(pointer: fine)`: `interactivity.mouse.disabled: false`, `disableMobile: true` e a cena reage ao cursor enquanto mantém seu movimento temporal.
- Perfil ambiente para Tablet, Mobile ou qualquer dispositivo sem hover/pointer fino: `interactivity.mouse.disabled: true`, `disableMobile: true` e `UnicornStudio.setScroll(0)` fixa a entrada de scroll da cena. Toque, gesto e rolagem da página não alteram o WebGL; apenas a timeline temporal autoral continua.
- Ao voltar para o perfil interativo ou desmontar a única cena, `UnicornStudio.useNativeScroll()` restaura o comportamento global do SDK.
- Se a cena publicada não tiver movimento temporal autônomo no perfil ambiente, a integração para e solicita uma nova publicação da cena com loop próprio; não se simula interação mobile.
- Mudança de perfil durante a sessão destrói e recria apenas a cena, sem duplicar script, listeners ou canvas.
- Cada inicialização recebe um token de geração. Se o timeout de oito segundos, unmount ou troca de perfil invalidar esse token, qualquer `addScene()` que resolva depois é destruído imediatamente e não pode inserir uma cena obsoleta.
- `prefers-reduced-motion: reduce`, Save-Data, ausência de WebGL, erro ou timeout: a cena não inicializa ou é destruída e o hero editorial estático permanece como fallback.

## 7. Tokens visuais

### Tema claro

- Papel: `#F6F3ED`
- Ink: `#262627`
- Copy: `#363536`
- Muted: `#6E6A66`
- Hairline: `rgba(39, 39, 40, 0.24)`
- Accent: `#B33D0D`

### Tema escuro

- Papel: `#151514`
- Ink: `#F2EEE7`
- Copy: `#DFDAD2`
- Muted: `#A6A099`
- Hairline: `rgba(242, 238, 231, 0.25)`
- Accent: `#F05A27`

Cada tema se aplica à página inteira. Não inverter apenas seções isoladas. O accent conserva o mesmo papel semântico nos dois temas. CTA sólido e texto sobre accent usam tokens separados para garantir contraste AA.

### Tipografia de apoio

- Lettering monumental: Anton.
- Navegação, corpo e interface: Roboto Condensed ou alternativa condensada equivalente já hospedada pelo projeto.
- Faixa inferior e rótulos de grande impacto: Bebas Neue.
- Evitar Inter e Instrument Serif como assinatura principal do redesign.

## 8. Selected Work e narrativa técnica

BiblinhaPlay é o caso principal. A narrativa deve demonstrar escopo, decisões e ownership sem soar como lista de tecnologias.

### BiblinhaPlay

- Ecossistema de aprendizado e entretenimento por assinatura.
- Web/PWA em produção.
- Cliente Expo/React Native em desenvolvimento.
- Monorepo TypeScript com fronteiras compartilhadas entre web, mobile, UI e e-mails transacionais.
- Autorização baseada em entitlement.
- Checkout hospedado, webhooks idempotentes e reconciliação financeira.
- Separação de mídia pública e privada com entrega protegida e vinculada à sessão.
- Pipeline imutável e versionado de conteúdo, com validação, ativação atômica e rollback.
- Gamificação, jogos interativos e BiblinhaCraft em Three.js.
- Terreno determinístico, carregamento progressivo de regiões, saves versionados e controles touch-first.
- Iniciativas internas de pesquisa e desenvolvimento não anunciadas ficam fora do site público por padrão. Um protótipo conversacional só pode aparecer após autorização explícita de divulgação pela Casa Seth e sempre identificado como não lançado.

### Plataforma Casa Seth

- Plataforma compartilhada para múltiplos produtos digitais e físicos.
- Funis independentes apoiados por domínio, UI e integrações reutilizáveis.
- Pix, attribution, tracking de navegador e servidor, recuperação de sessão e reconciliação.
- Geração de mídia por IA e fluxos operacionais sem expor provedores ou detalhes internos.
- Painéis financeiros e apoio à operação de produtos físicos.

### ERP de operação

- Sistema desktop/operacional para estoque, vendas e rotinas diárias.
- Fluxos estruturados no lugar de planilhas frágeis.
- Processamento de mais de 200 pedidos por dia — evidência interna, privada por padrão.
- Redução aproximada de 95% em erros de digitação manual — evidência interna, privada por padrão.
- Paginação e RPCs direcionadas para tabelas de alto volume.

Os três casos devem usar famílias visuais distintas: estudo editorial amplo, faixa técnica ou diagrama de fronteiras e timeline operacional. Não repetir três cards iguais.

### Fonte e aprovação dos claims

- Papel, período, escopo técnico e métricas partem do conteúdo já consolidado em `src/data/content.js`.
- A implementação não adiciona números, resultados, clientes, usuários, receita, uptime ou escala que não existam nessa fonte.
- Os claims de mais de 200 pedidos por dia e redução aproximada de 95% em erros permanecem privados por padrão. Eles só entram na copy pública após confirmação explícita do usuário de que podem ser divulgados, mesmo já existindo no conteúdo local.
- Antes de qualquer publicação, o diff final de copy deve ser revisado pelo usuário. Implementar e verificar localmente não equivale a autorizar deploy.

## 9. Experiência, capacidades e credenciais

Experiência deve priorizar impacto e responsabilidade, não repetir integralmente os estudos de caso. A atuação na Casa Seth é descrita como iniciada aproximadamente em abril de 2026 e usa o cargo `Tech Lead & Software Engineer`; a data pública exata deve seguir a confirmação final do usuário.

Capacidades são agrupadas por problema de engenharia:

- Architecture and delivery
- Security and authorization
- Data and financial integrity
- Cross-platform product engineering
- Integrations and production operations

Tecnologias aparecem como evidência dentro de contexto, não como nuvem extensa de tags. Certificações e formação ficam depois da prova profissional. Idioma inglês aparece como `Advanced (C1)`.

## 10. Responsividade

### Desktop, 1200 px ou mais

- Composição integral do pôster.
- Rail vertical fixa dentro do hero.
- Título em três linhas com proporções aprovadas.
- Foto sobreposta e painel de identidade à direita.
- Faixa de domínios em uma linha quando houver espaço.

### Tablet, 768 a 1199 px

- Manter linguagem editorial, mas reduzir rail e painel de identidade.
- Conteúdo de valor e CTA devem aparecer antes de qualquer fotografia dominante.
- Foto continua sem moldura e pode ser deslocada para o canto inferior direito.
- Faixa inferior pode quebrar em duas linhas sem criar cards.

### Mobile, até 767 px

- Navegação muda para topo compacto e acessível.
- Título permanece tipográfico e ocupa a primeira dobra, com proporções adaptadas.
- Headline, proposta de valor e CTA aparecem antes do retrato.
- Retrato continua recortado e livre, nunca quadrado.
- A página usa `100dvh`, safe areas e nenhuma rolagem horizontal.
- Texto mínimo de leitura: 16 px.
- Alvos interativos: mínimo de 44 por 44 px.
- A cena WebGL mantém movimento ambiente em perfil reduzido, sem responder a toque, arraste ou scroll.

Os breakpoints normativos são 1200 px e 768 px. Ajustes intermediários podem melhorar fluidez, mas não substituem esses limites nem a matriz fixa de viewports dos critérios de aceite.

## 11. Movimento

- Entrada do hero: linhas do título reveladas por clip e pequeno deslocamento vertical.
- Retrato entra depois do título para reforçar profundidade.
- CTA e painel de identidade entram por opacity e translate curto.
- A cena do Unicorn Studio reage ao cursor apenas em desktop com ponteiro fino. No mobile ela continua como movimento ambiente sem interação.
- Seções internas usam IntersectionObserver ou animações CSS, com conteúdo visível por padrão.
- Hover de links pode usar underline direcional e deslocamento curto da seta.
- Não adicionar uma segunda camada genérica de partículas; o WebGL autoral é a única animação contínua de fundo do hero.
- Não usar scroll listener manual.
- `prefers-reduced-motion: reduce` remove reveal, parallax, cena WebGL e transições não essenciais.

Toda animação precisa servir hierarquia, storytelling, feedback ou mudança de estado.

## 12. Acessibilidade

- `h1` contém `Systems That Ship.` como texto real.
- Ordem semântica não depende da sobreposição visual.
- Skip link preservado.
- Foco visível com contraste suficiente nos dois temas.
- Menu mobile fecha com Escape, prende e restaura foco, usa `aria-expanded`, `aria-controls` e deixa o fundo inerte.
- Conteúdo nunca inicia invisível sem que JavaScript tenha confirmado a disponibilidade da animação.
- O canvas WebGL é decorativo, `aria-hidden`, não recebe foco e não altera a ordem de leitura.
- A interação visual com cursor não é necessária para entender conteúdo nem executar ação.
- Imagem principal tem alt útil; cópia escura decorativa usa `aria-hidden`.
- Links externos informam nova aba no nome acessível quando aplicável.
- Datas usam `time`; listas e timeline usam elementos semânticos.
- Textos e CTAs atingem WCAG AA.
- Tema respeita `color-scheme` e preferência do usuário.

## 13. Performance

- Usar os recortes já otimizados e `next/image` com `sizes` correto.
- Precarregar apenas a fonte display necessária à primeira dobra.
- Self-hostar ou usar `next/font` para Anton.
- Manter a página como Server Component sempre que possível.
- Isolar menu, tema e a cena Unicorn em pequenas ilhas client.
- Remover o canvas de partículas da primeira dobra.
- Carregar uma única instância do SDK oficial com promise compartilhada; criar uma única cena e chamar `scene.destroy()` no unmount ou na troca de perfil.
- Como a cena está acima da dobra, iniciar sem lazy load após a hidratação da ilha e reservar suas dimensões antes do carregamento para evitar CLS.
- Usar `production: true`. Perfil inicial: desktop até 60 FPS, `scale` entre 0.75 e 1 e DPI até 1.25; mobile 30 FPS, `scale` próximo de 0.5 e DPI 1. Ajustar para baixo se a mediana de performance não atingir os critérios de aceite.
- Evitar hidratação de conteúdo estático.
- Em build local de produção, medir LCP e CLS com Lighthouse mobile padrão, cold load, cache limpo, slow 4G simulado e CPU slowdown padrão da ferramenta. Usar a mediana de três execuções.
- Metas locais: LCP menor que 2.5 s e CLS menor que 0.1.
- INP menor que 200 ms é meta de campo após publicação e depende de RUM. Não é bloqueador local porque Lighthouse não reproduz interação real suficiente para validar INP de campo.

## 14. Segurança de conteúdo

Publicar somente informações já aprovadas e úteis para avaliação profissional. Manter os seguintes qualificadores:

- BiblinhaPlay web/PWA está em produção.
- O cliente mobile está em desenvolvimento.
- Iniciativas internas de pesquisa e desenvolvimento não anunciadas são omitidas por padrão.
- Nenhuma limitação operacional interna, estratégia de fallback ou comportamento de provedor é publicado.
- Nenhum endpoint, segredo, regra interna ou detalhe de infraestrutura sensível é publicado.

Claims quantitativos permanecem somente quando sustentados pelo material do projeto e liberados explicitamente para publicação pelo usuário. Não criar métricas de uptime, usuários, receita ou escala sem fonte verificável.

### Vocabulário público permitido

Pode aparecer em nível de princípio: entitlement, idempotência, reconciliação, conteúdo versionado, ativação atômica, separação entre mídia pública e privada, arquitetura compartilhada, observabilidade e operação em produção.

Não pode aparecer: URLs ou paths de endpoint, payloads de webhook, nomes de eventos internos, schemas, tabelas, IDs, buckets, chaves, TTLs, thresholds, regras antifraude, configurações de assinatura, política de fallback, detalhes de incidente ou nomes de provedores cuja divulgação crie risco. A copy final deve explicar competência, não ensinar como explorar ou operar o sistema.

## 15. Critérios de aceite

- No viewport 1440 por 1024, rail de 84 px, faixa inferior de 115 px e caixas do lettering permanecem dentro de 12 px das medidas numéricas deste documento. Retrato, painel e CTAs passam comparação visual no mesmo viewport sem diferenças P0, P1 ou P2 no relatório de design QA.
- O lettering começa com Anton e warp affine por linha, sem ruído ou rasterização. A referência visual prevalece: no viewport 1440 por 1024, o overlay mantém as caixas de tinta dentro de 12 px das medidas documentadas e preserva os desenhos de `S`, `A`, `T`, `M` e `P`. Qualquer troca de família exige nova aprovação.
- A cena usa o projeto `vW6LSKmFeRkV42794kQv` com SDK 2.2.7, permanece entre lettering e retrato e mantém sua origem radial escondida pela área opaca da foto.
- Em desktop de pelo menos 1200 px com ponteiro fino, o movimento reage ao cursor sem bloquear CTAs. Em 1024 por 1366, 768 por 1024, 390 por 844 e 360 por 800, a animação temporal ambiente continua, mas toque, arraste e scroll não alteram a cena.
- Com reduced motion, Save-Data ou WebGL indisponível, nenhum canvas é necessário para o hero permanecer completo e utilizável.
- As versões clara e escura mantêm a mesma hierarquia. Texto normal passa 4.5:1; texto grande, componentes e indicadores essenciais passam 3:1.
- Os viewports 1440 por 1024, 1024 por 1366, 768 por 1024, 390 por 844 e 360 por 800 não têm overflow horizontal, clipping acidental ou CTA fora de alcance.
- O recorte deliberado do título no topo e do retrato na linha inferior do hero é preservado. Nenhum conteúdo informativo ou controle pode ser cortado.
- A foto nunca aparece em moldura quadrada.
- BiblinhaPlay recebe prioridade narrativa e mantém todos os qualificadores de estágio.
- A faixa do hero comunica domínios de solução, não nomes de empresas.
- Não há segredos, detalhes internos sensíveis ou afirmações inventadas.
- Menu, foco, reduced motion e conteúdo sem JavaScript passam verificação manual por teclado nos cinco viewports definidos.
- Em build local de produção, com preset Lighthouse mobile padrão, cold load, cache limpo, slow 4G e CPU slowdown padrão, a mediana de três execuções atinge Accessibility 100, Best Practices pelo menos 95 e Performance pelo menos 90.
- `lint` e `build` terminam sem erros.

## 16. Fora de escopo desta especificação

- Alterar rotas públicas.
- Publicar o site.
- Criar novas métricas de produto.
- Regenerar ou modificar traços físicos do retrato.
- Expor repositórios privados ou documentação interna.
- Implementar antes da revisão final deste documento.
