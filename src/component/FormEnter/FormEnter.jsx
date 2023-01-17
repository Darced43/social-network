import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import './FormEnter.scss'

const FormEnter = ({setShowModal}) => {
    return(
        <div className='formEnter'>
            <div className='formEnter__button'>
                <Button variant="contained" onClick={() => setShowModal(false)}>закрыть</Button>
            </div>
            <form action="">
                <input className='formEnter__login' type="text" />
                <input className='formEnter__password' type="text" />
                <Button variant="contained" type='submit'>войти</Button>
            </form>
        </div>
    )
}

export default FormEnter