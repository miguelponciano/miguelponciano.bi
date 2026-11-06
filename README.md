# ponci.bi — Dashboards Power BI & Inteligência de Dados

Plataforma moderna de apresentação, portfólio interativo e vendas de dashboards em **Power BI** construída com **Next.js 16**, **TypeScript**, **Tailwind CSS** e **Prisma ORM** com banco de dados **PostgreSQL**, otimizada para deploy na **Vertra Cloud**.

---

## 🚀 Arquitetura & Stack

- **Front-End:** Next.js (App Router) + React 19 + Tailwind CSS + Lucide Icons.
- **Design System:** Estética contemporânea inspirada em landing pages de SaaS modernas (cartões sobrepostos 3D, micro-interações, tipografia Plus Jakarta Sans e Quicksand).
- **Back-End:** Next.js Route Handlers (`/api/contact`, `/api/products`).
- **Banco de Dados:** PostgreSQL com Prisma ORM (modelos de `Lead`, `Product` e `Order`).
- **Infraestrutura & Deploy:** [Vertra Cloud](https://vertracloud.app/pt-br) (Plano Pro com deploy contínuo via GitHub, PostgreSQL gerenciado e Blob Storage para arquivos `.pbix`).

---

## 📂 Estrutura do Projeto

```text
miguelponciano.bi/
├── prisma/
│   └── schema.prisma       # Modelos do banco (Lead, Product, Order)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/    # Endpoint para captura de leads e mensagens
│   │   │   └── products/   # Endpoint do catálogo de dashboards
│   │   ├── globals.css     # Estilos globais e tokens de cores
│   │   ├── layout.tsx      # Fontes, metadados SEO e viewport
│   │   └── page.tsx        # Página principal com fluxo de conversão
│   ├── components/
│   │   ├── Navbar.tsx           # Menu de navegação e botão WhatsApp
│   │   ├── HeroSection.tsx      # Título principal e cartões 3D inclinados
│   │   ├── PortfolioSection.tsx # Os 3 modelos campeões com CTA
│   │   ├── DemoModal.tsx        # Simulador interativo com dados dinâmicos
│   │   ├── ContactSection.tsx   # Banner e formulário de orçamento
│   │   ├── Footer.tsx           # Rodapé sincronizado e redes sociais
│   │   └── Toast.tsx            # Notificações visuais flutuantes
│   └── lib/
│       └── prisma.ts       # Singleton do Prisma Client
├── .env.example            # Variáveis de ambiente de exemplo
├── package.json
└── tsconfig.json
```

---

## 🛠️ Como Rodar Localmente

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Configurar variáveis de ambiente:**
   Copie `.env.example` para `.env`:
   ```bash
   cp .env.example .env
   ```

3. **Gerar o Prisma Client:**
   ```bash
   npx prisma generate
   ```

4. **Rodar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000).

5. **Build de Produção:**
   ```bash
   npm run build
   ```

---

## ☁️ Deploy na Vertra Cloud

1. Conecte o repositório `miguelponciano/miguelponciano.bi` no painel da Vertra Cloud.
2. Crie uma instância de **PostgreSQL** no painel da Vertra Cloud.
3. Copie a `DATABASE_URL` fornecida pela Vertra e adicione nas **Variáveis de Ambiente** do seu aplicativo.
4. Execute o deploy: a cada `git push` no branch `main`, a Vertra constrói e publica a versão mais recente com SSL automático.
