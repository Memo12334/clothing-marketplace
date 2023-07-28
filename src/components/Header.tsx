import { useState } from 'react'
import { Link } from 'react-router-dom'

interface ItemProps {
  name: string
  link: string
}

interface ItemsProps {
  type: string
  men: ItemProps[]
  women: ItemProps[]
}

const items: ItemsProps[] = [
  {
    type: 'Clothes',
    men: [
      { name: 'All', link: 'https://example.com/men-item-1' },
      { name: 'Hoodies', link: 'https://example.com/men-item-2' },
      { name: 'Jeans', link: 'https://example.com/men-item-3' },
    ],
    women: [
      { name: 'All', link: 'https://example.com/women-item-1' },
      { name: 'Hoodies', link: 'https://example.com/women-item-2' },
      { name: 'Jeans', link: 'https://example.com/women-item-3' },
    ],
  },
  {
    type: 'Shoes',
    men: [
      { name: 'All', link: 'https://example.com/men-item-a' },
      { name: 'Sneakers', link: 'https://example.com/men-item-b' },
      { name: 'Boots', link: 'https://example.com/men-item-c' },
    ],
    women: [
      { name: 'All', link: 'https://example.com/women-item-x' },
      { name: 'Sneakers', link: 'https://example.com/women-item-y' },
      { name: 'Boots', link: 'https://example.com/women-item-z' },
    ],
  },
  {
    type: 'Accessoires',
    men: [
      { name: 'All', link: 'https://example.com/men-item-a' },
      { name: 'Bags', link: 'https://example.com/men-item-b' },
      { name: 'Watches', link: 'https://example.com/men-item-c' },
    ],
    women: [
      { name: 'All', link: 'https://example.com/women-item-x' },
      { name: 'Bags', link: 'https://example.com/women-item-y' },
      { name: 'Watches', link: 'https://example.com/women-item-z' },
    ],
  },
  {
    type: 'Sport',
    men: [
      { name: 'All', link: 'https://example.com/men-item-a' },
      { name: 'Running', link: 'https://example.com/men-item-b' },
      { name: 'Outdoor', link: 'https://example.com/men-item-c' },
    ],
    women: [
      { name: 'All', link: 'https://example.com/women-item-x' },
      { name: 'Running', link: 'https://example.com/women-item-y' },
      { name: 'Outdoor', link: 'https://example.com/women-item-z' },
    ],
  },
  {
    type: 'Designer',
    men: [
      { name: 'All', link: 'https://example.com/men-item-a' },
      { name: 'Bags', link: 'https://example.com/men-item-b' },
      { name: 'Clothing', link: 'https://example.com/men-item-c' },
    ],
    women: [
      { name: 'All', link: 'https://example.com/women-item-x' },
      { name: 'Bags', link: 'https://example.com/women-item-y' },
      { name: 'Clothing', link: 'https://example.com/women-item-z' },
    ],
  },
]

const Header = () => {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <header>
      <div className='max-w-screen-xl mx-auto flex justify-between items-center p-4'>
        <Link to='#' className='hidden lg:block lg:font-bold'>ClothingShop</Link>
        <button className='block lg:hidden'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-8 h-8'>
            <path stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
          </svg>
        </button>
        <div onMouseLeave={() => setOpenId(null)} className='hidden lg:flex lg:gap-10 lg:justify-between p-2 m-2 relative'>
          <Link onMouseOver={() => setOpenId(0)} className='hover:underline underline-offset-4' to='#'>
            Clothes
          </Link>
          <Link onMouseOver={() => setOpenId(1)} className='hover:underline underline-offset-4' to='#'>
            Shoes
          </Link>
          <Link onMouseOver={() => setOpenId(2)} className='hover:underline underline-offset-4' to='#'>
            Accessoires
          </Link>
          <Link onMouseOver={() => setOpenId(3)} className='hover:underline underline-offset-4' to='#'>
            Sport
          </Link>
          <Link onMouseOver={() => setOpenId(4)} className='hover:underline underline-offset-4' to='#'>
            Designer
          </Link>
          <Dropdown open={openId !== null ? true : false} items={openId !== null ? items[openId] : null} />
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
  open: boolean
  items: ItemsProps | null
}

const Dropdown = ({ open, items }: DropdownProps) => {
  return (
    <div className={`w-full left-0 absolute bg-white border-t-gray-400 top-10 
      transition-all duration-500 ease-in-out delay-100 overflow-hidden 
      ${open ? 'h-[14rem] border-b-2 border-black border' : 'h-[0px]'}`}
    >
      {items !== null &&
        <div className={`flex p-4 ${open ? 'block' : 'hidden'}`}>
          <div className='flex flex-col basis-1/4 gap-4 font-semibold'>
            <h1 className='text-gray-500 text-lg'>Men</h1>
            {items.men.map((item, index) => <Link key={index} className='hover:underline underline-offset-4' to={item.link}>{item.name}</Link>)}
          </div>
          <div className='flex flex-col basis-1/4 gap-4 font-semibold'>
            <h1 className='text-gray-500 text-lg'>Women</h1>
            {items.women.map((item, index) => <Link key={index} className='hover:underline underline-offset-4' to={item.link}>{item.name}</Link>)}
          </div>
        </div>
      }
    </div>
  )
}

export default Header