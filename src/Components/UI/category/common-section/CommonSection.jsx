import React from 'react'
import { Container } from 'reactstrap'
import '../../../../Styles/common-section.css'

export default function CommonSection({title}) {
  return (
    <section className='common__section'> 
      <Container>
          <h2 className='text-white'>
              {title}
          </h2>
      </Container>
    </section>
  )
}
