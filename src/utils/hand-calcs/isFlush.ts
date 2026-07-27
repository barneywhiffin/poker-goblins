import { sortCards } from './sub-utils/sortCards';
import { mapValuesToRank } from './sub-utils/mapValues';

export default function isFlush(player: number, suits: string[], values: string[]) {

    let spadeCards = [];
    let diamondCards = [];
    let clubCards = [];
    let heartCards = [];

    for (let i = 0; i < suits.length; i++) {
        if (suits[i] === "Spades") {
            spadeCards.push(values[i]);
        }
        else if (suits[i] === "Diamonds") {
            diamondCards.push(values[i]);
        }
        else if (suits[i] === "Clubs") {
            clubCards.push(values[i]);
        }
        else if (suits[i] === "Hearts") {
            heartCards.push(values[i]);
        }
    }
    
    if (spadeCards.length > 4) {
        const [rank1, rank2, rank3, rank4, rank5] = mapValuesToRank(sortCards(spadeCards)); // sorting so that we are looking at the 5 highest of that suit in the 7
        return [player, 6, rank1, rank2, rank3, rank4, rank5];                                      // sorting alg only runs if flush ever found for efficiency
    }
    else if (diamondCards.length > 4) {
        const [rank1, rank2, rank3, rank4, rank5] = mapValuesToRank(sortCards(diamondCards));
        return [player, 6, rank1, rank2, rank3, rank4, rank5];
    }
    else if (clubCards.length > 4) {
        const [rank1, rank2, rank3, rank4, rank5] = mapValuesToRank(sortCards(clubCards));
        return [player, 6, rank1, rank2, rank3, rank4, rank5];
    }
    else if (heartCards.length > 4) {
        const [rank1, rank2, rank3, rank4, rank5] = mapValuesToRank(sortCards(heartCards));
        return [player, 6, rank1, rank2, rank3, rank4, rank5];
    }
    // so that it loses the comparison with paired card function return
    else {
        return [0];
    }
}

