import React from "react"
import Header from "../../component/Header/Header"
import MainContext from '../../component/MainContext/MainContext'
import Test from "../../component/Test/Test"
import './FrontPage.scss'

const FrontPage = () => {
    return(
        <>
            <Header/>
            <div className="frontPage_content">
                <MainContext/>
                <div><Test/></div>
            </div>
        </>
    )
}

export default FrontPage