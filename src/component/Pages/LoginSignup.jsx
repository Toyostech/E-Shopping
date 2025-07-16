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
        paddingTop:isMobile? 40: 50,
        marginTop: isMobile? 10:15,
        background: "#fce3fe",
        textAlign: "center",
        justifyContent: "center",

      }}>
        <Box sx={{
          bgcolor: "#FFF",
          padding: 5,
    

          margin: "auto",
          padding: "40px 60px",
          boxShadow: "10px 5px 10px",

          ":hover": {
            background: "#fce3fd"
          }






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
                  padding: "15px 100px",
                  textAlign: "center",
                  height: "auto",
                  border: "1px solid red",
                  borderRadius: "30px",
                  outline: "none"
                  


                }} type="text" placeholder='Your Name' />
              <input style={{
                padding: "15px 100px",

                height: "auto",
                border: "1px solid red",
                borderRadius: "30px",
                outline: "none",


              }} type="mail" onChange={submitHandler} value={inputforn.Email}
                name='Email' placeholder='Your mail' />
              <input style={{
                padding: "15px 100px",

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

              fullWidth sx={{
                bgcolor: "red",
                border: "1px solid red",
                borderRadius: "35px",
                marginTop: 2,
                padding: "15px 100px",
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

              <Typography variant='body2' fontWeight={500} color='gray'>By continuing, i agree to he terms of use & privacy.</Typography>
            </div>

            <Button onSubmit={Submit}>Submit</Button>

          </form>

        </Box>
      </section>

    </>
  )
}

export default LoginSignup
