import countValues from './sub-utils/countValues';
import { mapValueToRank } from './sub-utils/mapValues';

export default function isStraight(player: number, values: string[]) {
    let cardCount = countValues(values);
    // need to repeat the A (first entry) at the end
    // then flip the whole thing round
    cardCount.push(cardCount[0]);
    cardCount.reverse();

    let counter = 0;
    let straights = [];

    // each time we have that value in our 7, add to count. if we reach a break, reset count. if it hits 5, push current value
    for (let i = 0; i < cardCount.length; i++) {
        if (cardCount[i].count >= 1) {
            counter++;
        }
        else {
            counter = 0;
        }
        // this means each value in the straights array represents a "{value} high straight"
        if (counter >= 5) {
            straights.push(cardCount[i].value);
        }
    }
    if ( straights.length > 0) {
        const topVal = straights.at(-1) ?? "";
        const topRank = mapValueToRank(topVal);
        return [player, 5, topRank, topRank-1, topRank-2, topRank-3, topRank-4];
    }
    // so that it loses the comparison with paired card function return
    else {
        return [0];
    }
}