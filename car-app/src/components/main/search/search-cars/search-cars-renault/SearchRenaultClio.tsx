import searchCar from "../../../../interfaces/searchCar.dao";
import '../../../../../styles/search.scss'
import { Link } from "react-router-dom";

interface IProps {
    searchCarList: (cars: searchCar) => void;
}



const SearchRenaultClio = () => {

        const MercedesC300 = {
            carName: 'Renault',
            carModel: 'Clio',
            carPrice: 12000,
            carYear: 2014
        }

    return (
        <div>
        <div className="container-search-cars-list">
            <p className="image-car"><img src='https://upload.wikimedia.org/wikipedia/commons/f/f0/2019_Renault_Clio_Iconic_TCE_1.0_Front.jpg' alt="" /></p>
            <p>{MercedesC300.carName}</p>
            <p>{MercedesC300.carModel}</p>
            <p>{MercedesC300.carPrice} $</p>
            <p>{MercedesC300.carYear}</p>
            {/* <button onClick={SearchCarName}>Click</button> */}
        </div>
        <Link className='' to={'/searchrenault'}><button className='search-cars-styles'>Повернутися назад</button></Link>
        </div>
    )
}



export default SearchRenaultClio;