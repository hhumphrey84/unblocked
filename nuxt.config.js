const pkg = require('./package')

module.exports = {
    mode: 'universal',
    srcDir: 'client/',
    /*
    ** Headers of the page
    */
    head: {
        htmlAttrs: {
            lang: 'en',
        },
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description },
            { name: 'theme-color', content: '#F6416C' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
            { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicons/apple-icon-57x57.png' },
            { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicons/apple-icon-72x72.png' },
            { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicons/apple-icon-114x114.png' },
            { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicons/apple-icon-120x120.png' },
            { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicons/apple-icon-144x144.png' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-icon-180x180.png' },
            { rel: 'apple-touch-icon-precomposed', sizes: '180x180', href: '/favicons/apple-icon-precomposed.png' },
            { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicons/android-icon-192x192.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/android-icon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicons/android-icon-96x96.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/android-icon-16x16.png' },
            { rel: 'manigest', href: '/favicons/manifest.json' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700|Noto+Serif:400,700' }
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#00B8A9' },

    /*
    ** Global CSS
    */
    css: [
        '~/assets/app.css'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        './modules/typescript'
    ],

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /(node_modules)/
                })
            }
        },
        postcss: [
            require('postcss-import'),
            require('postcss-mixins')(),
            require('postcss-nested'),
            require('postcss-custom-media')()
        ]
    }
}
