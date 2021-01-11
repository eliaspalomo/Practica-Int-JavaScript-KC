const debug = 0

import {initialError, initMundial, jornadasMundial, eliminatoryMundial, finalesMundial} from './messages.js'
import {mundialTeams} from './teamsPoints.js'
import GroupLeagueTeams from './classes/GroupLeagueTeams.js'
import {eighthsPairing, quartersPairing, semifinalsPairing, finalPairing} from './pairingPhase.js'
import gameEliminatory from './gameEliminatory.js'

if(mundialTeams.length != 32) {
    initialError()
}else{
    //Inicio del Mundial, con los Grupos, sus equipos y la planificacion de Jornadas
    const config = { rounds:1 }
    const GroupsLeague = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    const GroupsLeagueAll = new GroupLeagueTeams(GroupsLeague, mundialTeams, config)
    if (debug == 0 || debug == 1) {initMundial(GroupsLeagueAll)}

    //Jornadas de la fase de Grupos
    GroupsLeagueAll.start()
    if (debug == 0 || debug == 2) {jornadasMundial(GroupsLeagueAll)}

    //Eliminatorias
    //Octavos
    const eighths = eighthsPairing(GroupsLeagueAll)
    gameEliminatory(eighths)
    if (debug == 0 || debug == 3) {eliminatoryMundial(8, eighths)}

    //Cuartos
    const quarters = quartersPairing(eighths)
    gameEliminatory(quarters)
    if (debug == 0 || debug == 3) {eliminatoryMundial(4, quarters)}

    //Semifinales
    const semifinals = semifinalsPairing(quarters)
    gameEliminatory(semifinals)
    if (debug == 0 || debug == 3) {eliminatoryMundial(2, semifinals)}

    //Finales
    const final = finalPairing(semifinals)
    gameEliminatory(final)
    if (debug == 0 || debug == 3) {finalesMundial(final)}
}
