// import SearchCarList from "./search-cars/SearchCarsList";



// const SeacrhCar = () => {
//     return(
//         <div>
//             <button onClick={SearchCarList}>Click</button>
//             <SearchCarList />
//         </div>
//     )
// }


// export default SeacrhCar;

import '../../../styles/search.scss';
import { Link, useLocation } from 'react-router-dom';



const SeacrhCar  = () => {

    return (
        <div className='header'>
            {/* <h1><Link className='header-logo' to={'/'}>Головна</Link></h1> */}
            <nav>
                <ul>
                    <li><Link className='header-search-element' to={'/searchmercedes'}>Mercedes</Link></li>
                    <li><Link className='header-search-element' to={'/searchrenault'}>Renault</Link></li>
                    <li><Link className='header-search-element' to={'/searchhonda'}>Honda</Link></li>
                    <li><Link className='header-search-element' to={'/searchnissan'}>Nissan</Link></li>
                    <li><Link className='header-search-element' to={'/searchwolkswagen'}>Wolkswagen</Link></li>
                </ul>
            </nav>

        </div>
    )
}

export default SeacrhCar