//coba coba doang
const key = ['a', 'a', 'a', 'a', 'a']
let score = 0

function getScore(answer,key) {
    for (let i = 0; i < answer.length; i++){
            if (answer[i] === key[i]) {
                score++
            }
    }
  return score
}


getScore(answer, key)
console.log(score)   

module.exports = getScore