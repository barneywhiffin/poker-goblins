export function mapValueToRank(value: string) {
    switch (value) {
        case "A": {
            return 13;
            break;
        }
        case "K": {
            return 12;
            break;
        }
        case "Q": {
            return 11;
            break;
        }
        case "J": {
            return 10;
            break;
        }
        case "10": {
            return 9;
            break;
        }
        case "9": {
            return 8;
            break;
        }
        case "8": {
            return 7;
            break;
        }
        case "7": {
            return 6;
            break;
        }
        case "6": {
            return 5;
            break;
        }
        case "5": {
            return 4;
            break;
        }
        case "4": {
            return 3;
            break;
        }
        case "3": {
            return 2;
            break;
        }
        case "2": {
            return 1;
            break;
        }
        default: {
            return 0;
            break;
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
            break;
        }
        case 12: {
            return 'K';
            break;
        }
        case 11: {
            return 'Q';
            break;
        }
        case 10: {
            return 'J';
            break;
        }
        case 9: {
            return '10';
            break;
        }
        case 8: {
            return '9';
            break;
        }
        case 7: {
            return '8';
            break;
        }
        case 6: {
            return '7';
            break;
        }
        case 5: {
            return '6';
            break;
        }
        case 4: {
            return '5';
            break;
        }
        case 3: {
            return '4';
            break;
        }
        case 2: {
            return '3';
            break;
        }
        case 1: {
            return '2';
            break;
        }
        default: {
            return '';
            break;
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
            break;
        }
        case 9: {
            return "Straight Flush";
            break;
        }
        case 8: {
            return "Four Of A Kind";
            break;
        }
        case 7: {
            return "Full House";
            break;
        }
        case 6: {
            return "Flush";
            break;
        }
        case 5: {
            return "Straight";
            break;
        }
        case 4: {
            return "Three Of A Kind";
            break;
        }
        case 3: {
            return "Two Pair";
            break;
        }
        case 2: {
            return "Pair";
            break;
        }
        case 1: {
            return "High Card";
            break;
        }
        default: {
            throw("Error assigning hand");
        }
    }
}