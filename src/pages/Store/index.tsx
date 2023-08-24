import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getStore } from '../../api/store'

const Store = () => {
  const { id } = useParams()

  const { isLoading, data, error } = useQuery({
    queryKey: ['store', id],
    queryFn: () => getStore(id),
  })

  if (error) {
    return <div>Error fetching data</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!data) {
    return <div>Data not available</div>
  }

  return (
    <div>{data.name}</div >
  )
}

export default Store
