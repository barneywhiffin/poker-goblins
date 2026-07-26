import countValues from './countValues';

export default function isPair(values: string[]) {
    const cardCount = countValues(values);
    if (cardCount[0].count === 4) {
        return "Four Of A Kind";
    }
    else if (cardCount[0].count === 3) {
        if (cardCount[1].count === 2) {
            return "Full House";
        }
        else {
            return "Three Of A Kind";
        }
    }
    else if (cardCount[0].count === 2) {
        if (cardCount[1].count === 2) {
            return "Two Pair";
        }
        else {
            return "Pair";
        }
    }
    else {
        return "High Card";
    }
}

// this needs to return a) value, like "FoaK", and description, like "Aces"
// the description is not needed until back at like table or smt
// obvs this could be 1 string but that complicates logic at handCalc
// ahh shit no we need to know top 5 cards too