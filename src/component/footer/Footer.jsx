import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import footer_logo from '../../Assets/logo_big.png'
import instagram_icon from '../../Assets/instagram_icon.png'
import pintester_icon from '../../Assets/pintester_icon.png'
import whatsapp_icon from '../../Assets/whatsapp_icon.png'

const Footer = () => {
    const isMobile= useMediaQuery(useTheme().breakpoints.down("sm"))
    return (
        <section style={{
            paddingTop: 78
        }}>
            <div style={{
                textAlign: "center",
                justifyContent: "center",
                background: "#000"
            }}>
                <div className='flex' style={{
                    padding: 20
                }}>
                    <img src={footer_logo} alt="" />
                    <Typography variant='h4' fontWeight={"bold"} color='#fff'>SHOPPER</Typography>
                </div>
                <div style={{
                    padding: 15
                }}>
                    <Box className="flex" sx={{
                        display: "flex",
                        flexDirection: {
                            xs: "row",
                            lg: "row"

                        },
                        alignItems: "center",
                        
                       
                        listStyle: "none",
                        gap: 2,
                        padding: 2,
                        fontSize: isMobile? "1rem": "2rem",
                        color: "#fff"
                       

                    }}>
                        <li>Company</li>
                        <li>Product</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Offices</li>
                    </Box>
                </div>
                <div className='flex' style={{
                    padding: 15,
                    gap: 30,
                    background: "#fff"
                }}>
                    <div>
                        <img src={instagram_icon} alt="" style={{
                            
                        }} />
                    </div>
                    <div>
                        <img src={pintester_icon} alt="" />
                    </div>
                    <div>
                        <img src={whatsapp_icon} alt="" />
                    </div>
                </div>
                <div style={{
                    padding: 10,
                    color: "#fff"
                }}>
                    <hr />
                    
                    <Typography sx={{
                        padding: 2
                    }}>Copyright @ Toyostech</Typography>
                </div>

            </div>
        </section>
    )
}

export default Footer