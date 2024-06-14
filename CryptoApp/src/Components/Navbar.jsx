import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectedWishlistCount } from '../redux/wishlist/wishlistSlice'

const Navbar = () => {
  
  let list = useSelector(selectedWishlistCount)
  
  return (
    <>
      <nav className='bg-slate-900 w-[99vw] h-16 p-2 flex flex-row justify-between px-20 items-center'>
        <div className="i">
          <Link to='/'> 
            <img src="https://logo.com/image-cdn/images/kts928pd/production/0ec12dcbeacbc34b7596da7ab69863bc7e3f0534-349x349.png?w=1080&q=72" alt="logo" className='w-12 rounded-full' />
          </Link>
        </div>
        <div className="nav flex flex-row justify-between text-slate-200 space-x-10">
          
          <Link to='/wishlist'>Wishlist<sup className='bg-red-500 px-1 rounded-lg' >{list}</sup></Link>

          <a href="https://www.webokraft.in" target='blank'>Contact</a>
        </div>
      </nav>

    </>
  )
}

export default Navbar