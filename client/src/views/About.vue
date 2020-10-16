<template>
  <div class="home">
    <div class="container">
      <div class="column">
        <div class="tile is-ancestor">
          <!--Player Card Scoreboard-->
          <div class="tile is-3" v-for="(player, n) in players" :key="n">
            <div class="card">
              <div class="card-scoreboard">
                <div class="scoreboard">
                  <p class="has-text-centered is-size-1">
                    <strong>{{ player.score }}</strong>
                  </p>
                </div>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">{{ player.name }}</p>
                    <p class="subtitle is-6">Player {{ n + 1 }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- card player end -->

          <div>
            <div class="player">
              <div class="card"></div>
            </div>
          </div>
        </div>
      </div>
      <br />

      <form @submit.prevent="getUsername" v-if="!login">
        <input type="text" v-model="username" />
        <button class="btn btn-dark">Submit</button>
      </form>
      <button v-if="indexPlayer === 0" @click="startGame">START</button>
      <p v-if="roomFull === true">{{ messages }}</p>

      <br />
      <div v-if="play">
        <div v-for="(question, i) in questions" :key="i">
          <!-- question board -->

          <div class="columns" v-if="i === indexQuestions">
            <div class="column">
              <div class="box has-text-centered question-box">
                <strong>
                  <span
                    :style="{
                      color: question.answer[question.key === 0 ? 1 : 0],
                      'font-size': '5em',
                    }"
                  >
                    {{ questions[i].question }}
                  </span>
                </strong>
              </div>
              <!-- Button answers -->
              <div class="columns">
                <div class="column">
                  <div
                    class="box option-box1"
                    :style="{ backgroundColor: question.answer[0] }"
                    @click="getScore(question.answer[1], fActiveColor(i))"
                  >
                    <!-- <p
                    class="has-text-white has-text-centered text-on-box-option"
                  > -->
                    <!-- {{ question.answer[0] }}
                  </p> -->
                  </div>
                </div>
                <div class="column">
                  <div
                    class="box option-box2"
                    :style="{ backgroundColor: question.answer[1] }"
                    @click="getScore2(question.answer[1], fActiveColor(i))"
                  >
                    <!-- <p
                    class="has-text-white has-text-centered text-on-box-option"
                  >
                    {{ question.answer[1] }}
                  </p> -->
                  </div>
                </div>
              </div>
              <!-- end button -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "About",
  data() {
    return {
      username: "",
      players: [],
      questions: [],
      textColor: "",
      playerScore: [1, 2, 3, 4],
      indexQuestions: 0,
      roomFull: false,
      messages: "Sorry, this room is full",
      login: false,
      play: false,
    };
  },
  methods: {
    getUsername() {
      if (this.players.length > 3) {
        this.roomFull = true;
      } else {
        // this.players.push(this.username);
        this.$socket.emit("get_player", this.username);
        localStorage.setItem("username", this.username);
        console.log(this.players, "ini");
        this.player++;
        this.username = "";
        this.login = true;
      }
    },

    fActiveColor() {
      console.log("questions");
      // let keys = this.questions[this.indexQuestions].key;
      // this.textColor = this.questions[this.indexQuestions].answer[keys];
      // console.log(this.textColor, "ini warna");
    },
    getScore(answer) {
      console.log(answer, ">>> ini answer dari button kiri");
      this.checkScore(answer);
      this.indexQuestions++;
    },

    getScore2(answer) {
      console.log(answer, " >>> ini answer dari button kanan");
      this.checkScore(answer);
      this.indexQuestions++;
    },
    checkScore(answer) {
      const key = this.questions[this.indexQuestions].key;
      const data = this.questions[this.indexQuestions].answer;

      console.log(key, ">>> ini KEY dari check score <<<<");
      console.log(data, ">>> ini DATA dari check score <<<<");

      if (data.indexOf(answer) === key) {
        console.log("bener");
        this.$socket.emit("get_player_score", this.score);

        const player1 = this.players.filter(
          (el) => el.name === localStorage.getItem("username")
        );
        let indexPlayer = this.players
          .map(function (e) {
            return e.name;
          })
          .indexOf(localStorage.getItem("username"));

        // console.log(indexPlayer, ">> Index players");

        this.$socket.emit("add_score", indexPlayer);
        console.log(this.players, ">>>>INI PLAYER<<<<<");
        console.log(this.players.score, "ini score ");
      } else {
        console.log("salah");
        console.log(this.players, ">>>>INI PLAYER<<<<<");
      }
    },
    startGame() {
      this.$socket.emit("play_game");
    },
  },
  sockets: {
    user_connected: function (data) {
      this.players = data.players;
      console.log(data.players);
    },
    show_player: function (players) {
      this.players = players;
    },
    reload_user: function (dataPlayers) {
      this.players = dataPlayers;
      console.log(this.players, " ini dari reload_usaer ");
      console.log("masuuk");
    },
    generate_question_data: function (data) {
      this.questions = data;
      this.colors = data[0].answer[0];
    },
    player_score: function (data) {
      this.score = data;
    },
    playing: function () {
      this.play = true;
    },
  },
  components: {},
  computed: {
    indexPlayer() {
      let pos = this.players
        .map(function (e) {
          return e.name;
        })
        .indexOf(localStorage.getItem("username"));
      return pos;
    },
  },
  created() {
    this.fActiveColor();
  },
};
</script>

<style>
.option-box1 {
  background-color: blue;
  padding-top: 100px;
  padding-bottom: 100px;
  cursor: pointer;
}

.option-box2 {
  background-color: red;
  padding-top: 100px;
  padding-bottom: 100px;
  cursor: pointer;
}

.card-scoreboard {
  background-color: #d6d2c4;
  padding-top: 40px;
  padding-bottom: 40px;
}

.question-box {
  padding-top: 70px;
  padding-bottom: 70px;
}
</style>
