import { useRoute } from "nuxt/app";
import { queryHelper } from "@/helpers/queryHelper.js";
export default {
  data() {
    return {
      typeQuery: "",
      pageType: "",
    };
  },
  mounted() {
    const route = useRoute();
    this.typeQuery = route.query.type || "";
    this.pageType = queryHelper(route.query.type);
    this.typeQuery = this.pageType;
    console.log(this.pageType, 'pagetype')
  },
};
