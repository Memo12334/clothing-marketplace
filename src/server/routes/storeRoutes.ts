import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()

// store crud

// create store
router.post('/', async (req, res) => {
  try {
    const { name, item } = req.body

    // Create the Store first
    const createdStore = await prisma.store.create({
      data: {
        name,
      },
    })

    // Create the Item and associate it with the created Store
    await prisma.item.create({
      data: {
        name: item.name,
        description: item.description,
        price: item.price,
        images: item.images,
        store: {
          connect: {
            id: createdStore.id,
          },
        },
      },
    })

    res.status(201).json(createdStore)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Store name is already in use' })
  }
})

// list stores
router.get('/', async (req, res) => {
  const allStores = await prisma.store.findMany()

  res.json(allStores)
})

// get one store
router.get('/:id', async (req, res) => {
  const { id } = req.params
  const store = await prisma.store.findUnique({ where: { id: Number(id) } })
  res.json(store)
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
  await prisma.item.deleteMany({ where: { storeId: Number(id) } })
  await prisma.store.delete({ where: { id: Number(id) } })
  res.sendStatus(200)
})

export default router