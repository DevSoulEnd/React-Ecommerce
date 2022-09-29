import React, {useRef} from 'react'
import CommonSection from '../Components/UI/category/common-section/CommonSection'
import Helmet from '../Components/Helmet/Helmet'
import { Container,Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function Register() {

  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)

  const submitHandler = e => {
    e.preventDefault()

  }

  return (
    <Helmet title = "Sign up">
      <CommonSection title="Sign up"/>

      <section>
      <Container>
        <Row>
          <Col lg='6' md='6' sm='12' className='m-auto text-center'>
            <form className="form mb-5">
              <div className="form__group">
                <input 
                type="text" 
                placeholder='First Name'  
                ref={firstNameRef}
                onSubmit={submitHandler}
                />
              </div>
              <div className="form__group">
                <input 
                type="text" 
                placeholder='Last Name'  
                ref={lastNameRef}
                onSubmit={submitHandler}
                />
              </div>
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
              <Link to ='/login'> Already have an account? Login</Link>
          </Col>
        </Row>
      </Container>
      </section>
    </Helmet>
  )
}
