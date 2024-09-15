import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../layouts/Login'
import { FormLogin } from '../pages/FormLogin';
import { FormRegister } from '../pages/FormRegister';
import { NotFound } from '../pages/NotFound';
import { Main } from '../layouts/Main';
import { ListProducts } from '../pages/ListProducts';
import { Profile } from '../layouts/Profile';
import OwnProfile from '../pages/Profile/OwnProfile';
import ExternalProfile from '../pages/Profile/ExternalProfile';
import EditForm from '../pages/Profile/EditForm';
import ChatInit from '../pages/Chat/ChatInit';
import ChatRoom from '../pages/Chat/ChatRoom';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />}>
        <Route path="login" element={<FormLogin />} />
        <Route path="register" element={<FormRegister />} />
      </Route>
      <Route path="/inicio" element={<Main />}>
        <Route index element={<ListProducts />} />
      </Route>
      <Route path="/profile/" element={<Profile />}>
        <Route path='OwnProfile' element={<OwnProfile />} />
        <Route path='ExternalProfile' element={<ExternalProfile />} />
        <Route path='EditProfile' element={<EditForm />} />
      </Route>
      <Route path="register" element={<FormRegister />} />
      <Route path="chat" element={<ChatInit />}/>
      <Route path='room' element={<ChatRoom />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}