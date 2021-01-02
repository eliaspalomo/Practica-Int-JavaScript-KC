import League from './League.js'
import {LOCAL_TEAM, AWAY_TEAM} from './League.js'
import {playGame} from '../utiles.js'

export default class PointsBasedLeague extends League {
    constructor(groupName, teams=[], config={}) {
        super(groupName, teams, config)
    }

    setup(config) {
        const defaultConfig = {
            rounds: 1,
            pointsPerWin: 3,
            pointsPerDraw: 1,
            pointsPerLose: 0
        }
        this.config = Object.assign(defaultConfig, config)
    }

    customizeTeam(teamName) {
        const customizedTeam = super.customizeTeam(teamName)
        
        return{
            points: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            ...customizedTeam
        }
    }

    play(match){
        return playGame(match[LOCAL_TEAM], match[AWAY_TEAM])
     }

    getTeamForName(name){
        return this.teams.find(team => team.name == name)
    }

    updateTeams(result){
        const localTeam = this.getTeamForName(result.localTeam)
        const awayTeam = this.getTeamForName(result.awayTeam)
        if(localTeam && awayTeam) {

            localTeam.goalsFor += result.localGoals
            localTeam.goalsAgainst += result.awayGoals
            awayTeam.goalsFor += result.awayGoals
            awayTeam.goalsAgainst += result.localGoals

            if(result.localGoals > result.awayGoals){
                localTeam.points += this.config.pointsPerWin
                localTeam.matchesWon += 1
                awayTeam.points += this.config.pointsPerLose
                awayTeam.matchesLost += 1
            } else if(result.localGoals < result.awayGoals){
                localTeam.points += this.config.pointsPerLose
                localTeam.matchesLost += 1
                awayTeam.points += this.config.pointsPerWin
                awayTeam.matchesWon += 1
            } else {
                localTeam.points += this.config.pointsPerDraw
                localTeam.matchesDrawn += 1
                awayTeam.points += this.config.pointsPerDraw
                awayTeam.matchesDrawn += 1
            }
        }
    }

    getStanding(){
        this.teams.sort(function(teamA, teamB){
            if(teamA.points > teamB.points) {
                return -1
            } else if(teamA.points < teamB.points) {
                return 1
            } else {
                const ordenTeams = 0//TO_DO 10, orden primero de partidos entre ellos
                if (ordenTeams == 0) {
                    const goalsDiffA = teamA.goalsFor - teamA.goalsAgainst
                    const goalsDiffB = teamB.goalsFor - teamB.goalsAgainst
                    if (goalsDiffA > goalsDiffB) {
                        return -1
                    } else if (goalsDiffA < goalsDiffB) {
                        return 1
                    } else {
                        if (teamA.name > teamB.name) {
                            return -1
                        } else if (teamA.name < teamB.name) {
                            return 1
                        } else {
                            return 0
                        }
                    }
                }else{
                    return ordenTeams
                }
            }
        })
    }

}
