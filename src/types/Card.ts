// TODO: work out if necessary and if so, if there is a way to still have value and suit be specifically typed
// possibly yes as we are no back to cards being created in a for loop. although still kinda pointless top of my head

export interface Card {
    id: number
    value: string;
    suit: string;
    isShown: boolean;
    rotated: boolean;
}

export interface CardProps {
    id: number
    value: string;
    suit: string;
    isShown: boolean;
    toggleFunction: Function;
    rotated: boolean;
}