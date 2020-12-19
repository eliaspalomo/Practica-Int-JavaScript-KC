//esto lo que hace es añadir el metodo shuffle a los metodos propios de Array
Array.prototype.shuffle = function()
{
	var i = this.length;
	while (i)
	{
		var j = Math.floor(Math.random() * i);
		var t = this[--i];
		this[i] = this[j];
		this[j] = t;
	}
	return this;
}

const arrayshuffle = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

import PointsBasedLeague from './classes/PointsBasedLeague.js'

export default class GroupLeagueTeams {
    constructor(groups, teams=[], config={}) {
        this.groupsLeagueTeams = []
        this.setup(groups)
        this.drawteams(groups, teams)
    }
}
function setup(groups){
    groups.forEach(val =>{
        nameGroup = val
        groupsLeagueTeams.push(nameGroup)
    })
}

function drawteams (groupsdraw, teamsdraw){
    

    //TODO ordenar por puntos de FIFA
    i = 0
    arrayshuffle.shuffle
    teamsdraw.forEach(teamDraw =>{

        i ++
        if(i==8){
            i = 0
            arrayshuffle.shuffle
        }
    })
}


GroupsLeague.forEach(val =>{new GroupLeague(val, ...MundialTeams, config)})