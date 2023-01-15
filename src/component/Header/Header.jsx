import { useContext, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import './Header.scss'
import axios from 'axios';
import ModalPortal from '../ModalPortal/ModalPortal';

const Header = () => {
    const [ users, setUsers ] = useState([])
    const [ showModal, setShowModal] = useState(false)

    async function ServerUsers (){
        const respons = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(respons.data)
    }

    useEffect(() => {ServerUsers()}, [])

   return(
        <header>
            <div>
                <Button variant="text">Чат</Button>
            </div>
            <div>
                <Button variant="text" onClick={() => setShowModal(true)}>Войти</Button>
                {showModal?
                    <ModalPortal setShowModal={setShowModal}/>
                    :
                    null
                }
            </div>
        </header>
   ) 
}

export default Header