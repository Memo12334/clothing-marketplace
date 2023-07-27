import { CardProps } from '../shared/interfaces/card.interface'
import Card from './Card'

interface CardsProps {
  cards: CardProps[]
}

const Cards = ({ cards }: CardsProps) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          price={card.price}
          image={card.image}
        />
      ))}
    </div>
  )
}

export default Cards