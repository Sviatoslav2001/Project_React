import searchCar from "../../../../interfaces/searchCar.dao";
import '../../../../../styles/search.scss'
import { Link } from "react-router-dom";

interface IProps {
    searchCarList: (cars: searchCar) => void;
}



const SearchRenaultKoleos = () => {

        const MercedesC300 = {
            carName: 'Renault',
            carModel: 'Koleos',
            carPrice: 18000,
            carYear: 2019
        }

    return (
        <div>
        <div className="container-search-cars-list">
            <p className="image-car"><img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/2017_Renault_Koleos_%28HZG%29_Zen_wagon_%282018-08-27%29_02.jpg' alt="" /></p>
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



export default SearchRenaultKoleos;