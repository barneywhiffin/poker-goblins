import './vpip-calculator.css';
import VpipCard from '../../components/vpip-card/VpipCard';

export default function VpipCalculator() {

    let spans = [];
    
    for (let i = 0; i < 196; i++) {
        spans.push(<VpipCard content={i+1}/>);
    }
    
    return (
        <div className='vpip-grid'>
            {spans}
        </div>
    );
}