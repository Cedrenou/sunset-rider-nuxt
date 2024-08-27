<template>
  <div class="bg-white">
    <div class="pt-6">
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <li v-for="breadcrumb in product.breadcrumbs" :key="breadcrumb.id">
            <div class="flex items-center">
              <a :href="breadcrumb.href" class="mr-2 text-sm font-medium text-gray-900">{{
                breadcrumb.name
              }}</a>
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="currentColor"
                aria-hidden="true"
                class="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li class="text-sm">
            <a
              :href="product.href"
              aria-current="page"
              class="font-medium text-gray-500 hover:text-gray-600"
              >{{ product.name }}</a
            >
          </li>
        </ol>
      </nav>

      <!-- Image gallery -->
      <div
        class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8"
      >
        <div class="hidden lg:flex lg:flex-col lg:gap-y-2">
          <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              :src="product.images[0].src"
              :alt="product.images[0].alt"
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              :src="product.images[1].src"
              :alt="product.images[1].alt"
              class="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div class="image-right">
          <img
            :src="product.images[2].src"
            :alt="product.images[2].alt"
            class="h-full w-full object-cover"
          />
        </div>

        <div class="mt-4 lg:row-span-3 lg:mt-0 lg:flex lg:flex-col">
          <h2 class="sr-only">Information produit</h2>
          <p class="text-3xl tracking-tight text-gray-900 text-left px-4 pb-4 uppercase font-bold">
            {{ product.name }}
          </p>
          <p class="text-lg tracking-tight text-gray-500 text-left px-4">
            {{ product.price }} conseillé
          </p>
          <p class="text-3xl tracking-tight text-gray-900 text-left px-4">
            {{ product.price }}
          </p>

          <form class="mt-10">
            <!-- Sizes -->
            <div class="mt-10">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-medium text-gray-900">Taille</h3>
                <a href="#" class="text-sm font-medium text-sunset-green hover:text-sunset-green"
                  >Guide des tailles</a
                >
              </div>

              <fieldset aria-label="Choisir une taille" class="mt-4">
                <RadioGroup
                  v-model="selectedSize"
                  class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                >
                  <RadioGroupOption
                    as="template"
                    v-for="size in product.sizes"
                    :key="size.name"
                    :value="size"
                    :disabled="!size.inStock"
                    v-slot="{ active, checked }"
                  >
                    <div
                      :class="[
                        size.inStock
                          ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                          : 'cursor-not-allowed bg-gray-50 text-gray-200',
                        active ? 'ring-2 ring-sunset-green' : '',
                        'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6',
                      ]"
                    >
                      <span>{{ size.name }}</span>
                      <span
                        v-if="size.inStock"
                        :class="[
                          active ? 'border' : 'border-2',
                          checked ? 'border-sunset-green' : 'border-transparent',
                          'pointer-events-none absolute -inset-px rounded-md',
                        ]"
                        aria-hidden="true"
                      />
                      <span
                        v-else
                        aria-hidden="true"
                        class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                      >
                        <svg
                          class="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                          stroke="currentColor"
                        >
                          <line
                            x1="0"
                            y1="100"
                            x2="100"
                            y2="0"
                            vector-effect="non-scaling-stroke"
                          />
                        </svg>
                      </span>
                    </div>
                  </RadioGroupOption>
                </RadioGroup>
              </fieldset>
            </div>

            <button
              type="submit"
              class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-sunset-green px-8 py-3 text-base font-medium text-white hover:bg-sunset-green focus:outline-none focus:ring-2 focus:ring-sunset-green focus:ring-offset-2"
            >
              Ajouter au panier
            </button>
          </form>
        </div>
      </div>

      <!-- Product info -->
      <div
        class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16"
      >
        <div class="mt-0 mb-4">
          <h3 class="text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-3xl">
            Description
          </h3>

          <div class="mt-4">
            <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
              <li v-for="highlight in product.highlights" :key="highlight" class="text-gray-400">
                <span class="text-gray-600">{{ highlight }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 mt-6">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-center">
            Présentation TODO: Extend panel
          </h1>
        </div>

        <div
          class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6"
        >
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base text-gray-900">{{ product.description }}</p>
            </div>
          </div>

          <div class="mt-10">
            <section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
              <div
                class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"
              />
              <div
                class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
              />
              <div class="mx-auto max-w-2xl lg:max-w-4xl">
                <img
                  class="mx-auto h-12"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGcxBWQeELeDJ6b8tPCIN7YNwq61NYvXoRfg&s"
                  alt=""
                />
                <figure class="mt-10">
                  <blockquote
                    class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9"
                  >
                    <p>
                      “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita
                      voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum
                      et corporis.”
                    </p>
                  </blockquote>
                  <figcaption class="mt-10">
                    <img
                      class="mx-auto h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div class="mt-4 flex items-center justify-center space-x-3 text-base">
                      <div class="font-semibold text-gray-900">Judith Black</div>
                      <svg
                        viewBox="0 0 2 2"
                        width="3"
                        height="3"
                        aria-hidden="true"
                        class="fill-gray-900"
                      >
                        <circle cx="1" cy="1" r="1" />
                      </svg>
                      <div class="text-gray-600">CEO of Workcation</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'

const product = {
  name: 'Helstons T.S',
  price: '119 €',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Homme', href: '/products' },
    { id: 2, name: 'Blouson & veste', href: '/products' },
  ],
  images: [
    {
      src: 'https://i0.wp.com/sunsetridershop.com/wp-content/uploads/2024/05/14-2.png?w=1260&quality=52&ssl=1',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://i0.wp.com/sunsetridershop.com/wp-content/uploads/2024/05/13-2.png?w=1260&quality=52&ssl=1',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://i0.wp.com/sunsetridershop.com/wp-content/uploads/2024/05/10-3.png?w=1260&quality=52&ssl=1',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: false },
    { name: 'S', inStock: true },
    { name: 'M', inStock: false },
    { name: 'L', inStock: false },
    { name: 'XL', inStock: false },
    { name: '2XL', inStock: false },
    { name: '3XL', inStock: false },
  ],
  description:
    'Profitez de la combinaison parfaite entre élégance et sécurité avec le blouson en cuir Helstons taille S. Conçu pour les passionnés de moto qui privilégient le style sans compromettre la sécurité, ce blouson intègre des protections aux épaules et au coude conformes aux normes CE. Le cuir de première qualité garantit une résistance supérieure à l’abrasion et une longévité exceptionnelle. Avec une doublure amovible, ce blouson s’adapte facilement à toutes les conditions météorologiques, rendant chaque trajet agréable et sûr. Valorisez votre garde-robe moto avec ce blouson Helstons, un investissement durable et stylé.',
  highlights: [
    'Taille S – Coupe ajustée pour un confort optimal.',
    'Protections CE – Épaules et coude pour une sécurité maximale.',
    'Cuir de qualité – Haute résistance à l’abrasion et durabilité prolongée.',
    'Doublure amovible – Adaptabilité pour toutes les saisons.',
  ],
  details:
    "Rejoignez notre communauté de passionnés pour profiter d'offres exclusives et découvrir des conseils d'experts sur notre blog ! Inscrivez-vous dès maintenant.",
}

const selectedSize = ref(product.sizes[2])
</script>

<style scoped>
.image-right {
  height: 100%;
}
</style>
