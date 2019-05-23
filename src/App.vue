<template>
  <div id="app">
    <Search/>
  </div>
</template>

<script>
import Search from "./components/Search.vue";

export default {
  name: "App",

  components: {
    Search
  }
};
</script>

<style lang="less">
// @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700");

*,
*::before,
*::after {
  box-sizing: border-box;
}

#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;
}
</style>