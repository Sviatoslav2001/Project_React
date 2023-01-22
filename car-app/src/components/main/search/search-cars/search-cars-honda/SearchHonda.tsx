import searchCar from "../../../../interfaces/searchCar.dao";
import '../../../../../styles/search.scss'
import { Link } from "react-router-dom";

interface IProps {
    searchCarList: (cars: searchCar) => void;
}



const SearchHonda = () => {


    return (
        <div>
        <div className="container-search-cars-list-buttons">
            <Link className='' to={'/searchhondaaccord'}><button className='search-cars-styles-buttons'>Honda Accord</button></Link>
            <Link className='' to={'/searchhondacivic'}><button className='search-cars-styles-buttons'>Honda Civic</button></Link>
            <Link className='' to={'/searchhondapilot'}><button className='search-cars-styles-buttons'>Honda Pilot</button></Link>
            <Link className='' to={'/searchhondacrv'}><button className='search-cars-styles-buttons'>Honda CRV</button></Link>
            <Link className='' to={'/searchhondahrv'}><button className='search-cars-styles-buttons'>Honda HRV</button></Link>
        </div>
        <Link className='' to={'/search'}><button className='search-cars-styles'>Повернутися назад</button></Link>
        </div>
    )
}

export default SearchHonda;