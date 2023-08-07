import { ItemProps } from '../shared/interfaces/item.interface'
import Card from './Card'

interface CardsProps {
  cards: ItemProps[]
}

const Cards = ({ cards }: CardsProps) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
      {cards.map((card, index) => (
        <Card
          key={index}
          name={card.name}
          price={card.price}
          image={card.images[0]}
        />
      ))}
    </div>
  )
}

export default Cards