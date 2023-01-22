import '../../../styles/header.scss';
import { Link, useLocation } from 'react-router-dom';



const Header  = () => {

    return (
        <div className='header'>
            <h1><Link className='header-logo' to={'/'}>Головна</Link></h1>
            <nav>
                <ul>
                    <li><Link className='header-search-element' to={'/signin'}>Увійти</Link></li>
                    <li><Link className='header-search-element' to={'/signup'}>Зареєструватися</Link></li>
                    <li><Link className='header-search-element' to={'/search'}>Пошук</Link></li>
                </ul>
            </nav>

        </div>
    )
}

export default Header