<template>
  <div class="container bg-light col-6 pb-4">
    <div class="col-12 my-5">
      <h1 class="display-5" style="font-family: 'Comic Sans MS', Comic Sans MS">
        question
      </h1>
    </div>
    <div class="row">
      <div class="col-4">
        <div class="option-box1"></div>
      </div>
      <div class="col-4"></div>
      <div class="col-4" style="">
        <div class="option-box2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.option-box1 {
  background-color: blue;
  width: 100px;
  height: 100px;
  margin: auto;
}
.option-box2 {
  background-color: red;
  width: 100px;
  height: 100px;
  margin: auto;
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
