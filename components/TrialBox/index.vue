<template>
  <div :class="pageType" class="trial-box rounded rounded-2xl">
    <!-- TODO: update color and for SVG and for text -->
    <div class="px-6 py-4">
      <NuxtImg
        v-if="pageType === 'main'"
        class="trial-box__img"
        src="/images/Asteroid.svg"
      />
      <!-- <NuxtImg
        v-if="pageType === 'main'"
        class="trial-box__img"
        src="/images/Ball.svg"
      /> -->
      <NuxtImg
        v-if="pageType === 'secondary'"
        class="trial-box__img"
        src="/images/Rocket.svg"
      />
      <div class="trial-box__header">
        <div>
          <h3 class="trial-box__days">
            3-day trial for <span class="type-format">$0.99</span>
          </h3>
          <h4 class="trial-box__price">Then $9.99</h4>
          <h5 class="trial-box__price-week">$39.99/week</h5>
        </div>
        <div>
          <Timer
            :bgColor="pageType === 'main' ? '#00CA14' : 'rgba(78, 170, 255, 1)'"
            :time="5"
          />
        </div>
      </div>
      <div>
        <ul class="trial-box__items custom-icons">
          <li class="trial-box__item">
            Exclusive access to <span class="type-format">350+</span> learning
            programs
          </li>
          <li class="trial-box__item">Personalized course plan</li>
          <li class="trial-box__item">Comfy learning schedule made by you</li>
          <li class="trial-box__item">
            <span class="type-format">24/7</span> tutor support in a secure chat
          </li>
          <li class="trial-box__item">Lifetime access to materials</li>
        </ul>
      </div>
      <button class="trial-box__button">
        <NuxtImg src="/images/LockClosed.svg" />Safe & secure payment
      </button>

      <p class="text-gray-700 text-base trial-box__notice">
        $0.99 charged today. If you don't cancel at least 24 hours before the
        end of the 3-day trial period, you will automatically be charged the
        full price of $19.99/Month . You can cancel your subscription at any
        time. By continuing, you indicate that you've read and agree to our
        Terms & Conditions, Privacy Policy , Money Back , and Subscription Terms
        .
      </p>
    </div>
  </div>
</template>

<script>
import Timer from "./_components/timer.vue";
export default {
  name: "TrialBox",
  components: { Timer },
  props: {
    pageType: {
      type: String,
      required: true,
      default: "main",
      validator: (value) => ["main", "secondary"].includes(value),
    },
  },
};
</script>

<style lang="scss" scoped>
.trial-box {
  position: relative;
  &.main {
    border: 1px solid grey;
    background-color: white;
    .type-format {
      color: #01c120;
    }
    .trial-box__button {
      color: #01c120;
    }
  }
  &.secondary {
    border: 4px solid rgba(255, 255, 255, 0.4);
    background: rgba(0, 0, 0, 0.4);
    .type-format {
      color: var(--secondary-color);
    }
    .trial-box__img {
      right: -100px;
      top: 20%;
    }
    .trial-box__button {
      color: var(--secondary-color);
    }
  }
  &__header {
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
  &__img {
    position: absolute;
    right: 5%;
    width: 200px;
    top: -15%;
  }
  &__items {
    list-style-type: none;
    padding: 0;
    padding-bottom: 25px;
  }
  &__item {
    padding-left: 25px;
    position: relative;
    font-family: "Proxima Nova Regular";
    font-size: 16px;
    font-weight: 400;
    line-height: 19.2px;
    text-align: left;
    margin-bottom: 15px;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      background-image: url("/images/Star.svg");
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 15px;
    padding: 15px;
    font-family: "Proxima Nova Regular";
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    text-align: center;
    border: 1px solid lightgray;
    img {
      width: 20px;
      margin-right: 10px;
    }
  }
  &__notice {
    padding-top: 15px;
    font-family: "Proxima Nova Regular";
    font-size: 12px;
    font-weight: 400;
    line-height: 14.4px;
    text-align: center;
    color: grey;
  }
}
</style>
