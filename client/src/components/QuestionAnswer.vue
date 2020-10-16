<template>
  <div>
    <!--- QUESTION AND ANSWER  -->
        <div id="question-bg" class="hero has-text-centered question-box" style="background-color: rebeccapurple;">
            <p class="has-text-white">Question 1:</p>
            <p class="is-size-1" style="color: red;">
                Blue
            </p>
        </div>
        <div class="container" id="bottom-area">
            <div class="columns">
                <!---Option 1-->
                <div class="column">
                    <div class="box option-box" style="background-color:blue;">
                        <p class="has-text-white has-text-centered text-on-box-option is-size-3">
                            Red
                        </p>
                    </div>
                </div>
                <!---Option 2-->
                <div class="column">
                    <div class="box option-box" style="background-color:blue;">
                        <p class="has-text-white has-text-centered text-on-box-option is-size-3">
                            Red
                        </p>
                    </div>
                </div>
                <!---Option 3-->
                <div class="column">
                    <div class="box option-box" style="background-color:blue;">
                        <p class="has-text-white has-text-centered text-on-box-option is-size-3">
                            Red
                        </p>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'QuestionAnswer'
};
</script>

<style>
</style>