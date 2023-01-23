import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'
import { useAuthAccount } from './useAuthAccount';
import { useState, useEffect } from "react"
import axios from "axios"
import Network from '../pages/Network/Network';

const RequierAuth = ({children}) => {
    const usersAll = useAuthAccount();
    const location = useLocation()
    const {users} = useAuth()
    // return (
    //     <>
    //     <p>{(JSON.stringify(usersAll))}</p>
    //     </>
    // )
    const allAcc = [
     { login: 'Leanne Graham',
          password:'Bret'},
     { login: 'Howell',
          password:'Antonette'},
     { login: 'Clementine Bauch',
          password:'Samantha'},
     { login: 'Patricia Lebsack',
          password:'Karianne'},
     { login: 'Chelsey Dietrich',
          password:'Kamren'},
     { login: 'Mrs. Dennis Schulist',
          password:'Leopoldo_Corkery'},
     { login: 'Kurtis Weissnat',
          password:'Elwyn.Skiles'},
     { login: 'Nicholas Runolfsdottir V',
          password:'Maxime_Nienow'},
     { login: 'Glenna Reichert',
          password:'Delphine'},
     { login: 'Clementina DuBuque',
          password:'Moriah.Stanton'},
    ]

     const loginUser = allAcc.find( item => item.login == users.login)

    if (users.login !== loginUser?.login) {
         return <Navigate to='/login' state={{from: location}} /> 
         
    }
    if (users.pasword !== loginUser?.password) {
         return <Navigate to='/login' state={{from: location}} /> 
    }else {
            return children
        }
}

export default RequierAuth