import React, { useContext } from 'react'
import ShopContextProvider, { ShopContext } from '../Context/ShopContext'
import { Grid, Typography, Container, useMediaQuery, useTheme } from '@mui/material'
import dropdown_icon from '../../Assets/dropdown_icon.png'
import Items from '../item/Items'
const ShopCategory = (props) => {
  const isMobile = useMediaQuery(useTheme().breakpoints.down("md"))
  const { all_product } = useContext(ShopContext)
  return (
    <div style={{
      marginTop: 50
    }}>
      <img src={props.banner} alt="" style={{
        width: isMobile? "450px": "auto",
        height: isMobile? "200px": "auto"


      }}  />
      <Container>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Typography variant='h6' fontWeight={500}>
            Showing 1-12 
            <span style={{
              fontSize: "15px",
              color: "grey"
            }} >
              out of 36 product
            </span>
          </Typography>
          <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            border: "1px solid red",
            gap: 5,
            borderRadius: 25
          }}>
            <Typography fontSize={15}>Sort by</Typography>
            <img src={dropdown_icon} alt="" />
          </div>
        </div>

        <div>
          <Grid container spacing={1} justifyContent={"center"} alignItems={"center"}>
            {all_product.map((item, i) => {

              if (props.category === item.category) {
                return <Grid key={i} item md={3} xs={6} lg={4} sx={{
                  transition: "ease-in-out 500ms",
                  ":hover": {
                    scale: "1.1",
                  }
                }}>
                  <Items id={item.id}
                    image={item.image}
                    name={item.name}

                    new_price={item.new_price}
                    old_price={item.old_price} />
                </Grid>

              }
              else {
                return <></>
              }



            })}

          </Grid>

          
        </div>
      </Container>
    </div>
  )
}

export default ShopCategory