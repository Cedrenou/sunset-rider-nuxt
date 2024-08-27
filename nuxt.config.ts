// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      woocommerce: {
        url: process.env.WOOCOMMERCE_API_BASE_URL,
        consumerKey: process.env.WOOCOMMERCE_API_CONSUMER_KEY,
        consumerSecret: process.env.WOOCOMMERCE_API_CONSUMER_SECRET,
      },
    },
  },
})
