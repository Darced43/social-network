import './Header.scss'
import { Link } from 'react-router-dom';

const Header = () => {

   return(
        <header>
                <Link to="/homePage">Чат</Link>
                <Link to='/'>Список аккаунтов</Link>
                <Link to='/network'>Войти</Link>
        </header>
   ) 
}

export default Header