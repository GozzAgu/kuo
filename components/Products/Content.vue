<script setup>
// import { useStore } from '~/store';
import solutions from '../../solutions.json'

// const store = useStore()
const child = ref(false)

const showChild = () => {
  child.value = !child.value
}

</script>

<template>
  <div class="lg:px-40 p-4 lg:py-4 mb-24">
    <div class="mb-2 flex gap-x-4">
      <h1 class="text-2xl mb-12 text-blue-900 font-semibold md:border-l-4 border-red-700 pl-2">
        Our Products<Icon class="ml-2" name="ic:outline-double-arrow" />
      </h1>
    </div>

    <div>
      <div class="bg-slate-50 rounded-lg p-4">
        <div @click="showChild" class="flex justify-between">
          <p class="md:text-xl font-semibold text-blue-900">Security Seals</p>
          <Icon class="ml-2" name="ep:caret-bottom" />
        </div>

        <Transition>
          <div v-if="child" class="mt-8 grid md:grid-cols-3 xl:grid-cols-4 gap-4">
            <NuxtLink :to="'/product' + solution.id" 
              class="flex gap-8 bg-white border rounded-lg p-4 h-[7.5em]"
              v-for="solution in solutions" :key="solution" 
            >
              <img class="w-[3em] h-[3em] lg:w-[3.5em] lg:h-[3.5em] shrink-0" :src="solution.img" />
              <div class="relative line-clamp-1">
                <p class="flex items-center truncate text-sm md:text-base">{{ solution.name }}</p>
                <hr class="my-2"> 
                <p class="text-xs line-clamp-2 mb-2">{{ solution.description }}</p>
                <p class="absolute bottom-0 text-xs text-gray-400">MOQ: 1,000 Pieces</p>
              </div>
            </NuxtLink>        
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
