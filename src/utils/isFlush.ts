export default function isFlush(suits: string[]) {

    let handSpades = 0;
    let handDiamonds = 0;
    let handClubs = 0;
    let handHearts = 0;

    const handSuits = suits.slice(0, 1);
    const tableSuits = suits.slice(2, 6);

    for (let i = 0; i < handSuits.length; i++) {
        if (suits[i] === "Spades") {
            handSpades++;
        }
        else if (suits[i] === "Diamonds") {
            handDiamonds++;
        }
        else if (suits[i] === "Clubs") {
            handClubs++;
        }
        else if (suits[i] === "Hearts") {
            handHearts++;
        }
    }

    let tableSpades = 0;
    let tableDiamonds = 0;
    let tableClubs = 0;
    let tableHearts = 0;
    
    for (let i = 0; i < tableSuits.length; i++) {
        if (suits[i] === "Spades") {
            tableSpades++;
        }
        else if (suits[i] === "Diamonds") {
            tableDiamonds++;
        }
        else if (suits[i] === "Clubs") {
            tableClubs++;
        }
        else if (suits[i] === "Hearts") {
            tableHearts++;
        }
    }
    
    if (handSpades > 0 && handSpades + tableSpades > 4) {
        return true;
    }
    else if (handDiamonds > 0 && handDiamonds + tableDiamonds > 4) {
        return true;
    }
    else if (handClubs > 0 && handClubs + tableClubs > 4) {
        return true;
    }
    else if (handHearts > 0 && handHearts + tableHearts > 4) {
        return true;
    }
    else {
        return false;
    }
}