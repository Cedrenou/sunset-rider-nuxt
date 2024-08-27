// composables/useWooCommerce.ts
import { ref, onMounted } from 'vue'
import { useRuntimeConfig } from '#app'

export function useWooCommerce() {
  const config = useRuntimeConfig()
  const WooCommerceRestApi = ref(null)
  const api = ref(null)
  // const api = new WooCommerceRestApi({
  //   url: config.public.woocommerce.url,
  //   consumerKey: config.public.woocommerce.consumerKey,
  //   consumerSecret: config.public.woocommerce.consumerSecret,
  //   version: 'wc/v3',
  // })

  const initWoocommerce = async () => {
    if (!WooCommerceRestApi.value) {
      try {
        WooCommerceRestApi.value = (await import('@woocommerce/woocommerce-rest-api')).default
      } catch (error) {
        console.error("Erreur lors de l'import de WooCommerceRestApi:", error)
        return
      }
    }

    if (WooCommerceRestApi.value && !api.value) {
      api.value = new WooCommerceRestApi.value({
        url: config.public.woocommerce.url,
        consumerKey: config.public.woocommerce.consumerKey,
        consumerSecret: config.public.woocommerce.consumerSecret,
        version: 'wc/v3',
      })
    }
  }

  const products = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchProducts = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await api.value.get('products')
      products.value = response.data
    } catch (err) {
      error.value = err
      console.error('Erreur lors de la récupération des produits:', err)
    } finally {
      loading.value = false
    }
  }

  const fetchProductById = async (id) => {
    loading.value = true
    error.value = null
    try {
      const response = await api.value.get(`products/${id}`)
      products.value = response.data
    } catch (err) {
      error.value = err
      console.error('Erreur lors de la récupération du produit:', err)
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    initWoocommerce()
  })

  return {
    products,
    loading,
    error,
    fetchProducts,
    fetchProductById,
  }
}
