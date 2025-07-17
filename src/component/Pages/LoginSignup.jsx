import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'


const LoginSignup = () => {

  const [inputforn, setinputform] = useState({
    FullName: "",
    Email: "",
    Password: ""
  })
  const submitHandler = (e) => {
    setinputform((preState) => ({
      ...preState,
      [e.target.name]: e.target.value

    }))




  }




  const HandleSubmit = (e) => {
    e.preventDefault()
    console.log(inputforn)

  }

  const Submit = () => {
    setinputform(
      {
        FullName: "",
        Email: "",
        Password: ""


      }

    )
    console.log(inputforn)

  }


  const isMobile = useMediaQuery(useTheme().breakpoints.down("md"))
  return (
    <>
      <section style={{
        paddingTop:isMobile? 40:90,
        marginTop:isMobile? 10 : 15,
        background: "#fce3fe",
        textAlign: "center",
        justifyContent: "center",
        paddingBottom:isMobile? 20: 30





      }}>
        <Box sx={{
          bgcolor: "#FFF",
          paddingBottom: 50,
         
          width: isMobile ? "300px" : "400px",

          margin: "auto",
          padding: "20px 6px",
          boxShadow: "10px 5px 10px",
          borderRadius: 10

          // ":hover": {
          //   background: "#fce3fd"
          // }






        }} >
          <form onSubmit={HandleSubmit} method='post'>
            <Typography variant='h3' fontSize={30} fontWeight={"bold"}>Sign Up</Typography>
            <div style={{
              marginTop: 10,
              paddingTop: 15,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 20,

            }}>
              <input
                value={inputforn.FullName}
                name='FullName'
                onChange={submitHandler} style={{
                  padding: "15px 20px",
                  textAlign: "center",
                  width: isMobile ? "250px" : "300px",
                  height: "auto",
                  border: "1px solid red",
                  borderRadius: "30px",
                  outline: "none"


                }} type="text" placeholder='Your Name' />
              <input style={{
                padding: "15px 20px",
                width: isMobile ? "250px" : "300px",
                height: "auto",
                border: "1px solid red",
                borderRadius: "30px",
                outline: "none",


              }} type="mail" onChange={submitHandler} value={inputforn.Email}
                name='Email' placeholder='Your mail' />
              <input style={{
                padding: "15px 20px",
                width: isMobile ? "250px" : "300px",
                height: "auto",
                border: "1px solid red",
                borderRadius: "30px",
                outline: "none"

              }} type="password"
                onChange={submitHandler}
                value={inputforn.Password}
                name="Password" placeholder='password' />
            </div>
            <Button variant='outlined'
              onClick={Submit}

               sx={{
                bgcolor: "red",
                border: "1px solid red",
                borderRadius: "35px",
                 padding: "5px 30px",
                cursor: "pointer",
                fontWeight:isMobile? 500: 600
              }}>Continue</Button>
            <div style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              textAlign: "left",
              padding: 20
            }}>
              <Typography variant='body2' fontWeight={500}>Alread have a account?</Typography>
              <Typography variant='body2' fontWeight={600} color='red'> Login here</Typography>
            </div>


            <div style={{
              display: "flex",
              gap: 10,
              

            }}>
              <input padding={"50px"} type="checkbox" />

              <Typography  fontSize={{xs:10, md:15}} fontWeight={500} color='gray'>By continuing, i agree to he terms of use & privacy.</Typography>
            </div>

            <Button onSubmit={Submit}>Submit</Button>

          </form>

        </Box>
      </section>

    </>
  )
}

export default LoginSignup
