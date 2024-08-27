// composables/useWooCommerce.ts
import { ref } from 'vue'
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

export function useWooCommerce() {
  // eslint-disable-next-line @typescript-eslint/no-require-imports,no-undef
  const config = useRuntimeConfig()
  const api = new WooCommerceRestApi({
    url: config.public.woocommerce.url,
    consumerKey: config.public.woocommerce.consumerKey,
    consumerSecret: config.public.woocommerce.consumerSecret,
    version: 'wc/v3',
  })

  const products = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchProducts = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await api.get('products')
      products.value = response.data
    } catch (err) {
      error.value = err
      console.error('Erreur lors de la récupération des produits:', err)
    } finally {
      loading.value = false
    }
  }

  const fetchProduct = async (id) => {
    loading.value = true
    error.value = null
    try {
      const response = await api.get(`products/${id}`)
      return response.data
    } catch (err) {
      error.value = err
      console.error('Erreur lors de la récupération du produit:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    products,
    loading,
    error,
    fetchProducts,
    fetchProduct,
  }
}
