import React, {useEffect , useRef} from 'react'
import {Container} from "reactstrap"
import { NavLink, Link } from 'react-router-dom'
import {FaShoppingBasket} from "react-icons/fa"
import { FaUserAlt } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
import '../../Styles/Header.css'
import {useSelector, useDispatch} from 'react-redux'
import { cartUiActions } from '../../store/shopping-cart/CartUiSlice'


const nav__links = [
  {
    display: "Home",
    path: "/home"
  },
  {
    display: "Foods",
    path: "/foods"
  },
  {
    display: "Cart",
    path: "/cart"
  },
  {
    display: "Contact",
    path: "/contact"
  },
]

export default function Header() {

  const menuRef = useRef(null)
  const headerRef = useRef(null)
  const totalQuantity = useSelector(state=> state.cart.totalQuantity)
  const dispatch = useDispatch()

  const toggleCart =()=>{
    dispatch(cartUiActions.toggleCart())
  }
  

  useEffect(()=>{

   window.addEventListener('scroll', ()=>{
    if(document.body.scrollTop>80 || document.documentElement.scrollTop> 80){
      headerRef.current.classList.add("header__shrink")
    } else{
      headerRef.current.classList.remove("header__shrink")
    }
   })

    return ()=> window.removeEventListener("scroll", ()=>{
      headerRef.current.classList.remove("header__shrink")
    })

  },[])

  const toggleRef = ()=>{
    menuRef.current.classList.toggle("show__menu")
  }
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between"> 
        <div className="logo">
         <h5>Eat n Smile</h5>
        </div>

        <div className="navigation" ref={menuRef}>
          <div className="menu d-flex align-items-center gap-5">
            {nav__links.map((link, index)=>{
              const{display, path} = link;

              return <NavLink key={index} to= {path}
              className = {navClass => navClass.isActive? "active__menu": ""}
              onClick = {toggleRef}
              >{display}</NavLink>
            })}
          </div>
        </div>
        <div className="nav__right d-flex align-items-center gap-4  ">
          <span className="cart__">
            <FaShoppingBasket className='cart__icon' onClick={toggleCart}/>
            <span className="cart__badge">{totalQuantity}</span>
          </span>
          <span className="user">
            <Link to = "/login"> <FaUserAlt className='cart__icon'/></Link>
          </span>
          <span className="mobile__">
            <FaBars className='mobile__menu'
             onClick={toggleRef}
            />
          </span>
        </div>
        </div>
      </Container>
    </header>
  )
}
