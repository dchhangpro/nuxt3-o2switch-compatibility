// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'fr',
      },
    },
  },
  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
      autoprefixer: {},
    },
  },
  modules: [
    '@vueuse/motion/nuxt',
    'nuxt-viewport',
    '@nuxtjs/sitemap',
    '@nuxt/image',
    'nuxt-gtag',
    '@pinia/nuxt',
    '@dargmuesli/nuxt-cookie-control'
  ],
  viewport: {
    breakpoints: {
      desktop: 1024,
      desktopMedium: 1280,
      desktopWide: 1600,

      mobile: 320,
      mobileMedium: 375,
      mobileWide: 425,

      tablet: 768,
    },

    cookieName: 'viewport',

    defaultBreakpoints: {
      desktop: 'desktop',
      mobile: 'mobile',
      tablet: 'tablet',
    },

    fallbackBreakpoint: 'desktop',
  },
  runtimeConfig: {
    public: {
      APP_URL: process.env.NUXT_APP_URL,
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            }
          }
        }
      }
    } 
  },
  image: {
    screens: {
      'xs': 320,
      'sm': 480,
      'md': 768,
      'lg': 976,
      'xl': 1440,
      'xxl': 1920,
      '2xl': 2048
    },
  },
  gtag: {
    tags:[
      ''+process.env.NUXT_GTAG_ID,
      ''+process.env.NUXT_GTAG_GADS_ID
    ]
  },
  cookieControl: {
    locales: ['fr'],
    barPosition: 'bottom-left',
    colors: {
      barBackground: '#f9f6f0',
      barButtonBackground: '#FF3ED5',
      barButtonColor: '#f9f6f0',
      barButtonHoverBackground: '#FF914D',
      barButtonHoverColor: '#f9f6f0',
      barTextColor: '#1E1C1D',
      checkboxActiveBackground: '#000',
      checkboxActiveCircleBackground: '#f9f6f0',
      checkboxDisabledBackground: '#ddd',
      checkboxDisabledCircleBackground: '#f9f6f0',
      checkboxInactiveBackground: '#000',
      checkboxInactiveCircleBackground: '#f9f6f0',
      controlButtonBackground: '#f9f6f0',
      controlButtonHoverBackground: '#FFDE59',
      controlButtonIconColor: '#FFDE59',
      controlButtonIconHoverColor: '#f9f6f0',
      focusRingColor: '#808080',
      modalBackground: '#f9f6f0',
      modalButtonBackground: '#FF3ED5',
      modalButtonColor: '#f9f6f0',
      modalButtonHoverBackground: '#FF914D',
      modalButtonHoverColor: '#f9f6f0',
      modalOverlay: '#FF914D',
      modalOverlayOpacity: 0.8,
      modalTextColor: '#000000',
      modalUnsavedColor: '#f9f6f0',
    },
  },
  sitemap: {
    urls: [
      {
        loc: '/',
      },
    ]
  }
})