<template>
  <div class="bg-gray-100 min-h-screen py-8">
    <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div class="bg-gray-800 text-white py-4 px-6">
        <h2 class="text-2xl font-bold">Mis à jour ({{ productForm.id }})</h2>
      </div>
      <Loader v-if="loading" />
      <form
        v-else
        @submit.prevent="updateProduct(productForm.id, productForm)"
        class="p-6 space-y-6"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Nom</label>
            <input
              id="name"
              type="text"
              v-model="productForm.name"
              class="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label for="slug" class="block text-sm font-medium text-gray-700">Slug</label>
            <input
              id="slug"
              type="text"
              v-model="productForm.slug"
              class="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label for="status" class="block text-sm font-medium text-gray-700">Status</label>
            <select
              id="status"
              v-model="productForm.status"
              class="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="publish">Publish</option>
              <option value="draft">Draft</option>
              <option value="pending">Pending</option>
              <option value="private">Private</option>
            </select>
          </div>

          <div>
            <label for="regular_price" class="block text-sm font-medium text-gray-700">Price</label>
            <input
              id="regular_price"
              type="text"
              v-model="productForm.regular_price"
              class="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div>
          <label for="description" class="block text-sm font-medium text-gray-700"
            >Description</label
          >
          <textarea
            id="description"
            v-model="productForm.description"
            rows="4"
            class="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          ></textarea>
        </div>

        <div>
          <label for="short_description" class="block text-sm font-medium text-gray-700"
            >Short Description</label
          >
          <textarea
            id="short_description"
            v-model="productForm.short_description"
            rows="2"
            class="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          ></textarea>
        </div>

        <div>
          <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
          <select
            id="category"
            v-model="selectedCategories"
            multiple
            class="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label for="sku" class="block text-sm font-medium text-gray-700">SKU</label>
            <input
              id="sku"
              type="text"
              v-model="productForm.sku"
              class="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label for="stock_quantity" class="block text-sm font-medium text-gray-700"
              >Stock Quantity</label
            >
            <input
              id="stock_quantity"
              type="number"
              v-model="productForm.stock_quantity"
              class="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label for="weight" class="block text-sm font-medium text-gray-700">Weight</label>
            <input
              id="weight"
              type="text"
              v-model="productForm.weight"
              class="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="shipping_class" class="block text-sm font-medium text-gray-700"
              >Shipping Class</label
            >
            <input
              id="shipping_class"
              type="text"
              v-model="productForm.shipping_class"
              class="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label for="attributes" class="block text-sm font-medium text-gray-700"
              >Attributes</label
            >
            <input
              id="attributes"
              type="text"
              v-model="productForm.attributes"
              class="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div class="flex justify-between">
          <button
            type="submit"
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Mettre à jour
          </button>
          <button
            type="button"
            @click="navigateTo('/woocommerce')"
            class="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Retour à la page produits
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useWooCommerce } from '~/composables/useWooCommerce'
import { navigateTo } from '#app'
import Loader from '~/components/UI/Loader.vue'

const selectedCategories = ref([])
const route = useRoute()

watch(selectedCategories, (newSelectedCategories) => {
  productForm.value.categories = newSelectedCategories.map((id) => ({ id }))
})

const productForm = ref({
  name: '',
  slug: '',
  status: '',
  categories: [],
  description: '',
  short_description: '',
  sku: '', // UGS === SKU
  regular_price: '',
  manage_stock: true,
  stock_quantity: 0,
  stock_status: 'instock', // get from api
  sold_individually: true,
  weight: '',
  shipping_class: '', // get from api
  upsell_ids: [], // get liste de toute les article en vente
  cross_sell_ids: [], // get liste de toute les article en vente
  images: [], // upload images to DB attention il y a une image produit et des images gallery
  attributes: [], // ex: marque, taille, matière etc  Recuperer les attributs de wooCommerce
  global_unique_id: '1234',
  yoast_head_json: {
    title: 'test test YOAST TEST',
  },
})

const { updateProduct, categories, fetchCategories, fetchProduct, loading, error } =
  useWooCommerce()

onMounted(async () => {
  await fetchCategories()
  await fetchProduct(route.params.id).then((data) => {
    productForm.value = data
  })
})
</script>
