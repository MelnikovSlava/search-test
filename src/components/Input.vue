<template>
  <div class="input-container">
    <input class="input" v-model="text" placeholder="Поиск по магазину">
    <img class="icon-search" src="../assets/search.png">
    <img v-if="!isEmpty" class="icon-clear" src="../assets/close.png" @click="onClickClear">
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Input",

  computed: {
    text: {
      get() {
        return this.$store.state.searchStr;
      },
      set(value) {
        this.$store.dispatch("updateValue", value);
      }
    },
    isEmpty() {
      return this.text === "";
    }
  },

  methods: {
    onClickClear() {
      this.text = "";
    }
  }
};
</script>

<style scoped lang="less">
@import "../styles/variables.less";

.input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.icon-search {
  position: absolute;
  left: 7px;
  width: @project-icon-size;
  height: @project-icon-size;
}

.icon-clear {
  position: absolute;
  right: 7px;
  width: @project-icon-size;
  height: @project-icon-size;
  cursor: pointer;
  opacity: 0.2;

  &:hover {
    opacity: 0.5;
  }
}

.input {
  height: 34px;
  width: 467px;
  border-radius: @project-radius;
  outline: none;
  border: 1px solid lightgray;
  padding-left: 30px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px royalblue;
  }
}
</style>
