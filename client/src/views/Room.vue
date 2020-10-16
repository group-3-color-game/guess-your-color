<template>
  <div>
    <CardRoom></CardRoom>
  <Questions></Questions>

  </div>
</template>

<script>
import CardRoom from '../components/CardRoom'
import Questions from '../components/Questions'
export default {
  components: {
    CardRoom,
    Questions
  },
  data () {
    return {
      page: true
    }
  },
  methods: {
    createRoom () {
      this.rooms.push(room)
      console.log(rooms)
    }
  }
}
</script>

<style>
</style>
