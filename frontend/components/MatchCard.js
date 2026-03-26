export default function MatchCard({match}){

return(

<div style={{
border:"1px solid #ddd",
padding:20,
marginBottom:20,
borderRadius:10
}}>

<h2>{match.home} vs {match.away}</h2>

<p>🕒 {match.time}</p>
<p>🏟 {match.stadium}</p>
<p>📺 {match.tv}</p>

<h3>Odds IA</h3>

<p>
{match.home}: {match.aiOdds.homeWin}
</p>

<p>
Empate: {match.aiOdds.draw}
</p>

<p>
{match.away}: {match.aiOdds.awayWin}
</p>

</div>

)

}
