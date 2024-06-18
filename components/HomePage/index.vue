<template>
  <div class="home-page">
    <div class="home-page__bg"></div>
    <TopHeader />
    <p>Current test query parameter: {{ updatedQuery }}</p>
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader";
export default {
  name: "HomePage",
  components: { TopHeader },
  props: {
    updatedQuery: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.home-page {
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
