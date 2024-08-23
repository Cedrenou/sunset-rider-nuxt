// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      wooCommerceAPIBaseURL: process.env.WOOCOMMERCE_API_BASE_URL,
    },
    private: {
      wooCommerceAPIConsumerKey: process.env.WOOCOMMERCE_API_CONSUMER_KEY,
      wooCommerceAPIConsumerSecret: process.env.WOOCOMMERCE_API_CONSUMER_SECRET,
    },
  }
})
