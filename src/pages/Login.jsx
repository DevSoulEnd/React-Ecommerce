import React, {useRef} from 'react'
import CommonSection from '../Components/UI/category/common-section/CommonSection'
import Helmet from '../Components/Helmet/Helmet'
import { Container,Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function Login() {

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const submitHandler = e => {
    e.preventDefault()

  }

  return (
    <Helmet title = "Log in">
      <CommonSection title="log in"/>

      <section>
      <Container>
        <Row>
          <Col lg='6' md='6' sm='12' className='m-auto text-center'>
            <form className="form mb-5">
              <div className="form__group">
                <input 
                type="email" 
                placeholder='Email'  
                ref={emailRef}
                onSubmit={submitHandler}
                />
              </div>

              <div className="form__group">
                <input 
                type="text" 
                placeholder='Password'
                ref={passwordRef}
                onSubmit={submitHandler}
                />
              </div>
              <button className="addToCart__btn" type='submit'>Submit</button>
            </form>
              <Link to ='/register'> Don't have an account? Create an Account</Link>
          </Col>
        </Row>
      </Container>
      </section>
    </Helmet>
  )
}
