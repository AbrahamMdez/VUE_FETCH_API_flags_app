import { createStore } from 'vuex'

export default createStore({
  state: {
    countries: [],
    filterCountries: []
  },
  mutations: {
    setCountries(state, payload) {
      state.countries = payload;
    },
    setFilterCountries(state, payload) {
      state.filterCountries = payload;
    }
  },
  actions: {
    async getCountries({ commit }) {
      try {
        const res = await fetch('api.json')
        const data = await res.json();
        /* console.log(data) */
        commit('setCountries', data)
      } catch (error) {
        console.log(error)
      }
    },
    filterRegion({ commit, state }, region ) {
      const filter = state.countries.filter(countrie => {
        return countrie.region.includes(region)
      })
      commit('setFilterCountries', filter)
    },

    filterName({ commit, state }, text) {
      const textClient = text.toLowerCase()
      const filter = state.countries.filter(countrie => {
        const textApi = countrie.name.toLowerCase()
        
        if(textApi.includes(textClient)) {
          return countrie
        }
      })

      commit('setFilterCountries', filter)
    }
  },

  getters: {
    topCountriesPoblation(state) {
      return state.filterCountries.sort((a ,b) => {
        return a.population < b.population ? 1 : -1
      })
    }
  },
  modules: {
  }
})
