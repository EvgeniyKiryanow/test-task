// deviceMixin.js
import UAParser from 'ua-parser-js';

export default {
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    isTypeMobile() {
      const parser = new UAParser();
      const result = parser.getResult();
      return result.device.type === 'mobile';
    },
    isMobile() {
      return this.windowWidth > 1024 || !this.isTypeMobile;
    },
  },
  mounted() {
    window.addEventListener('resize', this.updateWidth);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateWidth);
  },
  methods: {
    updateWidth() {
      this.windowWidth = window.innerWidth;
    },
  },
};
