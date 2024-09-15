import React from 'react'

import { Menubar } from 'primereact/menubar';
import TopNavbar from '../components/TopNavBar';
import logo from '../assets/img/logoUniEatsNoLetras.png'
import { Outlet } from 'react-router-dom';
import BottomNavbar from '../components/BottomNavBar';
import { SearchBar } from '../components/SearchBar';


export const Main = () => {

    return (
        <>
            <TopNavbar logo={logo}>
                <SearchBar></SearchBar>
            </TopNavbar>
            <Outlet></Outlet>
            <BottomNavbar></BottomNavbar>
        </>
    )
}
