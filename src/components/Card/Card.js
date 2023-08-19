import './Card.css'

function Card(props){
    return (
        <div className='detail-container'>{props.children}</div>)
}


export default Card;