import React from 'react'
import {ListGroup} from 'reactstrap'
import Cartitems from './Cartitems'
import {FaTimes} from "react-icons/fa"
import {Link} from 'react-router-dom'
import '../../../../Styles/shopping-cart.css'
import { useDispatch, useSelector} from 'react-redux'
import { cartUiActions } from '../../../../store/shopping-cart/CartUiSlice'


export default function Carts() {

  const dispatch = useDispatch();
  const cartItems = useSelector(state=> state.cart.cartItems)
  const totalPrice = useSelector(state=> state.cart.totalAmount)

  const toggleCart=()=>{
    dispatch(cartUiActions.toggleCart())
  }

  return (
    <div className='cart__container'>
      <ListGroup className='cart'>
        <div className="cart__close">
            <FaTimes className='close-btn' onClick={toggleCart}/>
        </div>

        <div className="cart__item-list">
           {
             cartItems.length === 0? <h6 className='text-center mt-5'>
                No Items Added to Cart Yet</h6> : cartItems.map((item,index)=>{
                  return <Cartitems key={index} item = {item}/>
                })
           }
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
            <h6> Subtotal: <span>#{totalPrice}</span></h6>
            <button><Link to ="/checkout">Checkout</Link></button>
        </div>
      </ListGroup>
    </div>
  )
}
