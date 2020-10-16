const app = require('express')()
const http = require('http').createServer(app)
const port = process.env.PORT || 3000
const io = require('socket.io')(http)

let players = []

let questionData = [
  {
    "question": "Violet",
    "answer" : ["violet","pink"],
    "key": 0
    },
    {
    "question": "Aqua",
    "answer" : ["blue","aqua"],
    "key": 1
    },
    {
    "question": "Yellow",
    "answer" : ["orange","yellow"],
    "key": 1
    },
    {
    "question": "Black",
    "answer" : ["black","gray"],
    "key": 0
    },
    {
    "question": "Biru Muda",
    "answer" : ["blue","lightblue"],
    "key": 1
    },
    {
    "question": "Purple",
    "answer" : ["violet","purple"],
    "key": 1
    },
    {
    "question": "Gold",
    "answer" : ["gold","brown"],
    "key": 0
    },
    {
    "question": "Hijau Muda",
    "answer" : ["lightgreen","green"],
    "key": 0
    },
    {
    "question": "Red",
    "answer" : ["red","orange"],
    "key": 0
    },
    {
    "question": "Green",
    "answer" : ["blue","green"],
    "key": 1
    },
    {
    "question": "Brown",
    "answer" : ["yellow","brown"],
    "key": 1
    },
    {
    "question": "Biru Muda",
    "answer" : ["lightgreen","lightblue"],
    "key": 1
    },
    {
    "question": "Hijau Muda",
    "answer" : ["lightgreen","lightblue"],
    "key": 0
    },
    {
    "question": "White",
    "answer" : ["black","white"],
    "key": 1
    },
    {
    "question": "Red",
    "answer" : ["red","yellow"],
    "key": 0
    },
    {
    "question": "Gray",
    "answer" : ["silver","gray"],
    "key": 1
    },
    {
    "question": "Blue",
    "answer" : ["lightblue","blue"],
    "key": 1
    },
    {
    "question": "Green",
    "answer" : ["green","lightgreen"],
    "key": 0
    },
    {
    "question": "Aqua",
    "answer" : ["red","aqua"],
    "key": 1
    },
    {
    "question": "Yellow",
    "answer" : ["yellow","orange"],
    "key": 0
    },
]
let score = 0

app.get('/', (req, res) => {
    res.send('Cooolors.io')
    // playerScore = getScore(answer)
})

io.on('connection', (socket) => {
    console.log('a user connected');
    io.emit('user_connected', { msg: 'welcomeeee!', players })
    socket.on('get_player', (player) => {
       
        players.push({ name: player, score: 0 })
        console.log(players, ' ini dari server')
        io.emit('show_player', players)
        io.emit('reload_user', players)
    })
    
    io.emit('generate_question_data', questionData)
    socket.on('get_player_score', (score) => {
    playerScore = score
        io.emit('player_score', players)
    })
    socket.on('add_score', (playerIndex) => {
        console.log(players[playerIndex], 'ini player index')
        players[playerIndex].score+=10
        io.emit('reload_user', players)
       
    })

    socket.on('play_game', () => {
        io.emit('playing')
    })

      socket.on('disconnect', () => {
    // socket.rooms === {}
  });

});
  
// console.log(questionData)
console.log(players)

http.listen(3000, () => {
    console.log(`app running on port *${port}`)
})