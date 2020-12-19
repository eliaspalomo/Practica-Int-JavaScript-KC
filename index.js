import { MundialTeams }  from './teamsPoints.js'
const GroupsLeague = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
import GroupLeagueTeams from './classes/GroupLeagueTeams.js'
import {initMundial as initMundial} from './messages.js'

if(MundialTeams.length != 32) {
    console.log('Imposible empezar el Mundial, porque no deben ser 32 equipos')
}else{
    const config = { rounds:1 }
    const GroupsLeagueAll = new GroupLeagueTeams(GroupsLeague, MundialTeams, config)
    initMundial(GroupsLeagueAll)



}
