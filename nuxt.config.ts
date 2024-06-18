// https://nuxt.com/docs/api/configuration/nuxt-config
// Deploy npx gh-pages -d dist
// Start npm run dev -- -o
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  css: ["@/assets/fonts/fonts.css", "@/assets/css/variables.css"],
  target: "static",
  router: {
    base: "/test-task/",
  },
});
