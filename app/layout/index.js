import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../utils/firebase'
import { removeUser, updateUser } from '../redux/slices/authSlice'
import { selectItems, updateBasket } from '../redux/slices/basketSlice'

const Layout = ({ children }) => {
 const dispatch = useDispatch()
 const cartItems = useSelector(selectItems)

 useEffect(() => {
  const unsubscribe =auth.onAuthStateChanged(async(user) =>{
    if (user) {

      dispatch(
        updateUser({
          email: user.email,
          name: user.displayName, 
          image: user.photoURL,
        })
      )
    }else {
      dispatch(
        removeUser()
      )
    }
  })

  const local_item = localStorage.getItem('@CART_ITEMS')
  ? JSON.parse(localStorage.getItem('@CART_ITEMS'))
  : []

  dispatch(updateBasket(local_item))

  return unsubscribe
 },[])


 useEffect(() => {
  if(!cartItems.length) return;

  const items = JSON.stringify(cartItems)
  localStorage.setItem("@CART_ITEMS", items)
 },[cartItems])


  return (
    <>
    
    <Header/>
    <main>
    {children}
    </main>
    <Footer/>
    
    </>
  )
}

export default Layout