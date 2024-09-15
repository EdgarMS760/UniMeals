import React from 'react'

import { Menubar } from 'primereact/menubar';
import TopNavbar from '../components/TopNavBar';
import logo from '../assets/img/logoUniEatsNoLetras.png'
import { Outlet } from 'react-router-dom';
import BottomNavbar from '../components/BottomNavBar';


export const Profile = () => {

    return (
        <>
            <TopNavbar logo={logo}>
                <h1 className="text-xl font-semibold">Perfil</h1>
            </TopNavbar>
            <Outlet></Outlet>
            <BottomNavbar></BottomNavbar>
        </>
    )
}
