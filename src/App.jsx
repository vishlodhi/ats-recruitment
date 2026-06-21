import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import './App.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Jobs from './pages/Jobs'

function App() {
  return (
    <BrowserRouter>
    <Toaster position='top-center' />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/jobs' element={<Jobs />} />
      
      </Routes>
    </BrowserRouter>

  )
}

export default App
