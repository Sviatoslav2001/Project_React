import searchCar from "../../../../interfaces/searchCar.dao";
import '../../../../../styles/search.scss'
import { Link } from "react-router-dom";

interface IProps {
    searchCarList: (cars: searchCar) => void;
}



const SearchRenault = () => {


    return (
        <div>
        <div className="container-search-cars-list-buttons">
            <Link className='' to={'/searchrenaultkoleos'}><button className='search-cars-styles-buttons'>Renault Coleos</button></Link>
            <Link className='' to={'/searchrenaultduster'}><button className='search-cars-styles-buttons'>Renault Duster</button></Link>
            <Link className='' to={'/searchrenaultkadjar'}><button className='search-cars-styles-buttons'>Renault Kadjar</button></Link>
            <Link className='' to={'/searchrenaultclio'}><button className='search-cars-styles-buttons'>Renault Clio</button></Link>
            <Link className='' to={'/searchrenaultmegane'}><button className='search-cars-styles-buttons'>Renault Megane</button></Link>
        </div>
        <Link className='' to={'/search'}><button className='search-cars-styles'>Повернутися назад</button></Link>
        </div>
    )
}

export default SearchRenault;