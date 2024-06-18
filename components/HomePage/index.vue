<template>
  <div class="home-page" :class="updatedPageType">
    <div :class="`home-page__bg-${updatedPageType}`"></div>
    <TopHeader :pageType="updatedPageType" />
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader";
import { useRoute } from "nuxt/app";
import { queryHelper } from "@/helpers/queryHelper.js";

export default {
  components: {
    TopHeader,
  },
  data() {
    return {
      typeQuery: "",
      updatedPageType: "",
    };
  },
  mounted() {
    const route = useRoute();
    this.typeQuery = route.query.type || "";
    this.updatedPageType = queryHelper(route.query.type);
    this.typeQuery = this.updatedPageType;
  },
};
</script>

<style lang="scss">
.home-page {
  &__bg-main {
    position: fixed;
    opacity: 0.06;
    width: 100%;
    z-index: -1;
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("/public/images/BackgroundMain.svg");
  }
  &__bg-secondary {
    position: fixed;
    width: 100%;
    z-index: -1;
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("/public/images/BackgroundSecondary.svg");
  }
}
</style>
