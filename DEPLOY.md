# 📦 Arquivos para Deploy na Netlify

## ✅ Arquivos OBRIGATÓRIOS (todos devem ser enviados):

### Configuração do Projeto
- ✅ `package.json` - Dependências e scripts
- ✅ `package-lock.json` ou `pnpm-lock.yaml` - Lockfile das dependências
- ✅ `next.config.mjs` - Configuração do Next.js
- ✅ `tsconfig.json` - Configuração do TypeScript
- ✅ `netlify.toml` - Configuração do Netlify
- ✅ `postcss.config.mjs` - Configuração do PostCSS
- ✅ `components.json` - Configuração dos componentes

### Código Fonte
- ✅ `app/` - Pasta completa com todos os arquivos
  - `app/layout.tsx`
  - `app/page.tsx`
  - `app/globals.css`
- ✅ `components/` - Pasta completa com todos os componentes
- ✅ `lib/` - Pasta completa com utilitários
- ✅ `hooks/` - Pasta completa com hooks
- ✅ `styles/` - Pasta completa com estilos (se houver)

### Assets Públicos
- ✅ `public/` - Pasta completa com todas as imagens
  - `public/candlestick-dollar-background.jpg`
  - `public/fundodinheiro.png`
  - `public/video-thumbnail.png`
  - `public/logoic.png`
  - E todas as outras imagens

### Arquivos de Configuração
- ✅ `.gitignore` - Arquivos a ignorar
- ✅ `next-env.d.ts` - Tipos do Next.js
- ✅ `README.md` - Documentação (opcional mas recomendado)

## ❌ Arquivos que NÃO devem ser enviados:

- ❌ `node_modules/` - Será instalado automaticamente
- ❌ `.next/` - Será gerado durante o build
- ❌ `.netlify/` - Pasta temporária do Netlify
- ❌ `.env*` - Variáveis de ambiente (configure no painel da Netlify)
- ❌ Arquivos de log (`*.log`)

## 🚀 Como Enviar:

### Opção 1: Via Git (RECOMENDADO)
Envie TODOS os arquivos acima para um repositório Git (GitHub, GitLab, Bitbucket) e conecte na Netlify.

### Opção 2: Via ZIP
1. Crie um arquivo ZIP com TODOS os arquivos listados acima
2. Faça upload na Netlify via drag & drop ou CLI

### Opção 3: Via Netlify CLI (RECOMENDADO para CLI)

1. **Primeiro, faça login:**
```bash
npx netlify login
```
Isso abrirá o navegador para você autenticar.

2. **Inicialize o site (apenas na primeira vez):**
```bash
npx netlify init
```
Siga as instruções para criar um novo site ou conectar a um existente.

3. **Faça o deploy de produção:**
```bash
npx netlify deploy --prod
```

**OU use o comando direto (se já tiver configurado):**
```bash
npx netlify deploy -p
```

O flag `-p` ou `--prod` faz o deploy direto para produção.

## 📋 Checklist Rápido:

- [ ] `package.json`
- [ ] `pnpm-lock.yaml` ou `package-lock.json`
- [ ] `next.config.mjs`
- [ ] `tsconfig.json`
- [ ] `netlify.toml`
- [ ] `postcss.config.mjs`
- [ ] `components.json`
- [ ] Pasta `app/` completa
- [ ] Pasta `components/` completa
- [ ] Pasta `lib/` completa
- [ ] Pasta `hooks/` completa
- [ ] Pasta `public/` completa (com todas as imagens)
- [ ] Pasta `styles/` (se existir)

## ⚠️ IMPORTANTE:

**NÃO envie:**
- `node_modules/` (será instalado automaticamente)
- `.next/` (será gerado no build)
- Arquivos `.env` (configure no painel da Netlify se necessário)

**A Netlify vai:**
1. Instalar as dependências (`npm install`)
2. Executar o build (`npm run build`)
3. Fazer o deploy automaticamente

