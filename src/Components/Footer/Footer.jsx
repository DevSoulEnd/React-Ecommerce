import React from 'react'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import {FaPaperPlane} from 'react-icons/fa'
import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'
import '../../Styles/Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
      <Row>
        <Col lg = "3" md = "4"  sm="6">
        <div className="footer__logo text-start">
         <h5>Eat n Smile</h5>
         Lorem ipsum dolor sit amet
         , consectetur adipisicing elit. Odio asperiores
        </div>
        </Col>
        <Col lg = "3" md = "4" sm="6">
          <h5 className='footer__title'>Delivery Time</h5>
          <ListGroup className='deliver__time-list'>
            <ListGroupItem className=' delivery__time-item border-0 ps-0'>
              <span>Sunday - Thursday</span>
              <p>10am - 11pm</p>
            </ListGroupItem>
            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Friday - Saturday</span>
              <p>No deliveries</p>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col lg = "3" md = "4" sm="6">
        <h5 className='footer__title'>Contact</h5>
          <ListGroup className='deliver__time-list'>
            <ListGroupItem className=' delivery__time-item border-0 ps-0'>
              <span>Location : Ago Iwoye, Ogun State, Nigeria</span>
            </ListGroupItem>

            <ListGroupItem className=' delivery__time-item border-0 ps-0'>
              <span>Phone: 08026849545</span>
            </ListGroupItem>
            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Email: Donkernie@gmail.com</span>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col lg = "3" md = "4" sm="6">
        <h5 className='footer__title'>Newletter</h5>
        <p>Subscribe to our newletter</p>
        <div className="newletter">
          <input type="email" placeholder='Enter mail' />
          <span><FaPaperPlane /></span>
        </div>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col lg = '6' md = '6'>
         <p className="copyright">
         Copyright -2022, website made by Soul. All Rights Reserved
         </p>
        </Col>
        <Col lg = '6' md = '6'>
          <div className="social__links d-flex align-items-center gap-4 justify-content-end">
            <p className='m-0'>Follow:</p>
            <span><Link to="">
              <FaFacebook/> 
              </Link> </span>
            <span><Link to="">
              <FaGithub/> 
              </Link> </span>
            <span><Link to="">
              <FaInstagram/> 
              </Link> </span>
            <span><Link to="">
              <FaLinkedin/> 
              </Link> </span>
          </div>
        </Col>
      </Row>
    </Container>
    </footer>
  )
}
