import React from 'react'
import { Navigate } from 'react-router-dom'
import ProductDetail from '../page/ProductDetail'
import Login from '../page/Login'
import { useSelector } from 'react-redux'
function PrivateRoute() {
  const authenticate = useSelector(state=>state.auth.authenticate)
  return authenticate === true ? <ProductDetail/> : <Navigate to="/login"/>
}

export default PrivateRoute
