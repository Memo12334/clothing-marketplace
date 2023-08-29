import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'

axios.defaults.baseURL = 'http://localhost:5000'

axios.interceptors.response.use((response) => {
  return response
}, (error: AxiosError) => {
  return Promise.reject(error)
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <QueryClientProvider client={new QueryClient()}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
)
