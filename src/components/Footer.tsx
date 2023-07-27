
const Footer = () => {
  return (
    <footer className='pt-12 pb-12 pl-4 pr-4 border-t border-gray-300'>
      <div className='max-w-screen-xl mx-auto grid gap-20 lg:grid-cols-[200px_400px_400px] lg:gap-0'>
        <div className='justify-self-center lg:justify-self-start'>
          <a className='font-bold cursor-pointer' href='#'>ClothingShop</a>
        </div>
        <div className='flex justify-evenly font-light text-gray-500'>
          <div className='flex flex-col gap-3'>
            <a className='block hover:text-slate-950' href='#'>Home</a>
            <a className='block hover:text-slate-950' href='#'>About</a>
            <a className='block hover:text-slate-950' href='#'>Privacy</a>
            <a className='block hover:text-slate-950' href='#'>Contact</a>
            <a className='block hover:text-slate-950' href='#'>Products</a>
          </div>
          <div className='flex flex-col gap-3'>
            <a className='block hover:text-slate-950' href='#'>Twitter</a>
            <a className='block hover:text-slate-950' href='#'>Github</a>
            <a className='block hover:text-slate-950' href='#'>Discord</a>
          </div>
        </div>
        <div className='justify-self-center pb-12'>
          <h1 className='font-bold mb-2 text-center lg:text-start'>Subscribe to our newsletter</h1>
          <input type='email' placeholder='test@gmail.com'
            className='rounded-full w-[18rem] border border-zinc-300 focus:outline outline-zinc-300 p-2 pl-4'
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer