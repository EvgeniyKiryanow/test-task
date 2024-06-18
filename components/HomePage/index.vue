<template>
  <div class="home-page" :class="updatedPageType">
    <!-- TODO: update use mixin + mock data to avoid props not props for pageType -->
    <div :class="`home-page__bg-${updatedPageType}`"></div>
    <TopHeader :pageType="updatedPageType" />
    <section>
      <GetPlan :pageType="updatedPageType" />
      <TrialBox :pageType="updatedPageType" />
    </section>
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader";
import GetPlan from "@/components/GetPlan";
import TrialBox from "@/components/TrialBox";
import { useRoute } from "nuxt/app";
import { queryHelper } from "@/helpers/queryHelper.js";

export default {
  components: {
    TopHeader,
    GetPlan,
    TrialBox,
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
section {
  display: flex;
  justify-content: space-around;
 margin: 10vh 4vw;
  & > div {
    width: 40%;
  }
}
.home-page {
  &__bg-main {
    position: fixed;
    opacity: 0.06;
    width: 100%;
    z-index: -1;
    min-height: 100vh;
    height: 100%;
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
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("/public/images/BackgroundSecondary.svg");
  }
}
</style>
