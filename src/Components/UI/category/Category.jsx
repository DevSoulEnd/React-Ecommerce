import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import categoryImg01 from '../../../images/category-01.png'
import categoryImg02 from '../../../images/category-02.png'
import categoryImg04 from '../../../images/category-04.png'
import categoryImg03 from '../../../images/category-03.png'
import '../../../Styles/Category.css'

const categoryData = [
    {
        display: "Fast Food",
        imgUrl: categoryImg01
    },
    {
        display: "Pizza",
        imgUrl: categoryImg02
    },
    {
        display: "Pasta",
        imgUrl: categoryImg03
    },
    {
        display: "Pastries",
        imgUrl: categoryImg04
    },
]

export default function Category() {
  return (
    <Container>
        <Row>
            {
                categoryData.map((item, index)=>{
                    const{display, imgUrl} = item;
                    return <Col key={index} lg="3" md="4" sm="6" xs='6' className='mb-3'>
                        <div className="category__item d-flex align-items-center gap-3">
                            <div className="category__img">
                                <img src={imgUrl} alt="ct" />
                            </div>
                            <h6>{display}</h6>
                        </div>
                    </Col>
                })
            }

        </Row>
    </Container>
  )
}
