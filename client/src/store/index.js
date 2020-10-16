import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: false,
    username : ''
  },
  mutations: {
    USERNAME(state, payload) {
      state.page = payload
    }
  },
  actions: {
    //   getUsername() {
    //   if (this.players.length > 3) {
    //     this.roomFull = true;
    //   } else {
    //     // this.players.push(this.username);
    //     this.$socket.emit("get_player", this.username);
    //     localStorage.setItem("username", this.username);
    //     console.log(this.players, "ini");
    //     this.player++;
    //     this.username = "";
    //     this.login = true;
    //   }
    // },
  },
  modules: {
  }
})
