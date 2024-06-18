// helpers/queryHelper.js
export const queryHelper = function (query) {
  if (process.client) {
    const storeQueryValue = window.localStorage.getItem("type");
    const urlSearchParams = new URLSearchParams(window.location.search);
    const currentQueryParam = urlSearchParams.get("type");
    const posibleTypes = ["main", "secondary"];
    let updatedQuery = "";

    if (query === "random") {
      const posibleTypes = ["main", "secondary"];
      const selectedValue =
        Math.random() < 0.5 ? posibleTypes[0] : posibleTypes[1];
      window.localStorage.setItem("type", selectedValue);
      urlSearchParams.set("type", selectedValue);
      updatedQuery = selectedValue;
    } else if (query) {
      window.localStorage.setItem("type", query);
      urlSearchParams.set("type", query);
      updatedQuery = query;
    } else if (
      !query &&
      storeQueryValue &&
      storeQueryValue !== currentQueryParam
    ) {
      urlSearchParams.set("type", storeQueryValue);
      updatedQuery = storeQueryValue;
    } else {
      updatedQuery = query;
    }

    const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
    window.history.replaceState({}, "", newUrl);
    return updatedQuery;
  } else {
    console.warn(
      "Cannot access localStorage in server-side rendering (SSR) context."
    );
  }
};
