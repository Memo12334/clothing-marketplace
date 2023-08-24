import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000'

axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response) throw new Error(error.response.data)
  else throw new Error(error.message)
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <QueryClientProvider client={new QueryClient()}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
)
