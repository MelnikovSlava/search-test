import { axiosInstance } from '../api/api';

export default {
  namespaced: true,

  state: {
    searchStr: '',
    countryList: null,
    isLoading: false,
    error: null,
  },

  mutations: {
    setValue(state, value) {
      state.searchStr = value;
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
    fetchCountries({ commit, state }) {
      const result = axiosInstance.get('/all', {
        params: {
          fields: ['name', 'alpha3Code'],
        },
      });

      commit('setLoading', true);

      result
        .then((response) => {
          if (response.status === 200) {
            const data = response.data
              .map((item) => {
                return {
                  name: item.name,
                  alpha3Code: item.alpha3Code,
                };
              });

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
        dispatch('fetchCountries');
      }
    },

    fetchCountry({ commit, state }, countryCode) {
      const result = axiosInstance.get('/alpha', {
        params: {
          codes: countryCode,
        },
      });

      // commit('setLoading', true);

      // result
      //   .then((response) => {
      //     if (response.status === 200) {
      //       const data = response.data
      //         .map((item) => {
      //           return {
      //             name: item.name,
      //             alpha3Code: item.alpha3Code,
      //           };
      //         });

      //       commit('fetchSuccess', data);

      //       if (state.error !== null) {
      //         commit('setError', null);
      //       }
      //     }

      //     commit('setLoading', false);
      //   })
      //   .catch((error) => {
      //     commit('setError', error.toString());
      //     commit('setLoading', false);
      //   });

      // return result;
    },
  },
};
