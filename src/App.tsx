import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import CreateStore from './pages/CreateStore'
import Store from './pages/Store'
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onError: (error) => {
      if (error instanceof Error) {
        if (error.message === 'Network Error') {
          toast.error('Network error, please try again later')
        }
        else {
          toast.error(error.message)
        }
      }
    }
  }),
  queryCache: new QueryCache({
    onError: (error) => {
      if (error instanceof Error) {
        if (error.message === 'Network Error') {
          toast.error('Network error, please try again later')
        }
        else {
          toast.error(error.message)
        }
      }
    }
  })
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create-store' element={<CreateStore />} />
        <Route path='/store/:name' element={<Store />} />
        <Route path='*' element={<h1>Not found</h1>} />
      </Routes>
      <ToastContainer />
    </QueryClientProvider>
  )
}

export default App