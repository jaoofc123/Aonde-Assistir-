import { useEffect, useState } from "react"
import axios from "axios"
import MatchCard from "../components/MatchCard"

export default function Home(){

const [matches,setMatches] = useState([])

useEffect(()=>{

axios.get("http://localhost:5000/matches")
.then(res=>setMatches(res.data))

},[])

return(

<div style={{padding:40}}>

<h1>Jogos de Hoje</h1>

{matches.map(match=>(
<MatchCard key={match.id} match={match}/>
))}

</div>

)

}
