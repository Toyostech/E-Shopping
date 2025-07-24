import React from 'react';

import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import arrow_icon from '../../Assets/arrow.png';
import hand_icon from '../../Assets/hand_icon.png';
import hero_icon from '../../Assets/hero_image.png';
import { motion, scale } from 'framer-motion'; 
import { fadeIn } from '../animationss';

const MotionGrid = motion(Grid)
const Hero = () => {
    
    const isMobile = useMediaQuery(useTheme().breakpoints.down("md"))
    return (
    <>
        <section style={{
            background: " #fde1ff",


        }}>
            

            <Container>

                <Box>
                    <Grid container spacing={2} justifyContent={"center"} alignItems={"center"}>
                        <Grid item md={6}  >
                            <Typography  variant='h5' paddingTop={20} fontSize={{ xs: 20, md: 30 }}>NEW ARRIVALS ONLY </Typography>
                            <motion.div initial={{opacity: 0, x: -50}}
                            animate= {{opacity: 2, x: 0 , scale: 1}
                        }
                            transition= {{duration: 1}} style={{
                                fontFamily: "sans-serif",
                                fontWeight: "bold"
                            }}>
                                <Typography sx={{
                                    lineBreak: "auto"
                                }} fontSize={{ xs: "2.5rem", md: "5rem" }} fontWeight={800} >new
                                    <span>
                                        <img src={hand_icon} alt="" width={50} height={50} />
                                    </span>
                                    collections for everyone
                                </Typography>


                                < div>
                                    <div style={{
                                        padding: isMobile ? "4px 0px 5px 0px" : "10px",
                                        borderRadius: '30px',
                                        background: 'red',
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",




                                    }}>
                                        <Typography variant='h2' fontSize={{ xs: "1rem", md: "2rem" }} fontWeight={600}>
                                            Latest Collection </Typography>
                                        <img width={25} height={25} src={arrow_icon} alt="" />
                                    </div>
                                </div>
                            </motion.div>




                        </Grid>
                        <MotionGrid item  initial={{opacity: 0, x: 50}}
                            animate= {{opacity: 2, x: 0 , scale: 1,}
                            
                        }
                            transition= {{duration: 1}} md={6}>
                            <img src={hero_icon} style={{
                                width: isMobile ? 300 : 600,
                                height: "auto"
                            }} alt="" />

                        </MotionGrid>

                    </Grid>
                </Box>
            </Container>


        </section>

    </>
    )
}

export default Hero
