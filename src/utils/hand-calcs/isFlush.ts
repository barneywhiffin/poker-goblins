import { sortCards } from './sub-utils/sortCards';
import { mapValuesToRank } from './sub-utils/mapValues';
import isStraight from './isStraight';

export default function isFlush(player: number, suits: string[], values: string[]) {

    let spadeCards = [];
    let diamondCards = [];
    let clubCards = [];
    let heartCards = [];

    for (let i = 0; i < suits.length; i++) {
        if (suits[i] === 'Spades') {
            spadeCards.push(values[i]);
        }
        else if (suits[i] === 'Diamonds') {
            diamondCards.push(values[i]);
        }
        else if (suits[i] === 'Clubs') {
            clubCards.push(values[i]);
        }
        else if (suits[i] === 'Hearts') {
            heartCards.push(values[i]);
        }
    }

    const suitedCards = [spadeCards, diamondCards, clubCards, heartCards];

    for (let i = 0; i < suitedCards.length; i++) {
        if (suitedCards[i].length > 4) {    
            const straight = isStraight(player, suitedCards[i]);
            if (straight[1] > 0) {
                if (straight[2] === 13) {
                    return [player, 10, straight[2]];
                }
                else {
                    return [player, 9, straight[2]];
                }
            }
            else {
                const [rank1, rank2, rank3, rank4, rank5] = mapValuesToRank(sortCards(suitedCards[i])); // sorting so that we are looking at the 5 highest of that suit in the 7
                return [player, 6, rank1, rank2, rank3, rank4, rank5];                             // sorting alg only runs if flush ever found for efficiency                
            }
        }
    }
    
    // so that it loses the comparison with paired card function return, if no flush found
    return [0];
}

