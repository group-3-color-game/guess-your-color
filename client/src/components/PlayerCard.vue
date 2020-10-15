<template>
  <!--Player Card Scoreboard-->
  <div class="tile is-3">
    <div class="card">
      <!--Background color dippilih secara random-->
      <div class="card-scoreboard" style="background-color: bisque">
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
              <!--avatar d pilih secara random-->
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
</template>

<script>
export default {
  name: "PlayerCard",
  data () {
    return {
      bgColor: '',
      urlAvatar: ''
    }
  },

  methods: {
    getPlayerBackground() {
      let colors = [
        "#dceaf5",
        "#dad4f0",
        "#dec3ee",
        "#baeeef",
        "#dee1e7",
        "#f0dad4",
        "#ded4cd",
      ];
      return colors[Math.floor(Math.random() * 7)];
    },

    getAvatar() {
      let num = Math.floor(Math.random() * 11);
      return `../assets/avatars/Bots-${num}.png`;
    },
  },
  created() {
    this.bgColor = this.getPlayerBackground()
    this.urlAvatar = this.getAvatar()
  }
};
</script>

<style>
</style>