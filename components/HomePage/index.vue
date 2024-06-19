<template>
  <div class="home-page" :class="pageType">
    <div :class="`home-page__bg-${pageType}`"></div>
    <TopHeader />
    <section>
      <PriceAndTimer v-if="!isMobile" />
      <GetPlan v-if="isMobile" />
      <TrialBox />
    </section>
  </div>
</template>

<script>
import PriceAndTimer from "@/components/PriceAndTimer";
import TopHeader from "@/components/TopHeader";
import GetPlan from "@/components/GetPlan";
import TrialBox from "@/components/TrialBox";
import deviceMixin from "@/mixins/deviceMixin";
import pageType from "@/mixins/pageType";
import mockData from "@/mocks/mockData";

export default {
  components: {
    TopHeader,
    GetPlan,
    TrialBox,
    PriceAndTimer,
  },
  mixins: [deviceMixin, pageType],
  data() {
    return {
      parsedData: null,
    };
  },
  mounted() {
    this.parsedData = mockData;
  },
};
</script>

<style lang="scss">
@media (max-width: 1024px) {
  .home-page {
    section {
      margin: 0 10vw;
      flex-direction: column;
      & > div {
        width: 100%;
        color: white;
      }
      div {
        &:first-child {
          margin-bottom: 25px;
          // background: rgba(0, 0, 0, 0.5);
          // padding: 25px;
          border-radius: 15px;
        }
      }
    }
  }
}
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
