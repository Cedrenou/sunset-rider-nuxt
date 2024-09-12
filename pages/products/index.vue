<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900 text-center">Category name</h2>
      <button class="border-2 p-4 rounded" @click="console.log(products)">LOG</button>

      <div class="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group relative">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80"
          >
            <img
              v-if="products.length && product.images.length"
              :src="product.images[0].src"
              :alt="product.imageAlt"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <NuxtLink :to="`products/${product.id}`">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </NuxtLink>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWooCommerce } from '~/composables/useWooCommerce'
import { onMounted } from 'vue'
const productsMock = [
  {
    id: 1,
    name: 'Helston',
    href: `/products/1`,
    imageSrc:
      'https://i0.wp.com/sunsetridershop.com/wp-content/uploads/2024/05/10-3.png?resize=1200%2C1200&quality=52&ssl=1',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '119,00€',
    color: 'Noir',
  },
  {
    id: 2,
    name: 'Deus Ex Machina',
    href: '#',
    imageSrc:
      'https://i0.wp.com/sunsetridershop.com/wp-content/uploads/2024/05/8-2.png?resize=1200%2C1200&quality=52&ssl=1',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '125€',
    color: 'Noir/Orange',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://i0.wp.com/sunsetridershop.com/wp-content/uploads/2024/05/10-3.png?resize=1200%2C1200&quality=52&ssl=1',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '89€',
    color: 'Bleu',
  },
  {
    id: 5,
    name: 'Veste Furygan',
    href: '#',
    imageSrc:
      'https://i0.wp.com/sunsetridershop.com/wp-content/uploads/2024/05/10-3.png?resize=1200%2C1200&quality=52&ssl=1',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '89€',
    color: 'Noir',
  },
  {
    id: 6,
    name: 'Veste',
    href: '#',
    imageSrc:
      'https://i0.wp.com/sunsetridershop.com/wp-content/uploads/2024/05/10-3.png?resize=1200%2C1200&quality=52&ssl=1',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '119,00€',
    color: 'Noir',
  },
  {
    id: 7,
    name: 'Veste Furygan',
    href: '#',
    imageSrc:
      'https://i0.wp.com/sunsetridershop.com/wp-content/uploads/2024/05/10-3.png?resize=1200%2C1200&quality=52&ssl=1',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '79€',
    color: 'Noir',
  },
  {
    id: 8,
    name: 'Veste Revit',
    href: '#',
    imageSrc:
      'https://i0.wp.com/sunsetridershop.com/wp-content/uploads/2024/05/10-3.png?resize=1200%2C1200&quality=52&ssl=1',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '95€',
    color: 'Black',
  },
  {
    id: 9,
    name: 'Bottes',
    href: '#',
    imageSrc:
      'https://i0.wp.com/sunsetridershop.com/wp-content/uploads/2024/05/10-3.png?resize=1200%2C1200&quality=52&ssl=1',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '110€',
    color: 'Black',
  },
  {
    id: 10,
    name: 'Pantalon',
    href: '#',
    imageSrc:
      'https://i0.wp.com/sunsetridershop.com/wp-content/uploads/2024/05/10-3.png?resize=1200%2C1200&quality=52&ssl=1',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '55€',
    color: 'Black',
  },
]

const { products, loading, error, fetchProducts } = useWooCommerce()

onMounted(() => {
  fetchProducts()
})
</script>
