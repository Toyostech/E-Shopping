
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const MotionCard = motion(Card)
const Items = (props) => {
    return (
        <>
            <section>



                <Box>
                    <MotionCard initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5 }} elevation={3} spacing={5} sx={{
                            gap: "1rem",

                            borderRadius: 5,

                            textAlign: "center",

                            borderRadius: "10px",
                            maxWidth: "maxContent",
                            margin: "auto",
                            transition: "all 200ms ease-in"
                        }}>


                        <CardMedia>
                            <Link to={`/product/${props.id} `}>
                                <Box sx={{
                                    transition: "ease-in-out 500ms",
                                    ":hover": {
                                        scale: "1.05",
                                    }
                                }}>
                                    <img onClick={window.scrollTo(0, 0)} src={props.image} style={{
                                        width: "100%",
                                        maxWidth: "15rem"
                                    }}

                                        alt="" />

                                </Box>

                            </Link>

                        </CardMedia>
                        <CardContent>
                            <div style={{

                            }}>
                                <Typography variant='body2' fontSize={{ xs: 10, md: 15 }} fontWeight={200}>
                                    {props.name}
                                </Typography>
                            </div>

                            <div style={{
                                display: "flex",

                                alignItems: "center",
                                gap: 5,
                                fontfamily: "Roboto, sans-serif"
                            }}>
                                <Typography variant='body2' fontStyle={"bold"} fontSize={{ xs: 10, md: 15 }} fontWeight={600}>${props.new_price}</Typography>
                                <Typography variant='body2' fontStyle={"bold"} color='gray' fontSize={{ xs: 10, md: 15 }} fontWeight={600}>   {props.old_price}</Typography>
                            </div>



                        </CardContent>



                    </MotionCard>

                </Box>

            </section>
        </>
    )
}

export default Items