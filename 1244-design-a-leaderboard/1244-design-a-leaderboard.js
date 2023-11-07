class Leaderboard{
    constructor() {
        this.players = {}
        // map of players
        // { playerId: score }
    }
    
    addScore(playerId, score) {
        if (!(playerId in this.players)) this.players[playerId] = 0
        this.players[playerId] += score
    }
    
    top(K) {
        const scores = Object.entries(this.players).sort((a, b) => b[1] - a[1])
        // ascending by score
        
        let sum = 0
        for (let i=0; i<K; i++) sum += scores[i][1]
        return sum
    }
    
    reset(playerId) {
        // reset score of player with given id to 0
        delete this.players[playerId]
    }
}










// class Leaderboard {
//     constructor() {
//         this.players = {}
//         // playerId: score
//     }
    
//     addScore(playerId, score) {
//         this.players[playerId] = this.players[playerId]+score || score
//     }
    
//     top(K) {
//         const scores = Object.values(this.players).sort((a, b) => b-a)
//         let sum = 0
//         for (let i=0; i<K; i++) {
//             sum += scores[i]
//         }
        
//         return sum
//     }
    
//     reset(playerId) {
//         delete this.players[playerId]
//     }
// }




// class Leaderboard {
//     constructor() {
//         this.map = {}
//         // { playerId: score }
//     }

//     addScore(playerId, score) {
//         // if (this.map[playerId]) {
//         //     this.map[playerId] += score
//         // } else {
//         //     this.map[playerId] = score
//         // }

//         this.map[playerId] = this.map[playerId]+score || score
//     }

//     top(K) {
//         const scores = Object.values(this.map).sort((a,b) => b-a)
//         let sum = 0
//         for (let i=0; i<K; i++) sum += scores[i]
//         return sum
//     }

//     reset(playerId) {
//         delete this.map[playerId]
//     }
// }