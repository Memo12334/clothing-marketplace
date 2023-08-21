import { ChangeEvent, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Sidebar from './components/Sidebar'
import { StoreProps } from '../../shared/interfaces/item.interface'
import useImageUploader from './hooks/useImageUploader'

const CreateStore = () => {
  const [form, setForm] = useState<StoreProps>({
    name: '',
    item: {
      name: '',
      description: '',
      price: 0,
      images: []
    }
  })

  const { selectedImages, preview, imageChange, removeImage } = useImageUploader()

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target

    if (id === 'storeName') {
      setForm({
        ...form,
        name: value
      });
    } else {
      setForm({
        ...form,
        item: {
          ...form.item,
          [id]: value
        }
      })
    }
  }

  return (
    <>
      <Header />
      <div className='flex'>
        <Sidebar
          handleChange={handleChange}
          storeValues={form}
          selectedImages={selectedImages}
          preview={preview}
          imageChange={imageChange}
          removeImage={removeImage}
        />
        <div className='flex-1'>
          <header className='shadow-lg p-2 font-bold text-center mb-20'>
            {form.name}
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
              <span className='font-semibold text-2xl'>{form.item.name}</span>
              <span className='font-light'>{form.item.description}</span>
              <span className='font-bold'>${form.item.price}</span>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CreateStore