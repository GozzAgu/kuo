// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      FB_API_KEY : process.env.FIREBASE_API_KEY,
      CON_KEY : process.env.CONTACT_KEY,
    }
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt'],
  devtools: { enabled: true }
})
