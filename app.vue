<template>
  <div class="wrapper">
    <div class="wrapper__bg"></div>
    <p>Current test query parameter: {{ typeQuery }}</p>
    <TopHeader />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'nuxt/app'
import TopHeader from '@/components/TopHeader'
import { queryHelper } from '@/helpers/queryHelper.js';

const route = useRoute()
const typeQuery = ref(route.query.type || '')
queryHelper(route.query.type);

</script>

<style lang="scss" scoped>
.wrapper {
  &__bg {
    position: fixed;
  opacity: 0.06;
  width: 100%;
  z-index: -1;
  min-height: 100vh;
  background-image: url("/public/images/BackgroundMain.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  }
}

</style>
