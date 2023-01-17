import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../../component/Header/Header"
import './Layout.scss'

const Layout = () => {
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default Layout