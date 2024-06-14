<template>
  <div class="wrapper">
    <div class="wrapper__bg"></div>
    <TopHeader />
  </div>
</template>

<script>
import TopHeader from "./components/TopHeader";
export default {
  name: "App",
  components: { TopHeader },
};
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
