import { mapRankToHand } from '../utils/hand-calcs/sub-utils/mapValues';

export default function WinnerMessage({winners}: {winners: number[][]}) {
    const hand = mapRankToHand(winners[0][1]);
    let players = [];
    for (let i = 0; i < winners.length; i++) {
        players.push({player: winners[i][0], key: i});
    }
    const playerElems = players.map(player => (<p key={player.key}>Player {player.player}</p>))
    return (
        <>
            <div style={{margin: '30px', maxWidth: '300px'}}>
                {players.length > 1 ? <p>Split pot! Joint winners are: </p> : <p>Winner: </p>}
                {playerElems}
                <p>with a {hand}</p>
            </div>
        </>
    )
}