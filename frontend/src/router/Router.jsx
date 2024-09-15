import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../layouts/Login'
import { FormLogin } from '../pages/FormLogin';
import { FormRegister } from '../pages/FormRegister';
import { NotFound } from '../pages/NotFound';
import { Main } from '../layouts/Main';
import { ListProducts } from '../pages/ListProducts';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />}>
        <Route path="login" element={<FormLogin />} />
        <Route path="register" element={<FormRegister />} />
      </Route>
      <Route path="/inicio" element={<Main />}>
        <Route index element={<ListProducts />} /> 
        {/*<Route path="profile" element={<Profile />} />  */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}