import React from 'react'
import CommonSection from '../Components/UI/category/common-section/CommonSection'
import Helmet from '../Components/Helmet/Helmet'
import { Container,Row, Col } from 'reactstrap'
import {useSelector} from 'react-redux'
import '../Styles/cart-page.css'
import {FaTrash} from 'react-icons/fa'
import {cartActions} from '../store/shopping-cart/cartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


export default function Cart() {

  const cartItems = useSelector(state=> state.cart.cartItems)
  const subTotal = useSelector(state=> state.cart.totalAmount)
  

  return (
    <Helmet title = "Cart">
      <CommonSection title= "Your Cart"/>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
                {
                  cartItems.length === 0 ? <h5 className='text-center'> Your Cart is Empty</h5> : 
                  <table className='table table-bordered'>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Name</th>
                      <th> Price</th>
                      <th> Quantity</th>
                      <th> Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index)=>{
                      return <Tr key={index} item ={item}/>
                    })}
                  </tbody>
                </table>
                }

                <div>
                  <h6 className='sub-det  mt-3'>Subtotal: <span className='subtotal'>{subTotal}</span></h6>
                 
                  <div className=' cart__page d-flex align-items-center gap-3 mt-5'>
                    <button className="addToCart__btn">
                      <Link to ='/foods'>Continue Shopping</Link>
                    </button>

                    <button className="addToCart__btn">
                      <Link to ='/checkout'>Proceed to CheckOut</Link>
                    </button>
                  </div>
                </div>
            </Col>
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

const Tr = ({item})=>{

  const{id, image01, title, price, quantity} = item
  const dispatch = useDispatch()

  const deleteItem = () =>{
    dispatch(cartActions.deleteItem(id))
  }

  return(
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="img cart" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">{price}</td>
      <td className="text-center">{quantity} pcs</td>
      <td className="text-center cart__del-item"><FaTrash className='del__item'
      onClick={deleteItem}
      /></td>
    </tr>
  )
}
