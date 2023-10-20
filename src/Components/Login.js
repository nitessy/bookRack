import React from 'react';
import {Box, Button, TextField, Typography, } from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {


  

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUserNameTouched, setEnteredUserNameTouched] = useState(false);
  
    const [enteredPassword, setEnteredPassword] = useState('')
    const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);

    const validEmail = new RegExp(
        '^[a-z]+@[a-z0-9]+$'
     );
    const enteredEmailIsValid = validEmail.test(enteredEmail);
const enteredEmailIsInValid = !enteredEmailIsValid && enteredEmailTouched;
// const enteredEmailIsInValid = !enteredEmailIsValid;
const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+:?/]).{8,}$');
const enteredPasswordIsValid = validPassword.test(enteredPassword);


//  const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$');
 
 const enteredPasswordIsInValid = !enteredPasswordIsValid && enteredPasswordTouched;
// const enteredPasswordIsInValid = !enteredPasswordIsValid;

const enteredUserNameIsInvalid = enteredUserName ==='' && enteredUserNameTouched;




const emailHandler = (event) => {
  setEnteredEmail(event.target.value);
}
const passwordHandler = (event) =>{
  setEnteredPassword((event.target.value));
}
const emailBlurHandler = (event) =>{
  setEnteredEmailTouched(true);
}
const passwordBlurHandler = (event) =>{
  setEnteredPasswordTouched(true);
}
const userNameHandler = (event) =>{
  setEnteredUserName(event.target.value);
}
const userNameBlurHandler = (event) =>{
  setEnteredUserNameTouched(true);
}

const navigate = useNavigate();

const submitHandler = (event) =>{
  event.preventDefault();
  
 
if (!enteredEmailIsValid || !enteredPasswordIsValid || enteredUserNameIsInvalid){
  setEnteredEmailTouched(true);
  setEnteredPasswordTouched(true);
  setEnteredUserNameTouched(true);
  return;
}

navigate("/home");

}

var id =  document.getElementsByName("toggle").id;
const [showPass, setShowPass] = useState(false);
const handleShow = () =>{setShowPass(!showPass);
  if(id == "1"){
  document.querySelector('.show').innerHTML = "Show Password";
  document.getElementsByName("toggle").id=0;
}
else{
document.querySelector('.show').innerHTML = "Hide Password";
document.getElementsByName("toggle").id=1;
}
}







 const sxStyle={
  opacity: 0.8,
  fontSize: '1rem',
  backgroundColor: '#b6d0e2',
  display:'flex',
  flexDirection: 'column',
  maxWidth: 340, '@media(max-width:600px)': {maxWidth: 310},
  margin: 'auto',
  padding: 3.5,
  borderRadius: 5,
  position: 'relative',
  boxShadow: '5px 5px 10px #ccc',
  top: '100px', '@media(max-width:600px)' : {top:'150px' , maxWidth:310},
  justifyContent: 'center',
  alignItems: 'center' ,
 };

 const txStyle={

  border: '10px red' ,

 }
  return (
    <div className='background'>
        <form  >
      
            {/* <Box  display='flex' flexDirection={'column'} maxWidth={340} alignItems='center'  justifyContent='center' margin='auto' marginTop={5} padding={2.5} borderRadius={5} boxShadow={'5px 5px 10px #ccc'} sx={{":hover":{boxShadow:'10px 10px 20px #ccc',}, backgroundColor:'#b6d0e2'} }> */}
           
            <Box sx={sxStyle} >
            <div className='curl'></div>
            <div className='fold'></div>
           
                <Typography fontWeight={'540'}  fontFamily={'Montserrat'}
   variant='h4' padding={3} textAlign='center' >BookRack</Typography>
   
                <TextField helperText={enteredUserNameIsInvalid?'Username cannot be empty':''} sx={txStyle} onChange={userNameHandler} onBlur={userNameBlurHandler} value={enteredUserName} error={enteredUserNameIsInvalid} label='Username' size='small' margin='normal' variant='outlined' placeholder='Username'></TextField>
                <TextField helperText={enteredEmailIsInValid?'Enter a valid Email':''}value={enteredEmail} onChange={emailHandler} onBlur={emailBlurHandler}error={enteredEmailIsInValid}  sx={txStyle } label='E-mail' size='small' margin='normal' variant='outlined' placeholder='E-mail'></TextField>
                <TextField helperText={enteredPasswordIsInValid?'Enter a valid Password':''} type={showPass?"text": "password"} value={enteredPassword} onChange={passwordHandler} onBlur={passwordBlurHandler} error={enteredPasswordIsInValid} sx={txStyle} label='Password' size='small' margin='normal' variant='outlined' placeholder='Password' ></TextField>
                <p  name="toggle" onClick={handleShow} className='show' id='1'> Show password </p>
                <Button onClick={submitHandler} endIcon ={<LoginOutlinedIcon/>} variant='contained' color='primary' sx={{
                    marginTop:3, borderRadius:3
                }}> Login</Button>
            </Box>
          
        </form>
    </div>
  )
}

export default Login;