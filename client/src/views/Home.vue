<template>
  <div class="home">
    <div class="container">
      <div class="column">
        <div class="tile is-ancestor">
          <!--Player Card Scoreboard-->
          <div class="tile is-3" v-for="n in 4" :key="n">
            <div class="card">
              <div class="card-scoreboard">
                <div class="scoreboard">
                  <p class="has-text-centered is-size-1">
                    <strong>{{ score }}</strong>
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
                    <p class="title is-4">{{ players[n - 1] }}</p>
                    <p class="subtitle is-6">Player {{ n }}</p>
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
      <ul>
        <li v-for="(player, i) in players" :key="i">{{ player }}</li>
      </ul>
      <form @submit.prevent="getUsername">
        <input type="text" v-model="username" />
        <button class="btn btn-dark">Submit</button>
      </form>

      <p v-if="roomFull === true">{{ messages }}</p>

      <br />

      <div v-for="(question, i) in questions" :key="i">
        <!-- question board -->
        <div class="columns" v-if="i === indexQuestions">
          <div class="column">
            <div class="box has-text-centered question-box">
              <p
                class="is-size-1"
                :style="{
                  color: textColor,
                }"
              >
                {{ i + 1 }}
                {{ questions[i].question }}
              </p>
            </div>
            <!-- Button answers -->
            <div class="columns">
              <div class="column">
                <div
                  class="box option-box1"
                  style="background-color: #9edcec"
                  @click="getScore(questions[i].answer[0], fActiveColor())"
                >
                  <p
                    class="has-text-white has-text-centered text-on-box-option"
                  >
                    Biru Muda
                  </p>
                </div>
              </div>
              <div class="column">
                <div
                  class="box option-box2"
                  style="background-color: #74d56a"
                  @click="getScore2(questions[i].answer[1], fActiveColor())"
                >
                  <p
                    class="has-text-white has-text-centered text-on-box-option"
                  >
                    Blues
                  </p>
                </div>
              </div>
            </div>
            <!-- end button -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      username: "",
      players: [],
      questions: [],
      textColor: "",
      score: 0,
      indexQuestions: 0,
      roomFull: false,
      messages: "Sorry, this room is full",
    };
  },
  methods: {
    getUsername() {
      if (this.players.length > 3) {
        this.roomFull = true;
      } else {
        this.players.push(this.username);
        this.$socket.emit("get_player", this.username);
        localStorage.setItem("username", this.username);
        console.log(this.players, "ini");
        this.player++;
        this.username = "";
      }
    },
    fActiveColor() {
      console.log("questions");
      let key = this.questions[this.indexQuestions].key;
      this.textColor = this.questions[this.indexQuestions].answer[key];
      console.log(this.textColor, "ini warna");
    },
    getScore(answer) {
      this.checkScore(answer);
      console.log(answer, "btn1");
      this.indexQuestions++;
    },

    getScore2(answer) {
      this.checkScore(answer);
      console.log(answer, "btn2");
      this.indexQuestions++;
    },
    checkScore(answer) {
      const key = this.questions[this.indexQuestions].key;
      const data = this.questions[this.indexQuestions].answer;
      if (data.indexOf(answer) === key) {
        console.log("bener");
        this.score++;
        this.$socket.emit("get_player_score", this.score);
      } else {
        console.log("salah");
      }
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
    },
    generate_question_data: function (data) {
      this.questions = data;
      this.colors = data[0].answer[0];
    },
    player_score: function (data) {
      this.score = data;
    },
  },
  components: {},
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
