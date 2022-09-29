import React from 'react'
import {Routes, Route , Navigate} from "react-router-dom"
import Home from "../pages/Home"
import AllFoods from "../pages/AllFoods"
import Cart from "../pages/Cart"
import Checkout from "../pages/Checkout"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import Register from "../pages/Register"
import FoodDetails from "../pages/FoodDetails"

export default function Routers() {
  return (
    <Routes>
        <Route path='/' element = {<Navigate to= "/home"/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/foods' element = {<AllFoods/>}/>
        <Route path='/checkout' element = {<Checkout/>}/>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/foods/:id' element = {<FoodDetails/>}/>
    </Routes>
  )
}
