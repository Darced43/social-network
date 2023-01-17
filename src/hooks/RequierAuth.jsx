import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'

const RequierAuth = ({children}) => {
    const location = useLocation();
    const {users} = useAuth()
    // если пользователя нет то делаем переадресацию
    if (!users.login) {
        // стейт уточняет откуда мы приходим
         return <Navigate to='/login' state={{from: location}} /> 
    }
    if (!users.pasword) {
        // стейт уточняет откуда мы приходим
         return <Navigate to='/login' state={{from: location}} /> 
    }
     // если пользователь есть, переходим на страницу
        return children
}

export default RequierAuth