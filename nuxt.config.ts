// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Aksenov Kirill',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        },
    },
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    devtools: { enabled: true },
    modules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module', 'nuxt-svgo'],
    svgo: {
        autoImportPath: '~/assets/icons/',
    },
    runtimeConfig: {
        public: {
            apiBase: 'http://localhost:3000',
        },
    },
})
