import './vpip-calculator.css';
import VpipCard from '../../components/vpip-card/VpipCard';
import { values } from '../../utils/getCardValues';
import { mapValueToRank } from '../../utils/hand-calcs/sub-utils/mapValues';

const values1 = [...values];
let values2 = [...values];

function sortValues(val1: string, val2: string) {
    const rank1 = mapValueToRank(val1);
    const rank2 = mapValueToRank(val2);
    if (rank2 > rank1) {
        return val2 + '.' + val1 + 'o';
    }
    else if (rank2 < rank1) {
        return val1 + '.' + val2 + 's';
    }
    else {
        return val1 + '.' + val2;
    }
}

export default function VpipCalculator() {

    let spans = [];
    let id = 0;
    
    for (let i = 0; i < values1.length; i++) {
        for (let j = 0; j < values2.length; j++) {
            id++;
            spans.push(<VpipCard key={id} content={sortValues(values1[i], values2[j])}/>);
        }
    }

    // the underlying div of each card could be a mantine button
    // which takes a colour based argument, given via props
    // this is held in state and cycled through on click
    
    return (
        <div className='vpip-grid'>
            {spans}
        </div>
    );
}