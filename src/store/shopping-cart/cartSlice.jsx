import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,

    reducers :{
        addItem(state, action){
            const newItem = action.payload
            const existingItem = state.cartItems.find(item=> item.id === newItem.id)
            state.totalQuantity++

            if(!existingItem){
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    image01: newItem.image01,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            } else{
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
            }

            state.totalAmount = state.cartItems.reduce((total, item)=>(
                total + Number(item.price) * Number(item.quantity)
            ),0) 
        },

        removeItem(state, action){
            const newItem = action.payload
            const existingItem = state.cartItems.find(item => item.id === newItem)
            state.totalQuantity--

            if(existingItem.quantity === 1){
                state.cartItems = state.cartItems.filter(item => item.id !== newItem)
            }
            else{
                existingItem.quantity--
                existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price)
            }

            state.totalAmount = state.cartItems.reduce((total, item)=>(
                total + Number(item.price) * Number(item.quantity)
            ), 0) 
        },

        deleteItem(state,action){
            const newItem = action.payload
            const existingItem = state.cartItems.find(item => item.id === newItem)

            
            if(existingItem.quantity){
                state.cartItems = state.cartItems.filter(item => item.id !== newItem)
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }

            state.totalAmount = state.cartItems.reduce((total, item)=>(
                total + Number(item.price) * Number(item.quantity)
            ), 0) 
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice;