// composables/useWooCommerce.ts
import { ref } from 'vue'
import { useRuntimeConfig } from '#app'
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

export function useWooCommerce() {
  const config = useRuntimeConfig()
  const api = new WooCommerceRestApi({
    url: config.public.woocommerce.url,
    consumerKey: config.public.woocommerce.consumerKey,
    consumerSecret: config.public.woocommerce.consumerSecret,
    version: 'wc/v3',
  })

  const products = ref([])
  const categories = ref([])
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

  const fetchCategories = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await api.get('products/categories')
      categories.value = response.data
    } catch (err) {
      error.value = err
      console.error('Erreur lors de la récupération des catégories:', err)
    } finally {
      loading.value = false
    }
  }

  const addProduct = async (product) => {
    loading.value = true
    error.value = null
    try {
      const response = await api.post('products', product)
      return response.data
    } catch (err) {
      error.value = err
      console.error('Erreur lors de la création du produit:', err)
    } finally {
      loading.value = false
    }
  }

  const updateProduct = async (id, product) => {
    loading.value = true
    error.value = null
    try {
      const response = await api.put(`products/${id}`, product)
      return response.data
    } catch (err) {
      error.value = err
      console.error('Erreur lors de la mise à jour du produit:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    products,
    categories,
    loading,
    error,
    fetchProducts,
    fetchProduct,
    fetchCategories,
    addProduct,
    updateProduct,
  }
}
