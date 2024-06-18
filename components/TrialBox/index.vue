<template>
  <div :class="pageType" class="trial_box rounded bg-white rounded-2xl">
    <div class="px-6 py-4">
      <NuxtImg class="trial_box__img" src="/images/Asteroid.svg" />
      <div>
        <div>
          <h3>3-day trial for $0.99</h3>
          <h4>Then $9.99</h4>
          <h5>$39.99/week</h5>
        </div>
        <div>
          <Timer />
        </div>
      </div>
      <div>
        <ul>
          <li>Exclusive access to 350+ learning programs</li>
          <li>Personalized course plan</li>
          <li>Comfy learning schedule made by you</li>
          <li>24/7 tutor support in a secure chat</li>
          <li>Lifetime access to materials</li>
        </ul>
      </div>
      <button><NuxtImg src="/images/LockClosed.svg" />Safe</button>

      <p class="text-gray-700 text-base">
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
  components: {Timer},
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
.trial_box {
  position: relative;
  &__img {
    position: absolute;
    right: 5%;
    width: 200px;
    top: -15%;
  }
}
</style>
