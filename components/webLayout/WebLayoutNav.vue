<template>
  <div class="flex justify-between lg:px-40 p-4 lg:py-4 shadow-sm shadow-gray-300">
    <div class="">
      LOGO
    </div>
    <div class="lg:hidden">
      Menu
    </div>
    <div class="hidden lg:flex gap-x-4">
      <div v-for="link in navLinks" 
        :key="link" 
        class="border-b border-transparent hover:border-blue-400 transition-all hover:text-blue-400"
      >
        <NuxtLink :to="link.to">
          <p>{{ link.name }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const navLinks = ref([
  {to: '/', name: 'Home'},
  {to: '/company', name: 'Our Company'},
  {to: '/products', name: 'Products'},
  {to: '/contact', name: 'Contact Us'}
])
</script>