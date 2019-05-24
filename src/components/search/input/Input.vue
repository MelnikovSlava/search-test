<template>
  <div class="input-container">
    <input
      class="input"
      v-model="text"
      placeholder="Search country"
      @keyup.down="onPressDown"
      autofocus
      tabindex="1"
    >
    <img class="icon-search" src="../../../assets/search.png">
    <img v-if="!isEmpty" class="icon-clear" src="../../../assets/close.png" @click="onClickClear">
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { goToFocusElemByStep } from "../../../utils/helpers";

export default {
  name: "Input",

  computed: {
    text: {
      get() {
        return this.$store.state.storeSearch.searchStr;
      },
      set(value) {
        this.$store.dispatch("storeSearch/updateValue", value);
      }
    },
    isEmpty() {
      return this.text === "";
    }
  },

  methods: {
    onClickClear() {
      this.text = "";
    },
    onPressDown() {
      goToFocusElemByStep();
    }
  }
};
</script>

<style scoped lang="less">
@import "../../../styles/variables.less";

.input-container {
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
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
  height: 100%;
  width: 100%;
  font-size: 15px;
  border-radius: @project-radius;
  outline: none;
  border: none;
  padding-left: 32px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px #4e5560;
  }
}
</style>
