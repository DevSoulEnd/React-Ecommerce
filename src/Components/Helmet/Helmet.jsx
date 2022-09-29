import React from 'react'

export default function Helmet({title, children}) {
    document.title = "Eat n Smile-" + title
  return (
    <div className='w-100'>
      {children}
    </div>
  )
}
