<script setup>
defineProps({
  isOpen: Boolean,
})

const navLink = [
  { head: 'Home', to: '/' },
  { head: 'Products', to: '/products' },
  { head: 'Our Company', to: '/company' },
  { head: 'Contact Us', to: '/contact' },
]
</script>

<template>
  <Transition name="slide-fade">
    <div v-show="isOpen" class="h-100svh lg:hidden bg-blue-950 flex flex-col h-full text-white p-8">
      <button class="px6 py2 my3 wmax place-self-end" @click="$emit('closeNav')">
        Close
      </button>

      <div class="px-6 flex flex-col flex-1 pb14 mt-24">
        <NuxtLink
          v-for="item of navLink"
          :key="item.head"
          :to="item.to"
          class="border-b border-gray-5 p-4 text-center block"
        >
          {{ item.head }}
        </NuxtLink>
        <div flex-auto />
      </div>

      <div class="flex gap-x-4">
        <Icon class="cursor-pointer text-2xl mt-1" name="ri:facebook-box-fill" />
        <Icon class="cursor-pointer text-2xl mt-1" name="ri:twitter-x-line" />
        <Icon class="cursor-pointer text-2xl mt-1" name="ri:linkedin-box-fill" />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: transform 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: transform 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from, .slide-fade-leave-to {
  transform: translateX(100%);
}
</style>
