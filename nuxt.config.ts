// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/icon', '@nuxtjs/seo', '@nuxt/eslint'],

  // TypeScript strict mode
  typescript: {
    strict: true,
  },
})
