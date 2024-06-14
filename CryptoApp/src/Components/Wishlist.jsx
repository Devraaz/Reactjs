import React from 'react'
import Card from './Card'
import Navbar from './Navbar'
import Footer from './Footer'
import Cardwish from './Cardwish'

const Wishlist = () => {
  return (
    <>
    <Navbar/>
    <h1 className='text-slate-900 text-center text-3xl font-semibold uppercase '>My Wishlist</h1>
    <section>
        <Cardwish />
    </section>
    <Footer/>
    </>
  )
}

export default Wishlist