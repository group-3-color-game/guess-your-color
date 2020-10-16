<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- <span class="outline end-right"> Color </span>
           <span class="outline center"> Your </span> -->
          <!-- <span class="outline end-left"> choose </span> -->
          <label for="username">Join Your Name</label>
          <input type="text" v-model="username" />
          <router-link to="/room" tag="span"
            ><button
              type="button"
              class="btn btn-success"
              @click="setUsername"
              data-toggle="button"
              aria-pressed="false"
            >
              Play
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      username: "",
    };
  },
  sockets: {
    user_connected: (data) => {},
  },
  methods: {
    setUsername() {
      localStorage.username = this.username;
    },
  },
};
</script>
<style scoped>

span {
  margin: 0;
  padding: 0;
}

.end-left {
  margin-left: -235px;
}

.center {
  margin-right: 0px;
}
.end-right {
  margin-right: -117.5px;
}

.outline {
  position: absolute;
  top: 20px;
}

.outline {
  color: black;
  -webkit-text-fill-color: transparent;
  /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: green;
  font-size: 64px;
  font-family: "Arvo", serif;
}

.orbs {
  font-family: "Raleway", sans-serif;
  font-weight: 100;
  display: block;
  font-size: 128px;
}
</style>
