# Redesign editorial do portfólio de Richard Wollyce

Data: 2026-07-15

Status: direção visual aprovada. Lettering refinado e documentado para validação final. Esta especificação precede qualquer alteração no código de produção.

## 1. Resultado desejado

Transformar o site em um portfólio técnico editorial, memorável no primeiro contato e convincente para recrutadores, engineering managers e lideranças internacionais. A página deve comunicar imediatamente três fatos:

1. Richard lidera produtos complexos de ponta a ponta.
2. Seu trabalho cobre arquitetura, segurança, dados, integrações, experiência, entrega e operação em produção.
3. BiblinhaPlay é a principal prova dessa capacidade, dentro da atuação como Tech Lead e Software Engineer na Casa Seth desde abril de 2026, conforme o conteúdo já consolidado no projeto.

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

- Referência fornecida durante a sessão: `C:/Users/richa/AppData/Local/Temp/codex-clipboard-973f8b74-1f58-4ee3-a0ec-e5665ecb4141.png`. Esse caminho é histórico e não é necessário para executar a especificação.
- Protótipo local: `.superpowers/brainstorm/manual-1784142878/prototype/reference-faithful.html`
- Prévia clara final: `.superpowers/brainstorm/manual-1784142878/assets/concepts/reference-faithful-warped-light.png`
- Prévia escura final: `.superpowers/brainstorm/manual-1784142878/assets/concepts/reference-faithful-warped-dark.png`
- Retrato claro: `.superpowers/brainstorm/manual-1784142878/assets/photo-cutout/richard-editorial-cutout.png`
- Retrato escuro: `.superpowers/brainstorm/manual-1784142878/assets/photo-cutout/richard-editorial-cutout-dark.png`

Os artefatos em `.superpowers` são referências locais de design, não arquivos de produção nem dependências de implementação. As medidas, tokens e critérios deste documento formam o baseline durável.

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

Fonte selecionada para validação final: `Anybody Variable`, peso 900, com `Impact` e `Anton` apenas como fallback de emergência. A fonte de produção deve ser self-hosted ou carregada por `next/font` para evitar troca de métricas durante o carregamento.

O título usa um único `h1` com três spans visíveis. Cada linha recebe eixo de largura e transformação próprios. Não usar SVG, canvas, filtro de displacement, imagem ou outline convertido em path.

Parâmetros do canvas desktop:

| Linha | Top | Left | Tamanho | `wdth` | `scaleX` | `scaleY` | `skewY` |
|---|---:|---:|---:|---:|---:|---:|---:|
| SYSTEMS | -86 px | 0 | 420 px | 50 | 0.985 | 1.500 | -0.45 deg |
| THAT | 323 px | 0 | 300 px | 62 | 1.364 | 1.245 | 0.30 deg |
| SHIP. | 567 px | 37 px | 250 px | 63 | 1.324 | 1.231 | -0.25 deg |

Esses valores definem a proporção, não tamanhos fixos para todos os dispositivos. A implementação usa `clamp()` e variáveis CSS para interpolar sem perder a relação entre as linhas. Shear nunca passa de 0.5 grau. Stroke opcional limitado a 1 px caso o rendering de uma plataforma enfraqueça os traços.

### 6.3 Retrato

A correção de cor é editorial e neutra. Ela remove o excesso amarelado sem regenerar rosto, corpo ou pose. O recorte usa alpha real e não contém fundo retangular.

- Versão clara sobre papel marfim.
- Versão escura com bordas descontaminadas para fundo carvão.
- O retrato sempre permanece livre, sobreposto ao título e cortado pelo limite do hero.
- Nunca apresentar a foto em card quadrado.
- O rosto deve manter área livre suficiente para não competir com o painel de identidade.

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

- Display: Anybody Variable Black.
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
- Processamento de mais de 200 pedidos por dia.
- Redução aproximada de 95% em erros de digitação manual.
- Paginação e RPCs direcionadas para tabelas de alto volume.

Os três casos devem usar famílias visuais distintas: estudo editorial amplo, faixa técnica ou diagrama de fronteiras e timeline operacional. Não repetir três cards iguais.

