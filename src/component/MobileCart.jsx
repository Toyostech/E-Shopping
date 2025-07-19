import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { ShopContext } from './Context/ShopContext'
import { useContext } from 'react'
import remove_icon from "../Assets/cart_cross_icon.png";


const MobileCart = () => {
    const isMobile = useMediaQuery(useTheme().breakpoints.down("md"))

    const { getTotalAmount, all_product, cartItems, removefromCart } = useContext(ShopContext)
    return (
        <>
            <Container>
                <Box>

                    {all_product.map((e) => {

                        if (cartItems[e.id] > 0) {
                            return (

                                <div key={e.id}>
                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "space-between",

                                        gap: "10px",
                                        fontSize: "30px",
                                        fontWeight: 500

                                    }}>
                                        <div>
                                            <Typography variant='h6' fontWeight={600}>Product</Typography>
                                            <div style={{
                                                justifyContent: "center",
                                                alignItems: "center",
                                                textAlign: 'center'
                                            }}>
                                                <img src={e.image} alt="" height={"150px"} />
                                            </div>



                                        </div>
                                        <div>
                                            <Typography variant='h6'>Title</Typography>
                                            <Typography fontSize={{
                                                xs: "10px",

                                            }}>{e.name}</Typography>
                                            <Typography variant='h6'>Price</Typography>
                                            <Typography fontSize={{
                                                xs: "12px",

                                            }} >${e.new_price}</Typography>

                                            <Typography variant='h6'>Total</Typography>
                                            <Typography fontSize={{
                                                xs: "12px",

                                            }}>${e.new_price * cartItems[e.id]}</Typography>
                                        </div>
                                        <div>
                                            <div style={{
                                               
                                                textAlign: "center"
                                            }}>
                                                <Typography variant='h6'>Quatity</Typography>
                                                <button style={{
                                                    width: "40px",
                                                    height: "30px",
                                                    background: "#fff",
                                                    border: "2px solid #ebebeb"

                                                }}>{cartItems[e.id]}</button>
                                            </div>

                                            <div>

                                                <img src={remove_icon} style={{
                                                    width: "10px",
                                                    margin: "0px 40px",
                                                    cursor: "pointer"
                                                }} onClick={() => { removefromCart(e.id) }} alt="" />
                                                <Typography variant='h6'>Remove</Typography>

                                            </div>

                                        </div>


                                    </Box>
                                    <hr />

                                </div>
                            )
                        }
                        return null





                    })}

                </Box>




            </Container>

        </>





    )
}

export default MobileCart