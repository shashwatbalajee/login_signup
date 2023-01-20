import { Button, Grid,Paper, TextField } from '@mui/material'
import React,{useState} from 'react'
import { json, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [username,setUserName] = useState("")
  const [useremail,setUserEmail] = useState("")
  const [password,setUserPassword] = useState("")
  const [cnfpwd, setCnfPwd] = useState("")
  const [mobile, setMobile] = useState("")
  const navigate = useNavigate();

  const handleRegister =  (e) => {
    e.preventDefault()
    console.log({username,useremail,password,cnfpwd,mobile})
    setUserName("")
    setUserEmail("")
    setUserPassword("")
    setCnfPwd("")
    setMobile("")
    // signUpDetails()
    alert('Account has been registered')
  }

  // const signUpDetails = ()=>{
  //   fetch('http://localhost:3000/signup',{
  //     method:'POST',
  //     body:JSON.stringify({
  //       useremail:useremail,
  //       username:username,
  //       password:password,
  //       cnfpassword:password,
  //       mobile:mobile
  //     }),
  //     headers:{'Content-type':'application/json'}
  //   })
    
  // }  

  
  const LoginPage = () => navigate('/')
  return (
    <div>
      <Grid align='center' style={{padding:'2%'}}>
        <Paper elevation={3} style={{width:'32%',backgroundColor:'antiquewhite'}}>
          <Grid container spacing={2} direction='column'>
            <Grid item>
              <h2 style={{fontFamily:'Times New Roman',fontSize:'x-large',fontWeight:'bold'}}>
                SignUp
              </h2>
            </Grid>
            <Grid item>
              <TextField
               variant='outlined'
               name='username'
               label='UserName'
               style={{width:'44%'}}
               onChange={(e)=>setUserName(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item>
              <TextField
               variant='outlined'
               name='useremail'
               type='email'
               label='userEmail'
               style={{width:'44%'}}
               onChange={(e)=>setUserEmail(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item>
              <TextField
               variant='outlined'
               name='userpassword'
               type='password'
               label='userPassword'
               style={{width:'44%'}}
               onChange={(e)=>setUserPassword(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item>
              <TextField
               variant='outlined'
               name='cnfpwd'
               type='password'
               label='cnfPwd'
               style={{width:'44%'}}
               onChange={(e)=>setCnfPwd(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item>
              <TextField
               variant='outlined'
               name='mobile'
               type='number'
               label='Mobile'
               style={{width:'44%'}}
               onChange={(e)=>setMobile(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item style={{padding:'2%'}}>
              <Button
               variant='contained'
               style={{width:'46%',
               fontFamily:'serif',
               fontWeight:'bold',
               fontSize:'large'
              }}
              onClick={handleRegister}
              >Register</Button>
            </Grid>
            <Grid item style={{paddingTop:'-2%'}}>
              <h5 style={{fontFamily:'sans',fontSize:'small',fontWeight:'normal'}}>Already have an account? 
              <Button
               variant='text' onClick={LoginPage}>Login</Button>
              </h5>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  )
}

export default SignUp