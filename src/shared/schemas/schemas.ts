import { ZodType, z } from 'zod'
import { ItemProps, StoreProps } from '../interfaces/item.interface'

export const MAX_FILE_SIZE = 500000
export const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"]

export const storeSchema: ZodType<StoreProps> = z.object({
  name: z.string().min(1).max(30),
  item: z.object({
    name: z.string().min(1).max(30),
    description: z.string().min(1).max(200),
    price: z.number({ invalid_type_error: 'Price must be a number' }).refine(v => v >= 0, { message: 'Price must be greater or equal to 0' }),
    images: z.custom<File[]>()
      .refine(
        (files) => Array.from(files).every((file) => ACCEPTED_IMAGE_TYPES.includes(file.type)),
        { message: "Invalid file type", }
      )
      .refine(
        (files) => Array.from(files).every((file) => file.size <= MAX_FILE_SIZE),
        { message: "File too large" }
      )
      .refine(
        (files) => Array.from(files).length > 0 && files.length <= 4,
        { message: "Must upload between 1 and 4 images" }
      )
  })
})

export type storeSchemaServer = Omit<StoreProps, 'item'> & { item: Omit<ItemProps, 'images'> }

export const storeSchemaServer: ZodType<storeSchemaServer> = z.object({
  name: z.string().min(1).max(30),
  item: z.object({
    name: z.string().min(1).max(30),
    description: z.string().min(1).max(200),
    price: z.number({ invalid_type_error: 'Price must be a number' }).refine(v => v >= 0, { message: 'Price must be greater or equal to 0' }),
  })
})
