import axios from 'axios'
import React, { useState,useEffect } from 'react'

export default function Gallery() {
  const email=localStorage.getItem("email")
  const [image,setImage]=useState(null)
  const [pictures,setPictures]=useState([])
  const handleSubmit=async(e)=>
  {
    e.preventDefault()
    const formData = new FormData();
    formData.append("email", email);
    formData.append("file", image)
     const res= await axios.post("http://localhost:7078/upload-pictures",formData)
     if(res.data.success)
     {
      alert(res.data.msg)
     }
     getPicture()
  }
  const handleChange=(e)=>
  {
    console.log(e.target.files)
    setImage(e.target.files[0])
  }
  useEffect(() => {
  getPicture()
  }, [])
  
  const getPicture=async()=>{
    const res= await axios.get(`http://localhost:7078/getPicture?email=${email}`)
    setPictures(res.data.pictures)
    console.log("pictures=",res.data.pictures)
  }
  
  return (
    <div>
      <h1>UPLOAD PICTURES</h1>
      <form onSubmit={handleSubmit}>

      <input type="file" name="file" onChange={handleChange}/>
      <button type='submit'>UPLOAD</button>
      </form>

      {pictures.length>0&&pictures.map((img)=>
      {

        return(

          <img src={img.ImgUrl} style={{ height:"20%",width:"30%"}}/>
        )

      })}
    </div>
  )
  }