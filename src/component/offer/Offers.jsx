import { Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import exclusive_image from "../../Assets/exclusive_image.png"


const Offers = () => {
    const isMobile= useMediaQuery(useTheme().breakpoints.down("sm"))
  return (
    <div className='offer' style={{
        width:isMobile? "auto": "65%",
        height:isMobile? "30vh" :"60vh",
        display: "flex",
      
        padding:isMobile? "3px":"0px 140px",
        margin: isMobile? "5px":"100px",
        alignItems: "center",
        justifyContent: "center",
        

       
    }}>
        <div style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            alignItems: "center"
        }}>
            <Typography fontSize={{xs:30, md:60}} sx={{
               
                fontWeight: 600,
                color: "#171717"
            }}>Exclusive</Typography>
            <Typography fontSize={{xs:30, md:50}} sx={{
                
                fontWeight: 600,
                color: "#171717"
            }}>Offers For You</Typography>
            <Typography fontSize={{sx:15, md:20}} sx={{
              
                fontWeight: 600,
                color: "#171717"
            }}>ONLY ON BEST SELLERS PRODUCTS</Typography>
            <Button variant='contained'sx={{
                width: isMobile? "150px":"282px",
                height: isMobile? "50px":"70px",
                borderRadius: "35px",
                background: "#ff4141",
                border: "none",
                color: "#fff",
                fontSize:isMobile? "15px": "22px",
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
            <img style={{
                width: isMobile? "150px":"400px",
                height: isMobile? "200px":"500px"
            }} src={exclusive_image} alt="" />

        </div>

    </div>
  )
}

export default Offers