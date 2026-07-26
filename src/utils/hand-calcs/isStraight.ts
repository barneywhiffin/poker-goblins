import countValues from './countValues';

export default function isStraight(values: string[]) {
    // sort them to be in order, discarding duplicates at this juncture!
    let cardCount = countValues(values);
    // need to repeat the A (first entry) at the end
    // then flip the whole thing round
    cardCount.push(cardCount[0]);
    cardCount.reverse();
    console.log(cardCount);

    let counter = 0;
    let straights = [];

    // each time we have that card in our 7, add to count. if we reach a break, reset count. if it hits 5, push current value
    for (let i = 0; i < cardCount.length; i++) {
        if (cardCount[i].count >= 1) {
            counter++;
        }
        else {
            counter = 0;
        }
        // this means each value in the straights array represents a "{value} high straight"
        if (counter === 5) {
            straights.push(cardCount[i].value);
        }
    }
    const straight = straights.at(-1) ?? "";
    return straight;
}