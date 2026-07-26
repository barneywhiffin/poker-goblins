export default function countValues(values: string[]) {
        
    let cardCount = [
        {value: "A", count: 0},
        {value: "K", count: 0},
        {value: "Q", count: 0},
        {value: "J", count: 0},
        {value: "10", count: 0},
        {value: "9", count: 0},
        {value: "8", count: 0},
        {value: "7", count: 0},
        {value: "6", count: 0},
        {value: "5", count: 0},
        {value: "4", count: 0},
        {value: "3", count: 0},
        {value: "2", count: 0},
    ];

    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < cardCount.length; j++) {
            if (values[i] === cardCount[j].value) {
                cardCount[j].count++;
            }
        }
    }

    // while loop. each time switch made, add to a switch count. if 0 at loop end, flip the flag
    let stillSwitching = true;

    while (stillSwitching) {
        let switchCount = 0;
        for (let i = 0; i < cardCount.length-1; i++) {
            if (cardCount[i+1].count > cardCount[i].count) {
                [cardCount[i], cardCount[i+1]] = [cardCount[i+1], cardCount[i]];
                switchCount++;
            }
        }
        if (switchCount === 0) {
            stillSwitching = false;
        }
    }

    return cardCount;
}