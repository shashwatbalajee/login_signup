import { Paper, Grid, TextField, Button } from '@mui/material'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Password = () => {
  const [email,setEmail] = useState("")
  const navigate = useNavigate()
  const handleSearch =(e) =>{
    e.preventDefault()
    console.log({email});
    setEmail("")
  }
  const LoginPage = () => navigate('/')
  return (
    <div>
      <Grid align='center' style={{ padding: '2%' }}>
        <Paper elevation={3} style={{ width: '30%', backgroundColor:'antiquewhite' }}>
          <Grid container spacinmg={2} direction='column'>
            <Grid item>
              <h2 style={{ fontFamily: 'Times New Roman', fontSize: 'large', fontWeight: 'bold', textAlign: 'left', padding: '2%' }}>
                Retrieve Password
              </h2>
              <p style={{ fontFamily: 'serif', fontSize: 'medium', fontWeight: 'normal', padding: '2%', textAlign: 'left' }}>
                Please enter your email address to retrieve your password
              </p>
            </Grid>
            <Grid item>
              <TextField
               variant='outlined'
               name='email'
               type='email'
               label='Email ID'
               style={{width:'95%'}}
               onChange={(e)=>setEmail(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item style={{padding:'2%',textAlign:'left'}}>
              <Button
               variant='contained'
               style={{width:'20%',fontFamily:'serif',fontWeight:'normal',fontSize:'small'}}
               onClick={handleSearch}>Search</Button>
               <Button variant='outlined'
               style={{width:'20%',fontFamily:'serif',fontWeight:'normal',fontSize:'small',marginLeft:'2%'}} onClick={LoginPage}>Cancel</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  )
}

export default Password