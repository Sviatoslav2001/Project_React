import searchCar from "../../../../interfaces/searchCar.dao";
import '../../../../../styles/search.scss'
import { Link } from "react-router-dom";

interface IProps {
    searchCarList: (cars: searchCar) => void;
}



const SearchMercedes = () => {


    return (
        <div>
        <div className="container-search-cars-list-buttons">
            <Link className='' to={'/searchmercedescclass'}><button className='search-cars-styles-buttons'>Mercedes C-Class</button></Link>
            <Link className='' to={'/searchmercedesgleclass'}><button className='search-cars-styles-buttons'>Mercedes GLE-Class</button></Link>
            <Link className='' to={'/searchmercedesgclass'}><button className='search-cars-styles-buttons'>Mercedes G-Class</button></Link>
            <Link className='' to={'/searchmercedeseclass'}><button className='search-cars-styles-buttons'>Mercedes E-Class</button></Link>
            <Link className='' to={'/searchmercedesmaybach'}><button className='search-cars-styles-buttons'>Mercedes Maybach</button></Link>
        </div>
        <Link className='' to={'/search'}><button className='search-cars-styles'>Повернутися назад</button></Link>
        </div>
    )
}

export default SearchMercedes;