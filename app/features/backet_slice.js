import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    items: []
}

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    add_to_basket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    remove_from_basket: (state, action) => {
        const index = state.items.findIndex((items) => items.id === action.payload.id)
        
        let new_basket = [...state.items];
        if (index >= 0) {
            new_basket.splice(index, 1)
        } else { 
            console.warn(`Cant't remove product ${action.payload.id}`)
        }
        //  Update state 
        state.items = new_basket

    }
  },
})

// Action creators are generated for each case reducer function
export const { add_to_basket, remove_from_basket } = basketSlice.actions
export const select_basket_item_with_id = (state, id) => state
    .basket
    .items
    .filter(item => item.id === id) 
export const select_basket_item = (state) => state.basket.items

export default basketSlice.reducer 
