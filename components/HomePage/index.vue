<template>
  <div class="home-page" :class="pageType">
    <div :class="`home-page__bg-${pageType}`"></div>
    <TopHeader />
    <section>
      <PriceAndTimer v-if="!isMobile" />
      <GetPlan v-if="isMobile" />
      <TrialBox />
    </section>
    <div>
      <input
      type="text"
      @input="handleInput"
      :value="trueValue"
      class="text-gray-900 text-sm rounded-lg block w-full pe-10 p-2.5"
    />
    <input
      type="text"
      :value="computedVal"
      class="text-gray-900 text-sm rounded-lg block w-full pe-10 p-2.5"
      readonly
    />
    </div>
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
      newVal: null,
      actualValue: null,
    };
  },
  mounted() {
    this.parsedData = mockData;
  },
  computed: {
    // Compute the raw numeric value to be displayed in the first input
    trueValue() {
      return this.newVal || ''; // Show newVal or an empty string if not set
    },
    // Compute the masked value for the second input
    computedVal() {
      if (this.newVal) {
        // Replace numbers with *, keep other characters unchanged, group by 4 for formatting
        let maskedValue = this.newVal
          .replace(/\d/g, "*") // Replace all digits with *
          .replace(/(.{4})(?!$)/g, "$1 "); // Add a space after every 4 characters

        return maskedValue.trim(); // Trim any trailing spaces
      }
      return '';
    },
  },

  methods: {
    handleInput(event) {
      // Get raw input from the event
      const rawInput = event.target.value;
      // Filter to keep only numeric characters, limit to 16 characters
      const filteredInput = rawInput.replace(/\D/g, "").slice(0, 16);
      // Update newVal with the filtered numeric input
      this.newVal = filteredInput;
      // Directly set the input value to the filtered input for immediate feedback
      event.target.value = filteredInput;
    }
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
