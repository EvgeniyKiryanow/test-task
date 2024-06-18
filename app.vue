<template>
  <HomePage :updatedQuery="updatedQuery" />
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'nuxt/app'
import HomePage from "@/components/HomePage";
import { queryHelper } from '@/helpers/queryHelper.js';

const route = useRoute()
const typeQuery = ref(route.query.type || '')
const updatedQuery = queryHelper(route.query.type);
typeQuery.value = updatedQuery;

</script>
