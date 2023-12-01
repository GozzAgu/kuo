<template>
  <div class="relative">
    <img class="w-full h-80 md:h-[40rem] lg:h-screen" src="/images/kuo-hero.webp"/>
    <div class="bg-black h-full absolute inset-0 opacity-75"></div>
    <div class="absolute inset-0 flex flex-row p-4 lg:px-40 lg:py-4 items-center">
      <p class="text-white text-xl md:text-3xl lg:text-5xl font-bold">Balancing the Equation: Meeting Demand and Supply with Precision and Expertise.</p>
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