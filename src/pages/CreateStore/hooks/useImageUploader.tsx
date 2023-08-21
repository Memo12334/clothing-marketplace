import { ChangeEvent, useEffect, useState } from 'react'

const useImageUploader = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([])
  const [preview, setPreview] = useState<string[]>()

  useEffect(() => {
    if (!selectedImages) {
      setPreview(undefined)
      return
    }

    const previewURLs: string[] = []

    selectedImages.forEach(image => {
      previewURLs.push(URL.createObjectURL(image))
    })

    setPreview(previewURLs)

    return () => {
      previewURLs.forEach(url => URL.revokeObjectURL(url))
    }
  }, [selectedImages])

  const imageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (selectedImages.length >= 4) {
      alert('You can only upload 4 images')
      return
    }

    if (e.target.files && e.target.files.length > 0) {
      const images = [...e.target.files]
      setSelectedImages([...selectedImages, ...images])
    } else {
      setSelectedImages([])
      return
    }
  }

  const removeImage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
    e.preventDefault()
    const newImages = [...selectedImages]
    newImages.splice(index, 1)
    setSelectedImages(newImages)
  }

  return { selectedImages, preview, imageChange, removeImage };
}

export default useImageUploader