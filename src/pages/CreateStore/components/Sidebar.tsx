import { ChangeEvent } from 'react'
import { ItemProps } from '../../../shared/interfaces/item.interface'

interface Props {
  setStoreName: React.Dispatch<React.SetStateAction<string>>
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  itemValues: ItemProps
  selectedImages: File[]
  preview: string[] | undefined
  imageChange: (e: ChangeEvent<HTMLInputElement>) => void
  removeImage: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => void
}

const Sidebar = ({ setStoreName, handleChange, itemValues, selectedImages, preview, imageChange, removeImage }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // todo send data to backend
  }

  return (
    <aside className='w-80 shadow-lg h-[50rem] p-4'>
      <form className='w-full h-full' onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <label htmlFor='storeName' className='font-semibold'>Store name</label>
          <input id='storeName' type='text' onChange={(e) => setStoreName((e.target.value))}
            className='px-2 mb-4 border border-black outline-none focus:outline-1 focus:outline-offset-0 focus:outline-black'
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='name' className='font-semibold'>Item name</label>
          <input id='name' type='text' onChange={handleChange} value={itemValues.name}
            className='px-2 mb-4 border border-black outline-none focus:outline-1 focus:outline-offset-0 focus:outline-black'
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='description' className='font-semibold'>Item description</label>
          <textarea id='description' onChange={handleChange} value={itemValues.description}
            className='resize-none px-2 mb-4 border border-black outline-none focus:outline-1 focus:outline-offset-0 focus:outline-black'
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='price' className='font-semibold'>Price</label>
          <div className='relative'>
            <span className='ml-2 absolute text-gray-500'>$</span>
            <input id='price' type='number' onChange={handleChange} value={itemValues.price}
              className='w-full mb-4 border border-black outline-none px-5
              focus:outline-1 focus:outline-offset-0 focus:outline-black 
              [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
            />
          </div>
        </div>

        <div className='flex flex-col mb-6'>
          <span className='font-semibold'>Image</span>
          <div className='shadow h-20 flex items-center mb-4'>
            {
              selectedImages.length > 0 &&
              <div className='flex'>
                {preview?.map((image, index) => (
                  <div key={index} className='relative'>
                    <img src={image} className='w-16 h-16 ml-2' />
                    <button className='absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center'
                      onClick={(e) => removeImage(e, index)}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            }
            <label htmlFor='upload' className='flex items-center justify-center ml-4
              w-16 h-16 font-semibold cursor-pointer border border-gray-400 hover:scale-95'>
              <span className='text-2xl'>+</span>
            </label>
            <input id='upload' type='file' accept='image/*' hidden multiple onChange={imageChange} />
          </div>
        </div>

        <div className='w-full flex flex-col items-center gap-12'>
          <button type='submit'
            className='p-3 bg-slate-950 text-white font-semibold rounded-full hover:bg-gray-800'>
            Create Store
          </button>
        </div>
      </form>
    </aside>
  )
}

export default Sidebar