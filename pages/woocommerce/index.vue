<template>
  <h2 class="text-2xl font-bold tracking-tight text-gray-900 text-center">Add Product</h2>

  <div class="w-full max-w-2xl mx-auto">
    <form
      @submit.prevent="addProduct(product)"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          id="name"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="product.name"
        />
      </div>

      <div class="mb-4">
        <label for="slug" class="block text-gray-700 text-sm font-bold mb-2">Slug</label>
        <input
          id="slug"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="product.slug"
        />
      </div>

      <div class="mb-4">
        <label for="status" class="block text-gray-700 text-sm font-bold mb-2">Status</label>
        <select
          id="status"
          class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="publish">Publish</option>
          <option value="draft">Draft</option>
          <option value="pending">Pending</option>
          <option value="private">Private</option>
        </select>
      </div>

      <div class="mb-4">
        <label for="regular_price" class="block text-gray-700 text-sm font-bold mb-2">Price</label>
        <input
          id="regular_price"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="product.regular_price"
        />
      </div>

      <div class="mb-4">
        <label for="description" class="block text-gray-700 text-sm font-bold mb-2"
          >Description</label
        >
        <textarea
          id="description"
          cols="50"
          rows="10"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="product.description"
        ></textarea>
      </div>

      <div class="mb-4">
        <label for="short_description" class="block text-gray-700 text-sm font-bold mb-2"
          >Short Description</label
        >
        <textarea
          id="short_description"
          cols="50"
          rows="5"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="product.short_description"
        ></textarea>
      </div>

      <div class="mb-4">
        <label for="category" class="block text-gray-700 text-sm font-bold mb-2">Category</label>
        <select
          id="category"
          multiple
          class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="selectedCategories"
        >
          <option v-for="category in categories" :key="category.id" :value="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>

      <div class="mb-4">
        <label for="sku" class="block text-gray-700 text-sm font-bold mb-2">SKU</label>
        <input
          id="sku"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="product.sku"
        />
      </div>

      <div class="mb-4">
        <label for="stock_quantity" class="block text-gray-700 text-sm font-bold mb-2"
          >Stock Quantity</label
        >
        <input
          id="stock_quantity"
          type="number"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="product.stock_quantity"
        />
      </div>

      <div class="mb-4">
        <label for="weight" class="block text-gray-700 text-sm font-bold mb-2">Weight</label>
        <input
          id="weight"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="product.weight"
        />
      </div>

      <div class="mb-4">
        <label for="shipping_class" class="block text-gray-700 text-sm font-bold mb-2"
          >Shipping Class</label
        >
        <input
          id="shipping_class"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="product.shipping_class"
        />
      </div>

      <div class="mb-4">
        <label for="upsell_ids" class="block text-gray-700 text-sm font-bold mb-2"
          >Upsell IDs</label
        >
        <input
          id="upsell_ids"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="product.upsell_ids"
        />
      </div>

      <div class="mb-4">
        <label for="cross_sell_ids" class="block text-gray-700 text-sm font-bold mb-2"
          >Cross Sell IDs</label
        >
        <input
          id="cross_sell_ids"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="product.cross_sell_ids"
        />
      </div>

      <div class="mb-4">
        <label for="attributes" class="block text-gray-700 text-sm font-bold mb-2"
          >Attributes</label
        >
        <input
          id="attributes"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="product.attributes"
        />
      </div>

      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Ajouter le produit
      </button>
    </form>

    <pre>{{ product }}</pre>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useWooCommerce } from '~/composables/useWooCommerce'

const selectedCategories = ref([])

watch(selectedCategories, (newSelectedCategories) => {
  product.value.categories = newSelectedCategories.map((id) => ({ id }))
})

const product = ref({
  name: '',
  slug: '',
  status: 'publish',
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

const { addProduct, categories, fetchCategories } = useWooCommerce()

onMounted(() => {
  fetchCategories()
})
</script>
