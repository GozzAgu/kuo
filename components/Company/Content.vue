<script setup>
const coreValues = ref([
  {
    name: 'Safety',
    description: 'We understand that grit can make the difference in whether a project succeeds or fails, therefore, we have a collection of talents that are equipped to handle difficult challenges.',
  },
  {
    name: 'Leadership',
    description: 'Respect is the lifeblood of any team. It is the key to motivating a team to perform at its best and to enjoying the experience. We also extend this value when dealing with our clients too.',
  },
  {
    name: 'Innovation',
    description: 'Innovation is the key to growth for the companies of the future, it is the reason we constantly improve our processes and help our clients do the same.',
  },
  {
    name: 'Integrity',
    description: 'Integrity is trustworthiness, honor, and conscientiousness. It is being honest and doing what is right, it is the reason we have built integrity into the fabric of our business.',
  },
  {
    name: 'Excellence',
    description: 'Integrity is trustworthiness, honor, and conscientiousness. It is being honest and doing what is right, it is the reason we have built integrity into the fabric of our business.',
  },
  {
    name: 'Teamwork',
    description: 'For us it is not just about being a good teammate, it is about being a good human being.',
  },
  {
    name: 'Quality',
    description: 'Integrity is trustworthiness, honor, and conscientiousness. It is being honest and doing what is right, it is the reason we have built integrity into the fabric of our business.',
  },
])
</script>

<template>
  <div class="lg:px-40 p-4 lg:py-4">
    <div class="shadow-md bg-white md:rounded-3xl mb-24">
      <div class="my-12">
        <h1 class="text-3xl my-4 text-blue-900 border-l-4 border-red-700 pl-4">
          Who We Are
        </h1>
        <p class="px-5 text-sm md:text-base">
          At KUO, we prioritize transparency, collaboration, and measurable results. 
          From prospecting to conversion, we optimize every step of the sales funnel. Our comprehensive 
          suite of services encompasses lead generation, strategic planning, and data analytics, 
          ensuring your sales efforts are not only efficient but also effective.
        </p>
      </div>
      <div class="griit mt-8 2xl:mt-24 md:grid grid-cols-2 gap-8 text-white p-4 sm:p-12">
        <div class="mb-12 md:mb-0">
          <h1 class="text-3xl w-[7em] my-4 md:border-l-4 border-b md:border-b-0 border-red-700 pl-4 text-center md:text-start">
            Our Mission
          </h1>
          <p class="px-5 text-sm lg:text-base">
            To be our client’s best partner in providing systems that work
          </p>
        </div>
        <div class="">
          <h1 class="text-3xl my-4 md:border-l-4 border-b w-[7em] md:border-b-0 border-red-700 pl-4 text-center md:text-start">
            Our Vision
          </h1>
          <p class="px-5 text-sm lg:text-base">
            We exist to apply technical solution to human challenges in our fields of endeavor towards an efficient and safe world
          </p>
        </div>
      </div>

      <div class="md:rounded-b-3xl bg-gradient-to-b from-blue-950 to-black px-12 py-24">
        <h1
          class="text-white
            text-3xl
            my-4
            w-[8.5em]
            flex
            gap-x-2
            m-auto
            lg:mx-0
            md:border-b-0
            lg:border-l-4
            border-red-700
            pl-4
            text-center
            md:text-start"
        >
          <Icon class="mt-1" name="solar:align-bottom-bold" />
          <span>Core Values</span>
        </h1>
        <div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="coreValue in coreValues">
            <div class="h-[12em] bg-gradient-to-b from-white to-gray-400 opacity-80 p-4">
              <p class="text-blue-950 font-bold mb-2">
                {{ coreValue.name }}
              </p>
              <p class="text-blue-950 text-sm">
                {{ coreValue.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.griit{
  background: linear-gradient(rgba(59 130 246 / 0.5), rgba(0, 0, 0, 0.804)), url("/images/clay-banks-oo6gm16cqcg-unsplash.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.3s;
}
</style>
