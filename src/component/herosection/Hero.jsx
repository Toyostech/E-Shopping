import { Box, Button, Container, Grid, Typography,useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import hand_icon from '../../Assets/hand_icon.png'
import arrow_icon from '../../Assets/arrow.png'
import banner_women from '../../Assets/banner_women.png'
import hero_icon from '../../Assets/hero_image.png'
const Hero = () => {
     const isMobile = useMediaQuery(useTheme().breakpoints.down("md"))
    return (
        <>
            <section style={{
                background: " #fde1ff",
                height:isMobile? "50hv": "100hv"
            }}>
                <Container>

                    <Box>
                        <Grid container spacing={2} justifyContent={"center"} alignItems={"center"}>
                            <Grid item md={6}  >
                                <Typography variant='h5' paddingTop={20} fontSize={{ xs: 20, md: 30 }}>NEW ARRIVALS ONLY </Typography>
                                <div style={{
                                    


                                    fontWeight: "bold"
                                }}>
                                    <Typography fontSize={{xs: "3rem", md: "5rem"}} fontWeight={600} >new
                                        <span>
                                            <img src={hand_icon} alt="" width={50} height={50} />
                                        </span>
                                        collections for everyone
                                    </Typography>

                                   
                                    <div style={{
                                        padding: 10,
                                        borderRadius: '30px',
                                        background: 'red',
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: 10



                                    }}>
                                        <Typography variant='h5' fontSize={"2.5rem"} fontWeight={600}>
                                            Latest Collection </Typography>
                                        <img width={25} height={25} src={arrow_icon} alt="" />
                                    </div>
                                </div>




                            </Grid>
                            <Grid item md={6}>
                                <img src={hero_icon} alt="" width={300} height={"auto"} />

                            </Grid>

                        </Grid>
                    </Box>
                </Container>


            </section>

        </>
    )
}

export default Hero