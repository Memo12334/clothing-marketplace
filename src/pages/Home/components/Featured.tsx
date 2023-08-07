import Cards from '../../../components/Cards'
import { ItemProps } from '../../../shared/interfaces/item.interface'

const items: ItemProps[] = [
  {
    id: 0,
    name: 'Sports',
    description: 'best sports product',
    price: 99,
    images: ['../../src/assets/images/sports.jpg']
  },
]

const Featured = () => {
  return (
    <section className='p-4 mb-16'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-3xl text-center md:text-left lg:text-left'>Featured</h1>
          <a href='#' className='bg-slate-950 hover:bg-slate-800 font-normal text-white rounded-full px-4 py-2'>View All</a>
        </div>
        <Cards cards={items} />
      </div>
    </section>
  )
}

export default Featured
