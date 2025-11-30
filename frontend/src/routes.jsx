
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
// import { AnimatePresence } from 'framer-motion'

const AppRoutes = () => {
  return (

  

    <Routes location={location} key={location.pathname} >

        <Route
        path='/'
        element={<HomePage />}
        />
        <Route
        path='/create'
        element={<CreatePage />}
        />
        <Route
        path='/note/:id'
        element={<NoteDetailPage />}
        />

    </Routes>

  
  )
}

export default AppRoutes