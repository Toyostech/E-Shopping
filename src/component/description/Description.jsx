import { Box, Typography } from '@mui/material'
import React from 'react'

const Description = () => {
  return (
    <Box padding={3}>

        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap:10,
            paddingBottom: 10
        }} >
            <Typography sx={{
                padding: 1.5,
                border: "1px solid red",
                textAlign: "justify",
                fontWeight: "bold",
                fontFamily: "sans-serif"

            }}>Description</Typography>
            <Typography  sx={{
                padding: 1.5,
                border: "1px solid red",
fontWeight: "bold",
                fontFamily: "sans-serif"
            }}>Reviews (122)</Typography>
        </div>
        <div style={{
            textWrap: "wrap",
           
                fontFamily: "sans-serif"
        }}>
            <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor et, eos libero dicta quisquam nemo voluptatem doloremque at nihil natus, maiores ut eligendi magni facilis beatae commodi! Eos, accusamus. Fugit doloribus, facilis architecto deserunt magni corporis id error aut dolores!
            </Typography>
            <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt ducimus perspiciatis placeat natus officia excepturi veniam cupiditate quidem iste a? </Typography>
        </div>
      
    </Box>
  )
}

export default Description
