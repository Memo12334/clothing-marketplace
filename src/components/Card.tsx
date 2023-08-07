
import { CardProps } from '../shared/interfaces/item.interface.ts'

const Card = ({ name, price, image }: CardProps) => {
  return (
    <div className='justify-self-center md:justify-self-start lg:justify-self-start'>
      <article className='w-full max-w-xs bg-white rounded-lg shadow dark:bg-gray-800 hover:scale-95 transition-transform duration-100'>
        <a href='#'>
          <img className='rounded-t-lg mb-4' src={image} alt='product' />
        </a>
        <div className='px-5 pb-5'>
          <a href='#'>
            <h5 className='text-xl mb-4 font-semibold tracking-tight text-gray-900 dark:text-white'>{name}</h5>
          </a>
          <div className='flex items-center justify-between'>
            <span className='text-2xl font-medium text-gray-900 dark:text-white'>{`$${price}`}</span>
            <button className='text-white bg-slate-950 hover:bg-gray-800 focus:outline-none
              font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            >
              Add to cart
            </button>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Card