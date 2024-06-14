import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromWishList } from '../redux/wishlist/wishlistSlice'
import Card from './Card'

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishList(id));
  };
  return (
    <>
    
      <Navbar />
      <h1 className='text-slate-900 text-center text-3xl font-semibold uppercase '>My Wishlist</h1>
      <section className='min-h-screen'>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
          {wishlist.map(coin => (
             <Card key={coin.id} coins={coin} />
            
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Wishlist