import getPairs from './hand-calcs/pairs';
import isFlush from './hand-calcs/isFlush';
import isStraight from './hand-calcs/isStraight';

// this needs to take both player cards and a variable amount of table cards
// (depending on current street)
// this could simply mean, we pass all cards currently on table
// and it just searches through these to find good  hands, regardless of how many in loop?

export default function handCalc(player: number, cards: React.JSX.Element[] ) {
    let suits = [];
    let values = [];
    for (let i = 0; i < cards.length; i++) {
        suits.push(cards[i].props.suit);
        values.push(cards[i].props.value);
    }

    const pairedHand = getPairs(player, values);
    const flush = isFlush(player, suits, values);
    const straight = isStraight(player, values);

    if (flush[1] > pairedHand[1]) {
        return flush;
    }
    else if (straight[1] > pairedHand[1]) {
        return straight;
    }
    else {
        return pairedHand;
    }
}

// need to return the positions of the 5 cards involved in this (if that's best way to do it)