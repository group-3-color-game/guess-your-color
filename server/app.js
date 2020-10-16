const app = require('express')()
const http = require('http').createServer(app)
const port = 3000
const io = require('socket.io')(http)

let players = []
let questionData = [
    {
        "question": "Biru Muda",
        "answer": ["red","yellow"],
        "key" : 0
    },
    {
        "question": "Biru Muda",
        "answer": ["blue","brown"],//
        "key" : 1
    },
     {
        "question": "Violet",
        "answer": ["red","blue"],
        "key" : 0
    },
      {
        "question": "Hitam",
        "answer": ["blue","black"],
        "key" : 1
    },
    {
        "question": "Ungu",
        "answer": ["red","yellow"],
        "key" : 0
    },
    
]
let score = 0

app.get('/', (req, res) => {
    res.send('Cooolors.io')
    playerScore = getScore(answer,)
})

io.on('connection', (socket) => {
    console.log('a user connected');
    io.emit('user_connected', { msg: 'welcomeeee!', players })
    socket.on('get_player', (player) => {
        // console.log(player, ' inni dari client')
        players.push(player)
        io.emit('show_player', players)
   
        io.emit('reload_user', players)
    })
    
    io.emit('generate_question_data', questionData)
    socket.on('get_player_score', (score) => {
        playerScore = score
       io.emit('player_score', playerScore)
   })
});
  
// console.log(questionData)
console.log(players)

http.listen(3000, () => {
    console.log(`app running on port *${port}`)
})