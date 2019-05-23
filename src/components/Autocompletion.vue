<template>
  <div v-if="!isEmptyValue" class="аutocompletion-container">
    <p class="error" v-if="isError">{{error}}</p>
    <p class="loading" v-else-if="isLoading">Loading</p>
    <p class="no-results" v-else-if="isEmptyFilteredCountries">Not found</p>
    <ul class="list" v-else>
      <TextEmphasis
        class="list-item"
        v-for="item in filteredCountries"
        :key="item"
        :textstr="item"
        :substr="searchStr"
      />
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TextEmphasis from "./TextEmphasis";

export default {
  name: "Autocompletion",

  components: {
    TextEmphasis
  },

  computed: {
    filteredCountries() {
      return this.countryList.filter(
        item => ~item.toLowerCase().indexOf(this.searchStr)
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
    ...mapState(["countryList", "isLoading", "error", "searchStr"])
  }
};
</script>

<style scoped lang="less">
@import "../styles/variables.less";

.аutocompletion-container {
  position: absolute;
  width: 100%;
  top: 40px;
  border-radius: @project-radius;
  box-shadow: 0 1px 2px 1px lightgray;
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
  padding: 5px 14px;
  font-size: 13px;
  text-align: left;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: lightgray;
  }
}
</style>
