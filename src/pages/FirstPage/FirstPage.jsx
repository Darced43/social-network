import { useState, useEffect } from "react"
import axios from "axios"
import './FirstPage.scss'
import { authAccaynt } from "../../hooks/authAccaynt"

const FirstPage = () => {
    const {usersAll} = authAccaynt()
    // const [ users, setUsers ] = useState([])

    // async function ServerUsers (){
    //     try{
    //         const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    //         setUsers(response.data)
    //         console.log(response.data)
    //     }
    //     catch{
    //         console.log('всё плохо')
    //     }
    // }

    // useEffect(() => {ServerUsers()}, [])

    return(
        <div className="FirstPage">  
            приветик!
            {usersAll.map( user => 
                <div key={user.phone} className="FirstPage__log">
                    login:<p>{user.name}</p>
                    password:<p>{user.username}</p>
                </div>
            )}
        </div>
    )
}

export default FirstPage