<template>
  <div>
    <div class="container">
      <div class="column">
        <div class="tile is-ancestor">
          <!--Player Card Scoreboard-->
          <div class="tile is-3">
            <div class="card">
              <div class="card-scoreboard">
                <div class="scoreboard">
                  <p class="has-text-centered is-size-1">
                    <strong>88</strong>
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
                    <p class="title is-4">Hawk Kim</p>
                    <p class="subtitle is-6">Player 1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Player Card Scoreboard-->
          <div class="tile is-3">
            <div class="card">
              <div class="card-scoreboard">
                <div class="scoreboard">
                  <p class="has-text-centered is-size-1">
                    <strong>88</strong>
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
                    <p class="title is-4">Ridwan</p>
                    <p class="subtitle is-6">Player 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Player Card Scoreboard-->
          <div class="tile is-3">
            <div class="card">
              <div class="card-scoreboard">
                <div class="scoreboard">
                  <p class="has-text-centered is-size-1">
                    <strong>88</strong>
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
                    <p class="title is-4">Enrico</p>
                    <p class="subtitle is-6">Player 3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Player Card Scoreboard-->
          <div class="tile is-3">
            <div class="card">
              <div class="card-scoreboard">
                <div class="scoreboard">
                  <p class="has-text-centered is-size-1">
                    <strong>88</strong>
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
                    <p class="title is-4">Albar</p>
                    <p class="subtitle is-6">Player 4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="player">
              <div class="card"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- question board -->
      <div class="columns">
        <div class="column">
          <div class="box has-text-centered question-box">
            <p class="is-size-1" style="color: red">asda</p>
          </div>
          <div class="columns">
            <div class="column">
              <div class="box option-box1">
                <p class="has-text-white has-text-centered text-on-box-option">
                  Red
                </p>
              </div>
            </div>
            <div class="column">
              <div class="box option-box2">
                <p class="has-text-white has-text-centered text-on-box-option">
                  Blue
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TEST',

  data () {
    return {
      username: '',
      score: []
    }
  },
  sockets: {
    user_connected: function (value) {
      console.log('>>>>>', value)
    }
  }
}
</script>

<style>
.option-box1 {
  background-color: blue;
  padding-top: 100px;
  padding-bottom: 100px;
}

.option-box2 {
  background-color: red;
  padding-top: 100px;
  padding-bottom: 100px;
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
