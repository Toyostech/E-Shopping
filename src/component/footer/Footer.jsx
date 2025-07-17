import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import footer_logo from '../../Assets/logo_big.png'
import instagram_icon from '../../Assets/instagram_icon.png'
import pintester_icon from '../../Assets/pintester_icon.png'
import whatsapp_icon from '../../Assets/whatsapp_icon.png'

const Footer = () => {
    const isMobile= useMediaQuery(useTheme().breakpoints.down("md"))
    return (
        <section style={{
            paddingTop:isMobile? 30 : 0
            
        }}>
            <div style={{
                textAlign: "center",
                justifyContent: "center",
                background: "#000",
                
            }}>
                <div className='flex' style={{
                    padding:isMobile? 10: 20
                }}>
                    <img src={footer_logo} alt="" style={{
                        width: isMobile? "50px": "auto"
                    }} />
                    <Typography variant='h4' fontSize={{xs:15, md:30}} fontWeight={"bold"} color='#fff'>SHOPPER</Typography>
                </div>
                <div style={{
                   
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
                        fontSize: isMobile? "0.5rem": "2rem",
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
                    padding:isMobile? 10 : 15,
                    gap:isMobile? 20: 30,
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
                    padding:isMobile? 5: 10,
                    color: "#fff"
                }}>
 
                    <Typography fontSize={{xs:10 , md: 20}} sx={{

                        padding: 2
                    }}>Copyright @ Toyostech</Typography>
                </div>

            </div>
        </section>
    )
}

export default Footer