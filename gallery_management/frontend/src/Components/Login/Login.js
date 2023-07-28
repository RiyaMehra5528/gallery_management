import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../../App.css'
export default function Login() {
    const [state,setState]=useState({
        email:"",
        password:""
    })
    const navigate=useNavigate()
  const handleSubmit=async(e)=>
  {
    e.preventDefault()
    const res=await axios.post('http://localhost:7078/login',state)
    if(res.data.success==true)
    {
        localStorage.setItem("token",res.data.token)
        localStorage.setItem("email",res.data.email)
        alert(res.data.message)
        navigate('/gallery')
    }
    else{
        alert(res.data.message)
    }
  }
  const handleChange=(e)=>
  {
    e.preventDefault()
    setState({...state,[e.target.name]:e.target.value})
  }
  return (
    <div id="loginBox">
      
      <form onSubmit={handleSubmit}>
      <h1><center>LOGIN</center></h1>
        <input type="text" placeholder='ENTER EMAIL ADDRESS' name="email" value={state.email} onChange={handleChange}/><br/><br/>
        <input type="text" placeholder='ENTER PASSWORD' name="password" value={state.password} onChange={handleChange}/><br/><br/><br/>
        <button className="loginBtn" type="submit">LOGIN</button>
        &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
        <Link to="/signup"><button className="loginBtn">Sign Up</button></Link>
      </form>
    </div>
  )
}
