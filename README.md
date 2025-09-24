## Hotsite DentalUNI v0

Hotsite desenvolvido com Next.js 15, React 19 e Tailwind CSS para apresentação de planos odontológicos, área de ajuda e fluxo de contratação.

### Sumário
- [Stack e Requisitos](#stack-e-requisitos)
- [Instalação](#instalação)
- [Scripts](#scripts)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Estilos e Design System](#estilos-e-design-system)
- [Formulários e Validações](#formulários-e-validações)
- [Geração de Componentes e Ícones](#geração-de-componentes-e-ícones)
- [Ambiente de Desenvolvimento](#ambiente-de-desenvolvimento)
- [Build e Deploy](#build-e-deploy)
- [Boas Práticas](#boas-práticas)
- [Licença](#licença)
 - [Testes](#testes)

### Stack e Requisitos
- **Framework**: Next.js 15 (App Router) com Turbopack experimental
- **Linguagem**: TypeScript 5
- **UI**: React 19, Tailwind CSS 3, `tailwindcss-animate`, `tailwind-merge`, `tailwind-scrollbar`
- **Forms**: `react-hook-form` + `zod` + `@hookform/resolvers`
- **Mapas**: `leaflet` + `react-leaflet`
- **Outros**: `lucide-react`, `swiper`

Requisitos mínimos:
- Node.js 18.18+ (recomendado 20+)
- Bun 1.x (opcional, recomendado – há `bun.lockb`), ou npm/yarn/pnpm

### Instalação
Com Bun (recomendado):

```bash
bun install
```

Com npm:

```bash
npm install
```

### Scripts
Disponíveis em `package.json`:

- `dev`: inicia o servidor de desenvolvimento com Turbopack.
  ```bash
  bun dev # ou npm run dev
  ```

- `build`: gera o build de produção com Turbopack.
  ```bash
  bun run build # ou npm run build
  ```

- `start`: inicia o servidor em modo produção.
  ```bash
  bun start # ou npm run start
  ```

- `lint`: executa o ESLint.
  ```bash
  bun run lint # ou npm run lint
  ```

- `generate:component`: gera um componente via Plop.
  ```bash
  bun plop component
  ```

- `generate:icon`: gera componentes de ícone a partir de `public/assets/icons`.
  ```bash
  bun scripts/generateIcons.js
  ```

### Estrutura do Projeto
Diretórios principais em `src/`:

- `app/`: rotas (App Router), `layout.tsx`, páginas, `globals.css`.
  - `page/` com seções: `plans/`, `help/`, `(contractPlans)/` etc.
- `components/`: componentes de UI e pages específicas (Home, Help, OurPlans, fluxo de contratação, UI genérica).
- `constants/`: enums, interfaces e constantes de planos/horários.
- `context/`: `FormContext` para estado de formulários.
- `data/`: mocks e dados estáticos (rede credenciada, blog, FAQs, menu, IDSS).
- `hooks/`: hooks utilitários, como renderização HTML e datas formatadas.
- `lib/`: schemas e utils compartilhados (ex.: `formSchema.ts`, `utils.ts`).
- `schemas/`: schemas de contrato (`contractPlansSchema.ts`).
- `scripts/`: automações (ex.: `generateIcons.js`, `Icon.tsx`, `IconsList.tsx`).
- `types/`: tipos auxiliares (ex.: `menuConfigMobile.ts`).

Público/ativos:
- `public/assets/`: ícones SVG e imagens `.webp` usadas nas seções.
- `public/fonts/`: fontes web (ex.: `lato-600.woff2`).

Alias de importação:
- Configurado em `tsconfig.json`: `@/*` aponta para `src/*`.

### Estilos e Design System
- Tailwind configurado em `tailwind.config.ts` com:
  - Paleta extensa (ver tons `red`, `gray`, `green`, `blue`), tokens `redSTD`, `greenCoverage`, etc.
  - Imagens de fundo nomeadas: `BgHomeHelp`, `BgContact`, `BgBannerHomeOurPlans`, `bgFooter`, `BGStepB0`...
  - `fontFamily`: `inter`, `lato`, `openSans`.
  - Keyframes/animações para modais, accordions e efeitos (`bounce-x`, `modal-enter-mobile`, ...).
  - Utilitários personalizados via plugin (classes `Typography*`, `btn*`, `styleSlider*`, etc.).
  - `screens` customizadas: `@mobile`, `@tablet`, `@laptop`, `@Desktop`, `@Desktop1440`, `@LargeDesktop`.
- PostCSS em `postcss.config.js` com `tailwindcss` e `autoprefixer`.

Onde declarar estilos globais:
- `src/app/globals.css`

### Formulários e Validações
- `react-hook-form` + `zod` para validação tipada.
- Schemas em `src/lib/formSchema.ts`, `src/api/schemas/formHelpSchema.ts` e `src/schemas/contractPlansSchema.ts`.
- Componentes do fluxo de contratação em `src/components/PageContratarPlano/` (Steps e Dependentes).

### Geração de Componentes e Ícones
- Componentes: `bun plop component` (templates configurados via Plop). Caso use npm, instale o Plop global/localmente ou rode via `npx`.
- Ícones: `bun scripts/generateIcons.js` varre `public/assets/icons` e exporta componentes React utilitários (`src/scripts/Icon.tsx`, `IconsList.tsx`).

### Ambiente de Desenvolvimento
1) Copie variáveis de ambiente se necessário (não há `.env` obrigatório no momento).
2) Instale dependências e rode `dev`.
3) Acesse `http://localhost:3000`.

Dicas:
- Utilize o alias `@/` para imports absolutos.
- Prefira componentes de UI em `src/components/ui/` onde disponível.
- Siga as classes utilitárias tipográficas e de botões já definidas no Tailwind para consistência visual.

### Build e Deploy
- Build de produção: `bun run build` (ou `npm run build`).
- Execução: `bun start` (ou `npm start`).
- Next.js 15 com `reactStrictMode` e `experimental.turbo` habilitado em `next.config.ts`.

Deploys comuns:
- Vercel (recomendado para Next.js): basta apontar o projeto; os comandos padrão são detectados.
- Docker (opcional): crie uma imagem instalando deps e rodando `next build`, exponha a porta 3000 e use `next start`.

### Boas Práticas
- TypeScript estrito habilitado: mantenha os tipos atualizados.
- Lint: execute `lint` antes de abrir PRs.
- Componentes
  - Nomes descritivos; evite abreviações.
  - Extraia UI reutilizável para `components/ui`.
- Estilos
  - Use tokens e utilitários Tailwind existentes.
  - Evite CSS ad-hoc fora de `globals.css` quando possível.

### Licença
Defina a licença conforme a política do projeto (ex.: MIT, proprietário). Caso precise, adicione um arquivo `LICENSE` na raiz.

### Testes
- Ambiente: Vitest + jsdom + Testing Library.
- Scripts:
  - `bun run test`: roda a suíte de testes (modo CI).
  - `bun run test:watch`: modo interativo durante o desenvolvimento.
- Setup global: `src/setupTests.ts` (inclui `@testing-library/jest-dom`).
- Exemplo: teste em `src/components/ui/__tests__/Button.test.tsx` valida renderização e clique.


