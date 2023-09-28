import { selectUser } from '@/app/redux/slices/authSlice'
import React from 'react'
import { useSelector } from 'react-redux'


const Dashboard = () => {
  const user = useSelector(selectUser)
  return (
   <div className="">
    <h1 className='text-center text-2xl font-bold mb-2' >Hi. {user?.name},  Welcome to your Dashboard</h1>
    <img className='rounded-xl w-full max-auto'
     src="/image/Dashboard.gif" 
     loading="lazy" alt="" />
   </div>
  )
}

export default Dashboard