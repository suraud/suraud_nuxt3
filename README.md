# Nuxt 3 Memo

## Setup

```bash
# npm
npm install
```

## Development Server

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## typecheck

```bash
npx nuxi typecheck
```

## change hmr port

```bash
emacs nuxt.config.ts
===
vite: {
        server: {
            hmr: {
                port: 9999
            }
        }
    }
===
```
