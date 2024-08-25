import {ref} from 'vue'
import {useRuntimeConfig} from '#app'

export function useWooCommerceAPI() {
  const config = useRuntimeConfig()
  const baseUrl = config.public.woocommerceUrl
  const consumerKey = config.woocommerceConsumerKey
  const consumerSecret = config.woocommerceConsumerSecret

  const loading = ref(false)
  const error = ref(null)

  async function fetchFromAPI(endpoint, method = 'GET', data = null) {
    loading.value = true
    error.value = null

    try {
      const url = new URL(`${baseUrl}/wp-json/wc/v3/${endpoint}`)
      url.searchParams.append('consumer_key', consumerKey)
      url.searchParams.append('consumer_secret', consumerSecret)

      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      }

      if (data && (method === 'POST' || method === 'PUT')) {
        options.body = JSON.stringify(data)
      }

      const response = await fetch(url.toString(), options)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (e) {
      error.value = e.message
      throw e
    } finally {
      loading.value = false
    }
  }

  // Fonctions spécifiques pour interagir avec WooCommerce
  async function getProducts(params = {}) {
    return fetchFromAPI(`products?${new URLSearchParams(params)}`)
  }

  async function getProduct(id) {
    return fetchFromAPI(`products/${id}`)
  }

  async function createOrder(orderData) {
    return fetchFromAPI('orders', 'POST', orderData)
  }

  async function getCustomer(id) {
    return fetchFromAPI(`customers/${id}`)
  }

  return {
    loading,
    error,
    getProducts,
    getProduct,
    createOrder,
    getCustomer,
  }
}