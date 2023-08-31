import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import CreateStore from './pages/CreateStore'
import Store from './pages/Store'
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AxiosError } from 'axios'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data)
      }
    }
  }),
  queryCache: new QueryCache({
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data)
      }
    }
  })
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ShoppingCartProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create-store' element={<CreateStore />} />
          <Route path='/store/:name' element={<Store />} />
          <Route path='*' element={<h1>Not found</h1>} />
        </Routes>
      </ShoppingCartProvider>
      <ToastContainer />
    </QueryClientProvider>
  )
}

export default App