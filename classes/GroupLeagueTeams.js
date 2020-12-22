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

import PointsBasedLeague from './PointsBasedLeague.js'

export default class GroupLeagueTeams {
    constructor(groups, teams=[], config={}) {
        this.groupsLeagueTeams = []
        this.setup(groups, teams, config)
    }

    setup(groups, teamsdraw, config) {
        const groupA = [], groupB = [], groupC = [], groupD = [], groupE = [], groupF = [], groupG = [], groupH = []

        teamsdraw.sort(function(teamA, teamB){
            if(teamA.pointsFIFA > teamB.pointsFIFA) {
                return -1
            } else if(teamA.pointsFIFA < teamB.pointsFIFA) {
                return 1
            } else {
                return 0
            }
        })
        
        let i = 0
        arrayshuffle.shuffle()
        teamsdraw.forEach(teamDraw =>{
            if(arrayshuffle[i] == 'A'){groupA.push(teamDraw)}
            if(arrayshuffle[i] == 'B'){groupB.push(teamDraw)}
            if(arrayshuffle[i] == 'C'){groupC.push(teamDraw)}
            if(arrayshuffle[i] == 'D'){groupD.push(teamDraw)}
            if(arrayshuffle[i] == 'E'){groupE.push(teamDraw)}
            if(arrayshuffle[i] == 'F'){groupF.push(teamDraw)}
            if(arrayshuffle[i] == 'G'){groupG.push(teamDraw)}
            if(arrayshuffle[i] == 'H'){groupH.push(teamDraw)}

            i ++
            if(i == 8){
                i = 0
                arrayshuffle.shuffle()
            }
        })

        groups.forEach(val =>{
            let GroupLeague = {}
            let teamsGroup = []
            if(val == 'A'){teamsGroup = groupA}
            if(val == 'B'){teamsGroup = groupB}
            if(val == 'C'){teamsGroup = groupC}
            if(val == 'D'){teamsGroup = groupD}
            if(val == 'E'){teamsGroup = groupE}
            if(val == 'F'){teamsGroup = groupF}
            if(val == 'G'){teamsGroup = groupG}
            if(val == 'H'){teamsGroup = groupH}

            GroupLeague = new PointsBasedLeague(val, teamsGroup, config)
            GroupLeague.scheduleMatchDays()
            this.groupsLeagueTeams.push(GroupLeague)
        })
    }

    start(){
        this.groupsLeagueTeams.forEach(groupTeams => {groupTeams.start()})
    }
}