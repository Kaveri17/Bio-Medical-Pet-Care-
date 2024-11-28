
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'

import Home from './pages/Home'
import React from 'react'
import About from './pages/About'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
