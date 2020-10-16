import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: false
  },
  mutations: {
    USERNAME(state, payload) {
      state.page = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
