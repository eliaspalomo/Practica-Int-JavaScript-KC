import Eliminatory from './classes/Eliminatory.js'

const arrayTeamsReturn = []

export function eighthsPairing(groupsTeams) {
    const cuadro1 = [], cuadro2 = []
    let alternate = 1, paringNumber = 1
    let winner1, loser1, winner2, loser2
    groupsTeams.groupsLeagueTeams.forEach(groupteam => {
        for (let i= 0; i<=1; i++){
            if (alternate==1){
                if(i==0){
                    winner1 = groupteam.teams[i].name
                }else if(i==1){
                    loser1 = groupteam.teams[i].name
                }
            }else{
                if(i==0){
                    winner2 = groupteam.teams[i].name
                }else if(i==1){
                    loser2 = groupteam.teams[i].name
                }
            }
        }
        alternate = alternate *(-1)
        //cuando es 1, debemos añadir a los cuadros
        if (alternate == 1){
            const paring1 = new Eliminatory('Octavos ' + paringNumber, winner1, loser2)
            cuadro1.push(paring1)
            const paring2 = new Eliminatory('Octavos ' + (4 + paringNumber), winner2, loser1)
            cuadro2.push(paring2)
            paringNumber++
        }
    });
    arrayTeamsReturn = [...cuadro1, ...cuadro2]
    return arrayTeamsReturn
}

export function quartersPairing(arrayteams) {
    let alternate = 1, paringNumber = 1
    let winner1, winner2
    arrayteams.forEach(paring => {
        if (alternate==1){
            winner1 = paring.winnerteam
        }else{
            winner2 = paring.winnerteam
        }
        
        alternate = alternate *(-1)
        //cuando es 1, debemos crear nueva eliminatoria
        if (alternate == 1){
            const paring = new Eliminatory('Cuartos ' + paringNumber, winner1, winner2)
            arrayTeamsReturn.push(paring)
            paringNumber++
        }
    });
    return arrayTeamsReturn
}

export function semifinalsPairing(arrayTeams) {
    let alternate = 1, paringNumber = 1
    let winner1, winner2
    arrayteams.forEach(paring => {
        if (alternate==1){
            winner1 = paring.winnerteam
        }else{
            winner2 = paring.winnerteam
        }
        
        alternate = alternate *(-1)
        //cuando es 1, debemos crear nueva eliminatoria
        if (alternate == 1){
            const paring = new Eliminatory('Semifinal ' + paringNumber, winner1, winner2)
            arrayTeamsReturn.push(paring)
            paringNumber++
        }
    });
    return arrayTeamsReturn
}

export function finalPairing(arrayTeams) {
    const winner1, winner2, loser1, loser2
    for (let i = 0; i < arrayTeams.length; i++){
        const paring = arrayTeams[i]
        if(i==0){
            winner1 = paring.winnerteam
            loser1 = paring.loserteam
        }else{
            winner2 = paring.winnerteam
            loser2 = paring.loserteam
        }
    }

    const paringW = new Eliminatory('Final', winner1, winner2)
    const paringL = new Eliminatory('3 y 4', loser1, loser2)
    arrayTeamsReturn.push(paringW)
    arrayTeamsReturn.push(paringL)
    return(arrayTeamsReturn)
}
