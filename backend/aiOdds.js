function calculateOdds(teamA, teamB) {

    const scoreA = teamA.form.reduce((a,b)=>a+b,0)
    const scoreB = teamB.form.reduce((a,b)=>a+b,0)

    const total = scoreA + scoreB

    const chanceA = scoreA / total
    const chanceB = scoreB / total
    const draw = 0.25

    return {
        homeWin: (1/chanceA).toFixed(2),
        draw: (1/draw).toFixed(2),
        awayWin: (1/chanceB).toFixed(2)
    }
}

module.exports = calculateOdds
