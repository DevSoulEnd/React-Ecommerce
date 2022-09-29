import React, {useState} from 'react'
import CommonSection from '../Components/UI/category/common-section/CommonSection'
import Helmet from '../Components/Helmet/Helmet'
import { Container,Row, Col } from 'reactstrap'
import {useSelector} from 'react-redux'
import '../Styles/checkout.css'


export default function Checkout() {

  const totalAmount = useSelector(state=> state.cart.totalAmount)
  const deliveryFee = 600

  const total = totalAmount + deliveryFee

  const [enteredName, setEnteredName] = useState('')
  const [enteredMail, setEnteredMail] = useState('')
  const [enteredAddress, setEnteredAddress] = useState('')
  const [enteredNumber, setEnteredNumber] = useState('')
  const addressInfo = []

  const submitHandler = (e)=>{
    e.preventDefault()

    const userAddress = {
      name: enteredName,
      address: enteredAddress,
      mail: enteredMail,
      number: enteredNumber
    }

    addressInfo.push(userAddress)
    console.log(addressInfo);
  }

  return (
    <Helmet title = 'Checkout'>
      <CommonSection title='Checkout'/>
      <section>
        <Container>
          <Row>
            <Col lg='8' md='6'>
            <h6 classsName='mb-4' style={{
              fontWeight: "600"
            }}> Delivery Address (Ago-iwoye Only)</h6>

              <form className="checkout__form mt-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input 
                  type="text" 
                  placeholder='Enter Your Name'
                  value={enteredName}
                  required onChange={(e)=> setEnteredName(e.target.value)}
                  />
                </div>
                
                <div className="form__group">
                  <input 
                  type="email" 
                  placeholder='Enter Your email'
                   value={enteredMail}
                   required onChange={(e)=> setEnteredMail(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input 
                  type="number" 
                  placeholder='Enter Your number'
                  value={enteredNumber}
                  required onChange={(e)=> setEnteredNumber(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input 
                  type="text" 
                  placeholder='Enter Your Home Address'
                   value={enteredAddress}
                   required onChange= {(e)=> setEnteredAddress(e.target.value)}
                  />
                </div>
                <button className="addToCart__btn mb-4" type='submit' >Pay</button>
              </form>
              
            </Col>

            <Col lg='4' md='6'>
              <div className='checkout'>
                <h6 className='d-flex align-items-center justify-content-between mb-3'>
                  Subtotal: <span>{totalAmount}</span>
                  </h6>
                <h6 className='d-flex align-items-center justify-content-between mb-2'>
                  Delivery fee: <span>{deliveryFee}</span>
                  </h6>
                
                <div className='total'>
                <h5 className='d-flex align-items-center justify-content-between'>Total: <span>{total}</span></h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}
