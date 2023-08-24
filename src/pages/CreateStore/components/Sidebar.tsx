import { ChangeEvent, useEffect, useState } from 'react'
import { StoreProps } from '../../../shared/interfaces/item.interface'
import { useMutation } from '@tanstack/react-query'
import { createStore } from '../../../api/store'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { storeSchema } from '../../../shared/schemas/schemas'

interface Props {
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  storeValues: StoreProps
  selectedImages: File[]
  preview: string[] | undefined
  imageChange: (e: ChangeEvent<HTMLInputElement>) => void
  removeImage: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => void
}

const Sidebar = ({ handleChange, storeValues, selectedImages, preview, imageChange, removeImage }: Props) => {
  const navigate = useNavigate()
  const [error, setError] = useState<string>()

  const createStoreMutation = useMutation({
    mutationFn: createStore,
  })

  const onSubmit = (data: StoreProps) => {
    createStoreMutation.mutate({
      name: data.name,
      item: data.item
    },
      {
        onSuccess: (data) => navigate(`/store/${data.id}`),
        onError: (error) => { if (error instanceof Error) setError(error.message) }
      },
    )
  }

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<StoreProps>({ resolver: zodResolver(storeSchema) })

  useEffect(() => {
    setValue('item.images', selectedImages)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImages])

  return (
    <aside className='w-80 shadow-lg h-[50rem] p-4'>
      <form className='w-full h-full' onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
        <div className='flex flex-col mb-4'>
          <label htmlFor='storeName' className='font-semibold'>Store name</label>
          <input id='storeName' type='text' placeholder='Enter store name'
            {...register('name', {
              onChange: handleChange
            })}
            className='px-2 border border-black outline-none focus:outline-1 focus:outline-offset-0 focus:outline-black'
          />
          {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
        </div>

        <div className='flex flex-col mb-4 '>
          <label htmlFor='name' className='font-semibold'>Item name</label>
          <input id='name' type='text' value={storeValues.item.name} placeholder='Enter item name'
            {...register('item.name', {
              onChange: handleChange
            })}
            className='px-2 border border-black outline-none focus:outline-1 focus:outline-offset-0 focus:outline-black'
          />
          {errors.item?.name && <span className='text-red-500'>{errors.item?.name.message}</span>}
        </div>

        <div className='flex flex-col mb-4'>
          <label htmlFor='description' className='font-semibold'>Item description</label>
          <textarea id='description' value={storeValues.item.description} placeholder='Enter item description'
            {...register('item.description', {
              onChange: handleChange
            })}
            className='resize-none px-2 border border-black outline-none focus:outline-1 focus:outline-offset-0 focus:outline-black'
          />
          {errors.item?.description && <span className='text-red-500'>{errors.item?.description.message}</span>}
        </div>

        <div className='flex flex-col mb-4'>
          <label htmlFor='price' className='font-semibold'>Price</label>
          <div className='relative'>
            <span className='ml-2 absolute text-gray-500'>$</span>
            <input id='price' type='number' value={storeValues.item.price}
              {...register('item.price', {
                onChange: handleChange, valueAsNumber: true
              })}
              className='w-full border border-black outline-none px-5
              focus:outline-1 focus:outline-offset-0 focus:outline-black
              [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
            />
            {errors.item?.price && <span className='text-red-500'>{errors.item?.price.message}</span>}
          </div>
        </div>

        <div className='flex flex-col mb-6'>
          <span className='font-semibold'>Image</span>
          <div className='shadow h-20 flex items-center'>
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
            <input id='upload' type='file' accept='image/*' hidden multiple
              {...register('item.images', {
                onChange: imageChange
              })}
            />
          </div>
          {errors.item?.images && <span className='text-red-500'>{errors.item?.images.message}</span>}
        </div>

        <div className='w-full flex flex-col items-center gap-12'>
          <button type='submit' disabled={createStoreMutation.isLoading}
            className='p-3 bg-slate-950 text-white font-semibold rounded-full hover:bg-gray-800'>
            {createStoreMutation.isLoading ? 'Creating...' : 'Create Store'}
          </button>

          {error && <span className='text-red-500'>{error}</span>}
        </div>
      </form>
    </aside>
  )
}

export default Sidebar