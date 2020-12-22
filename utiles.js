function generateGoals(factor){
    //TO_DO hacerlo con los puntosFIFA
    return Math.round(Math.random() * factor)
}

export function playGame(localMatch, awayMatch, draw = true){
    //Partido
    let localGoals = generateGoals(10)
    let awayGoals = generateGoals(10)
    if (draw == false && localGoals == awayGoals) {
        //Prorroga, solo en caso de eliminatoria
        localGoals += generateGoals(3)
        awayGoals += generateGoals(3)    
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
        awayGoals
    }
}