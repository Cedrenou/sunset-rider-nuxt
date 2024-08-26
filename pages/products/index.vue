<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900 text-center">Category name</h2>

      <div class="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group relative">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <img
              :src="product.imageSrc"
              :alt="product.imageAlt"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="product.href">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </a>
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
const products = [
  {
    id: 1,
    name: 'Helston',
    href: '#',
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
      'https://i0.wp.com/sunsetridershop.com/wp-content/uploads/2024/05/1715882215.jpeg?w=620&quality=56&ssl=1',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '89€',
    color: 'Bleu',
  },
  {
    id: 4,
    name: 'AlpineStar',
    href: '#',
    imageSrc:
      'https://i0.wp.com/sunsetridershop.com/wp-content/uploads/2024/05/1-2.png?resize=1200%2C1200&quality=52&ssl=1',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '€35',
    color: 'Noir',
  },
  {
    id: 5,
    name: 'Veste Furygan',
    href: '#',
    imageSrc:
      'https://i0.wp.com/sunsetridershop.com/wp-content/uploads/2024/05/7-1.png?resize=1200%2C1200&quality=52&ssl=1',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '89€',
    color: 'Noir',
  },
  {
    id: 6,
    name: 'Veste',
    href: '#',
    imageSrc:
      'https://i0.wp.com/sunsetridershop.com/wp-content/uploads/2024/05/13.png?resize=1200%2C1200&quality=52&ssl=1',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '119,00€',
    color: 'Noir',
  },
  {
    id: 7,
    name: 'Veste Furygan',
    href: '#',
    imageSrc:
      'https://i0.wp.com/sunsetridershop.com/wp-content/uploads/2024/04/19-3-e1715519304333.png?resize=1200%2C1200&quality=52&ssl=1',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '79€',
    color: 'Noir',
  },
  {
    id: 8,
    name: 'Veste Revit',
    href: '#',
    imageSrc:
      'https://i0.wp.com/sunsetridershop.com/wp-content/uploads/2024/04/4-9.png?resize=1200%2C1200&quality=52&ssl=1',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '95€',
    color: 'Black',
  },
  {
    id: 9,
    name: 'Bottes',
    href: '#',
    imageSrc:
      'https://i0.wp.com/sunsetridershop.com/wp-content/uploads/2024/05/34.png?resize=1200%2C1200&quality=52&ssl=1',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '110€',
    color: 'Black',
  },
  {
    id: 10,
    name: 'Pantalon',
    href: '#',
    imageSrc:
      'https://i0.wp.com/sunsetridershop.com/wp-content/uploads/2024/05/41-1.png?resize=1200%2C1200&quality=52&ssl=1',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '55€',
    color: 'Black',
  },
]
</script>
