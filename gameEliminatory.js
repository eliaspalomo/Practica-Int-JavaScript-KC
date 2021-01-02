import {playGame} from '../utiles.js'

export default function gameEliminatory(arrayteams) {
    arrayteams.array.forEach(game => {
        const result = playGame(game.localteam, game.awayteam, false)
        game.localgoals = result.localGoals
        game.awaygoals = 0
        //siempre viene un resultado distinto
        if(result.localGoals > result.awayGoals){
            game.winnerteam = game.localteam
            game.loserteam = game.awayteam
        }else{
            game.winnerteam = game.awayteam
            game.loserteam = game.localteam
        }
    });
}