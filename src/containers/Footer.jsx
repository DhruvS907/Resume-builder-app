import React from 'react'
import { Logo } from '../assets'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <div className='w-full flex items-center justify-between border-t border-red-200'>
      <div className='flex items-center justify-center gap-3 py-3'>
        <img className='w-8 h-auto object-contain' src={Logo} alt='logo img'/>
        <p className='flex-col justify-center px-2'>InstiResumeBuilder</p>
      </div>
      <div className='flex items-center justify-center gap-6'>
        <Link to={"/"} className="text-blue-700 text-sm">Home</Link>
        <Link to={"/Contact"} className="text-blue-700 text-sm">Contact</Link>
        <Link to={"/Privacy Policy"} className="text-blue-700 text-sm whitespace-nowrap">Privacy Policy</Link>
      </div>
    </div>
  )
}
