import countValues from './sub-utils/countValues';
import { sortCardsWithCount } from './sub-utils/sortCards';
import { mapValueToRank } from './sub-utils/mapValues';

export default function isPair(player: number, values: string[]) {

    const cardCount = sortCardsWithCount(countValues(values));
    const rank1 = mapValueToRank(cardCount[0].value);
    const rank2 = mapValueToRank(cardCount[1].value);
    const rank3 = mapValueToRank(cardCount[2].value) ?? 0; // in rarest scenario, there would only be 2 different values in the 7
    const rank4 = mapValueToRank(cardCount[3].value) ?? 0; // so error catching here
    const rank5 = mapValueToRank(cardCount[4].value) ?? 0;

    if (cardCount[0].count === 4) {
        // quads
        return [player, 8, rank1, rank2];
    }
    else if (cardCount[0].count === 3) {
        if (cardCount[1].count >= 2) {
            // full house
            return [player, 7, rank1, rank2];
        }
        else {
            // set
            return [player, 4, rank1, rank2, rank3];
        }
    }
    else if (cardCount[0].count === 2) {
        if (cardCount[1].count === 2) {
            // two pair
            return [player, 3, rank1, rank2, rank3];
        }
        else {
            // pair
            return [player, 2, rank1, rank2, rank3, rank4];
        }
    }
    else {
        // high card
        return [player, 1, rank1, rank2, rank3, rank4, rank5];
    }
}