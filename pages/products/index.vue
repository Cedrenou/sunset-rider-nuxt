<template>
  <h1>Liste des produits</h1>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.name }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

const products = ref([
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
])

</script>