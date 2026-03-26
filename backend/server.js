const express = require("express")
const cors = require("cors")

const matchesRoute = require("./routes/matches")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/matches", matchesRoute)

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000")
})
