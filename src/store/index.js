import Vuex from 'vuex';
import Vue from 'vue';
import storeSearch from './store-search';
import storeCountry from './store-country';


Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    storeSearch,
    storeCountry,
  },
});
