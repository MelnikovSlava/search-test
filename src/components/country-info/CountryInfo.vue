<template>
  <div class="country-info-container">
    <p class="error" v-if="isError">{{error}}</p>
    <VueLoading
      v-else-if="isLoading"
      type="spin"
      color="gray"
      :size="{ width: '140px', height: '140px' }"
    />
    <p class="select-contry" v-else-if="isEmptySelectedCountry">Choose country</p>
    <main v-else>
      <section class="sec-img">
        <img :src="selectedCountryData.flag">
      </section>
      <article>
        <div class="cell">
          <p>Name:</p>
          <p>{{selectedCountryData.name}}</p>
        </div>
        <div class="cell">
          <p>Code:</p>
          <p>{{selectedCountryData.alpha3Code}}</p>
        </div>
        <div class="cell">
          <p>Capital:</p>
          <p>{{selectedCountryData.capital}}</p>
        </div>
        <div class="cell">
          <p>Population:</p>
          <p>{{selectedCountryData.population}}</p>
        </div>
        <div class="cell">
          <p>Languages:</p>
          <p
            v-for="item in selectedCountryData.languages"
            :key="item.nativeName"
          >{{item.nativeName}}</p>
        </div>
        <div class="cell"></div>
      </article>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { VueLoading } from "vue-loading-template";

export default {
  name: "CountryInfo",

  components: {
    VueLoading
  },

  computed: {
    isEmptySelectedCountry() {
      return this.selectedCountryData === null;
    },
    isError() {
      return this.error !== null;
    },
    ...mapState({
      selectedCountryData: state => state.storeCountry.selectedCountryData,
      isLoading: state => state.storeCountry.isLoading,
      error: state => state.storeCountry.error
    })
  }
};
</script>

<style lang="less">
.country-info-container {
  position: relative;
  width: 600px;
  margin-top: 60px;
}

.country-info-container p {
  font-size: 20px;
  margin: 0;
  font-weight: bold;
  line-height: 36px;
}

.sec-img img {
  width: 100%;
  max-height: 410px;
  opacity: 0.5;
}

.cell {
  display: flex;
  justify-content: space-between;
}
</style>