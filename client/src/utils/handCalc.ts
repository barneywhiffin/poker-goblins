import getPairs from './hand-calcs/pairs';
import isFlush from './hand-calcs/isFlush';
import isStraight from './hand-calcs/isStraight';

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