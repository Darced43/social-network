import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'
import Box from '@mui/material/Box';
import './LoginPage.scss'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const LoginPage = () => {


    const navigate = useNavigate()
    const location = useLocation()
    const {signin} = useAuth()

    // здесь получаем данные информацию, откуда мы пришли, если нет, дефолтное условие - главная страница
    const fromPage = location.state?.from?.pathname || '/'

    
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const user = {
            login : form.login.value,
            pasword : form.pasword.value

        }
        signin(user, () => navigate(fromPage, {replace: true}))
    }

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return(
            <div className='LoginPage__block'>
                <Box
                    onSubmit={handleSubmit}
                    className='form__login'
                    component="form"
                    sx={{}}
                    noValidate
                    autoComplete="off"
                >
                    <TextField 
                        type="text"
                        id="loginInput"
                        label="Login" 
                        variant="outlined" 
                        name='login' 
                    />
                    {/* <TextField type="text" id="paswordInput" label="Password" variant="outlined" name='pasword' /> */}
                    <FormControl sx={{ mt: 2.5, mb: 2.5}} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            name='pasword'
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                        <Button type="submit" variant="contained">войти</Button>
                </Box>
            </div>
    )
}

export default LoginPage