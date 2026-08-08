import { findTies, rankHands } from '../utils/hand-calcs/sub-utils/sortCards';

export default function getWinners(hands: number[][]) {
    const rankedHands = rankHands(hands);
    const numWinners = findTies(rankedHands);
    let winners = [];
    for (let i = 0; i < numWinners; i++) {
        winners.push(rankedHands[i]);
    }
    return winners;
}