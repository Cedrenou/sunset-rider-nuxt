<template>
  <div class="container mx-auto px-4 py-8">
    <div class="overflow-x-auto bg-white shadow-md rounded-lg">
      <table class="min-w-full leading-normal">
        <thead>
          <tr>
            <th
              class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              Image
            </th>
            <th
              class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              Nom
            </th>
            <th
              class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              SKU
            </th>
            <th
              class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              Prix
            </th>
            <th
              class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              Stock
            </th>
            <th
              class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              Statut
            </th>
            <th
              class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              Catégories
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="product in products"
            :key="product.id"
            class="group hover:bg-gray-500"
            @click="handleClick(product.id)"
          >
            <td class="px-5 py-5 border-b border-gray-200 bg-white group-hover:bg-gray-50 text-sm">
              <div class="flex-shrink-0 w-10 h-10">
                <img
                  v-if="product.images.length > 0"
                  class="w-full h-full rounded-full object-cover"
                  :src="product.images[0].src"
                  :alt="product.name"
                />
                <div
                  v-else
                  class="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-gray-500"
                >
                  N/A
                </div>
              </div>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white group-hover:bg-gray-50 text-sm">
              <p class="text-gray-900 whitespace-no-wrap">{{ product.name }}</p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white group-hover:bg-gray-50 text-sm">
              <p class="text-gray-900 whitespace-no-wrap">{{ product.sku }}</p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white group-hover:bg-gray-50 text-sm">
              <p class="text-gray-900 whitespace-no-wrap">{{ product.price }} €</p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white group-hover:bg-gray-50 text-sm">
              <p class="text-gray-900 whitespace-no-wrap">{{ product.stock_quantity }}</p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white group-hover:bg-gray-50 text-sm">
              <span
                class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
              >
                <span
                  :class="{
                    'bg-green-200': product.status === 'publish',
                    'bg-yellow-200': product.status === 'draft',
                    'bg-red-200': product.status === 'private',
                  }"
                  class="absolute inset-0 opacity-50 rounded-full"
                ></span>
                <span class="relative">{{ product.status }}</span>
              </span>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white group-hover:bg-gray-50 text-sm">
              <div class="flex flex-wrap gap-1">
                <span
                  v-for="category in product.categories"
                  :key="category.id"
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800"
                >
                  {{ category.name }}
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { navigateTo } from '#app'
import { useWooCommerce } from '~/composables/useWooCommerce'

const { products, fetchProducts } = useWooCommerce()

const handleClick = (id) => {
  navigateTo(`/woocommerce/update-product/${id}`)
}

onMounted(async () => {
  await fetchProducts()
})
</script>
