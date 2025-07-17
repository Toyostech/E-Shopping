import { Button, Typography, Container, Box, useMediaQuery, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import star_icon from '../../Assets/star_icon.png'
import star_dull_icon from '../../Assets/star_dull_icon.png'
import { ShopContext } from '../Context/ShopContext'
const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext)
    const isMobile = useMediaQuery(useTheme().breakpoints.down("md", "sx"))
    
    return (
        <Container>
            <Box sx={{
                display: "flex",
                flexDirection: {
                    xs: "column",
                    lg: "row"
                },
                justifyContent: "center",
                marginTop: 5,


                gap: 5

            }}>
                <div style={{
                    display: "flex",
                    flexDirection: isMobile?   "column" : "row",
                    gap: 5




                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: isMobile ? "row" : "column",
                       
                        alignItems: "center",
                        gap: 5
                    }}>
                        <img src={product.image}  alt="" width={150} height={"150px"} />
                        <img src={product.image} alt="" width={150} height={"150px"} />
                        <img src={product.image} alt="" width={150} height={"150px"} />
                       
                    </div>
                    <div style={{
                      textAlign: "center",
                      
                    }}>

                        <img src={product.image} alt="" style={{
                            width: isMobile? 300 : 500,
                            height: isMobile?  "auto" : 500

                        }} />
                    </div>

                </div>
                <div>
                    <Typography variant='h5'  fontSize={{
                        xs: "1rem",
                        md: "1.5rem"
                    }} fontWeight={800}>{product.name}</Typography>
                    <div>
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />

                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_dull_icon} alt="" />
                        <Typography>(122)</Typography>

                    </div>
                    <div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,


                        }}>
                            <div> <Typography>${product.old_price}
                                <div style={{
                                    background: "red",
                                    width: 30,
                                    height: 2,
                                    top: 0,
                                    right: 0,
                                    left: 0
                                }}></div>

                            </Typography></div>
                            <div>
                                <Typography sx={{
                                    textDecorationStyle: "dashed",
                                    fontSize: "1.5rem",
                                    fontWeight: "600px"

                                }}>
                                    ${product.new_price}</Typography>
                            </div>

                        </div>

                        <div style={{
                            padding: 5,
                            textAlign: "justify"
                        }}>
                            <Typography variant='body2' fontSize={{
                                xs: "body2",
                                md: "1rem"
                            }}>
                                Lorem ipsum
                                dolor sit amet consectetur, adipisicing elit. Laborum, maiores sunt deserunt expedita sapiente eius suscipit doloribus modi quidem odit.
                            </Typography>
                        </div>
                        <div>
                            <Typography variant='h5' fontWeight={800}>Select Size</Typography>
                            <div style={{
                                display: "flex",

                                alignItems: "center",
                                gap: 10,

                            }}>
                                <div style={{
                                    padding: "10px 20px",
                                    border: "1px solid red",
                                    fontWeight: "bold",
                                    fontSize: 15

                                }}>S</div>
                                <div style={{
                                    padding: "10px 20px",
                                    border: "1px solid red",
                                    fontWeight: "bold",
                                    fontSize: 15

                                }}>M</div>
                                <div style={{
                                    padding: "10px 20px",
                                    border: "1px solid red",
                                    fontWeight: "bold",
                                    fontSize: 15

                                }}>L</div>
                                <div style={{
                                    padding: "10px 20px",
                                    border: "1px solid red",
                                    fontWeight: "bold",
                                    fontSize: 15

                                }}>XL</div>

                                <div style={{
                                    padding: "10px 20px",
                                    border: "1px solid red",
                                    fontWeight: "bold",
                                    fontSize: 15

                                }}>XXL</div>
                            </div>
                        </div>
                        <Button variant='contained' sx={{
                            padding: 2,
                            border: "none",
                            borderRadius: "30px",
                            margin: "10px 0px ",
                            fontWeight: 600,
                            background: "#ff4141",
                            cursor: "pointer"
                        }} fullWidth onClick={() => { addToCart(product.id) }}>ADD TO CART</Button>
                        <Typography><span>Category :</span>Women , T-Shirt, Crop Top  </Typography>
                        <Typography><span>Tags :</span>Modern , T-Shirt, Crop Top  </Typography>

                    </div>

                </div>


            </Box>
        </Container>

    )
}

export default ProductDisplay
