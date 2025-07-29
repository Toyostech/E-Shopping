import React, {
  useEffect,
  useState,
} from 'react';

import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const LoginSignup = () => {
  const initialValue = { FullName: "", Email: "", Password: "" }

  const [inputform, setInputForm] = useState(initialValue)
  const [formErrors, setformErrors] = useState({})
  const [isSubmit, setisSubmit] = useState(false)


  const handleChange = (e) => {

    const { name, value } = e.target
    setInputForm({ ...inputform, [name]: value })
    console.log(inputform)

  }
  // creacting Handle submit 
  const handleSubit = (e) => {
    e.preventDefault();
    setformErrors(validate(inputform))
    setisSubmit(true)



  }
  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(inputform)
      setInputForm(initialValue)
      alert("You Have successfully Submitted")


    }

  }, [formErrors, isSubmit,]);




  // validate
  const validate = (data) => {
    const errors = {}
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


    if (!data.FullName.trim()) {
      errors.FullName = " fullname is required"

    }
    if (!data.Email) {
      errors.Email = " Email is required"

    } else if (!regex.test(data.Email)) {
      errors.Email = "this is not valide mail"

    }
    if (!data.Password) {
      errors.Password = " Password is required"

    } else if (data.Password.length < 4) {
      errors.Password = "This password is too short"

    }
    return errors


  }





  // const clearData = () => {
  //   const errors = {}
  //   if (data) {
      
  //   }
  //   // if (Object.keys(errorForm).length === 0 && isSubmit) {
  //   //   setinputform(initialValue)
  //   //   return errors
      
      


  //   // }
  //   console.log(inputforn)




  // }


  // function validateEmail(Email) {
  //   const re = ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
  //   return re.test(Email)

  // }








  const isMobile = useMediaQuery(useTheme().breakpoints.down("md"))
  return (
    <>
      <section style={{
        paddingTop: isMobile ? 40 : 90,
        marginTop: isMobile ? 10 : 15,
        background: "#fce3fe",
        textAlign: "center",
        justifyContent: "center",
        paddingBottom: isMobile ? 20 : 30





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
          {Object.keys(formErrors).length === 0 && isSubmit ? (<p style={{
            color: "green"
          }}>Sign in Successful</p>) : (
            <pre>{JSON.stringify(inputform, undefined, 2)}</pre>
          )}

          <form onSubmit={handleSubit}>
            <Typography variant='h3' fontSize={30} fontWeight={"bold"}>Login </Typography>
            <div style={{
              marginTop: 10,
              paddingTop: 15,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 20,

            }}>
              <div>
                <input
                  value={inputform.FullName}
                  name='FullName'
                  onChange={handleChange}
                  style={{
                    padding: "15px 20px",
                    textAlign: "center",
                    width: isMobile ? "250px" : "300px",
                    height: "auto",
                    border: "1px solid red",
                    borderRadius: "30px",
                    outline: "none"


                  }} type="text" placeholder='Your Name' />
                <p style={{
                  color: "red"
                }}>{formErrors.FullName}</p>
              </div>

              <div>


                <input style={{
                  padding: "15px 20px",
                  width: isMobile ? "250px" : "300px",
                  height: "auto",
                  border: "1px solid red",
                  borderRadius: "30px",
                  outline: "none",


                }}
                 type="email" onChange={handleChange} value={inputform.Email}
                  name='Email' placeholder='Your mail' />

              </div>

              <p style={{
                color: "red"
              }}>{formErrors.Email}</p>
              <input style={{
                padding: "15px 20px",
                width: isMobile ? "250px" : "300px",
                height: "auto",
                border: "1px solid red",
                borderRadius: "30px",
                outline: "none"

              }} type="password"
                onChange={handleChange}
                value={inputform.Password}
                name="Password" placeholder='password' />


              <p style={{
                color: "red"
              }}>{formErrors.Password}</p>
            </div>
            {/* <Button variant='outlined'
              onClick={Submit}

               sx={{
                bgcolor: "red",
                border: "1px solid red",
                borderRadius: "35px",
                 padding: "5px 30px",
                cursor: "pointer",
                fontWeight:isMobile? 500: 600
              }}>Continue</Button> */}
            <div style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              textAlign: "left",
              padding: 20
            }}>
              <Typography variant='body2' fontWeight={500}>Alread have a account?</Typography>
              <Typography variant='body2' fontWeight={600} color='red'> Sign here</Typography>
            </div>


            <div style={{
              display: "flex",
              gap: 10,


            }}>
              <input padding={"50px"} type="checkbox" />

              <Typography fontSize={{ xs: 10, md: 15 }} fontWeight={500} color='gray'>By continuing, i agree to he terms of use & privacy.</Typography>
            </div>

            <Button variant='contained' type='submit'>Submit</Button>

          </form>

        </Box>
      </section>

    </>
  )
}

export default LoginSignup
