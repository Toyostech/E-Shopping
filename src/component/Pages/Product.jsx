import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../breadcrum/Breadcrum'
import ProductDisplay from '../productDisplay/ProductDisplay'
import Description from '../description/Description'
import { Container } from '@mui/material'
import RelatedProduct from '../relatedproduct/RelatedProduct'
const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { productId } = useParams()
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <>
      <Container>
        <Breadcrum product={product} />

        <ProductDisplay product={product} />
        <Description />
        <RelatedProduct/>
      



      </Container>



    </>
  )
}

export default Product
