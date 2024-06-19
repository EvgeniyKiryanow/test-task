// helpers/queryHelper.js
let queryHelperInstance = null;

class QueryHelper {
  constructor(query) {
    if (process.client) {
      this.query = query;
      this.updatedQuery = this.initializeQuery();
    } else {
      console.warn("Cannot access localStorage in server-side rendering (SSR) context.");
      this.updatedQuery = "";
    }
  }

  initializeQuery() {
    const storeQueryValue = window.localStorage.getItem("type");
    const urlSearchParams = new URLSearchParams(window.location.search);
    const currentQueryParam = urlSearchParams.get("type");
    let updatedQuery = "";

    if (this.query === "random") {
      const possibleTypes = ["main", "secondary"];
      const selectedValue = possibleTypes[Math.floor(Math.random() * possibleTypes.length)];
      window.localStorage.setItem("type", selectedValue);
      urlSearchParams.set("type", selectedValue);
      updatedQuery = selectedValue;
    } else if (this.query) {
      window.localStorage.setItem("type", this.query);
      urlSearchParams.set("type", this.query);
      updatedQuery = this.query;
    } else if (storeQueryValue && storeQueryValue !== currentQueryParam) {
      urlSearchParams.set("type", storeQueryValue);
      updatedQuery = storeQueryValue;
    } else {
      updatedQuery = currentQueryParam || "";
    }

    const paramsString = urlSearchParams.toString();
    const newUrl = `${window.location.pathname}${paramsString ? '?' + paramsString : ''}`;
    window.history.replaceState({}, "", newUrl);

    return updatedQuery;
  }
}

export const queryHelper = (query) => {
  if (!queryHelperInstance) {
    queryHelperInstance = new QueryHelper(query);
  }
  return queryHelperInstance.updatedQuery;
};
