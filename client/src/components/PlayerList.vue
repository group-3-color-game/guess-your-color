<template>
  <div class="column">
    <div class="is-size-5" style="margin-bottom: 30px">
      <p><strong>Players:</strong></p>
    </div>
    <div class="tile is-ancestor">
      <PlayerCard></PlayerCard>
      <!--Player card to be generated here-->

    </div>
  </div>
</template>

<script>
import PlayerCard from "../components/PlayerCard"

export default {
    name: 'PlayerList',
    components: {
      PlayerCard
    }
};
</script>

<style>
</style>