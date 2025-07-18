import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Approute from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header'
import Footer from './components/footer'

function App() {

  return (
    <>
     <BrowserRouter>
        <Header />
        <Approute/>
        <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
