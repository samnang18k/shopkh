import './App.css'
import {Routes,Route,} from 'react-router-dom'

import MainLayout from './Layouts/MainLayout'
import Home from './pages/Home'
import Brand from './pages/Brand'
import Accessories from './pages/Accessories'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {
  

  return (
    <>
      <Routes>
        <Route  element={<MainLayout />}>
          <Route path='/'  element={<Home />} />
          <Route path='/brand'  element={<Brand />} />
          <Route path='/accessories'  element={<Accessories />} />
          <Route path='/about'  element={<About />} />
          <Route path='/contact'  element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
