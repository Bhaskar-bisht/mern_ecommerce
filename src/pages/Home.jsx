import React from 'react'
import About from '../components/About'
import Hero from '../components/Hero'
import NewArrivals from '../components/NewArrivals.jsx'
import Offer from '../components/Offer'
import PopulerProducts from '../components/PopulerProducts'

const Home = () => {
  return (
    <>
    <Hero />
    <About />
    <PopulerProducts />
    <Offer />
    <NewArrivals />
    </>
  )
}

export default Home
