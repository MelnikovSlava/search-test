<template>
  <div v-if="!isEmptyValue" class="аutocompletion-container">
    <p class="error" v-if="isError">{{error}}</p>
    <div v-else-if="isLoading" class="loading">
      <VueLoading type="spin" color="lightgray" :size="{ width: '40px', height: '40px' }"/>
      <p>Loading</p>
    </div>
    <p class="no-results" v-else-if="isEmptyFilteredCountries">Not found</p>
    <ul class="list" v-else>
      <li
        class="list-item"
        v-for="(item,i) in filteredCountries"
        :key="item.alpha3Code"
        @click="selectCountry(item.alpha3Code)"
        @keydown="onPressKey($event, item.alpha3Code)"
        :tabindex="i+2"
      >
        <TextEmphasis :textstr="item.name" :substr="searchStr"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TextEmphasis from "./TextEmphasis";
import { createHash } from "crypto";
import { keyCodes } from "../../../constants/consts";
import { goToFocusElemByStep } from "../../../utils/helpers";
import { VueLoading } from "vue-loading-template";

export default {
  name: "Autocompletion",

  components: {
    TextEmphasis,
    VueLoading
  },

  computed: {
    filteredCountries() {
      return this.countryList.filter(
        item => ~item.name.toLowerCase().indexOf(this.searchStr)
      );
    },
    isEmptyFilteredCountries() {
      return this.filteredCountries.length === 0;
    },
    isEmptyValue() {
      return this.searchStr === "";
    },
    isError() {
      return this.error !== null;
    },
    ...mapState({
      searchStr: state => state.storeSearch.searchStr.trim().toLowerCase(),
      countryList: state => state.storeSearch.countryList,
      isLoading: state => state.storeSearch.isLoading,
      error: state => state.storeSearch.error
    })
  },

  methods: {
    selectCountry(countryCode) {
      this.$store.commit("storeSearch/setValue", "");

      this.$store.dispatch("storeCountry/fetchCountry", countryCode);
    },
    onPressKey(e, countryCode) {
      const keyCode = e.keyCode;

      switch (keyCode) {
        case keyCodes.KEY_DOWN:
          e.preventDefault();
          goToFocusElemByStep();
          break;
        case keyCodes.KEY_UP:
          e.preventDefault();
          goToFocusElemByStep(-1);
          break;
        case keyCodes.KEY_ENTER:
          this.selectCountry(countryCode);
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style scoped lang="less">
@import "../../../styles/variables.less";

.аutocompletion-container {
  border-radius: @project-radius;
  box-shadow: 0 1px 10px 1px gray;
  overflow: hidden;
  z-index: 1;
  background-color: white;
}

.no-results {
  text-align: left;
  padding-left: 14px;
}

.list {
  margin: 0;
  padding: 0;
  max-height: 200px;
  overflow: auto;
}

.list-item {
  list-style: none;
  padding: 7px 30px;
  font-size: 15px;
  text-align: left;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: lightgray;
    outline: none;
  }
}

.loading {
  margin: 10px auto;
  width: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
