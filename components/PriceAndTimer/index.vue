<template>
  <div class="price-timer" :class="pageType">
    <div class="price-timer__header-wrapper">
      <div class="price-timer__header">
        <h3 class="price-timer__days">
          3-day trial for <span class="type-format">$0.99</span>
        </h3>
        <h4 class="price-timer__price">Then $9.99</h4>
        <h5 class="price-timer__price-week">$39.99/week</h5>
      </div>
      <Timer :bgColor="pageType === 'main' ? '#00CA14' : '#4EAAFF'" :time="5" />
    </div>
  </div>
</template>

<script>
import Timer from "@/components/LifeTimer";
import pageType from '@/mixins/pageType';
export default {
  name: "PriceAndTimer",
  components: { Timer },
  mixins: [pageType]
};
</script>

<style lang="scss" scoped>
@media (max-width: 1024px) {
  .price-timer {
    &.secondary {
      .price-timer__header-wrapper {
        background: #00000099;
      }
    }
    &.main {
      .price-timer__header-wrapper {
        background: white;
        border: 1px solid grey;
      }
      h3,
      h4 {
        color: black;
      }
    }
    &__header-wrapper {
      padding: 20px !important;
      margin-bottom: 15px !important;
    }
    &_header {
      margin-bottom: 0 !important;
    }
  }
}
.price-timer {
  &.main {
    .type-format {
    color: var(--main-color);
    }
  }
  &.secondary {
    .type-format {
      color: var(--secondary-color);
    }
  }
  &__header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0 25px 0;
  }
  &__days {
    font-family: "Proxima Nova Bold";
    font-size: 24px;
    font-weight: 800;
    line-height: 28.8px;
    text-align: left;
    padding-bottom: 5px;
  }
  &__price {
    font-family: "Proxima Nova Regular";
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
    padding-bottom: 5px;
  }
  &__price-week {
    font-family: "Proxima Nova Regular";
    font-size: 16px;
    font-weight: 600;
    line-height: 22.4px;
    text-align: left;
    text-decoration: line-through;
    padding-bottom: 5px;
    color: lightgray;
  }
}
</style>
