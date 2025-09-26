# Dental UNI - Auclan

Projeto do hotsite Dental UNI feito com Next.js, React 19, TypeScript e Tailwind CSS.

## 🚀 Tecnologias Principais

- **Next.js 15.1.6** - Framework React com App Router
- **React 19** / React DOM 19
- **TypeScript 5.1.6**
- **Tailwind CSS 3.4.6** (+ animate & scrollbar)
- **Lucide React** - Ícones
- **Swiper 11.0.5** - Carrosséis
- **Leaflet / React-Leaflet** - Mapas interativos
- **React Hook Form + Zod** - Formulários e validação
- **clsx, tailwind-merge** - Utilidades CSS/JSX
- **Plop 3.0.0** - Gerador de componentes
- **Eslint & Prettier** - Lint e formatação

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- Yarn

## 🛠️ Como rodar

### 1. Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd Hotsite_DentalUNI_v0
```

### 2. Instale as dependências

```bash
yarn install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` (confirme os valores com o time).

### 4. Inicie o projeto

```bash
yarn dev
```

### 5. Acesse a aplicação

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📜 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `yarn dev` | Inicia o ambiente de desenvolvimento |
| `yarn build` | Gera o build de produção |
| `yarn start` | Inicia o servidor de produção |
| `yarn lint` | Executa o lint do projeto |
| `yarn generate:icon` | Gera SVG icons |
| `yarn generate:component` | Gera componentes (Plop) |

## 📁 Estrutura do Projeto

```
Hotsite_DentalUNI_v0/
├── public/                     # Arquivos estáticos
│   ├── assets/                 # Imagens e ícones
│   │   ├── icons/              # Ícones SVG
│   │   └── img/                # Imagens WebP
│   ├── fonts/                  # Fontes customizadas
│   └── favicon.ico
├── src/
│   ├── app/                    # App Router (Next.js 13+)
│   │   ├── page/               # Páginas da aplicação
│   │   │   ├── (contractPlans)/ # Grupo de rotas
│   │   │   │   └── contractPlans/
│   │   │   ├── help/           # Página de ajuda
│   │   │   └── plans/          # Página de planos
│   │   ├── globals.css         # Estilos globais
│   │   ├── layout.tsx          # Layout principal
│   │   └── page.tsx            # Página inicial
│   ├── components/             # Componentes React
│   │   ├── PageContratarPlano/ # Fluxo de contratação
│   │   │   ├── StepA0-Welcome.tsx
│   │   │   ├── StepA1-HolderData.tsx
│   │   │   ├── StepA2-ContactData.tsx
│   │   │   ├── StepA3-LocationData.tsx
│   │   │   ├── StepA4-AccpetTerms.tsx
│   │   │   ├── StepA5-Successfully.tsx
│   │   │   └── StepB-Dependentes/ # Gestão de dependentes
│   │   ├── PageHelp/           # Componentes da página de ajuda
│   │   │   ├── FormHelp.tsx
│   │   │   ├── HomeHelp.tsx
│   │   │   └── data/           # Dados específicos
│   │   ├── PageHome/           # Componentes da página inicial
│   │   │   ├── AmazingPlans/   # Seção de planos
│   │   │   │   └── Modal/      # Modais de comparação
│   │   │   ├── Baneficiary/    # Seção de beneficiários
│   │   │   ├── BannerHome/     # Banner principal
│   │   │   ├── Discover/       # Seção de descoberta
│   │   │   ├── Header/         # Cabeçalho
│   │   │   ├── Questions/      # FAQ
│   │   │   └── Footer.tsx      # Rodapé
│   │   ├── PageOurPlans/       # Componentes da página de planos
│   │   ├── ui/                 # Componentes de interface
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Container.tsx
│   │   └── debug/              # Componentes de debug
│   ├── constants/              # Constantes e enums
│   │   ├── enums.ts
│   │   ├── interfaces.ts
│   │   ├── openingHours.ts
│   │   └── planos.ts
│   ├── context/                # Contextos React
│   │   └── FormContext.tsx
│   ├── data/                   # Dados mockados e estáticos
│   │   ├── accreditedNetwork/
│   │   ├── mockContracPlans/
│   │   ├── blogContentMock.ts
│   │   ├── idssData.ts
│   │   ├── menuMock.ts
│   │   └── mockFaq.ts
│   ├── hooks/                  # Hooks customizados
│   │   ├── html-renderer.tsx
│   │   ├── use-formatted-date.ts
│   │   └── useFaqManager.ts
│   ├── lib/                    # Utilitários e configurações
│   │   ├── formHelpSchema.ts
│   │   ├── formSchema.ts
│   │   └── utils.ts
│   ├── schemas/                # Schemas de validação
│   │   └── contractPlansSchema.ts
│   ├── scripts/                # Scripts de automação
│   │   ├── generateIcons.js
│   │   ├── Icon.tsx
│   │   └── IconsList.tsx
│   └── types/                  # Definições de tipos TypeScript
│       └── menuConfigMobile.ts
├── tailwind.config.ts          # Configuração do Tailwind
├── next.config.ts              # Configuração do Next.js
├── tsconfig.json               # Configuração do TypeScript
└── package.json                # Dependências e scripts
```

## 🎯 Funcionalidades Principais

### 📄 Páginas
- **Home** (`/`) - Página inicial com planos, FAQ e informações
- **Planos** (`/plans`) - Detalhes dos planos disponíveis
- **Ajuda** (`/help`) - Suporte e contato
- **Contratação** (`/contractPlans`) - Fluxo de contratação de planos

### 🔄 Fluxo de Contratação
1. **Boas-vindas** - Introdução ao processo
2. **Dados do Titular** - Informações pessoais
3. **Dados de Contato** - Telefone e email
4. **Dados de Localização** - Endereço
5. **Aceite de Termos** - Contrato e termos
6. **Sucesso** - Confirmação da contratação
7. **Dependentes** - Gestão de dependentes (opcional)

### 🧩 Componentes Principais
- **Formulários** - Validação com React Hook Form + Zod
- **Modais** - Comparação de planos e procedimentos
- **Carrosséis** - Sliders com Swiper
- **Mapas** - Localização com Leaflet
- **FAQ** - Accordions interativos
- **Responsivo** - Design mobile-first

## 🎨 Design System

- **Tailwind CSS** para estilização
- **Componentes reutilizáveis** em `/src/components/ui/`
- **Ícones** com Lucide React
- **Animações** com tailwindcss-animate
- **Responsividade** mobile-first

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