### Fonte e aprovação dos claims

- Papel, período, escopo técnico e métricas partem do conteúdo já consolidado em `src/data/content.js`.
- A implementação não adiciona números, resultados, clientes, usuários, receita, uptime ou escala que não existam nessa fonte.
- Os claims de mais de 200 pedidos por dia e redução aproximada de 95% em erros podem ser mantidos por já fazerem parte do conteúdo consolidado. Qualquer alteração quantitativa exige nova evidência e aprovação do usuário.
- Antes de qualquer publicação, o diff final de copy deve ser revisado pelo usuário. Implementar e verificar localmente não equivale a autorizar deploy.

## 9. Experiência, capacidades e credenciais

Experiência deve priorizar impacto e responsabilidade, não repetir integralmente os estudos de caso. A entrada Casa Seth continua usando `April 2026 - Present` e o cargo `Tech Lead & Software Engineer`, conforme o conteúdo já consolidado no projeto.

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

Os breakpoints normativos são 1200 px e 768 px. Ajustes intermediários podem melhorar fluidez, mas não substituem esses limites nem a matriz fixa de viewports dos critérios de aceite.

## 11. Movimento

- Entrada do hero: linhas do título reveladas por clip e pequeno deslocamento vertical.
- Retrato entra depois do título para reforçar profundidade.
- CTA e painel de identidade entram por opacity e translate curto.
- Seções internas usam IntersectionObserver ou animações CSS, com conteúdo visível por padrão.
- Hover de links pode usar underline direcional e deslocamento curto da seta.
- Não usar partículas contínuas no fundo.
- Não usar scroll listener manual.
- `prefers-reduced-motion: reduce` remove reveal, parallax e transições não essenciais.

Toda animação precisa servir hierarquia, storytelling, feedback ou mudança de estado.

## 12. Acessibilidade

- `h1` contém `Systems That Ship.` como texto real.
- Ordem semântica não depende da sobreposição visual.
- Skip link preservado.
- Foco visível com contraste suficiente nos dois temas.
- Menu mobile fecha com Escape, prende e restaura foco, usa `aria-expanded`, `aria-controls` e deixa o fundo inerte.
- Conteúdo nunca inicia invisível sem que JavaScript tenha confirmado a disponibilidade da animação.
- Imagem principal tem alt útil; cópia escura decorativa usa `aria-hidden`.
- Links externos informam nova aba no nome acessível quando aplicável.
- Datas usam `time`; listas e timeline usam elementos semânticos.
- Textos e CTAs atingem WCAG AA.
- Tema respeita `color-scheme` e preferência do usuário.

## 13. Performance

- Usar os recortes já otimizados e `next/image` com `sizes` correto.
- Precarregar apenas a fonte display necessária à primeira dobra.
- Self-hostar ou usar `next/font` para Anybody Variable.
- Manter a página como Server Component sempre que possível.
- Isolar menu, tema e motion em pequenas ilhas client.
- Remover o canvas de partículas da primeira dobra.
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

Claims quantitativos permanecem somente quando já sustentados pelo material do projeto. Não criar métricas de uptime, usuários, receita ou escala sem fonte verificável.

### Vocabulário público permitido

Pode aparecer em nível de princípio: entitlement, idempotência, reconciliação, conteúdo versionado, ativação atômica, separação entre mídia pública e privada, arquitetura compartilhada, observabilidade e operação em produção.

Não pode aparecer: URLs ou paths de endpoint, payloads de webhook, nomes de eventos internos, schemas, tabelas, IDs, buckets, chaves, TTLs, thresholds, regras antifraude, configurações de assinatura, política de fallback, detalhes de incidente ou nomes de provedores cuja divulgação crie risco. A copy final deve explicar competência, não ensinar como explorar ou operar o sistema.

## 15. Critérios de aceite

- No viewport 1440 por 1024, o hero claro e escuro mantém rail, título, retrato, painel, CTA e faixa inferior dentro de 12 px das medidas numéricas deste documento.
- O lettering usa Anybody Variable Black e warp affine por linha, sem ruído ou rasterização. A caixa de cada linha permanece dentro de 12 px das medidas documentadas.
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
