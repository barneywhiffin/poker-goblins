import type { CardCalcProps  } from '../../../types/Card';
import { mapRanksToValue, mapValuesToRank } from './mapValues';

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

function deepSwap(arr: number[][], i: number, depth: number, switches: number): [number[][], number] {
    if (arr[i+1][depth] === arr[i][depth]) {
        depth++;
        if (arr[i][depth]) {
            [arr, switches] = deepSwap(arr, i, depth, switches);
        }
    }
    else if (arr[i+1][depth] > arr[i][depth]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        switches ++;
        console.log(`sort: index ${i} swapped with ${i+1}`);
        console.log([...arr]);
    }
    return [arr, switches];
}

export function rankHands(arr: number[][]) {

    let stillSwitching = true;
    let depth = 1;

    while (stillSwitching) {
        let switches = 0;
        for (let i = 0; i < arr.length-1; i++) {
            [arr, switches] = deepSwap(arr, i, depth, switches);
            console.log(`switches = ${switches}`);
        }
        if (switches === 0) {
            stillSwitching = false;
        }
    }

    // still need to account for tiessssss

    return arr;
}

export function findTies(arr: number[][]) {
    let tied = true;
    let nTies = 1;
    while (tied) {
        for (let i = 0; i < arr.length-1; i++) {
            for (let j = 1; j < arr[i].length; j++) { 
                if (arr[i][j] != arr[i+1][j]) {
                    tied = false;
                    return nTies;
                }
            }
            nTies === arr.length ? tied = false : nTies++;
        }
    }
    return nTies;
}

