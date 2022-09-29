import React, {useState, useEffect} from 'react'
import Helmet from '../Components/Helmet/Helmet'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import HeroImg from '../images/hero.png'
import '../Styles/Hero.css'
import {FaChevronRight, FaCar, FaShieldAlt , FaCheckCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Category from '../Components/UI/category/Category'
import '../Styles/home.css'
import featureImg01 from '../images/service-01.png'
import featureImg02 from '../images/service-02.png'
import featureImg03 from '../images/service-03.png'
import products from '../Data'

import foodItem01 from '../images/hamburger.png'
import foodItem02 from '../images/pizza.png'
import foodItem03 from '../images/bread.png'
import ProductCard from '../Components/UI/category/product-card/ProductCard'
import whyImg from '../images/location.png'
import networkImg from '../images/network.png'
import Testimonials from '../Components/UI/category/slider/Testimonials'

const featuredData = [
  {
    title: "Quick delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, facilis?"
  },
  {
    title: "Best scenery",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, facilis?"
  },
  {
    title: "Easy Pickup",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, facilis?"
  },
]

export default function Home() {

  const [allProducts, setAllProducts] = useState(products)
  const [category, setCategory] = useState("ALL")

  const[hotPizza, setHotPizza] = useState([]);

  useEffect(()=>{
    const filteredPizza = products.filter(item=> item.category)
    const slicePizza = filteredPizza.slice(0,4)

    setHotPizza(slicePizza)
  },[])

  useEffect(()=>{
    if(category === "ALL"){
      setAllProducts(products)
    }
    if(category === "BURGER"){
      const filteredProducts = products.filter(item=> item.category === "Burger")
      setAllProducts(filteredProducts)
    }
    if(category === "PIZZA"){
      const filteredProducts = products.filter(item=> item.category === "Pizza")
      setAllProducts(filteredProducts)
    }
    if(category === "BREAD"){
      const filteredProducts = products.filter(item=> item.category === "Bread")
      setAllProducts(filteredProducts)
    }
  }, [category])

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg = "6" md="6">
              <div className="hero__content">
                <h5 className='mb-3'>Hungry? We are here to Serve!</h5>
                <h1 className='hero__title mb-4'><span> LAZY? </span> order and get food <span>at your door</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi de
                  leniti c, nobis?</p>
                  <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                    <button className='order__btn d-flex align-items-center justify-content-between'>
                     <Link to=""> Order now <FaChevronRight className='icon'/></Link>
                    </button>
                    <button className='all__foods-btn'><Link to="/foods">See all Foods</Link></button>
                  </div>
                  <div className='hero__service d-flex align-items-center gap-5 mt-5'>
                    <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><FaCar/>
                    </span> No Delivery Charges</p>
                    <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><FaShieldAlt/>
                    </span> 100% sure checkout</p>
                  </div>
              </div>
            </Col>
            <Col lg = "6" md = "6">
              <div className="hero__img">
                <img src={HeroImg} alt="" className='w-100'/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Category/>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className='text-center' > 
            <h2 className='feature__title'>Just Sit Back At Home</h2>
            <h2 className='feature__title'>We're In <span>Perfect Control</span></h2>
            <p className='mb-1 mt-4 feature__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, facilis?</p>
            <p className='feature__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, facilis?</p>
            </Col>

            {
              featuredData.map((item,index)=>{
                const{title, imgUrl, desc} = item

                return <Col lg='4' md='6' sm='6' key={index} className="mt-5" >
                        <div className="feature__item text-center px-5 py-3 ">
                            <img src={imgUrl} alt="ssh" className='w-25'/>
                            <h5 className='fw-5 mb-3'>{title}</h5>
                            <p>{desc}</p>
                        </div>
                      </Col>
              })
            }
          </Row>
        </Container>
      </section>
            <section>
            <Container>
              <Row>
                <Col lg='12' className='text-center'>
                  <h2>Popular Foods</h2>
                </Col>
                <Col lg='12'>
                  <div className="food__category d-flex align-items-center justify-content-center gap-4 mb-5">
                      <button className={`all__btn ${category === "ALL" ? "foodBtnActive": ""}`} 
                      onClick={()=> setCategory("ALL")}
                      >All
                      </button>
                      <button className={`d-flex align-items-center gap-2 
                      ${category === "BURGER"? "foodBtnActive": ""}`}
                      onClick={()=> setCategory("BURGER")}
                      >
                        <img src={foodItem01} alt="Burger" />Burger</button>
                      <button className={`d-flex align-items-center gap-2 
                      ${category === "PIZZA"? "foodBtnActive": ""}`}
                      onClick={()=> setCategory("PIZZA")}
                      >
                        <img src={foodItem02} alt="Burger" />Pizza</button>
                      <button className={`d-flex align-items-center gap-2 
                      ${category === "BREAD"? "foodBtnActive": ""}`}
                      onClick={()=> setCategory("BREAD")}
                      >
                        <img src={foodItem03} alt="Burger" />Bread</button>
                  </div>
                </Col>
                {
                  allProducts.map((item, index)=>{
                    return <Col lg ='3' md='4'  sm='6' xs ='6' key = {index} className= 'mt-5'>
                    <ProductCard item = {item}/>
                  </Col>
                  })
                }
              </Row>
            </Container>
            </section>
            <section className='why__choose-us'>
              <Container>
                <Row>
                  <Col lg="6" md="6">
                    <img src={whyImg} alt="location" className='w-100' />
                  </Col>
                  <Col lg="6" md="6">
                    <div className="why__tasty-treat">
                      <h2 className="tasty__treat-title"> Why <span>Eat n Smile</span></h2>
                      <p className='tasty__treat-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente mollitia magni aspernatur,
                         iure aut quam cumque
                         ex quo rerum illo, molestias ad. Consectetur eius ab itaque maiores iusto beatae e
                         st!
                      </p>
                      <ListGroup className='mt-4'>
                        <ListGroupItem className='border-0 ps-0'>
                            <p className='  d-flex align-items-center gap-2'>
                            <FaCheckCircle className='choose'/> <span id='urgent'>Fresh and Tasty Meals</span>
                            </p>
                            <p className='choose-desc'>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, impedit.
                            </p>
                        </ListGroupItem>
                        <ListGroupItem className='border-0 ps-0'>
                            <p className='  d-flex align-items-center gap-2'>
                            <FaCheckCircle className='choose'/> <span id='urgent'>Quality Support</span>
                            </p>
                            <p className='choose-desc'>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, magni!
                            </p>
                        </ListGroupItem>
                        <ListGroupItem className='border-0 ps-0'>
                        <p className=' d-flex align-items-center gap-2'>
                            <FaCheckCircle className='choose'/> <span id='urgent'>Order anywhere in Ago Iwoye and environs</span>
                            </p>
                            <p className='choose-desc'>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, magni!
                            </p>
                        </ListGroupItem>
                      </ListGroup>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
            <section className='pt-0'>
              <Container>
                  <Row>
                <Col lg="12" className='text-center mb-5'>
                  <h2>Hot Pizza</h2>
                </Col>
                {
                  hotPizza.map((item, index)=>{
                    return <Col lg='3' md='4' key={index}>
                        <ProductCard item={item}/>
                    </Col>
                  })
                }
                  </Row>
              </Container>
            </section>

            <section>
              <Container>
                <Row>
                  <Col lg='6' md='6'>
                    <div className='testimonial'>
                    <h2 className='testimonial__title'>What our <span>Customers</span> are saying</h2>
                    <p className='test__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, eaque est aliquam 
                      ab delectus velit facere quisquam voluptate tenetur excepturi!</p>
                      <Testimonials/>
                    </div>
                  </Col>
                  <Col lg='6' md='6'>
                    <img src={networkImg} alt="test" className='w-100'/>
                  </Col>
                </Row>
              </Container>
            </section>
    </Helmet>
  )
}
