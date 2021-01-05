import Eliminatory from './classes/Eliminatory.js'

export function eighthsPairing(groupsTeams) {
    let arrayTeamsReturn = []
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

export function quartersPairing(arrayTeams) {
    let arrayTeamsReturn = []
    let alternate = 1, pairingNumber = 1
    let winner1, winner2
    arrayTeams.forEach(pairing => {
        if (alternate==1){
            winner1 = pairing.winnerteam
        }else{
            winner2 = pairing.winnerteam
        }
        
        alternate = alternate *(-1)
        //cuando es 1, debemos crear nueva eliminatoria
        if (alternate == 1){
            const pairing = new Eliminatory('Cuartos ' + pairingNumber, winner1, winner2)
            arrayTeamsReturn.push(pairing)
            pairingNumber++
        }
    });
    return arrayTeamsReturn
}

export function semifinalsPairing(arrayTeams) {
    let arrayTeamsReturn = []
    let alternate = 1, pairingNumber = 1
    let winner1, winner2
    arrayTeams.forEach(pairing => {
        if (alternate==1){
            winner1 = pairing.winnerteam
        }else{
            winner2 = pairing.winnerteam
        }
        
        alternate = alternate *(-1)
        //cuando es 1, debemos crear nueva eliminatoria
        if (alternate == 1){
            const pairing = new Eliminatory('Semifinal ' + pairingNumber, winner1, winner2)
            arrayTeamsReturn.push(pairing)
            pairingNumber++
        }
    });
    return arrayTeamsReturn
}

export function finalPairing(arrayTeams) {
    let arrayTeamsReturn = []
    let winner1, winner2, loser1, loser2
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
