import React from 'react'
import arrow_icon from '../../Assets/breadcrum_arrow.png'
import ProductDisplay from '../productDisplay/ProductDisplay'
const Breadcrum = (props) => {
    const{product}= props
  return (
    <div>
        Home <img src={arrow_icon} alt=""/> Shop <img src={arrow_icon} alt="" />{product.category}  <img src={arrow_icon} alt="" /> {product.name}
     
    </div>
  ) 
}

export default Breadcrum
