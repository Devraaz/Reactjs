import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialWishlist  = localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [];
let listCount = initialWishlist.length


export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: initialWishlist ,
    reducers: {
        addToWishList: (state, action) => {
            state.push(action.payload)
            listCount++;
            localStorage.setItem('wishlist', JSON.stringify(state))
        },
        removeFromWishList: (state, action) => {
            const updatedList = state.filter(item => item.id !== action.payload)
            localStorage.setItem('wishlist', JSON.stringify(updatedList))
            listCount--;
            return updatedList
        }
       
    }
});

export const {addToWishList, removeFromWishList, countList } = wishlistSlice.actions;
export const selectedWishlistCount = () => listCount;
export default wishlistSlice.reducer;

