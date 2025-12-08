# Play Dólar - Landing Page

Landing page para a comunidade Play Dólar - Ganhe em dólar operando de casa.

## 🚀 Tecnologias

- **Next.js 16** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações baseadas em scroll
- **Radix UI** - Componentes acessíveis

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Ou usando pnpm
npx pnpm install
```

## 🛠️ Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Ou usando pnpm
npx pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## 🏗️ Build

```bash
# Criar build de produção
npm run build

# Iniciar servidor de produção
npm start
```

## 🌐 Deploy na Netlify

### Opção 1: Deploy via Git (Recomendado)

1. Faça push do código para um repositório Git (GitHub, GitLab, Bitbucket)
2. Acesse [Netlify](https://www.netlify.com/)
3. Clique em "Add new site" > "Import an existing project"
4. Conecte seu repositório Git
5. Configure as seguintes opções:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: `20`
6. Clique em "Deploy site"

### Opção 2: Deploy via Netlify CLI

```bash
# 1. Fazer login (primeira vez apenas)
npx netlify login

# 2. Inicializar o site (primeira vez apenas)
npx netlify init

# 3. Deploy de produção
npx netlify deploy -p
# ou
npx netlify deploy --prod
```

**Nota:** O comando `npx` não requer instalação global. O flag `-p` ou `--prod` faz o deploy direto para produção.

### Opção 3: Deploy via Drag & Drop

1. Execute o build localmente:
   ```bash
   npm run build
   ```
2. Acesse [Netlify Drop](https://app.netlify.com/drop)
3. Arraste a pasta `.next` para a área de upload

## ⚙️ Configurações

O arquivo `netlify.toml` já está configurado com:
- Plugin Next.js para otimização automática
- Node.js versão 20
- Flags do npm para compatibilidade

## 📝 Notas

- O projeto usa `images.unoptimized: true` no `next.config.mjs` para compatibilidade
- As animações são baseadas em scroll usando Framer Motion
- O indicador de desenvolvimento do Next.js está desabilitado

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Netlify Documentation](https://docs.netlify.com/)

