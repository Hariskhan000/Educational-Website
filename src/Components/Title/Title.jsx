import React from 'react'
import "./Title.css"

const Title = ({subTitle , Title}) => {
  return (
    <div className='title'>
      <p>{subTitle}</p>
      <h1>{Title}</h1>
    </div>
  )
}

export default Title