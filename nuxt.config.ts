//   /**
//    * * App Config
//    * app config: https://nuxt.com/docs/api/configuration/nuxt-config#app
//    * head config: https://nuxt.com/docs/api/configuration/nuxt-config#head
//    * meta config: https://nuxt.com/docs/getting-started/seo-meta
//    * pageTransition config: https://nuxt.com/docs/getting-started/transitions#transitions
//    * TODO: Add more meta tags for SEO
//    * TODO: Add tags for social media sharing
//    * TODO: Migrate apple-touch-icon config to manifest.json
//    */
// import config from './developer.json' assert { type: 'json' };
// const config = require('./developer.json')

// const siteTitle = `${config.name} | ${config.role}`;

export default {
  app: {
    head: {
      title: 'ЭВОК',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'A awesome developer portfolio design.' },
        { hid: 'og:title', property: 'og:title', content: 'ЭВОК' },
        { hid: 'og:description', property: 'og:description', content: 'A awesome developer portfolio design.' },
        { hid: 'og:image', property: 'og:image', content: 'demo-share.jpg' },
        { hid: 'og:url', property: 'og:url', content: 'https://developer-portfolio-v1.netlify.app/' },
        { name: 'theme-color', content: '#010C15' },
      ],
      link: [
        { rel: 'manifest', href: 'pwa/manifest.json' },
        { rel: 'apple-touch-icon', href: 'pwa/icons/apple-touch-icon.png' },
      ],
    },
  },

  modules: ['@nuxtjs/tailwindcss'],

  tailwindcss: {
    exposeConfig: true, // true to resolve the tailwind config in runtime. https://tailwindcss.nuxt.dev/getting-started/options/#exposeconfig
    configPath: 'tailwind.config',
    cssPath: '~/assets/tailwind.css',
    injectPosition: 0,
    viewer: false,
  },

  components: {
    dirs: ['~/components'],
  },

  /**
  * * Runtime Config (Environment Variables)
  * Usage: https://nuxt.com/docs/guide/going-further/runtime-config
  */
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
      // otherwise cyclic ref and SO
      // dev: JSON.stringify(config)
      // dev: config
    }
  },

  compatibilityDate: '2024-10-27'
};