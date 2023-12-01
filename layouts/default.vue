<script setup>

</script>

<template>
  <main class="relative h-full flex flex-col">
    <WebLayoutNav class="sticky top-0 bg-white z-20"/>
    <section class="flex-auto">
      <slot />
    </section>
    <WebLayoutFooter />
  </main>
</template>