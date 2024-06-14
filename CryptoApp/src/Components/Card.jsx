import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToWishList, removeFromWishList } from '../redux/wishlist/wishlistSlice'

const Card = (props) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist)

  const isInWishlist = wishlist.some(item => item.id === props.coins.id)

  const handleWishList = () => {
    if (isInWishlist) {
      dispatch(removeFromWishList(props.coins.id))
    } else {
      dispatch(addToWishList(props.coins))
    }
  }

  return (
    <>
      <div className={`box w-60 h-60 my-1 relative rounded-md p-2 overflow-visible mx-auto  shadow-lg ${props.coins.changePercent24Hr > 0 ? 'bg-green-400' : 'bg-red-300'} `}>
        <h1 className="font-semibold text-slate-900 text-2xl uppercase">{props.coins.symbol}</h1>
        <p>{props.coins.name}</p>
        <p>LTP: ${parseFloat(props.coins.priceUsd).toFixed(5)}</p>
        <p>Vol:  {parseFloat(props.coins.volumeUsd24Hr).toFixed(5)} </p>
        <p>Change: {parseFloat(props.coins.changePercent24Hr).toFixed(5)}</p>

        <button
          onClick={handleWishList}
          className='py-1 my-4 rounded-md absolute bottom-0 w-52 border hover:text-white hover:bg-slate-800 transition-all border-slate-800 text-slate-800'>
          {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </button>
      </div>
    </>
  )
}

export default Card