import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center text-center mx-auto h-[32rem] p-4 mb-16 max-w-screen-xl'>
      <h1 className='font-semibold text-4xl lg:text-6xl max-w-5xl mb-4'>Marketplace to buy and sell clothes, made for learning purposes</h1>
      <p className='font-light max-w-2xl mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quasi minima consequatur expedita aliquid? Consequuntur praesentium dolore ab voluptatum perferendis?</p>
      <div className='flex gap-4'>
        <Link to='#' className='bg-slate-950 text-white rounded px-3 py-2 hover:bg-gray-800'>
          Find Products
        </Link>
        <Link to='create-store' className='border border-gray-400 rounded px-3 py-2 hover:border-gray-800'>
          Create Store
        </Link>
      </div>
    </section>
  )
}

export default Hero