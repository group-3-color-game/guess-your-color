<template>
  <!--Player Card Scoreboard-->
  <div class="tile is-3 choice-card">
    <div class="card">
      <!--Background color dippilih secara random-->
      <div class="card-scoreboard" :style="{ backgroundColor: bgColor }">
        <div class="scoreboard">
          <p class="has-text-centered is-size-1">
            <strong>88</strong>
          </p>
        </div>
      </div>
      <div class="card-content">
        <div class="media">
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
  data() {
    return {
      bgColor: "",
      urlAvatar: "",
    };
  },

  methods: {
    getPlayerBackground() {
      const colors = [
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
      let num = Math.ceil(Math.random() * 9);
      return `@/assets/avatars/Bots-${num}.png`;
    },
  },
  created() {
    this.bgColor = this.getPlayerBackground();
    this.urlAvatar = this.getAvatar();
  },
};
</script>

<style>
</style>