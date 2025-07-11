import { Button, Typography } from '@mui/material'
import React from 'react'
import exclusive_image from "../../Assets/exclusive_image.png"

const Offers = () => {
  return (
    <div className='offer' style={{
        width: "65%",
        height: "60vh",
        display: "flex",
      
        padding: "0px 140px",
        margin: "100px"

       
    }}>
        <div style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyItems: "center"
        }}>
            <Typography sx={{
                fontSize: "80px",
                fontWeight: 600,
                color: "#171717"
            }}>Exclusive</Typography>
            <Typography sx={{
                fontSize: "80px",
                fontWeight: 600,
                color: "#171717"
            }}>Offers For You</Typography>
            <Typography sx={{
                fontSize: "22px",
                fontWeight: 600,
                color: "#171717"
            }}>ONLY ON BEST SELLERS PRODUCTS</Typography>
            <Button variant='contained'sx={{
                width: "282px",
                height: "70px",
                borderRadius: "35px",
                background: "#ff4141",
                border: "none",
                color: "#fff",
                fontSize: "22px",
                fontWeight: 500,
                cursor: "pointer",
                marginTop: "30px"
            }}>Check now</Button>
        </div>
        <div style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingTop: 50
        }}>
            <img src={exclusive_image} alt="" />

        </div>

    </div>
  )
}

export default Offers