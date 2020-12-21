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

export function jornadasMundial(groupsTeams){
    //TO_DO 
}

export function eliminatoryMundial(fase, arrayTeams){
    if (fase == 8){console.log('===== OCTAVOS DE FINAL =====')}
    if (fase == 4){console.log('===== CUARTOS DE FINAL =====')}
    if (fase == 2){console.log('======= SEMIFINALES ========')}
    console.log('')
    let teamL, resultL, teamA, resultA, winner
    for (let paring of arrayTeams){
        teamL = paring.localteam.name
        resultL = paring.localgoals
        teamA = paring.awayteam.name
        resultA = paring.awaygoals
        winner = paring.winnerteam
        mostrarResultadoEliminatoria(teamL, resultL, teamA, resultA, winner)
    }
    console.log('')
}

export function finalesMundial(arrayTeams){
    const teamCL, resultCL, teamCA, resultCA, winnerC, teamLL, resultLL, teamLA, resultLA, winnerL, champion
    for (let paring of arrayTeams){
        if(paring.name == 'Final'){
            teamCL = paring.localteam.name
            resultCL = paring.localgoals
            teamCA = paring.awayteam.name
            resultCA = paring.awaygoals
            winnerC = paring.winnerteam
            champion = winnerC
        }else{
            teamLL = paring.localteam.name
            resultLL = paring.localgoals
            teamLA = paring.awayteam.name
            resultLA = paring.awaygoals
            winnerL = paring.winnerteam
        }
    }

    console.log('===== TERCER Y CUARTO PUESTO =====')
    console.log('')
    mostrarResultadoEliminatoria(teamLL, resultLL, teamLA, resultLA, winnerL)
    console.log('')
    console.log('===== FINAL =====')
    console.log('')
    mostrarResultadoEliminatoria(teamCL, resultCL, teamCA, resultCA, winnerC)
    console.log('')
    console.log('===============================================')
    console.log('¡', champion, 'campeón del mundo!')
    console.log('===============================================')

}

function mostrarResultadoEliminatoria(teamL, resultL, teamA, resultA, winner){
        console.log(`${teamL} ${resultL} - ${resultA} ${teamA} => ${winner} `)
}
