<template>
  <div class="container column" id="top-area">
            <div class="is-size-5" style="margin-bottom: 30px;">
                <p><strong>Players:</strong></p>
            </div>
            <div class="tile is-ancestor has-text-centered">
              <PlayerCard></PlayerCard>
                
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