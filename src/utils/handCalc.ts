import getPairs from './hand-calcs/pairs';
import isFlush from './hand-calcs/isFlush';

// this needs to take both player cards and a variable amount of table cards
// (depending on current street)
// this could simply mean, we pass all cards currently on table
// and it just searches through these to find good hands, regardless of how many in loop?

export default function handCalc(p1: React.JSX.Element, p2: React.JSX.Element, f1: React.JSX.Element, f2: React.JSX.Element, f3: React.JSX.Element, t: React.JSX.Element, r: React.JSX.Element ) {
    const suits = [p1.props.suit, p2.props.suit, f1.props.suit, f2.props.suit, f3.props.suit, t.props.suit, r.props.suit];
    const values = [p1.props.value, p2.props.value, f1.props.value, f2.props.value, f3.props.value, t.props.value, r.props.value];

    const pairCheck = getPairs(values);

    if (isFlush(suits)) {
        if (pairCheck === "Four Of A Kind" || pairCheck === "Full House") {
            return pairCheck;
        }
        else {
            return "Flush";
        }
    }
    else {
        return pairCheck;
    }
}

// so we need some efficiencies here
// top down is obvious efficiency, becuase as soon as we have found a hand we can stop
// however royal flush and straight flush so rare
// i think check if 4 cards are same, else 3 (if 3 are there 2 others same)
// and check if we have flush, and straight
// if we have flush, still need to check straight, and if true, need to also check if RF

// we need to return both the name of the hand (Four of a kind: aces or full house: threes full of twos)
// and the positions of the 5 cards involved in this (if that's best way to do it)