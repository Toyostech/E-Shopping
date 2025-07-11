import { AppBar, Box, Button, Container, IconButton, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useContext, useState } from 'react'
import NavbarData from './NavList'
import cart_icon from '../../Assets/cart_icon.png'
import MobileNav from '../mobileNav/MobileNav'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import Hero from '../herosection/Hero'


const NavBars = () => {
  const isMobile = useMediaQuery(useTheme().breakpoints.down("md"))
  const [value, setvalue] = useState()
  const { getTotalCartItem } = useContext(ShopContext)
  return (
    <>
      <AppBar sx={{ background: "#063970" }}>
        {isMobile ? (
          <Container>
            <Box sx={{
              display: "flex",

              alignItems: "center",

              cursor: "pointer"

            }}>
              <Typography variant='body1' fontSize={15} fontWeight={600} sx={{
              
              }}>
                TOYOSTECH
              </Typography>
              <Box marginLeft={"auto"}>
                <MobileNav />

              </Box>





            </Box>
          </Container>


        ) : (
          <Toolbar >
            <Typography>
              TOYOSTECH
            </Typography>


            <Tabs textColor='inherit' sx={{
              fontSize: '1.5rem',
              marginLeft: 'auto'

            }} onChange={(e, value) => setvalue(value)} value={value} indicatorColor='secondary'>
              {NavbarData.map((item, index) => (


                <Tab key={index} href={item.path} label={item.title} />

              ))}
            </Tabs>
            <Link to="/login">
              <Button variant='contained' sx={{ marginLeft: 'auto' }}>
                LOGIN
              </Button>
            </Link>


            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"

            }}>
              <Link to="/cart">
                <IconButton  >
                  <img src={cart_icon} color='white' alt="" />

                </IconButton>


              </Link>
              <div style={{
                background: "red",
                width: "1.5rem",
                aspectRatio: 1 / 1,
                borderRadius: "50%",
                textAlign: "center",
                marginLeft: -15,
                marginTop: -19,
                zIndex: 1



              }}>
                <span>

                  {getTotalCartItem()}

                </span>
              </div>


            </div>







          </Toolbar>

        )}



      </AppBar>
      


    </>
  )
}

export default NavBars

