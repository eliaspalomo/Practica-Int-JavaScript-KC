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

const LOCAL_TEAM = 0
const AWAY_TEAM = 1

export default class League {

    constructor(name, teams=[], config={}) {
        this.name = name
        this.matchDaySchedule = []
        this.setup(config)
        this.setupTeams(teams)
    }

    setup(config) {
        const defaultConfig = { rounds: 1 }
        this.config = Object.assign(defaultConfig, config)
    }

    setupTeams(teamNames) {
        this.teams = []
        for (const teamName of teamNames) {
            const team = this.customizeTeam(teamName)
            this.teams.push(team)
        }
        this.teams.shuffle()
    }

    customizeTeam(teamName) {
        return {
            name: teamName.name,
            pointsFIFA: teamName.pointsFIFA, 
            matchesWon: 0,
            matchesDrawn: 0,
            matchesLost: 0
        }
    }

    initSchedule(round){
        const numberOfMatchDays = this.teams.length - 1
        const nummerOfmachesPerMatchDay = this.teams.length / 2
        for (let i = 0; i <numberOfMatchDays; i++){
            const matchDay = []
            for (let j = 0; j < nummerOfmachesPerMatchDay; j++) {
                const match = ['local', 'visitante']
                matchDay.push(match)
            }
            round.push(matchDay)
        }
    }

    getTeamNames(){
        return this.teams.map(team => team.name)
    }

    getTeamNamesForSchedule(){
        const teamNames = this.getTeamNames()
        if (teamNames.length % 2 == 0) {
            return teamNames
        }else{
            return [...teamNames, null]
        }

    }
    setLocalTeams(round){
        const teamNames = this.getTeamNamesForSchedule()
        const maxHomeTeams = teamNames.length - 1
        let teamIndex = 0
        round.forEach(matchDay => {//cada jornada
            matchDay.forEach(match => {//cada partido
                //poner el equipo local
                match[LOCAL_TEAM] = teamNames[teamIndex]
                teamIndex ++
                if (teamIndex == maxHomeTeams) {teamIndex = 0}
            })
        })
    }

    setAwayTeams(round){
        const teamNames = this.getTeamNamesForSchedule()
        const maxAwayTeams = teamNames.length - 2
        let teamIndex = maxAwayTeams
        round.forEach(matchDay => {//cada jornada
            let isFirstMatch = true
            matchDay.forEach(match => {//cada partido
                //poner el equipo visitante
                if (isFirstMatch){
                    isFirstMatch = false
                }else{
                    match[AWAY_TEAM] = teamNames[teamIndex]
                    teamIndex--
                    if (teamIndex < 0) {teamIndex = maxAwayTeams}
                }
            })
        })
    }

    fixLastTeamSchedule(round){
        let matchDayNumber = 1
        const teamNames = this.getTeamNamesForSchedule()
        const lastTeamName = teamNames[teamNames.length -1]
        round.forEach(matchDay => {//cada jornada
            const firstMatch = matchDay[0]
            if ((matchDayNumber % 2) == 0){//jornada par -> juega en casa
                firstMatch[AWAY_TEAM] = firstMatch[LOCAL_TEAM]
                firstMatch[LOCAL_TEAM] = lastTeamName
            }else{//jornada impar -> juega fuera
                firstMatch[AWAY_TEAM] = lastTeamName
            }
            matchDayNumber++
            })
    }

    scheduleMatchDays(){
        for (let i = 0; i < this.config.rounds; i ++){
            const newRound = this.createRound()
            if (i % 2 != 0) {
                for (const matchDay of newRound) {
                    for (const match of matchDay) {
                        const localTeam = match[LOCAL_TEAM]
                        match[LOCAL_TEAM] = match[AWAY_TEAM]
                        match[AWAY_TEAM] = localTeam
                    }
                }
            }
            this.matchDaySchedule = this.matchDaySchedule.concat(newRound)
        }
    }

    createRound(){
        const newRound = []
        this.initSchedule(newRound)
        this.setLocalTeams(newRound)
        this.setAwayTeams(newRound)
        this.fixLastTeamSchedule(newRound)
        return newRound
    }
}