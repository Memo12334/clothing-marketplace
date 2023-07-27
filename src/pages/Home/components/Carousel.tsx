import { useState } from 'react'
import '@animxyz/core'
import { XyzTransitionGroup } from '@animxyz/react'

import accessoires from '../../../assets/images/accessoires.jpg'
import clothes from '../../../assets/images/clothes.jpg'
import designer from '../../../assets/images/designer.jpg'
import shoes from '../../../assets/images/shoes.jpg'
import sports from '../../../assets/images/sports.jpg'

const Carousel = () => {
  const images = [
    {
      id: 1,
      src: accessoires,
      alt: 'accessoires',
      title: 'Accessoires',
      subtitle: 'Lorem ipsum dolor sit amet consectetur.',
      bg: 'bg-slate-950',
    },
    {
      id: 2,
      src: clothes,
      alt: 'clothes',
      title: 'Clothes',
      subtitle: 'Lorem ipsum dolor sit amet consectetur.',
      bg: 'bg-red-400',
    },
    {
      id: 3,
      src: designer,
      alt: 'designer',
      title: 'Designer',
      subtitle: 'Lorem ipsum dolor sit amet consectetur.',
      bg: 'bg-orange-400',
    },
    {
      id: 4,
      src: shoes,
      alt: 'shoes',
      title: 'Shoes',
      subtitle: 'Lorem ipsum dolor sit amet consectetur.',
      bg: 'bg-yellow-400',
    },
    {
      id: 5,
      src: sports,
      alt: 'sports',
      title: 'Sport',
      subtitle: 'Lorem ipsum dolor sit amet consectetur.',
      bg: 'bg-green-400',
    },
  ]
  const [current, setCurrent] = useState(images[0])

  const handleNext = () => {
    const currentIndex = images.findIndex(image => image.id === current.id)
    const nextIndex = currentIndex + 1
    const nextImage = images[nextIndex]

    if (nextImage) {
      setCurrent(nextImage)
    } else {
      setCurrent(images[0])
    }
  }

  const handlePrev = () => {
    const currentIndex = images.findIndex(image => image.id === current.id)
    const prevIndex = currentIndex - 1
    const prevImage = images[prevIndex]

    if (prevImage) {
      setCurrent(prevImage)
    } else {
      setCurrent(images[images.length - 1])
    }
  }

  return (
    <section className='relative h-[32rem] mb-8'>
      <XyzTransitionGroup xyz='fade ease-in-out duration-20'>
        <ul>
          {images.map(image => (
            <li key={image.id} className={`${image.bg} absolute inset-0 ${image.id === current.id ? 'xyz-in' : 'xyz-out'}`}
            >
              <div id='test' className={`flex h-full gap-8 max-w-screen-xl mx-auto pt-8 flex-col lg:flex-row`}>
                <div className='max-w-3xl relative w-full h-full'>
                  <ul>
                    <li key={image.id}>
                      <img src={image.src} alt={image.alt}
                        className={`w-full h-full absolute object-cover`} />
                    </li>
                  </ul>

                  <button onClick={handlePrev} className='absolute z-50 bottom-[230px] bg-slate-700 text-white p-2'>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18' />
                    </svg>
                  </button>

                  <button onClick={handleNext} className='absolute z-50 bottom-[230px] right-0 bg-slate-700 text-white p-2'>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3' />
                    </svg>
                  </button>
                </div>

                <div className={`text-white`}>
                  <h1 className='font-bold text-3xl'>{image.title}</h1>
                  <h1 className='text-3xl'>{image.subtitle}</h1>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </XyzTransitionGroup>
    </section>
  )
}

export default Carousel