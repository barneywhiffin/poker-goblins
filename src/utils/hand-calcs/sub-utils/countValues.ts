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

    return cardCount;
}