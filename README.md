# Geovana — Portfólio

## Stack

- React 18 + Vite
- Tailwind CSS v3
- Deploy no Vercel (sem backend, sem banco)

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`

## Personalizar conteúdo

| O que mudar | Onde |
|---|---|
| Projetos | `src/data/projects.js` |
| Número do WhatsApp | `src/components/Contact.jsx` — linha do `href="https://wa.me/..."` |
| Cores e fontes | `tailwind.config.js` |

### Adicionar um projeto novo

Basta adicionar um objeto ao array em `src/data/projects.js`:

```js
{
  id: 9,
  name: 'Nome do projeto',
  category: 'Web App',
  description: 'Descrição curta.',
  techs: ['React', 'Node.js'],
  tags: ['Web'],          // usado no filtro: Web | Mobile | IA | Automação | ERP
}
```

Nenhum componente precisa ser editado.

## Deploy no Vercel

### Via GitHub (recomendado)

1. Suba o projeto num repositório GitHub
2. Acesse [vercel.com](https://vercel.com) → **Add New → Project**
3. Importe o repositório — o Vercel detecta Vite automaticamente
4. Clique em **Deploy**

### Via CLI

```bash
npm i -g vercel
vercel
```
