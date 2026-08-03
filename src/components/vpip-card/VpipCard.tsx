import './vpip-card.css';

export default function VpipCard({content}: {content: number}) {
    return (
        <div className='vpip-card'>{content}</div>
    )
}