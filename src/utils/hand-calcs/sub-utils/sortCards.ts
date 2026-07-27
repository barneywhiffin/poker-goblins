import type { CardCalcProps  } from "../../../types/Card";
import { mapRanksToValue, mapValuesToRank } from "./mapValues";

export function sortCards(values : string[]) {
    const vals = mapValuesToRank(values);
    let stillSwitching = true;

    while (stillSwitching) {
        let switchCount = 0;
        for (let i = 0; i < vals.length-1; i++) {
            if (vals[i+1] > vals[i]) {
                [vals[i], vals[i+1]] = [vals[i+1], vals[i]];
                switchCount++;
            }
        }
        if (switchCount === 0) {
            stillSwitching = false;
        }
    }
    const sortedValues = mapRanksToValue(vals);
    return sortedValues;
}

export function sortCardsWithCount(arr: CardCalcProps[]) {
    // while loop. each time switch made, add to a switch count. if 0 at loop end, flip the flag
    let stillSwitching = true;

    while (stillSwitching) {
        let switchCount = 0;
        for (let i = 0; i < arr.length-1; i++) {
            if (arr[i+1].count > arr[i].count) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                switchCount++;
            }
        }
        if (switchCount === 0) {
            stillSwitching = false;
        }
    }

    return arr;
}

export function rankHands(arr: number[][]) {
    let stillSwitching = true;

    while (stillSwitching) {
        let switchCount = 0;
        for (let i = 0; i < arr.length-1; i++) {
            if (arr[i+1][1] > arr[i][1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                switchCount++;
            }
        }
        if (switchCount === 0) {
            stillSwitching = false;
        }
    }
    return arr;
}