<script setup>
const positions = ref([
  {
    name: 'Engineering Services',
    description: '',
    img: '/images/emmanuel-ikwuegbu--0-kl1BjvFc-unsplash.jpg'
  },
  {
    name: 'LV/MV Electrical System Installation',
    description: '',
    img: '/images/LM installation.jpg'
  },
  {
    name: 'Fire & Gas Systems Installation',
    description: '',
    img: '/images/fireandgas.jpg'
  },
  {
    name: 'Oil & Gas Metering Services',
    description: '',
    img: '/images/oilandgasmetering.jpg'
  },
  {
    name: 'HVAC Systems',
    description: '',
    img: '/images/hvac.jpg'
  },
  {
    name: 'Valves & Actuation (Installation & Maintenance)',
    description: '',
    img: '/images/valve.jpg'
  },
  {
    name: 'Procurement',
    description: '',
    img: '/images/pro.jpg=ws1280x960'
  },
  {
    name: 'Environmental Services',
    description: '',
    img: '/images/envservices.jpg'
  },
  {
    name: 'Logistics',
    description: '',
    img: '/images/logistics.jpg'
  },
])

const processes = ref([
  {
    name: 'Transparency',
    img: '/images/our-hiring-process.svg',
  },
  {
    name: 'Appraisals',
    img: '/images/learn-about-us.svg',
  },
  {
    name: 'Career growth',
    img: '/images/transparent-path.svg',
  },
])

const typedText = ref('')
const textToType = ref('KUO SMART SOLUTIONS LIMITED')

function typetext() {
  let i = 0
  setInterval(() => {
    if (i < textToType.value.length) {
      typedText.value += textToType.value.charAt(i)
      i++
    }
  }, 200)
}

onMounted(() => {
  typetext()
})
</script>

<template>
  <div class="lg:px-40 p-4 lg:py-4">
    <div class="md:shadow-md bg-white md:rounded-3xl mb-24">
      <div class="bg-blue-950 px-8 py-6 md:py-12 xl:p-16">
        <h1 class="text-2xl xl:text-5xl text-white text-center">
          We Are <span class="font-bold text-2xl xl:text-5xl">{{ typedText }}</span>
        </h1>
      </div>

      <div class="mb-12 p-4 sm:px-12 mt-8">
        <Icon class="text-5xl mt-1 text-red-700" name="material-symbols:nest-cam-floodlight-outline" />
        <h1 class="mt-8 text-2xl mb-12 text-blue-900 font-semibold md:border-l-4 border-red-700 pl-2">
          Our Services<Icon class="ml-2" name="ic:outline-double-arrow" />
        </h1>
        <div class="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div v-for="position in positions">
            <div>
              <img class="h-[12em] w-[100%]" :src="position.img" />
            </div>
            <div>
              <p class="text-white font-bold flex justify-center items-center text-center py-2 h-[4em] bg-blue-950">
                {{ position.name }}
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
