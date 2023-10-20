// CSS
import './Card.css'

function Card({titulo, texto, img}) {
  return (
    <div className='card'> 
    <img src={img} className='cardImg' alt='LOGO'/>
      <div className='cardText'>
        <h1>{titulo}</h1>
        <h5>{texto}</h5>
      </div>
    </div>
  )
}

export default Card