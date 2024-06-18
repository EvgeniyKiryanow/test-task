<template>
  <header :class="['header', pageType]">
    <NuxtImg :src="pageConfig[pageType]?.logoSrc" />
    <h3>
      <span>{{ pageConfig[pageType]?.firstText }}</span
      >{{ pageConfig[pageType]?.secondText }}
    </h3>
  </header>
</template>

<script>
export default {
  name: "TopHeader",
  props: {
    pageType: {
      type: String,
      required: true,
      default: "main",
      validator: (value) => ["main", "secondary"].includes(value),
    },
  },
  computed: {
    pageConfig() {
      return {
        main: {
          logoSrc: "/images/MainLogo.svg",
          firstText: "Planet",
          secondText: "Learn",
        },
        secondary: {
          logoSrc: "/images/SecondaryLogo.svg",
          firstText: "Smart",
          secondText: "Study",
        },
      };
    },
  },
};
</script>

<style lang="scss">
.header {
  height: 56px;
  width: 86%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
  }

  h3 {
    font-family: "Proxima Nova Bold";
    font-size: 24px;
    line-height: 29.23px;
    text-align: left;
    padding-left: 5px;

    span {
      color: var(--main-orange-color); /* Adjust color as needed */
    }
  }

  &.main {
    h3 {
      span {
        color: var(--main-orange-color);
      }
    }
  }

  &.secondary {
    h3 {
      span {
        color: var(--secondary-orange-color);
      }
    }
  }
}
</style>
