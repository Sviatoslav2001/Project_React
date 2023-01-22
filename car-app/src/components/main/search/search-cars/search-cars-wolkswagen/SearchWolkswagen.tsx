import searchCar from "../../../../interfaces/searchCar.dao";
import '../../../../../styles/search.scss'
import { Link } from "react-router-dom";

interface IProps {
    searchCarList: (cars: searchCar) => void;
}



const SearchWolkswagen = () => {


    return (
        <div>
        <div className="container-search-cars-list-buttons">
            <Link className='' to={'/searchwolkswagenpassat'}><button className='search-cars-styles-buttons'>Wolkswagen Passat</button></Link>
            <Link className='' to={'/searchwolkswagenjetta'}><button className='search-cars-styles-buttons'>Wolkswagen Jetta</button></Link>
            <Link className='' to={'/searchwolkswagenpolo'}><button className='search-cars-styles-buttons'>Wolkswagen Polo</button></Link>
            <Link className='' to={'/searchwolkswagengolf'}><button className='search-cars-styles-buttons'>Wolkswagen Golf</button></Link>
            <Link className='' to={'/searchwolkswagencc'}><button className='search-cars-styles-buttons'>Wolkswagen CC</button></Link>
        </div>
        <Link className='' to={'/search'}><button className='search-cars-styles'>Повернутися назад</button></Link>
        </div>
    )
}

export default SearchWolkswagen;