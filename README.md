# Nuxt 3 Memo

## Setup

```bash
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

### use scss
```bash
npm install sass --save-dev
emacs nuxt.config.ts
===
css: ['~/assets/css/common.scss']
===
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

## create directories & files

```bash
mkdir -p ./{pages,layouts,components,assets/css,public,composables}
touch ./{pages/index.vue,layouts/default.vue,assets/css/common.scss}
```
