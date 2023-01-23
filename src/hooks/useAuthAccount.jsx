import { useState, useEffect } from "react"
import axios from "axios"

// Хуки начинаются с use
export function useAuthAccount(){
    const [ usersAll, setUsersAll ] = useState([]);

    async function fetchUsers (){
        // try catch не нужен, axios не кидается ошибками
        // Вернее кидается, но не как фетч
        // Короче почитай доку)
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        // console.log(Array.isArray(response.data))
        setUsersAll(response.data)
    }
    
    // бля, закинь преттиер и линтер :-)
    useEffect(() => {
        fetchUsers();
    }, []);

    return usersAll;
}