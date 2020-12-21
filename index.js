let debug = 0

import {initMundial, jornadasMundial, eliminatoryMundial, finalesMundial} from './messages.js'
import {MundialTeams}  from './teamsPoints.js'
import GroupLeagueTeams from './classes/GroupLeagueTeams.js'
import {eighthsPairing, quartersPairing, semifinalsPairing, finalPairing} from './pairingPhase.js'
import gameEliminatory from './gameEliminatory.js'

if(MundialTeams.length != 32) {
    console.log('Imposible empezar el Mundial, porque deben ser 32 equipos')
}else{
    //Inicio del Mundial, con los Grupos, sus equipos y la planificacion de Jornadas
    const config = { rounds:1 }
    const GroupsLeague = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    const GroupsLeagueAll = new GroupLeagueTeams(GroupsLeague, MundialTeams, config)
    if (debug == 0 || debug == 1) {initMundial(GroupsLeagueAll)}

    //Jornadas de la fase de Grupos
    //TO_DO Jornadas de las liguillas
    if (debug == 0 || debug == 2) {jornadasMundial(GroupsLeagueAll)}

    //Eliminatorias
    const eighths = eighthsPairing(GroupsLeagueAll)
    gameEliminatory(eighths)
    if (debug == 0 || debug >= 3) {eliminatoryMundial(8, eighths)}

    const quarters = quartersPairing(eighths)
    gameEliminatory(quarters)
    if (debug == 0 || debug >= 4) {eliminatoryMundial(4, quarters)}

    const semifinals = semifinalsPairing(quarters)
    gameEliminatory(semifinals)
    if (debug == 0 || debug >= 5) {eliminatoryMundial(2, semifinals)}

    const final = finalPairing(semifinals)
    gameEliminatory(final)
    if (debug == 0 || debug >= 6) {finalesMundial(final)}
}
