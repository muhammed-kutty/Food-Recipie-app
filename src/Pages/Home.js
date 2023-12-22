import React from 'react'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Header from '../components/Navbar/Header'
import {Routes , Route} from 'react-router-dom'
import Main from './Main'
import Checkout from '../components/Checkout/Checkout'
import Orders from '../components/oders/Orders'

function Home() {
  return    (
    <div>
            <Header/>
            <Hero/>

            <Routes>
                <Route exact path="*" element={<Main/>} />
                <Route  path='/chekout' element={<Checkout/>} />
                <Route path='/orders' element={<Orders/>} />

            </Routes>
            
            <Footer />
    </div>
  )
}

export default Home