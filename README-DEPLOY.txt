===========================================
PASTA PRONTA PARA DEPLOY NA NETLIFY
===========================================

Esta pasta contém TODOS os arquivos necessários para fazer deploy na Netlify.

IMPORTANTE: O plugin @netlify/plugin-nextjs foi REMOVIDO.
O Netlify detecta automaticamente projetos Next.js e aplica o adaptador correto.

COMO USAR:

1. Via Netlify CLI:
   cd deploy
   npx netlify login
   npx netlify init
   npx netlify deploy -p

2. Via Netlify Drop (Drag & Drop):
   - Acesse: https://app.netlify.com/drop
   - Comprima esta pasta em um arquivo ZIP
   - Arraste o ZIP para a área de upload

3. Via Git:
   - Faça commit desta pasta para um repositório Git
   - Conecte o repositório na Netlify

===========================================
ARQUIVOS INCLUÍDOS:
===========================================

✓ package.json
✓ pnpm-lock.yaml
✓ next.config.mjs
✓ tsconfig.json
✓ netlify.toml
✓ postcss.config.mjs
✓ components.json
✓ next-env.d.ts
✓ .gitignore
✓ app/ (pasta completa)
✓ components/ (pasta completa)
✓ lib/ (pasta completa)
✓ hooks/ (pasta completa)
✓ public/ (pasta completa com imagens)
✓ styles/ (pasta completa)

===========================================
A NETLIFY VAI:
===========================================

1. Instalar dependências automaticamente
2. Executar o build (npm run build)
3. Fazer o deploy

NÃO é necessário enviar:
- node_modules/ (será instalado)
- .next/ (será gerado no build)

===========================================

