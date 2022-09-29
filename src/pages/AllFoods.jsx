import React, {useState, useEffect} from 'react'
import CommonSection from '../Components/UI/category/common-section/CommonSection'
import Helmet from '../Components/Helmet/Helmet'
import { Container,Row, Col } from 'reactstrap'
import { FaSearch } from 'react-icons/fa'

import products from '../Data'
import ProductCard from '../Components/UI/category/product-card/ProductCard'
import '../Styles/all-foods.css'
import ReactPaginate from 'react-paginate'
import '../Styles/paginate.css'


export default function AllFoods() {
  const[searchTerm, setSearchTerm] = useState("")
  const [pageNumber, setPageNumber] = useState(0)

  const searchedProducts = products.filter((item) => {
    if(searchTerm.value === '') return item

    if(item.title.toLowerCase().includes(searchTerm.toLowerCase())){
      return item
    }
  })

  const productPerPage = 8
  const visitedPage = pageNumber * productPerPage
  const displayPage = searchedProducts.slice(visitedPage , productPerPage + visitedPage)

  const pageCount = Math.ceil(products.length/productPerPage)

  const changePage=({selected})=>{
    setPageNumber(selected)
  }

 

  return  <Helmet title="All-Foods">
    <CommonSection title ="All Foods"/>
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6' sm='6' xs='12'>
            <div className="search__widget d-flex align-items-center justify-content-between">
              <input 
              type="text" 
              placeholder='search food Item'
              value={searchTerm}
              onChange={(e)=> setSearchTerm(e.target.value) } 
              />
              <span><FaSearch/></span>
            </div>
          </Col>
          <Col lg='6' md='6' sm='6' xs='12' className='mb-5'>
              <div className="sorting__widget text-end">
                <select className='w-50'>
                  <option >Default</option>
                  <option value="ascending"> Alphabetically A-Z</option>
                  <option value="descending">Alphabetically Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price"> Low Price</option>
                </select>
              </div>
          </Col>
          {
            displayPage.map((item, index)=>{
              return <Col lg='3' md='4' sm='6' xs='6' className='mb-5'>
                 <ProductCard key={index} item={item}/>
              </Col>
            })
          }

          <div>
            <ReactPaginate 
              pageCount={pageCount}
              onPageChange = {changePage}
              previousLabel = "Prev"
              nextLabel = 'Next'
              containerClassName='paginate' 
            />
          </div>

        </Row>
      </Container>
    </section>
  </Helmet>
}
