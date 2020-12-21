import Eliminatory from './classes/Eliminatory.js'

const arrayTeamsReturn = []

export function eighthsPairing(groupsTeams) {
    //TO_DO 
}

export function quartersPairing(arrayteams) {
//TO_DO 
}

export function semifinalsPairing(arrayTeams) {
//TO_DO 
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
