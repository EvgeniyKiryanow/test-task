<template>
  <header class="header">
    <NuxtImg src="/images/Logo.svg" />
    <h1><span>Planet</span>Learn</h1>
  </header>
</template>

<script>
export default {
  name: "TopHeader",
};
</script>

<style lang="scss" scoped>
.header {
  height: 56px;
  width: 86%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
  }

  h1 {
    font-family: "Proxima Nova Regular";
    font-size: 24px;
    line-height: 29.23px;
    text-align: left;
    padding-left: 5px;
  }
  span {
    color: var(--main-orange-color);
  }
}
</style>
