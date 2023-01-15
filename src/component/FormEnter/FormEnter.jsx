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
                <TextField className='formEnter__login' id="login" label="Логин" variant="outlined" />
                <TextField className='formEnter__pasword' id="pasword" label="Пароль" variant="outlined" />
                <Button variant="contained" type='submit'>войти</Button>
            </form>
        </div>
    )
}

export default FormEnter