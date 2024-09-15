import React from 'react'
import { Outlet } from 'react-router-dom'
import '../styles/login.css'
import logo from '../assets/img/logoUniMeals.png'


export const Login = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <img src={logo} alt="Logo" className="mx-auto mt-4 w-48 lg:w-64" />
      <div className="flex-grow flex justify-center">
        <div className="w-full sm:w-1/2 bg-secondary p-6 sm:p-8 lg:p-12 rounded-t-lg flex align-middle justify-center ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};







