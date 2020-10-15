<template>
<div id="game-view">
        <PlayerList></PlayerList>

        <QuestionAnswer></QuestionAnswer>
    </div>
</template>

<script>
import PlayerList from "../components/PlayerList"
import QuestionAnswer from "../components/QuestionAnswer"

export default {
    name: 'GameView',
    components: {
        PlayerList,
        QuestionAnswer
    }

}
</script>

<style>
.option-box {
    font-family: 'Permanent Marker', cursive;

    padding-top: 100px;
    padding-bottom: 100px;
}

.card-scoreboard {
    padding-top: 10px;
    padding-bottom: 10px;
}

.question-box {
    font-family: 'Permanent Marker', cursive;

    padding-top: 70px;
    padding-bottom: 70px;
}

.player-area {
    background-color: antiquewhite;
    padding: 30px;
    align-content: center;
}

.bg {
    background-image: url("https://images.unsplash.com/photo-1509664158680-07c5032b51e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80");
  
}

#top-area {
    margin-bottom: 20px;

}

#bottom-area {
    margin-top: 20px;
}

#game-view {

 background-image: url('http://cdn.backgroundhost.com/backgrounds/subtlepatterns/az_subtle.png');
 background-repeat: repeat;

}

#question-bg {
    padding-top: 20px;
    padding-bottom: 20px;
}



</style>