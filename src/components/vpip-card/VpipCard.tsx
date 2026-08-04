import './vpip-card.css';

export default function VpipCard({content}: {content: string}) {
    return (
        <div className='vpip-card'>{content}</div>
    )
}