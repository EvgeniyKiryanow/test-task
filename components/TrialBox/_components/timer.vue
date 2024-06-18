<template>
    <div :style="{ background: `linear-gradient(270deg, black ${percentage}%, #00CA14 ${percentage}%)` }" class="timer">
      {{ formattedTime }}
    </div>
  </template>
  
  <script>
  export default {
    name: "Timer",
    props: {
      time: {
        type: Number,
        required: false,
        default: 3
      }
    },
    data() {
      return {
        secondsRemaining: this.getTimeFromLocalStorage() || this.time * 60,
        intervalId: null
      };
    },
    computed: {
      formattedTime() {
        const minutes = Math.floor(this.secondsRemaining / 60);
        const seconds = this.secondsRemaining % 60;
        return `${this.pad(minutes)}:${this.pad(seconds)}`;
      },
      percentage() {
        return ((this.time * 60 - this.secondsRemaining) / (this.time * 60)) * 100;
      }
    },
    methods: {
      pad(value) {
        return value < 10 ? `0${value}` : value;
      },
      startCountdown() {
        this.intervalId = setInterval(() => {
          if (this.secondsRemaining > 0) {
            this.secondsRemaining--;
            this.saveTimeToLocalStorage(this.secondsRemaining);
          } else {
            clearInterval(this.intervalId);
          }
        }, 1000); 
      },
      getTimeFromLocalStorage() {
        return parseInt(localStorage.getItem('timer_time'), 10);
      },
      saveTimeToLocalStorage(seconds) {
        localStorage.setItem('timer_time', seconds.toString());
      }
    },
    mounted() {
      if (!this.getTimeFromLocalStorage()) {
        this.saveTimeToLocalStorage(this.time * 60);
      }
      this.startCountdown();
    },
    beforeDestroy() {
      clearInterval(this.intervalId);
      this.saveTimeToLocalStorage(this.secondsRemaining);
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .timer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 60px;
    text-align: center;
    font-family: "Proxima Nova Regular";
    font-size: 24px;
    font-weight: 600;
    line-height: 33.6px;
    text-align: center;
    color: white;
    border-radius: 15px;
  }
  </style>
  