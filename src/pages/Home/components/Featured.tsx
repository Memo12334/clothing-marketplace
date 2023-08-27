import Cards from '../../../components/Cards'
import { ItemProps } from '../../../shared/interfaces/item.interface'

const items: ItemProps[] = [
  {
    name: 'Sports',
    description: 'best sports product',
    price: 99,
    images: ['/images/sports.jpg']
  },
]

const Featured = () => {
  // const { isLoading, isError, data, error } = useQuery(['stores'], async () => {
  //   const res = await fetch('http://localhost:5000/store')
  //   if (!res.ok) {
  //     throw new Error('Network response was not ok')
  //   }
  //   return res.json()
  // })

  // if (isLoading) {
  //   return <span>Loading...</span>
  // }

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
