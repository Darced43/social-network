import axios from 'axios'
import { useEffect, useState } from 'react'
import Content from '../Content/Content'
import Preloader from '../Preloader/Preloader'

const MainContext = () => {

    const [ allContent, setAllContent ] = useState([])

    const getContent = async() => {
        try{
            await axios.get('https://jsonplaceholder.typicode.com/photos?')
            .then(function(respons){setAllContent(respons.data)})
        }
        catch{
            console.log('error');
        }
    }

    useEffect(() => {getContent()}, [])

    return(
        <div>
            {
                allContent.length == 0?
                    <Preloader/>
                :
                allContent.filter(content => content.id <= 9)
                .map( (content, index) => 
                    <Content content={content} key={index}/>
                )  
            }
        </div>
    )
}

export default MainContext