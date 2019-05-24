

<template>
  <div class="search-container">
    <Input/>
    <Autocompletion class="autocompletion"/>
  </div>
</template>

<script>
import Autocompletion from "./autocompletion/Autocompletion.vue";
import Input from "./input/Input.vue";

export default {
  name: "Search",

  components: {
    Autocompletion,
    Input
  }
};
</script>

<style scoped lang="less">
.search-container {
  position: relative;
  display: flex;
  justify-content: center;
  width: 600px;
}

.autocompletion {
  position: absolute;
  top: 46px;
  width: 100%;
}
</style>
