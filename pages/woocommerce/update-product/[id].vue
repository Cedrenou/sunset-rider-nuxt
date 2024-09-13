<template>
  <div class="bg-gray-100 min-h-screen py-8">
    <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div class="bg-gray-800 text-white py-4 px-6">
        <h2 class="text-2xl font-bold">Mis à jour ({{ productForm.id }})</h2>
      </div>
      <Loader v-if="loading" />
      <form
        v-else
        @submit.prevent="handleUpdate(productForm.id, productForm)"
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
            <select v-model="productForm.shipping_class">
              <option disabled>Choisir une option</option>
              <option
                v-for="shippingClass in shippingClasses"
                :key="shippingClass.id"
                :value="shippingClass.slug"
              >
                {{ shippingClass.name }}
              </option>
            </select>
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

          <div>
            <label for="global_unique_id" class="block text-sm font-medium text-gray-700"
              >Global Unique ID</label
            >
            <input
              id="global_unique_id"
              type="text"
              v-model="productForm.global_unique_id"
              class="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label for="seoTitle" class="block text-sm font-medium text-gray-700">SEO Title</label>
            <input
              id="seoTitle"
              type="text"
              v-model="productForm.yoastData.seoTitle"
              class="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label for="metaDescription" class="block text-sm font-medium text-gray-700"
              >Meta Description</label
            >
            <input
              id="metaDescription"
              type="text"
              v-model="productForm.yoastData.metaDescription"
              class="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label for="focusKeyword" class="block text-sm font-medium text-gray-700"
              >Focus Keyword</label
            >
            <input
              id="focusKeyword"
              type="text"
              v-model="productForm.yoastData.focusKeyword"
              class="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label for="gtin" class="block text-sm font-medium text-gray-700">GTIN</label>
            <input
              id="gtin"
              type="text"
              v-model="productForm.googleData.gtin"
              class="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label for="brand" class="block text-sm font-medium text-gray-700">Brand</label>
            <input
              id="brand"
              type="text"
              v-model="productForm.googleData.brand"
              class="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label for="condition" class="block text-sm font-medium text-gray-700">Condition</label>
            <select id="condition" v-model="productForm.googleData.condition">
              <option value="default">Default</option>
              <option value="default">New</option>
              <option value="refurbished">Refurbished</option>
              <option value="used">Used</option>
            </select>
          </div>

          <div>
            <label for="gender">Gender</label>
            <select name="gender" id="gender" v-model="productForm.googleData.gender">
              <option value="" disabled>Pick one</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="unisex">Unisex</option>
            </select>
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
    <pre>{{ productForm }}</pre>
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
  global_unique_id: '',
  yoastData: {
    seoTitle: '', // titre SEO
    metaDescription: '', // Meta descritption
    focusKeyword: '', // Requete cible
  },
  googleData: {
    gtin: '', // Global Trade Item Number
    brand: '',
    condition: '', // new, used, refurbished
    gender: '',
    size: '',
    color: '',
    material: '',
    ageGroup: '',
  },
  facebookData: {
    price: '',
    description: '',
    brand: '',
    color: '',
    material: '',
    size: '',
    ageGroup: '',
    gender: '',
    sport: '',
  },
})

const {
  updateProduct,
  categories,
  shippingClasses,
  fetchCategories,
  fetchProduct,
  fetchShippingClasses,
  loading,
  error,
} = useWooCommerce()

