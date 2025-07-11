import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from "../../Assets/cart_cross_icon.png";
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';

const CartItems = () => {
    const isMobile = useMediaQuery(useTheme().breakpoints.down("md"))
    const { getTotalAmount, all_product, cartItems, removefromCart } = useContext(ShopContext)
    return (
        <Container>
            <div>
                <Box sx={{
                    marginTop: 9,


                    display: "grid",
                    gridTemplateColumns:  "0.5fr 2fr 1fr 1fr 1fr 1fr",
                    alignItems: "center",
                    gap: isMobile? "10px": "75px",
                    color: "#454545",
                    padding: "20px 0px",
                    fontWeight: 500





                }} fontWeight={{ md: 600, xs: 500 }} fontSize={{ xs: 16, md: 18 }}>

                    <Typography>Product</Typography>
                    <Typography>Title</Typography>



                    <Typography>Price</Typography>
                    <Typography>Quantity</Typography>
                    <Typography>Total</Typography>

                    <Typography>Remove</Typography>
                </Box>
                <hr />
                {all_product.map((e) => {

                    if (cartItems[e.id] > 0) {
                        return (

                            <div key={e.id}>
                                <Box sx={{
                                    display: "grid",
                                    gridTemplateColumns: "0.5fr 2fr 1fr 1fr 1fr 1fr",
                                    alignItems: "center",
                                    gap: isMobile? "10px": "75px",
                                    fontSize: "30px",
                                    fontWeight: 500

                                }}>
                                    <img src={e.image} alt="" height={"80px"} />
                                    <Typography fontSize={{
                                        xs:"10px",
                                        
                                    }}>{e.name}</Typography>
                                    <Typography fontSize={{
                                        xs:"12px",
                                        
                                    }} >${e.new_price}</Typography>
                                    <button style={{
                                        width: isMobile? "40px" :"64px",
                                        height: isMobile? "30px": "50px",
                                        background: "#fff",
                                        border: "2px solid #ebebeb"

                                    }}>{cartItems[e.id]}</button>
                                    <Typography fontSize={{
                                        xs:"12px",
                                        
                                    }}>${e.new_price * cartItems[e.id]}</Typography>
                                    <img src={remove_icon} style={{
                                        width: isMobile? "10px": "15px",
                                        margin: "0px 40px",
                                        cursor: "pointer"
                                    }} onClick={() => { removefromCart(e.id) }} alt="" />
                                </Box>
                                <hr />

                            </div>
                        )
                    }
                    return null





                })}
                <Box style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : 'row',
                    alignItems: isMobile ? "center" : "",
                    margin: "100px 0px",
                    gap: isMobile ? "50px" : "none"
                }}>
                    <div style={{
                        display: "flex",
                        flex: 1,
                        flexDirection: "column",
                     marginRight: isMobile? "none":"60px",
                        gap: 40
                    }}>
                        <div>
                            <Typography fontSize={{
                                xs: "2.5rem",
                                md: "4rem",
                            }} fontWeight={{
                                xs: 600
                            }}>
                                Cart Total

                            </Typography>
                            <div>
                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    padding: "15px 0px"
                                }}>
                                    <Typography>Total Items</Typography>
                                    <Typography>${getTotalAmount()}</Typography>
                                </div>
                            </div>
                            <hr />
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                padding: "15px 0px"
                            }}>
                                <Typography>Shippig Fee</Typography>
                                <Typography>Free</Typography>
                            </div>
                            <hr />
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                padding: "15px 0px"
                            }}>
                                <Typography fontSize={{
                                xs: "2rem",
                                md: "2.5rem",
                            }}>Total</Typography>
                                <Typography fontSize={{
                                xs: "2rem",
                                md: "2.5rem",
                            }}>${getTotalAmount()}</Typography>
                            </div>
                        </div>
                        <button style={{
                            width: "200px",
                            height: "50px",
                            outline: "none",
                            border: "none",
                            cursor: "pointer",
                            color: "#fff",
                            background: "#ff5a5a",
                            fontSize: "15px",
                            fontWeight: 600
                        }}>PROCEED TO CHECKOUT</button>
                    </div>
                    <div style={{
                        flex: 1,
                        fontSize: "16px",
                        fontWeight: 500
                    }}>
                        <Typography color='gray' fontWeight={600} fontSize={{
                            xs: "0.5rem",
                            md: "1.5rem",
                        }}>
                            If you have Promo code, enter is here
                        </Typography>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width:isMobile? "250px": "500px",
                            height: isMobile? "40px":"60px",
                            alignItems: "center",
                            paddingLeft: "20px",
                            background: "#eaeaea",
                            marginTop: "15px"
                        }}>
                            <input type="text" style={{

                                border: "none",
                                outline: "none",
                                background: "transparent",
                                fontSize: "16px",
                                width: isMobile? "100px":"300px",
                                height: isMobile? "20px": "50px"
                            }} placeholder='Promo code' />
                            <button type="submit" style={{
                                width:isMobile? "100px": "170px",
                                height:isMobile? "40px": "60px",
                                background: "black",
                                fontSize: "16px",
                                color: "#fff",
                                borderRadius: "20px"
                            }}>Submit</button>
                        </div>
                    </div>

                </Box>

            </div>


        </Container>

    )
}

export default CartItems