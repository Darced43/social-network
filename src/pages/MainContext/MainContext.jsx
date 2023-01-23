import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Content from '../../component/Content/Content'
import Preloader from '../../component/Preloader/Preloader'
import Container from '@mui/material/Container';
import './MainContext.scss'

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
        <Container maxWidth="xl" sx={{mt:1}}>
            <div className='mainContext'>
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
        </Container>
    )
}

export default MainContext