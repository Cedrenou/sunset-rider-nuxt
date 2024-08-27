<template>
  <div class="bg-gray-100 p-4 rounded-lg shadow">
    <h1 class="text-2xl font-bold text-blue-600 mb-2">Bienvenue sur sunset Rider SHop</h1>
    <p class="text-gray-700">Découvrez nos équipements reconditionnés de qualité.</p>
    <button
      class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      Voir les produits
    </button>

    <!--  display all the data of products as json   -->
    <pre v-if="product">{{ product }}</pre>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useWooCommerce } from '~/composables/useWooCommerce.js'

const { fetchProduct } = useWooCommerce()
const product = ref(null)

onMounted(() => {
  fetchProduct('3843')
    .then((data) => {
      product.value = data
    })
    .catch((error) => {
      console.error(error)
    })
})
</script>
