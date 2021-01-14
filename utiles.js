import {mundialTeams} from './teamsPoints.js'

function generateGoals(factor){
    return Math.round(Math.random() * factor)
}

export function playGame(localMatch, awayMatch, draw = true){
    const local = mundialTeams.filter(team => team.name == localMatch)
    const away = mundialTeams.filter(team => team.name == awayMatch)

    const diffLocal = Math.round((local[0].pointsFIFA - away[0].pointsFIFA) / 100)
    const diffAway  = Math.round((away[0].pointsFIFA - local[0].pointsFIFA) / 100)

    let prorroga = false

    //Partido
    let localGoals = generateGoals(10 + diffLocal)
    let awayGoals  = generateGoals(10 + diffAway)
    if (draw == false && localGoals == awayGoals) {
        prorroga = true
        //Prorroga, solo en caso de eliminatoria
        localGoals += generateGoals(3 + diffLocal)
        awayGoals  += generateGoals(3 + diffAway)    
        if (localGoals == awayGoals) {
            //Penaltis
            localGoals += (generateGoals(5)/10)
            awayGoals += (generateGoals(5)/10)
            while (localGoals == awayGoals) {
                //Empate a penaltis, hasta que uno de los dos marque y el otro no
                localGoals += (generateGoals(1)/10)
                awayGoals += (generateGoals(1)/10)
            }    
        }    
    }
    return {
        localTeam: localMatch,
        localGoals,
        awayTeam: awayMatch,
        awayGoals,
        prorroga
    }
}