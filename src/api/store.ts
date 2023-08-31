import axios from 'axios';
import { StoreProps } from '../shared/interfaces/item.interface';

export const createStore = ({ name, item }: StoreProps) => {
  const formData = new FormData()
  formData.append('name', name)
  formData.append('item', JSON.stringify(item))

  item.images.forEach((image) => {
    formData.append('item.images', image)
  })

  return axios
    .post('/store', formData)
    .then((res) => res.data)
}

export const getStore = (name: string) => {
  return axios
    .get(`/store/${name}`)
    .then((res) => res.data)
}
