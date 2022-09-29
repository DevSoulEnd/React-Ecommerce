import React, {useState, useEffect} from 'react'
import products from '../Data'
import {useParams} from 'react-router-dom'
import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/category/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { cartActions } from '../store/shopping-cart/cartSlice'
import {useDispatch} from 'react-redux'
import ProductCard from '../Components/UI/category/product-card/ProductCard'

import '../Styles/product-detail.css'

export default function FoodDetails() {

  const {id} = useParams()
  const product = products.find(product=> product.id === id)
  const {desc,price,image01,image02, image03, title, category} = product
  const [previewImg , setPreviewImg] = useState(product.image01)
  const relatedProducts = products.filter(product=> product.category === category);

  useEffect(()=>{
    window.scrollTo(0,0)
  },[product])

  useEffect(()=>{
    setPreviewImg(product.image01)
  },[product])


  const dispatch = useDispatch();

  const addToCart = ()=>{
    dispatch(cartActions.addItem({
      id,
      title,
      price,
      category,
      image01
    }))
  }


 
  return (
    <Helmet title ={title} >
      <CommonSection title = {title}/>

      <section>
        <Container>
          <Row>
            <Col lg="2" md='2'>
                <div className="product__images">
                  <div className="image__item mb-4" onClick={()=> setPreviewImg(image01)}>
                  <img src={image01} alt="product-img" className='w-50' />
                  </div>
                  <div className="image__item mb-4" onClick={()=> setPreviewImg(image02)}>
                  <img src={image02} alt="product-img" className='w-50' />
                  </div>
                  <div className="image__item mb-4" onClick={()=> setPreviewImg(image03)}>
                  <img src ={image03} alt="product-img"  className='w-50'/>
                  </div>
                </div>
            </Col>

            <Col lg='4' md='4'>
              <div className="product__main-img">
              <img src={previewImg} alt="product-img"  className='w-100'/>
              </div>
            </Col>

            <Col lg='6' md='6'>
                <div className="single__product-content">
                  <h2 className='product__title'>{title}</h2>
                  <p className="product__price"> {""} 
                  Price: <span>{price}</span></p>
                  <p className='category mb-5'> Category: <span>{category}</span></p>
                  <button className="addToCart__btn" onClick={addToCart}>Add to Cart</button>
                </div>
            </Col>

            <Col lg='12'>
              <div className="tabs d-flex align-items-center gap-5 py-3">
                <h6 className='tab__active' >Description</h6>
              </div>

              <div className="tab__content">
               <p>
                {desc}
               </p>
              </div>

            </Col>

            <Col lg='12' className='mb-5'>
              <h5 className='related__title mt-5'>You might Also Like</h5>
            </Col>
            {
              relatedProducts.map(item=> <Col lg='3' md='4' sm='6' xs='6' key={item.id}>
                  <ProductCard item = {item}/>
              </Col>)
            }
          </Row>
        </Container>
      </section>
    </Helmet>

  )
}
