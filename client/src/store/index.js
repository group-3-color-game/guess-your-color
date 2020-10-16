import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
    USERNAME(state, payload) {
      state.page = payload
    }
  },
  actions: {
    getPlayerBackground() {
      let colors = ['#dceaf5', '#dad4f0', '#dec3ee', '#baeeef', '#dee1e7', '#f0dad4', '#ded4cd']
      return colors[Math.floor(Math.random()*7)]
    },
    
    getAvatar() {
      let num = Math.floor(Math.random()*11)
      return `../assets/avatars/Bots-${num}.png`
    }
  },
  modules: {
  }
})
