import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import CreateStore from './pages/CreateStore'
import Store from './pages/Store'
import { MutationCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onError: (error) => {
      if (error.message === 'Network Error' && !error.response) {
        toast.error('Network error, please try again later')
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
        <Route path='/store/:id' element={<Store />} />
      </Routes>
      <ToastContainer />
    </QueryClientProvider>
  )
}

export default App