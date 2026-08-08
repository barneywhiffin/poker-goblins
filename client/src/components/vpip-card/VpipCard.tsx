import './vpip-card.css';

export default function VpipCard(
    {id, content, vpipColour, setVpipColour}:
    {id: number, content: string, vpipColour: string, setVpipColour: (tab: number) => void})
    {
    return (
        <button style={{background: vpipColour}} onClick={() => setVpipColour(id)} className='vpip-card'>{content}</button>
    )
}