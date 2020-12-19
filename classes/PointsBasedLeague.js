import League from './League.js'

export default class PointsBasedLeague extends League {
    constructor(team, teams=[], config={}) {
        super(team, teams, config)
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
        const customizeTeam = super.customizeTeam(teamName)
        //customizeTeam.points = 0
        //customizeTeam.goalsFor = 0
        //customizeTeam.goalsAginst = 0
        //return customizeTeam
        return{
            points: 0,
            goalsFor: 0,
            goalsAginst: 0,
            ...customizeTeam
        }
    }
}
