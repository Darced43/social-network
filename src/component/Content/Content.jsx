import { createPortal } from 'react-dom'
import './Context.scss'

const Content = ({content}) => {
    return (
        <div className="frontPage_context">
            <img src={content.url} alt="фото"/>
            <p>{content.title}</p>
        </div>
    )
}

export default Content