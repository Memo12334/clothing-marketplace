import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [open, setOpen] = useState(0)

  return (
    <header>
      <div className='max-w-screen-xl mx-auto flex justify-between items-center p-4'>
        <Link to='#' className='hidden lg:block lg:font-bold'>ClothingShop</Link>
        <button className='block lg:hidden'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-8 h-8'>
            <path stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
          </svg>
        </button>
        <div onMouseLeave={() => setOpen(0)} className='hidden lg:flex lg:gap-10 lg:justify-between p-2 m-2 relative'>
          <div>
            <Link onMouseOver={() => setOpen(1)} className='hover:underline underline-offset-4' to='#'>
              Clothes
            </Link>
            {open === 1 && <Dropdown open={open} men={['Shoes', 'Hoodies']} women={['Shoes', 'Hoodies']} />}
          </div>

          <div>
            <Link onMouseOver={() => setOpen(2)} className='hover:underline underline-offset-4' to='#'>
              Shoes
            </Link>
            {open === 2 && <Dropdown open={open} men={['Sneakers', 'Boots']} women={['Sneakers', 'Boots']} />}
          </div>

          <div>
            <Link onMouseOver={() => setOpen(3)} className='hover:underline underline-offset-4' to='#'>
              Accessoires
            </Link>
            {open === 3 && <Dropdown open={open} men={['Watches', 'Glasses']} women={['Watches', 'Glasses']} />}
          </div>

          <div>
            <Link onMouseOver={() => setOpen(4)} className='hover:underline underline-offset-4' to='#'>
              Sport
            </Link>
            {open === 4 && <Dropdown open={open} men={['Running', 'Outdoor']} women={['Running', 'Outdoor']} />}
          </div>

          <div>
            <Link onMouseOver={() => setOpen(5)} className='hover:underline underline-offset-4' to='#'>
              Designer
            </Link>
            {open === 5 && <Dropdown open={open} men={['Shoes', 'Bags']} women={['Shoes', 'Bags']} />}
          </div>
        </div>

        <div className='flex gap-4 items-center'>
          <button>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' />
            </svg>
          </button>
          <Link to='#'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z' />
            </svg>
          </Link>
          <Link to='#' className='flex flex-shrink-0 bg-slate-950 hover:bg-slate-800 font-normal text-white rounded-full px-4 py-2'>Sign In</Link>
        </div>
      </div>
    </header >
  )
}

interface DropdownProps {
  open: number
  men?: string[]
  women?: string[]
}

const Dropdown = ({ open, men, women }: DropdownProps) => {
  return (
    <div className={`w-full left-0 h-72 absolute bg-white border-b-2 border-black border
    border-t-gray-400 top-10  ${open !== 0 ? 'block' : 'hidden'}`}>
      <div className='flex p-4 gap-24'>
        <div className='flex flex-col gap-4 font-semibold'>
          <h1 className='text-gray-500 text-lg'>Men</h1>
          <a className='hover:underline underline-offset-4' href='#'>All</a>
          {men?.map((item, index) => <a key={index} className='hover:underline underline-offset-4' href='#'>{item}</a>)}
        </div>
        <div className='flex flex-col gap-4 font-semibold'>
          <h1 className='text-gray-500 text-lg'>Women</h1>
          <a className='hover:underline underline-offset-4' href='#'>All</a>
          {women?.map((item, index) => <a key={index} className='hover:underline underline-offset-4' href='#'>{item}</a>)}
        </div>
      </div>
    </div>
  )
}

export default Header