import e, { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import path from 'path'
import multer from 'multer'
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE, storeSchemaServer } from '../../shared/schemas/schemas'
import { BadRequestError } from './utils/errors'
import { AppError } from '..'

const router = Router()
const prisma = new PrismaClient()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/storeImages')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + Math.round(Math.random() * 1000) + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage,
  limits: {
    fileSize: MAX_FILE_SIZE
  },
  fileFilter: (req, file, cb) => {
    if (ACCEPTED_IMAGE_TYPES.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(null, false)
    }
  }
})

// store crud

// create store
router.post('/', upload.array('item.images', 4), async (req, res, next) => {
  try {
    const { name, item } = req.body
    const parseItem = JSON.parse(item)

    storeSchemaServer.parse({ name, item: parseItem })

    const storeExists = await prisma.store.findUnique({ where: { name } })
    if (storeExists) throw new AppError('Store already exists', 400)

    if (req.files === undefined || req.files.length as number === 0) throw new AppError('No images were uploaded', 400)
    if (req.files.length as number > 4) throw new AppError('You can only upload 4 images', 400)

    const files = req.files as Express.Multer.File[]
    const fileNames: string[] = files.map((file) => file.filename)

    const createdStore = await prisma.store.create({
      data: {
        name: name,
        item: {
          create: {
            name: parseItem.name,
            description: parseItem.description,
            price: parseItem.price,
            images: fileNames,
          },
        }
      },
    })

    res.status(201).json(createdStore)
  } catch (error) {
    next(error)
  }
})

// list stores
router.get('/', async (req, res) => {
  const allStores = await prisma.store.findMany()

  res.json(allStores)
})

// get one store
router.get('/:name', async (req, res, next) => {
  try {
    const name = req.params.name
    const store = await prisma.store.findUnique({
      where: {
        name: name
      },
      include: { item: true }
    })
    if (!store) throw new AppError('Store not found', 400)
    res.status(201).json(store)
  } catch (error) {
    next(error)
  }
})

// update store name
router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { name } = req.body

  try {
    const result = await prisma.store.update({ where: { id: Number(id) }, data: { name } })
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update the store name' })
  }
})

// delete store
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await prisma.item.delete({ where: { storeId: Number(id) } })
  await prisma.store.delete({ where: { id: Number(id) } })
  res.sendStatus(200)
})

export default router