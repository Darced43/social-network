import { useState, useEffect } from "react"
import axios from "axios"

export function authAccaynt(){
    const [ usersAll, setUsers ] = useState([])

    async function ServerUsers (){
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
            console.log(response.data)
        }
        catch{
            console.log('всё плохо')
        }
    }
    
    useEffect(() => {ServerUsers()}, [])

    return{ usersAll }
}