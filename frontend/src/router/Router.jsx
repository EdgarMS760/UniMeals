import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../layouts/Login'
import { FormLogin } from '../pages/FormLogin';
import { FormRegister } from '../pages/FormRegister';
import { NotFound } from '../pages/NotFound';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />}>
        <Route path="login" element={<FormLogin />} />
        <Route path="register" element={<FormRegister />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}