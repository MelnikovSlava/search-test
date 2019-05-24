<template>
  <div id="app">
    <Search/>
    <CountryInfo/>
  </div>
</template>

<script>
import Search from "./components/search/Search.vue";
import CountryInfo from "./components/country-info/CountryInfo.vue";

export default {
  name: "App",

  components: {
    Search,
    CountryInfo
  }
};
</script>

<style lang="less">
@import "./styles/index.less";

#app {
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  background-color: #c5bfa7;
  padding-top: 30px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

#app:before {
  content: "";
  width: 100%;
  height: 100px;
  background-color: #9a9385;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
</style>