import React from 'react'
import data_product from '../../Assets/data'
import { Container, Grid, Typography } from '@mui/material'
import Items from '../item/Items'
import { motion } from "framer-motion";

const MotionGrid= motion(Grid)

const Popular = () => {
  return (
    <>
      <Container>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"

        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: "center",
            gap: 10,
            margin: 30

          }}>
            <Typography sx={{
              fontWeight: 600
            }} fontSize={{
              xs: "1.5rem",
              md: "2.5rem"
            }}>
              POPULAR IN WOMEN
            </Typography>
            <div style={{
              background: "red",
              width: "200px",
              height: "2.5px"
            }}></div>

          </div>

          <hr />


          <Grid container spacing={1} justifyContent={"center"} alignItems={"center"}>

            {data_product.map((item) => (
              <MotionGrid  item whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(0,0,0,0.2)" }}
              transition={{ duration: 0.3 }} md={3}  lg={3}  xs={{
                alignItems: "center"
              }} sx={{ 
                transition: "ease-in-out 500ms",
                ":hover":{
                  scale: "1.1",
                }
              }}>
                <Items key={item.id} id={item.id}
                  image={item.image}
                  name={item.name}
                  new_price={item.new_price}
                  old_price={item.old_price} />

              </MotionGrid>


            ))}





          </Grid>






        </div>

      </Container>

    </>
  )
}

export default Popular
