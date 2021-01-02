const largoMessage = 48
const mostrarResultado     = (teamL, resultL, teamA, resultA)         => {console.log(`${teamL} ${resultL} - ${resultA} ${teamA}`)}
const mostrarResultadoElim = (teamL, resultL, teamA, resultA, winner) => {console.log(`${teamL} ${resultL} - ${resultA} ${teamA} => ${winner} `)}
const linea                = ()                                       => {console.log('')}
const championLine         = (teamWinner)                             => {console.log(`¡ ${teamWinner} campeón del mundo!`)}
const group                = (grupo)                                  => {console.log(`- Grupo ${grupo}`)}
const teamsLine            = (nameT, pointsT)                         => {console.log(`     ${nameT} con los Puntos FIFA ${pointsT}`)}
const jornadaLine          = (jornada)                                => {console.log(`        Jornada ${jornada}`)}
const jornadaLineGrupo     = (group, jornada)                         => {console.log(`Grupo ${group} - Jornada ${jornada}`)}
const partidosLine         = (partidos)                               => {console.log('            ', partidos)}
const tablaClasification   = (standing)                               => {console.table(standing)} 
const iguales = () => {
    let cadena = ''
    while (cadena.length < largoMessage) {cadena += '='}
    console.log(cadena)
}

const guiones = () => {
    let cadena = ''
    while (cadena.length < (largoMessage/2)) {cadena += '-'}
    console.log(cadena)
}

const lineaText = (texto) => {
    texto = ' ' + texto + ' '
    if(texto.length % 2 != 0) {texto = texto + ' '}
    while (texto.length < largoMessage) {texto = '=' + texto + '='}
    console.log(texto)
}

export function initialError(){
    console.log('Imposible empezar el Mundial, porque deben ser 32 equipos')
}

export function initMundial(groupsteams){
    lineaText('Bienvenido al Mundial de Simualdor KC')
    lineaText('Grupos y su planificación')
    iguales()
    linea()

    groupsteams.groupsLeagueTeams.forEach(groupLeage =>{
        group(groupLeage.name)
        groupLeage.teams.forEach(team=>{teamsLine(team.name, team.pointsFIFA)})
        let i = 1
        groupLeage.matchDaySchedule.forEach(matchDay =>{
            jornadaLine(i)
            matchDay.forEach(match => {partidosLine(match.join(' vs '))})
            i++
        })
    })

    linea()
    lineaText('Comienza el Mundial de Simualdor KC')
}

export function jornadasMundial(groupsTeams){
    //TO_DO 5, poner primero las jornadas todos los equipos
    groupsTeams.groupsLeagueTeams.forEach(groupLeagueTeams =>{
        let i = 1
        groupLeagueTeams.summaries.forEach(summary => {
            jornadaLineGrupo(groupLeagueTeams.name,i)
            guiones()
            summary.results.forEach(result => {
                mostrarResultado(result.localTeam, result.localGoals, result.awayTeam, result.awayGoals)
            })
            
            tablaClasification(summary.standing.map(team => {
                    return {
                        Equipo: team.name,
                        Puntos: team.points,
                        Goles_favor: team.goalsFor,
                        Goles_contra: team.goalsAgainst,
                        Diferencia_goles: team.goalsFor - team.goalsAgainst}
                    })
                )
            i++
        })
    })
}

export function eliminatoryMundial(fase, arrayTeams){
    if (fase == 8){
        iguales()
        lineaText('COMIENZO DE LA FASE DE ELIMINATORIAS')
        iguales()
        linea()
        lineaText('OCTAVOS DE FINAL')
    }
    if (fase == 4){lineaText('CUARTOS DE FINAL')}
    if (fase == 2){lineaText('SEMIFINALES')}
    linea()

    let teamL, resultL, teamA, resultA, winner
    for (const paring of arrayTeams){
        teamL = paring.localteam.name
        resultL = paring.localgoals
        teamA = paring.awayteam.name
        resultA = paring.awaygoals
        winner = paring.winnerteam
        mostrarResultadoElim(teamL, resultL, teamA, resultA, winner)
    }
    linea()
}

export function finalesMundial(arrayTeams){
    let teamCL, resultCL, teamCA, resultCA, winnerC, teamLL, resultLL, teamLA, resultLA, winnerL, champion
    for (const paring of arrayTeams){
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

    lineaText('TERCER Y CUARTO PUESTO')
    linea()
    mostrarResultadoEliminatoria(teamLL, resultLL, teamLA, resultLA, winnerL)
    linea()
    lineaText('FINAL')
    linea()
    mostrarResultadoEliminatoria(teamCL, resultCL, teamCA, resultCA, winnerC)
    linea()
    iguales()
    championLine(champion)
    iguales()
}