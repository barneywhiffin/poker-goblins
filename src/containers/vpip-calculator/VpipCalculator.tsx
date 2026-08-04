import './vpip-calculator.css';
import VpipCard from '../../components/vpip-card/VpipCard';
import { values } from '../../utils/getCardValues';
import { mapValueToRank } from '../../utils/hand-calcs/sub-utils/mapValues';
import { useState, useEffect } from 'react';

const values1 = [...values];
let values2 = [...values];

function sortValues(val1: string, val2: string) {
    const rank1 = mapValueToRank(val1);
    const rank2 = mapValueToRank(val2);
    if (rank2 > rank1) {
        return val2 + '·' + val1 + 'o';
    }
    else if (rank2 < rank1) {
        return val1 + '·' + val2 + 's';
    }
    else {
        return val1 + '·' + val2;
    }
}


export default function VpipCalculator({computedColorScheme}: {computedColorScheme: string}) {
    
    const [vpipColours, setVpipColours] = useState<{ id: number; colour: string }[]>([]);

    // useEffect, so that it waits for computedColorScheme before first render
    // doesn't have cleanup code (a return) as only ever called once
    useEffect(() => {
        const defaultColour = computedColorScheme === 'light' ? 'coral' : 'red';
        let vpipCardColours = [];
        for (let i = 0; i < 169; i++) {
            vpipCardColours.push({id: i, colour: defaultColour});
        }

        setVpipColours(vpipCardColours);

    }, [computedColorScheme]);


    function findNewColour(colour: string) {
        switch(colour) {
            case 'coral':
                return 'gold';
            case 'gold':
                return 'lightgreen';
            case 'lightgreen':
                return 'coral';
            case 'red':
                return 'orange';
            case 'orange':
                return 'green';
            case 'green':
                return 'red';
            default:
                return '';
        }
    }

    function changeColour(id: number) {
        setVpipColours(prevColours => prevColours.map(
            vpipCard => (vpipCard.id === id ? 
            {...vpipCard, colour: findNewColour(vpipCard.colour)}
            : vpipCard)
        ));
    }


    // need some way of having state cycle through the 3 values...
    // then have a const/function pair that maps values to coral, gold, lightgreen
    // and pass the output of this to vpipColour in the component call

    let vpipCards = [];
    let id = 0;

    if (vpipColours.length === 0) {
        return null;
    }
    
    for (let i = 0; i < values1.length; i++) {
        for (let j = 0; j < values2.length; j++) {
            vpipCards.push(<VpipCard key={id} id={id} vpipColour={vpipColours[id].colour} setVpipColour={changeColour} content={sortValues(values1[i], values2[j])}/>);
            id++;
        }
    }

    // the underlying div of each card could be a mantine button
    // which takes a colour based argument, given via props
    // this is held in state and cycled through on click
    
    return (
        <div className='vpip-grid'>
            {vpipCards}
        </div>
    );
}