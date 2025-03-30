import { useState } from 'react'
import Banner from './components/Banner'
import Review from './components/Review'
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Ourservices from './components/Ourservices'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Header /> */}
     <Banner />
     <About />
     <Ourservices />
     <Review />
     <Contact />
     <Footer />
    </>
  )
}

export default App
