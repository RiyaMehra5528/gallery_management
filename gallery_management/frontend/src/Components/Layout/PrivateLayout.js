import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

function PrivateLayout() {
 
  const token=localStorage.getItem("token")
  if (token) {
    return <Outlet />
}

return <Navigate to='/'/>

}

export default PrivateLayout;