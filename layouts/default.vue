<script setup>
const route = useRoute()
const mobileNavOpen = ref(false)

watch(() => route.path, () => {
  mobileNavOpen.value = false
})
</script>

<template>
  <main class="relative h-full flex flex-col">
    <WebLayoutNav @mobile-nav="mobileNavOpen = !mobileNavOpen" class="sticky top-0 bg-white z-10"/>
    <WebLayoutMobileNav @closeNav="mobileNavOpen = false" :is-open="mobileNavOpen" class="fixed inset-0 z-10" />
    <section class="flex-auto">
      <slot />
    </section>
    <WebLayoutFooter />
  </main>
</template>