import './vpip-calculator.css';
import VpipCard from '../../components/vpip-card/VpipCard';
import { values } from '../../utils/getCardValues';

const values1 = [...values];
let values2 = [...values];

export default function VpipCalculator() {

    let spans = [];
    let id = 0;
    
    for (let i = 0; i < values1.length; i++) {
        for (let j = 0; j < values2.length; j++) {
            id++;
            spans.push(<VpipCard key={id} content={`${values1[i]} ${values2[j]}`}/>);
        }
    }
    
    return (
        <div className='vpip-grid'>
            {spans}
        </div>
    );
}