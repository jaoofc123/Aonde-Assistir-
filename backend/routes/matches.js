const express = require("express")
const router = express.Router()

const calculateOdds = require("../aiOdds")

router.get("/", async (req,res)=>{

const matches = [
{
id:1,
home:"Flamengo",
away:"Palmeiras",
time:"21:30",
stadium:"Maracanã",
tv:"Globo / Premiere",

formHome:[3,3,1,3,0],
formAway:[3,0,3,1,1]
}
]

const result = matches.map(match=>{

const odds = calculateOdds(
{form:match.formHome},
{form:match.formAway}
)

return {
...match,
aiOdds:odds
}

})

res.json(result)

})

module.exports = router
