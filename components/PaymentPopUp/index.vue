<template>
  <div v-if="isPopup" class="popup" @click.self="closePopup">
    <form class="w-full max-w-lg" @submit.prevent="submitForm">
      <h3>Payment Method</h3>

      <!-- Payment Buttons -->
      <button
        type="button"
        class="text-gray-900 bg-[#F7BE38] focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
      >
        <NuxtImg src="images/PayPal.svg" />
        BUY NOW
      </button>
      <button
        type="button"
        class="text-gray-900 bg-[white] focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
      >
        <NuxtImg src="images/GPay.svg" />
        Pay
      </button>

      <!-- Separator -->
      <div class="relative flex items-center">
        <div class="flex-grow border-t border-gray-400"></div>
        <span class="flex-shrink mx-4 text-gray-400">Or</span>
        <div class="flex-grow border-t border-gray-400"></div>
      </div>

      <!-- Card Number -->
      <div class="popup__card">
        <label
          for="card-number-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white bg-[#617398] rounded-lg"
          >Card Number</label
        >
        <input
          type="text"
          id="card-number-input"
          class="bg-[#617398] text-gray-900 text-sm rounded-lg block w-full pe-10 p-2.5"
          placeholder="4242 4242 4242 4242"
          v-mask="'#### #### #### ####'"
          v-model="cardNumber"
          @input="validateCardNumber"
          :class="{ 'input-error': !validCardNumber && cardNumber.length > 0 }"
          required
        />
        <div
          class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"
        >
          <NuxtImg src="images/MasterCard.svg" />
        </div>
      </div>

      <!-- Expiry Date -->
      <div class="popup__date">
        <div>
          <label
            for="month"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white bg-[#617398] rounded-lg"
            >Month</label
          >
          <select
            id="month"
            class="bg-[#617398] text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"
            v-model="expiryMonth"
            @change="validateExpiryDate"
            :class="{ 'input-error': !validExpiryDate && expiryMonth !== '' }"
            required
          >
            <option disabled value="">Select</option>
            <option
              v-for="(month, index) in months"
              :key="index"
              :value="index + 1"
            >
              {{ month }}
            </option>
          </select>
        </div>
        <div>
          <label
            for="Year"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white bg-[#617398] rounded-lg"
            >Year</label
          >
          <select
            id="Year"
            class="bg-[#617398] text-gray-900 text-sm rounded-lg dark:text-white block w-full p-2.5"
            v-model="expiryYear"
            @change="validateExpiryDate"
            :class="{ 'input-error': !validExpiryDate && expiryYear !== '' }"
            required
          >
            <option disabled value="">Select</option>
            <option v-for="year in years" :key="year" :value="year">
              {{ year }}
            </option>
          </select>
        </div>
        <div class="relative">
          <label
            for="cvc"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white bg-[#617398] rounded-lg"
            >CVC</label
          >
          <input
            type="password"
            id="cvc"
            class="bg-[#617398] text-gray-900 text-sm rounded-lg block w-full pe-10 p-2.5"
            placeholder="123"
            v-mask="'###'"
            v-model="cvc"
            @input="validateCVC"
            :class="{ 'input-error': !validCVC && cvc.length > 0 }"
            required
          />
        </div>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        :class="{
          'cursor-not-allowed': !isFormValid,
          'cursor-pointer': isFormValid,
        }"
        :disabled="!isFormValid"
        @click="submitForm"
        class="text-white bg-[#617398] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Submit
        {{ isFormValid }}
      </button>

      <button
        type="button"
        @click="closePopup"
        class="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Cancel
      </button>
    </form>
  </div>
</template>

<script>
import {mask} from 'vue-the-mask'
export default {
  name: "PaymentPopUp",
  directives: {mask},
  props: {
    isPopup: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvc: "",
      validCardNumber: false,
      validExpiryDate: false,
      validCVC: false,
    };
  },
  computed: {
    years() {
      const startYear = 1920;
      const currentYear = new Date().getFullYear();
      const endYear = currentYear + 10;
      return Array.from(
        { length: endYear - startYear + 1 },
        (v, i) => startYear + i
      );
    },
    months() {
      return [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
    },
    isFormValid() {
      return this.validCardNumber && this.validExpiryDate && this.validCVC;
    },
  },
  methods: {
    closePopup() {
      this.$emit("update:isPopup", false);
    },
    validateCardNumber() {
        this.cardNumber < 12 ? this.validCardNumber = false : this.validCardNumber = true;
    },
    validateExpiryDate() {
      this.validExpiryDate = this.expiryMonth !== "" && this.expiryYear !== "";
    },
    validateCVC() {
      const regex = /^\d{3,4}$/;
      this.validCVC = regex.test(this.cvc);
    },
    submitForm() {
      if (this.isFormValid) {
        alert("Form submitted successfully!");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.popup {
  position: fixed;
  z-index: 999;
  align-items: center;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  display: flex;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  img {
    width: 30px;
  }
  &__card {
    position: relative;
    label {
      width: 20%;
      position: relative;
      bottom: -15px;
      left: 10px;
      font-family: "Proxima Nova Regular";
      font-size: 12px;
      font-weight: 700;
      line-height: 14.62px;
    }
  }
  &__date {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div {
      width: 30%;
    }
    label {
      width: 35%;
      position: relative;
      bottom: -15px;
      left: 10px;
      font-family: "Proxima Nova Regular";
      font-size: 12px;
      font-weight: 700;
      line-height: 14.62px;
    }
  }
  &__card,
  &__date {
    padding-bottom: 15px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Proxima Nova Regular";
    font-size: 16px;
    font-weight: 700;
    line-height: 19.49px;
    text-align: left;
    margin-bottom: 15px;
    margin-top: 15px;

    img {
      width: 35px;
      margin-right: 10px;
    }
  }
  form {
    background: rgba(77, 94, 130, 1);
    border-radius: 15px;
    padding: 15px;
    text-align: center;
    display: flex;
    flex-direction: column;
    input {
      color: white;
    }
  }
  h3 {
    font-family: "Proxima Nova Bold";
    font-size: 21px;
    font-weight: 800;
    line-height: 25.2px;
    text-align: center;
    color: white;
    padding: 15px 0;
  }
}
</style>
