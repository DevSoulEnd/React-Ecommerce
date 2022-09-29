import React from 'react'
import { ListGroupItem } from 'reactstrap'
import {FaTrash , FaPlus, FaMinus} from 'react-icons/fa'
import '../../../../Styles/cart-item.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../../store/shopping-cart/cartSlice'

export default function Cartitems({item}) {
  const {title, price, image01, quantity, totalPrice, id} = item;
  const dispatch = useDispatch()
  
  const incrementItem = ()=>{
    dispatch(cartActions.addItem({
      id,
      title,
      price,
      image01
    }))
  }

  const removeItem =()=>{
    dispatch(cartActions.removeItem(id))
  }

  const deleteItem =()=>{
    dispatch(cartActions.deleteItem(id))
  }

  return (
    <ListGroupItem className='border-0 cart__item'>
        <div className="cart__item-info d-flex gap-2">
            <img src={image01} alt="product-img" />
            <div className='cart__product-info  w-100 d-flex align-items-center gap-4 justify-content-between'>
                <div>
                <h6 className='product-title'>{title}</h6>
                <p className='d-flex align-items-center gap-5 product-price'>{quantity} x <span>#{totalPrice}</span></p>
                <div className='d-flex align-items-center gap-3 justify-content-between btn'>
                <span><FaMinus className='red-btn'  onClick={removeItem}/></span>
                <span className='quantity '>{quantity}</span>
                <span><FaPlus className='add-btn' onClick={incrementItem}/></span>
                </div>
                </div>
            </div>

            <span className='delete'><FaTrash onClick={deleteItem}/></span>
        </div>
    </ListGroupItem>
  )
}
