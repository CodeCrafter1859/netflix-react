import React from 'react'

const FaqComponent = ({first, second, third, fourth}) => {
  return (
    <div className='faq-component-container'>
      <p><a href="#">{first}</a></p>
      <p><a href="#">{second}</a></p>
      <p><a href="#">{third}</a></p>
      <p><a href="#">{fourth}</a></p>
    </div>
  )
}

export default FaqComponent
