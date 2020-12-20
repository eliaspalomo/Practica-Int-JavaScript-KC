let debug = 0

import { MundialTeams }  from './teamsPoints.js'
const GroupsLeague = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
import GroupLeagueTeams from './classes/GroupLeagueTeams.js'
import {initMundial as initMundial} from './messages.js'

if(MundialTeams.length != 32) {
    console.log('Imposible empezar el Mundial, porque deben ser 32 equipos')
}else{
    //Inicio del Mundial, con los Grupos, sus equipos y la planificacion de Jornadas
    const config = { rounds:1 }
    const GroupsLeagueAll = new GroupLeagueTeams(GroupsLeague, MundialTeams, config)
    if (debug == 0 || debug == 1 ) {initMundial(GroupsLeagueAll)}

    //Jornadas de la fase de Grupos

    //Eliminatorias

}
