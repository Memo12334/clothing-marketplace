import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getStore } from '../../api/store'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { StoreProps } from '../../shared/interfaces/item.interface'
import { useState } from 'react'

const Store = () => {
  const { name } = useParams() as { name: string }
  const [currentImage, setCurrentImage] = useState<string>()

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.target as HTMLOrSVGImageElement

    if (target.tagName === 'IMG') {
      const src = target.getAttribute('src')
      console.log(src)
      if (src)
        setCurrentImage(src)
      else
        setCurrentImage(undefined)
    }
  }

  const { isLoading, data, error } = useQuery<StoreProps, Error>({
    queryKey: ['store', name],
    queryFn: () => getStore(name),
    refetchOnWindowFocus: false
  })

  if (error) {
    return <div>{error.message}</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Header />
      <div className='max-w-screen-xl h-[50rem] mx-auto p-4'>
        <header className='text-2xl font-bold mb-4 w-full'>{data.name}</header>
        <main className='grid grid-cols-[200px_600px_1fr] gap-8'>
          <div className='h-[32rem]'>
            <div className='grid grid-rows-4 h-full'>
              {data.item.images.map((image, index) => (
                <div className='border-solid border-[1px] border-black cursor-pointer' key={index} onClick={handleImageClick}>
                  <img src={`/storeImages/${image}`} className='w-full h-full object-contain' />
                </div>
              ))}
            </div>
          </div>

          <div>
            <img src={currentImage ?? `/storeImages/${data.item.images[0]}`} className='w-full h-[28rem] object-contain mx-auto' />
          </div>

          <div className='flex flex-col'>
            <span className='mb-4'>Price: <span className='font-bold'>${data.item.price}</span></span>
            <span className='mb-4'>Name: <span className='font-bold'>{data.item.name}</span></span>
            <span className='mb-4'>Description: <span className='font-bold'>{data.item.description}</span></span>

            <button onClick={() => console.log('ewa')} className='bg-slate-950 hover:bg-slate-800 font-normal text-white rounded-full px-4 py-2 w-56'>
              Add to cart
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </div >
  )
}

export default Store
