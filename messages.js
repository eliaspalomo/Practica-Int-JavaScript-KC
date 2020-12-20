export function initMundial(groupsteams){
    console.log('Bienvenido al Mundial de Simualdor KC')
    console.log('Grupos y su planificación')

    groupsteams.groupsLeagueTeams.forEach(groupLeage =>{
        console.log('- Grupo', groupLeage.name)
        groupLeage.teams.forEach(team=>{
            console.log('    ', team.name, 'con los Puntos FIFA', team.pointsFIFA)
        })
        
        let i = 1
        groupLeage.matchDaySchedule.forEach(matchDay =>{
            console.log(`        Jornada ${i}`)
            matchDay.forEach(match => {
                console.log('            ', match.join(' vs '))
            })
            i++
        })
    
    })

    console.log('Comienza el Mundial de Simualdor KC')
}