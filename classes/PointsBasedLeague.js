import League from './League.js'

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
        const customizeTeam = super.customizeTeam(teamName)
        
        return{
            points: 0,
            goalsFor: 0,
            goalsAginst: 0,
            ...customizeTeam
        }
    }
}
