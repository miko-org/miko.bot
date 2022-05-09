import { resolve } from 'path'

export default {
    rootDir: __dirname, // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Miko - %s',
        link: [
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
            },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        bodyAttrs: {
            class: ['min-w-xs']
        }
    }, // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['virtual:windi.css', 'virtual:windi-devtools', '~/assets/main.css'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        'nuxt-vite',
        '@nuxt/typescript-build',
        '@nuxtjs/composition-api/module',
        'nuxt-windicss'
    ],
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/nav'],
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa'
    ],

    vite: {
        ssr: true,
        build: true,
        server: {
            fs: {
                strict: false
            }
        }
    },

    windicss: {
        root: resolve(__dirname),
        config: resolve(__dirname, 'windi.config.ts'),
        analyze: true
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extend(config, ctx) {
            if (ctx.isDev) {
                config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
            }
        }
    }
}
