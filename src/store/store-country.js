import { axiosInstance } from '../api/api';

export default {
  namespaced: true,

  state: {
    selectedCountryData: null,
    isLoading: false,
    error: null,
  },

  mutations: {
    fetchSuccess(state, data) {
      state.selectedCountryData = data;
    },

    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },

    setError(state, msg) {
      state.error = msg;
    },
  },

  actions: {
    fetchCountry({ commit, state }, countryCode) {
      const result = axiosInstance.get('/alpha', {
        params: {
          codes: countryCode,
        },
      });

      commit('setLoading', true);

      result
        .then((response) => {
          if (response.status === 200) {
            const data = response.data[0];

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
  },
};
