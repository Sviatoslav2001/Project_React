import searchCar from "../../../../interfaces/searchCar.dao";
import '../../../../../styles/search.scss'
import { Link } from "react-router-dom";

interface IProps {
    searchCarList: (cars: searchCar) => void;
}



const SearchNissan = () => {


    return (
        <div>
        <div className="container-search-cars-list-buttons">
            <Link className='' to={'/searchnissanrogue'}><button className='search-cars-styles-buttons'>Nissan Rogue</button></Link>
            <Link className='' to={'/searchnissanquashqai'}><button className='search-cars-styles-buttons'>Nissan Quashqai</button></Link>
            <Link className='' to={'/searchnissanjuke'}><button className='search-cars-styles-buttons'>Nissan Juke</button></Link>
            <Link className='' to={'/searchnissanleaf'}><button className='search-cars-styles-buttons'>Nissan Leaf</button></Link>
            <Link className='' to={'/searchnissannavara'}><button className='search-cars-styles-buttons'>Nissan Navara</button></Link>
        </div>
        <Link className='' to={'/search'}><button className='search-cars-styles'>Повернутися назад</button></Link>
        </div>
    )
}

export default SearchNissan;