<template>
    <div :class="['get-plan', pageType]">
      <PaymentPopUp :isPopup="isPopup" @update:isPopup="isPopup = $event" :pageType="pageType" />
      <h1 class="get-plan__title">
        <span>Start</span> your learning journey <span>now</span>
      </h1>
      <h3 class="get-plan__subtitle">
        Get a
        <span class="get-plan__study-title">{{
          pageConfig[pageType]?.firstText
        }}</span
        ><span class="get-plan__study-subitle">{{
          pageConfig[pageType]?.secondText
        }}</span>
        plan to rock self-learning
      </h3>
      <button @click="showPopup" class="font-bold py-4 px-16 rounded-full get-plan__button">
        Get my Plan
      </button>
    </div>
  </template>
  
  <script>
  import PaymentPopUp from "@/components/PaymentPopUp";
  export default {
    name: "GetPlan",
    components: { PaymentPopUp },
    props: {
      pageType: {
        type: String,
        required: true,
        default: "main",
        validator: (value) => ["main", "secondary"].includes(value),
      },
    },
    data() {
      return {
        isPopup: false,
      };
    },
    computed: {
      pageConfig() {
        return {
          main: {
            firstText: "Planet",
            secondText: "Learn",
          },
          secondary: {
            firstText: "Smart",
            secondText: "Study",
          },
        };
      },
    },
    methods: {
      showPopup() {
        this.isPopup = true;
      },
    },
  };
  </script>
  
<style lang="scss" scoped>
.get-plan {
  &__title {
    font-family: "Proxima Nova Bold";
    font-size: 48px;
    font-weight: 800;
    line-height: 57.6px;
    text-align: left;
    padding-bottom: 15px;
    color: black;
  }
  &__subtitle {
    font-family: "Proxima Nova Regular";
    font-size: 24px;
    font-weight: 600;
    line-height: 28.8px;
    text-align: left;
    padding-bottom: 25px;
    color: black;
  }
  &__study-title,
  &__study-subitle {
    font-family: "Proxima Nova Bold";
    color: black;
  }
  &.main {
    .get-plan__study-title {
      color: var(--main-color);
    }
    .get-plan__button {
      color: white;
      background: black;
    }
  }
  &.secondary {
    .get-plan__study-title,
    span {
      color: var(--secondary-color);
    }
    .get-plan__button {
      color: #495eee;
      background: white;
    }
  }
}
</style>