const handleUpdate = async (id) => {
  try {
    const updatedProduct = {
      ...productForm.value,
      meta_data: [
        { key: '_yoast_wpseo_title', value: productForm.value.yoastData?.seoTitle || '' },
        { key: '_yoast_wpseo_metadesc', value: productForm.value.yoastData?.metaDescription || '' },
        { key: '_yoast_wpseo_focuskw', value: productForm.value.yoastData?.focusKeyword || '' },
        { key: '_wc_gla_gtin', value: productForm.value.googleData?.gtin || '' },
        { key: '_wc_gla_brand', value: productForm.value.googleData?.brand || '' },
        { key: '_wc_gla_condition', value: productForm.value.googleData?.condition || '' },
        { key: '_wc_gla_gender', value: productForm.value.googleData?.gender || '' },
        { key: '_wc_gla_size', value: productForm.value.googleData?.size || '' },
        { key: '_wc_gla_color', value: productForm.value.googleData?.color || '' },
        { key: '_wc_gla_material', value: productForm.value.googleData?.material || '' },
        { key: '_wc_gla_ageGroup', value: productForm.value.googleData?.ageGroup || '' },
        { key: 'fb_product_price', value: productForm.value.facebookData?.price || '' },
        { key: 'fb_product_description', value: productForm.value.facebookData?.description || '' },
        {
          key: '_wc_facebook_enhanced_catalog_attributes_brand',
          value: productForm.value.facebookData?.brand || '',
        },
        {
          key: '_wc_facebook_enhanced_catalog_attributes_color',
          value: productForm.value.facebookData?.color || '',
        },
        {
          key: '_wc_facebook_enhanced_catalog_attributes_material',
          value: productForm.value.facebookData?.material || '',
        },
        {
          key: '_wc_facebook_enhanced_catalog_attributes_size',
          value: productForm.value.facebookData?.size || '',
        },
        {
          key: '_wc_facebook_enhanced_catalog_attributes_age_group',
          value: productForm.value.facebookData?.ageGroup || '',
        },
        {
          key: '_wc_facebook_enhanced_catalog_attributes_gender',
          value: productForm.value.facebookData?.gender || '',
        },
        {
          key: '_wc_facebook_enhanced_catalog_attributes_sport',
          value: productForm.value.facebookData?.sport || '',
        },
      ],
    }
    await updateProduct(id, updatedProduct)
  } catch (error) {
    console.error(error)
  }
}

onMounted(async () => {
  await fetchShippingClasses()
  await fetchCategories()
  try {
    const data = await fetchProduct(route.params.id)
    productForm.value = {
      ...data,
      yoastData: {
        seoTitle: data.meta_data.find((meta) => meta.key === '_yoast_wpseo_title')?.value || '',
        metaDescription:
          data.meta_data.find((meta) => meta.key === '_yoast_wpseo_metadesc')?.value || '',
        focusKeyword:
          data.meta_data.find((meta) => meta.key === '_yoast_wpseo_focuskw')?.value || '',
      },
      googleData: {
        gtin: data.meta_data.find((meta) => meta.key === '_wc_gla_gtin')?.value || '',
        brand: data.meta_data.find((meta) => meta.key === '_wc_gla_brand')?.value || '',
        condition: data.meta_data.find((meta) => meta.key === '_wc_gla_condition')?.value || '',
        gender: data.meta_data.find((meta) => meta.key === '_wc_gla_gender')?.value || '',
        size: data.meta_data.find((meta) => meta.key === '_wc_gla_size')?.value || '',
        color: data.meta_data.find((meta) => meta.key === '_wc_gla_color')?.value || '',
        material: data.meta_data.find((meta) => meta.key === '_wc_gla_material')?.value || '',
        ageGroup: data.meta_data.find((meta) => meta.key === '_wc_gla_ageGroup')?.value || '',
      },
      facebookData: {
        price: data.meta_data.find((meta) => meta.key === 'fb_product_price')?.value || '',
        description:
          data.meta_data.find((meta) => meta.key === 'fb_product_description')?.value || '',
        brand:
          data.meta_data.find(
            (meta) => meta.key === '_wc_facebook_enhanced_catalog_attributes_brand'
          )?.value || '',
        color:
          data.meta_data.find(
            (meta) => meta.key === '_wc_facebook_enhanced_catalog_attributes_color'
          )?.value || '',
        material:
          data.meta_data.find(
            (meta) => meta.key === '_wc_facebook_enhanced_catalog_attributes_material'
          )?.value || '',
        size:
          data.meta_data.find(
            (meta) => meta.key === '_wc_facebook_enhanced_catalog_attributes_size'
          )?.value || '',
        ageGroup:
          data.meta_data.find(
            (meta) => meta.key === '_wc_facebook_enhanced_catalog_attributes_age_group'
          )?.value || '',
        gender:
          data.meta_data.find(
            (meta) => meta.key === '_wc_facebook_enhanced_catalog_attributes_gender'
          )?.value || '',
        sport:
          data.meta_data.find(
            (meta) => meta.key === '_wc_facebook_enhanced_catalog_attributes_sport'
          )?.value || '',
      },
    }
  } catch (error) {
    console.error(error)
  }
})
</script>
