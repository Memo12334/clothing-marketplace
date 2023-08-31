
export interface ItemProps {
  name: string
  description: string
  price: number
  images: File[] | string[]
}

export interface StoreProps {
  name: string
  item: ItemProps
}
