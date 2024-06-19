<template>
  <div :class="pageType" class="trial-box rounded rounded-2xl">
    <!-- TODO: update color and for SVG and for text -->
    <GetPlan v-if="!isMobile" :pageType="pageType" />
    <div class="px-6 py-4 trial-box__information">
      <PriceAndTimer v-if="isMobile" :pageType="pageType" />
      <NuxtImg
        v-if="pageType === 'secondary'"
        class="trial-box__img"
        src="/images/Rocket.svg"
        alt="Rocket"
      />
      <NuxtImg
        v-if="pageType === 'main'"
        class="trial-box__img"
        src="/images/Asteroid.svg"
        alt="Asteroid"
      />
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
        <svg
          width="17"
          height="24"
          viewBox="0 0 17 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.3 16C16.3016 17.4047 15.9425 18.785 15.2589 20.0022C14.5754 21.2194 13.5913 22.2306 12.4058 22.934C11.2203 23.6374 9.87516 24.0082 8.50559 24.0092C7.13603 24.0102 5.7904 23.6413 4.60393 22.9397C3.41745 22.2381 2.43194 21.2284 1.74665 20.0122C1.06135 18.796 0.700392 17.4162 0.699997 16.0115C0.699603 14.6068 1.05977 13.2268 1.74439 12.0102C2.429 10.7936 3.41392 9.78334 4.6 9.08099V4C4.6 2.93913 5.01095 1.92172 5.74234 1.17157C6.47373 0.421424 7.46565 0 8.5 0C9.53434 0 10.5263 0.421424 11.2577 1.17157C11.989 1.92172 12.4 2.93913 12.4 4V9.07999C13.5851 9.78082 14.5695 10.7893 15.2541 12.004C15.9387 13.2188 16.2994 14.5969 16.3 16ZM4.6 9.08099L4.72675 9.00201H4.6V9.08099ZM8.5 2.00201C7.98283 2.00201 7.48686 2.21273 7.12117 2.5878C6.75547 2.96287 6.55 3.47158 6.55 4.00201V8.26199C7.82752 7.91132 9.17248 7.91132 10.45 8.26199V4C10.45 3.46957 10.2445 2.96086 9.87883 2.58578C9.51313 2.21071 9.01717 2 8.5 2V2.00201ZM12.4 9.00201H12.2732L12.4 9.08099V9V9.00201ZM8.5 9.98901C7.34058 9.98862 6.20714 10.3409 5.24294 11.0012C4.27873 11.6616 3.52706 12.6004 3.08311 13.6989C2.63915 14.7974 2.52283 16.0063 2.74878 17.1727C2.97474 18.339 3.53286 19.4104 4.35256 20.2514C5.17225 21.0924 6.21662 21.6652 7.35373 21.8973C8.49084 22.1295 9.66956 22.0105 10.7408 21.5555C11.812 21.1006 12.7276 20.33 13.3718 19.3413C14.016 18.3526 14.3598 17.1902 14.3598 16.001C14.3582 14.4072 13.7404 12.879 12.642 11.7516C11.5435 10.6242 10.054 9.98965 8.5 9.987V9.98901ZM8.5 18.002C8.24141 18.002 7.99337 17.8966 7.81052 17.7091C7.62768 17.5216 7.525 17.2672 7.525 17.002V15.002C7.525 14.7368 7.62768 14.4824 7.81052 14.2949C7.99337 14.1074 8.24141 14.002 8.5 14.002C8.75858 14.002 9.00662 14.1074 9.18947 14.2949C9.37232 14.4824 9.475 14.7368 9.475 15.002V17.002C9.47448 17.2669 9.37155 17.5207 9.18876 17.7078C9.00597 17.8949 8.75825 18 8.5 18V18.002Z"
            :fill="pageType === 'main' ? '#01c120' : '#4EAAFF'"
          />
        </svg>

        Safe & secure payment
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
import PriceAndTimer from "@/components/PriceAndTimer";
import deviceMixin from "@/mixins/deviceMixin";
import GetPlan from "@/components/GetPlan";
import pageType from "@/mixins/pageType";
export default {
  name: "TrialBox",
  mixins: [deviceMixin, pageType],
  components: { PriceAndTimer, GetPlan },
};
</script>

<style lang="scss" scoped>
@media (max-width: 1024px) {
  .trial-box {
    &.main {
      background-color: transparent !important;
      border: unset !important;
      .trial-box__information {
        background: transparent;
        li {
          color: black;
        }
      }
    }
  }
  .trial-box__img {
    display: none;
  }
  .trial-box {
    & > div {
      background: rgba(0, 0, 0, 0.5);
    }
  }
}
.trial-box {
  position: relative;
  &.main {
    border: 1px solid grey;
    background-color: white;
    .type-format {
      color: var(--main-color);
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
    img,
    svg {
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
