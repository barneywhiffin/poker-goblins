import type { CardCalcProps  } from "../../types/Card";

export default function sortCards(arr: CardCalcProps[]) {
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