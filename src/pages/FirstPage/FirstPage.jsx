import { useState, useEffect } from "react"
import axios from "axios"
import './FirstPage.scss'
import { useAuthAccount } from "../../hooks/useAuthAccount"
import Container from '@mui/material/Container';

const FirstPage = () => {
    const usersAll = useAuthAccount()

    return(
        <Container maxWidth="xl" sx={{mt:1}}>
            <div className="FirstPage">  
                {usersAll.map( user => 
                    <div key={user.phone} className="FirstPage__log">
                        login:<p>{user.name}</p>
                        password:<p>{user.username}</p>
                    </div>
                )}
            </div>
        </Container>
    )
}

export default FirstPage