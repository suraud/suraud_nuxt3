// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/common.scss'],
    vite: {
        server: {
            hmr: {
                port: 9999
            }
        }
    }
})
