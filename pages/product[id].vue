<script setup lang="ts">
import { useStore } from '~/store';

const store = useStore()
const route = useRoute()

const prodID = computed(() => {
  return route.params.id
})

const prod = computed(() => {
  return store.solutions.find(s => s.id == prodID.value);
});

onMounted(async() => {
  await store.fetchSolutions()
  console.log(prod.value?.name)
});
</script>

<template>
  <div class="lg:px-40 p-4 lg:py-4">
    <div class="gap-8 bg-white border rounded-lg p-4 md:flex justify-between md:h-[27em] md:py-[5em] md:px-[5em]" >
      <img class="w-[100%] h-[100%] md:w-[13.5em] md:h-[13.5em] shrink-0 mb-8" :src="prod?.img" />
      <div class="relative">
        <p class="flex text-xl items-center font-bold md:text-base">Material: <span class="font-semibold text-lg ml-4">{{ prod?.name }}</span></p>
        <hr class="my-2"> 
        <p class="mb-2">Type: <span class="ml-2">Plastic</span></p>
        <p class="mb-2">Performance: <span class="ml-2">One time use</span></p>
        <p class="mb-2">Description: <span class="ml-2">{{ prod?.description }}</span></p>
        <p class="text-gray-400">MOQ: 1,000 Pieces</p>
        <div class="flex justify-between mt-8">
          <p class="text-gray-400 mt-2">Customization available</p>
          <NuxtLink target="_blank" class="border bg-slate-300 px-4 py-2 rounded-lg" to="https://www.instagram.com/kuosmartservicehq/">
            Click to buy
          </NuxtLink>
        </div>
      </div>
    </div>  
  </div>
</template>