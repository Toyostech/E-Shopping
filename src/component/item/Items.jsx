
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Items = (props) => {
    return (
        <>
            <section>



                <Box>
                    <Card elevation={2} sx={{
                        gap: "0.6rem",

                        borderRadius: 5,

                      
                    
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
                                    textWrap: "wrap"
                                }}>
                                    <Typography variant='body2' fontFamily={"roboto"}  fontWeight={500}>
                                        {props.name}
                                    </Typography>
                                </div>

                                <div style={{
                                    display: "flex",

                                    alignItems: "center",
                                    gap: 5,
                                    fontfamily: "Roboto, sans-serif"
                                }}>
                                    <Typography fontStyle={"bold"} fontSize={20} fontWeight={600}>${props.new_price}</Typography>
                                    <Typography fontStyle={"bold"} color='gray' fontSize={20} fontWeight={600}>   {props.old_price}</Typography>

                                </div>


                            </CardContent>


                        
                    </Card>

                </Box>

            </section>
        </>
    )
}

export default Items