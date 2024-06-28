import React from 'react';
import {Logo} from '../assets';
import { Footer } from '../containers/Footer';
import { AuthButtonWithProvider } from '../components';
import {FaGoogle, FaGithub} from "react-icons/fa6"

export const Authentication = () => {
  // style1='w-full flex flex-1 flex-col items-center justify-center gap-6 bg-red'
  return (
    <div className='auth-section'>
      {/* Top section */}
      <img src={Logo} className='w-12 h-auto object-contain' alt=""/>

      {/* main section */}
      <div className='w-full flex flex-1 flex-col items-center justify-center gap-6'>
          <h1 className='text-blue-700 text-3xl lg-text-4xl'>Welcome to InstiResumeBuilder</h1>
          <p className='text-2xl text-gray-600'>Create resume in the insti way</p>
          <h2 className='text-2xl text-gray-600'>Authenticate</h2>
          <div className='w-full lg:w-96 rounded-md p-2 flex flex-col items-center justify start'>
            <AuthButtonWithProvider Icon={FaGoogle} label={'Signin with Google'} provider={"GoogleAuthProvider"}/>
            <br/>
            <AuthButtonWithProvider Icon={FaGithub} label={'Signin with GitHub'} provider={"GitHubAuthProvider"}/>
          </div>
      </div>
      {/* Footer Section */}
      <Footer/>
      </div>
  )
}