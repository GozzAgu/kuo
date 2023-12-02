<script setup>
const solutions = ref([
  {
    name: 'Cable Security seal',
    img: '/images/cableseal.jpg',
    id: 1,
  },
  {
    name: 'Plastic security seal',
    img: '/images/plasticseal.jpg',
    id: 2,
  },
  {
    name: 'Bolt security seal',
    img: '/images/boltseal.jpg',
    id: 3,
  },
  {
    name: 'Customized security seal',
    img: '/images/custseal.jpg',
    id: 4,
  },
])
</script>

<template>
  <div class="lg:px-40 p-4 lg:py-4 mb-24">
    <div class="mb-2 flex gap-x-4">
      <h1 class="text-2xl mb-12 text-blue-900 font-semibold md:border-l-4 border-red-700 pl-2">
        Our Products<Icon class="ml-2" name="ic:outline-double-arrow" />
      </h1>
    </div>
    <div class="solutions bg-white rounded-lg xl:flex gap-x-24">
      <div class="solution-card xl:w-[70%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 gap-5">
        <div
          v-for="solution in solutions"
          :key="solution" 
          class="
            cursor-pointer
            shadow-md
            rounded-lg
            flex
            gap-x-2
            lg:px-1
            py-1"
        >
          <img
            class="w-[3em] h-[3em] lg:w-[3.5em] lg:h-[3.5em] shrink-0"
            :src="solution.img"
          >
          <NuxtLink
            :to="solution.link"
            class="hover:underline
              transition
              duration-300
              ease-in-out
              hover:text-red-700
              flex
              items-center
              text-[10px]
              md:text-[12px]
              lg:text-[14px]
              font-bold
              text-blue-900"
          >
            {{ solution.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
