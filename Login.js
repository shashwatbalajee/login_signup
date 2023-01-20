import React, { useState } from 'react'
import { Button, Grid, Paper, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault()
    console.log({ email, password });
    setEmail("")
    setPassword("")
    loginDetails()
  }

  const loginDetails=()=>{
   fetch('http://localhost:3000/login',{
    email:email,
    password:password
   }).then(result=>{
    console.log(result.data)
    alert('success')
   }).catch(error=>{
      alert('service error')
      console.log(error)
   })
  }
  const SignUpPage = () => navigate("/SignUp")
  const PasswordPage = () => navigate("/Password")
  return (
    <div>
      <Grid align='center' style={{ padding: '2%' }}>
        <Paper elevation={3} style={{ width: '30%', backgroundColor: 'floralwhite' }}>
          <Grid container spacing={2} direction='column'>
            <Grid item>
              <h2 style={{ fontFamily: 'Times New Roman', fontWeight: 'bold', fontSize: 'x-large' }}>Login</h2>
            </Grid>
            <Grid item>
              <TextField
                variant='outlined'
                name='useremail'
                type='email'
                label='Email ID'
                style={{
                  width: '50%'
                }}
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item>
              <TextField
                variant='outlined'
                name='password'
                type='password'
                label='Password'
                style={{ width: '50%' }}
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item>
              <Button
                variant='contained'
                style={{
                  width: '45%',
                  fontFamily: 'serif',
                  fontWeight: 'bold',
                  fontSize: 'large'
                }}
                onClick={handleLogin}
              >Login</Button>
            </Grid>
            <Grid item>
              <Button
                variant='contained'
                style={{
                  backgroundColor: 'blue',
                  width: '48%',
                  fontFamily: 'serif',
                  fontsize: 'large',
                  fontWeight: 'bold'
                }}
                onClick={SignUpPage}
              >SignUp</Button>
            </Grid>

            <Grid item>
              <Button
                href='text-button'
                style={{
                  backgroundColor: 'darkblue',
                  width: '50%',
                  fontFamily: 'serif',
                  fontSize: 'large',
                  fontWeight: 'bold'
                }}
                onClick={PasswordPage}
              >Forgot Password</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  )
}

export default Login