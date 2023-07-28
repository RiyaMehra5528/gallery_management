import React from 'react'
import { Navigate, Outlet,useNavigate } from 'react-router-dom'

 function PublicLayout() {
  const navigate=useNavigate()
  const token=localStorage.getItem("token")
 
    if (token) {
        return <Navigate to='/gallery'/>
      }
    
    
    return <Outlet />
}

export default PublicLayout
