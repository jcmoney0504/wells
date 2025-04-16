import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "./App.css"
import Body from './components/Navbar/Body/Body'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='main_container'>
      <Navbar/>
      <Body/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default App
