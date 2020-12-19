export function initMundial(groupsteams){
    console.log('Bien venido al Mundial de Simualdor KC')
    console.log('Grupos y su planificación')
    let i = 1
    groupsteams.matchDaySchedule.forEach(matchDay =>{
            console.log(`Jornada ${i}`)
            matchDay.forEach(match => {
            console.log(match.join(' vs '))
        })
        i++
    })
    console.log('Comienza el Mundial de Simualdor KC')
}