import { ChangeEvent, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Sidebar from './components/Sidebar'
import { ItemProps } from '../../shared/interfaces/item.interface'
import useImageUploader from './hooks/useImageUploader'

const CreateStore = () => {
  const [storeName, setStoreName] = useState<string>('')
  const [form, setForm] = useState<ItemProps>({
    id: 0,
    name: 'name',
    description: 'description',
    price: 0,
    images: []
  })

  const { selectedImages, preview, imageChange, removeImage } = useImageUploader()

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    })
  }

  return (
    <div className=''>
      <Header />
      <div className='flex'>
        <Sidebar
          setStoreName={setStoreName}
          handleChange={handleChange}
          itemValues={form}
          selectedImages={selectedImages}
          preview={preview}
          imageChange={imageChange}
          removeImage={removeImage}
        />
        <div className='flex-1'>
          <header className='shadow-lg p-2 font-bold text-center mb-20'>
            {storeName}
          </header>
          <main>
            <div className='flex flex-col items-center'>
              {selectedImages.length > 0 &&
                <div className='flex items-center mb-10 gap-2'>
                  {preview?.map((image, index) => (
                    <img key={index} src={image} alt='preview' className='w-80 h-80 object-cover' />
                  ))}
                </div>
                ||
                <img src='https://placehold.co/80' className='w-80 h-80 object-cover mb-10' />
              }
              <span className='font-semibold text-2xl'>{form.name}</span>
              <span className='font-light'>{form.description}</span>
              <span className='font-bold'>${form.price}</span>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CreateStore