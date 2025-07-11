import { Box, Button, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const NewLetter = () => {
    const isMobile= useMediaQuery(useTheme().breakpoints.down("sm"))
  return (
    <Box className='offer' sx={{
        display: {
            xs: "none",
            lg: "flex"

        },
        textAlign: "center",
        width: "65%",
        height: "50vh",
       
        margin: "auto",
        padding: "0px 140px",
        



    }}>
        <div style={{
           margin: 30,
           padding: 30,
           justifyContent: "center",
           alignItems: "center"

        }}>
        <Typography sx={{
            fontSize: "2.5rem",
            fontWeight: "800"
        }}>Get Exclusive Offers On Your Email</Typography>
        <Typography variant='h6' fontWeight={500} sx={{
            padding: 2
        }}>Subscribe to our newletter and stay update</Typography>
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <input  type="text" style={{
                padding: "15px",
                border: "1px solid white",
                borderRadius: 20,
                width: "500px",
                fontSize: "1.5rem"
            }} placeholder='Your Email id' />
            <Button sx={{
                padding: "10px 30px",
                fontSize: "1.5rem",
                background: "black",
                border: "none",
                borderRadius: "30px",
                color: "#fff"
            }}>Subscribe</Button>
        </div>
        </div>


       
    </Box>
  )
}

export default NewLetter