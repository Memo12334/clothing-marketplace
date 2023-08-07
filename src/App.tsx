import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import CreateStore from './pages/CreateStore'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/create-store' element={<CreateStore />} />
    </Routes>
  )
}

export default App