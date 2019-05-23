

<template>
  <div class="search-container">
    <Input/>
    <Autocompletion/>
  </div>
</template>

<script>
import Autocompletion from "./Autocompletion.vue";
import Input from "./Input.vue";

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
}
</style>
