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


    // a) we don't need to display the kicker
    // although a trophy for winning because of the kicker would be sickkkk
    // b) we should simply be returning an array of numbers, with the numbers representing ranks
    // rank 1 is the type of hand (from 1 to 10) then rank 2 up to optional rank 6 are the values it is made with
    // uhh for flush and high card we would need 5 extra values (fucks sake)
    // e.g. [7, 13, 11] would mean full house aces full of queens
    // this is then far easier to compare with rival hands, simply is first bigger number, if same is second bigger, etc
    
    // this is really clean but we still need to return the actual 5 cards for display reasons ( i think? )
    // yep.... so 1st array element is another array saying which cards are relevant (i'm thinking indices of the 7)
    // .... also flush code knows nothing about values currently


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

// this needs to return a) value, like "FoaK", and description, like "Aces"
// the description is not needed until back at like table or smt
// obvs this could be 1 string but that complicates logic at handCalc
// ahh shit no we need to know top 5 cards too

// TODO: we need a function that removes the hands we currently care about, and works out the next however many highest 
// this will make up the returned 5