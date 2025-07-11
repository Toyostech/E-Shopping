import { Button, Container, Drawer, IconButton, Tab, Tabs } from '@mui/material'
import React, { useContext, useState } from 'react'
import menu from '../../Assets/menu.png';
import cart_icon from '../../Assets/cart_icon.png';
import NavbarData from '../navbars/NavList';

import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';



const MobileNav = () => {
  const [open, setopen] = useState(false)
  const { getTotalCartItem } = useContext(ShopContext)
  return (
    <Container>
      <IconButton onClick={() => setopen(true)}>
        <img src={menu} alt="menu icon" style={{
          width: "25px",
          height: "25px",

        }} />

      </IconButton>
      <Drawer PaperProps={{
        sx: {
          backgroundColor: "#512da4",
          padding: 3,
          height: 350,
          width: "50%",

        }
      }} open={open} onClose={() => setopen(false)} >
        <Tabs>
          <div style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center"
          }}>
            {NavbarData.map((link, index) => (
              <Tab onClose={() => setopen(false)} key={index} href={link.path} label={link.title} />
            ))}
          </div>

        </Tabs>




        <div style={{
          display: "flex",
          flexDirection: "row",
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



          }} onClose={() => setopen(false)}>
            <span>

              {getTotalCartItem()}

            </span>
          </div>



        </div>
        <Button href='/login' variant='contained' sx={{ marginLeft: 'auto' }}>
          LOGIN
        </Button>

      </Drawer>



    </Container>

  )
}

export default MobileNav