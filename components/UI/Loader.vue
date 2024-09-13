<template>
  <div>
    <h1>Loading ...</h1>
  </div>
</template>

<script setup></script>

<style>
.front-wheel,
.back-wheel {
  animation: spin 1s infinite linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
