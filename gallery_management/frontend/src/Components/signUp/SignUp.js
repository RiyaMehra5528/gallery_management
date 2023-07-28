import React, { useState } from 'react'
import axios from 'axios'
import '../../App.css'
import { Navigate,useNavigate } from 'react-router-dom'
export default function SignUp() {
  const navigate=useNavigate()
  const [state,setState]=useState({
    uname:"",
    email:"",
    password:""
  })
  const handleSubmit=async(e)=>
  {
    e.preventDefault()
    const res=await axios.post('http://localhost:7078/create',state)
    if(res.data.success==true)
    {
    alert(res.data.message)
    navigate('/')
  }
  else{
    alert("USER NOT CREATED")
  }
}
  const handleChange=(e)=>
  {
    e.preventDefault()
    setState({...state,[e.target.name]:e.target.value})
  }
  return (
    <div id="signUpBox">
      <form onSubmit={handleSubmit}>
        <h1><center>SIGN UP</center></h1>
        <input type="text" placeholder='ENTER NAME' name="uname" value={state.uname} onChange={handleChange}/><br/><br/>
        <input type="text" placeholder='ENTER EMAIL' name="email" value={state.email} onChange={handleChange}/><br/><br/>
        <input type="text" placeholder='ENTER PASSWORD' name="password" value={state.password} onChange={handleChange}/><br/><br/><br/>
        <button type="submit" id="signUpBtn">SIGN UP</button>
      </form>
    </div>
  )
}
