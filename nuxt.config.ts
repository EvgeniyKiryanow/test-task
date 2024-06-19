// https://nuxt.com/docs/api/configuration/nuxt-config
// Deploy npx gh-pages -d dist
// Start npm run dev -- -o
export default defineNuxtConfig({
  devtools: { enabled: true },
  head: {
    titleTemplate: '%s - My Test Nuxt app', 
    htmlAttrs: {
      lang: 'en', 
    },
    meta: [
      { charset: 'utf-8' }, 
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }, 
    ],
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  css: ["@/assets/fonts/fonts.css", "@/assets/css/variables.css"],
  build: {
    publicPath: '/test-task-name/_nuxt/',
  },
  router: {
    base: "/test-task/",
  },
});
