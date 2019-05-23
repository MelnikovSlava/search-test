import Vuex from 'vuex';
import Vue from 'vue';
import { axiosInstance } from '../api/api';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  state: {
    searchStr: '',
    countryList: null,
    isLoading: false,
    error: null,
  },

  mutations: {
    setValue(state, value) {
      state.searchStr = value.trim();
    },

    fetchSuccess(state, data) {
      state.countryList = data;
    },

    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },

    setError(state, msg) {
      state.error = msg;
    },
  },

  actions: {
    getCountries({ commit, state }) {
      const result = axiosInstance.get('', {
        params: {
          fields: 'name',
        },
      });

      commit('setLoading', true);

      result
        .then((response) => {
          if (response.status === 200) {
            const data = response.data.map((item) => item.name);

            commit('fetchSuccess', data);

            if (state.error !== null) {
              commit('setError', null);
            }
          }

          commit('setLoading', false);
        })
        .catch((error) => {
          commit('setError', error.toString());
          commit('setLoading', false);
        });

      return result;
    },

    updateValue({ commit, state, dispatch }, value) {
      commit('setValue', value);

      if (state.countryList === null && !state.isLoading) {
        dispatch('getCountries');
      }
    },
  },
});
