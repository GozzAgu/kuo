<script setup>
const navLink = [
  { head: 'Home', to: '/' },
  { head: 'Products & Services', to: '/products' },
  { head: 'Our Company', to: '/company' },
  { head: 'Contact Us', to: '/contact' },
]
</script>

<template>
  <div class="bg-slate-300 grid grid-cols-2 lg:px-40 p-4 lg:py-8">
    <div class="">
      <img
        class="w-[3em] lg:w-[5.5em] shrink-0 -ml-2"
        src="/images/kuologo.png"
      >
      <div class="flex flex-col flex-1 my-4">
        <NuxtLink
          v-for="item of navLink"
          :key="item.head"
          :to="item.to"
          class="py-1 text-sm"
        >
          {{ item.head }}
        </NuxtLink>
      </div>

      <div class="flex gap-x-4">
        <Icon class="cursor-pointer text-2xl mt-1" name="ri:facebook-box-fill" />
        <Icon class="cursor-pointer text-2xl mt-1" name="ri:twitter-x-line" />
        <Icon class="cursor-pointer text-2xl mt-1" name="ri:linkedin-box-fill" />
      </div>
    </div>

    <div class="flex items-end">
      <div class="mb-8 text-sm">
        <h1 class="">
          Nigeria
        </h1>
        <p class="text-sm">
          No 85B, Elijiji Lane, Woji, Port-Harcourt, Rivers state, Nigeria
        </p>
      </div>
    </div> 
  </div>
</template>