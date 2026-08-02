export function mapValueToRank(value: string) {
    switch (value) {
        case "A": {
            return 13;
        }
        case "K": {
            return 12;
        }
        case "Q": {
            return 11;
        }
        case "J": {
            return 10;
        }
        case "10": {
            return 9;
        }
        case "9": {
            return 8;
        }
        case "8": {
            return 7;
        }
        case "7": {
            return 6;
        }
        case "6": {
            return 5;
        }
        case "5": {
            return 4;
        }
        case "4": {
            return 3;
        }
        case "3": {
            return 2;
        }
        case "2": {
            return 1;
        }
        default: {
            return 0;
        }
    }
}

export function mapValuesToRank(values: string[]) {
    let mappedValues = [];
    for (let i = 0; i < values.length; i++) {
        mappedValues.push(mapValueToRank(values[i]));
    }
    return mappedValues;
}

export function mapRankToValue(value: number) {
    switch (value) {
        case 13: {
            return 'A';
        }
        case 12: {
            return 'K';
        }
        case 11: {
            return 'Q';
        }
        case 10: {
            return 'J';
        }
        case 9: {
            return '10';
        }
        case 8: {
            return '9';
        }
        case 7: {
            return '8';
        }
        case 6: {
            return '7';
        }
        case 5: {
            return '6';
        }
        case 4: {
            return '5';
        }
        case 3: {
            return '4';
        }
        case 2: {
            return '3';
        }
        case 1: {
            return '2';
        }
        default: {
            return '';
        }
    }
}

export function mapRanksToValue(values: number[]) {
    let mappedValues = [];
    for (let i = 0; i < values.length; i++) {
        mappedValues.push(mapRankToValue(values[i]));
    }
    return mappedValues;
}

export function mapRankToHand(rank: number) {
    switch (rank) {
        case 10: {
            return "Royal Flush";
        }
        case 9: {
            return "Straight Flush";
        }
        case 8: {
            return "Four Of A Kind";
        }
        case 7: {
            return "Full House";
        }
        case 6: {
            return "Flush";
        }
        case 5: {
            return "Straight";
        }
        case 4: {
            return "Three Of A Kind";
        }
        case 3: {
            return "Two Pair";
        }
        case 2: {
            return "Pair";
        }
        case 1: {
            return "High Card";
        }
        default: {
            throw("Error assigning hand");
        }
    }
}