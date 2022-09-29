import React from 'react'
import { Link } from 'react-router-dom'
import '../../../../Styles/product-card.css'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../../store/shopping-cart/cartSlice';

export default function ProductCard({item}) {
    const{id, title, price, image01} = item;

    const dispatch = useDispatch();

    const addToCart = ()=>{
        dispatch(cartActions.addItem({
            id,
            title,
            price,
            image01
        }))
    }

    return (
   <div className="product__item">
       <div className="product__img">
           <img src={image01} alt="hhs" className='w-50' />
       </div>
       <div className="product__content">
            <h5><Link to= {`/foods/${id}`}>{title}</Link></h5>
            <div className='d-flex align-items-center justify-content-between'>
                <span className="product__price">
                    #{price}
                </span>
                <button className="addToCart__btn" onClick={addToCart}>Add to Cart</button>
            </div>
       </div>
   </div>
  )
}
