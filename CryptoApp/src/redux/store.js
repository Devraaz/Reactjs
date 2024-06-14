import { configureStore } from '@reduxjs/toolkit'
import wishlistReducer from './wishlist/wishlistSlice'

export const store = configureStore({
  reducer: {
    wishlist:  wishlistReducer,
  },
})
export default store;