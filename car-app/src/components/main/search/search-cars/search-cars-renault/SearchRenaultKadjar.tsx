import searchCar from "../../../../interfaces/searchCar.dao";
import '../../../../../styles/search.scss'
import { Link } from "react-router-dom";

interface IProps {
    searchCarList: (cars: searchCar) => void;
}



const SearchRenaultKadjar = () => {

        const MercedesC300 = {
            carName: 'Renault',
            carModel: 'Kadjar',
            carPrice: 26000,
            carYear: 2017
        }

    return (
        <div>
        <div className="container-search-cars-list">
            <p className="image-car"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/2016_Renault_Kadjar_Dynamique_NAV_DCi_1.5_Front.jpg/1200px-2016_Renault_Kadjar_Dynamique_NAV_DCi_1.5_Front.jpg' alt="" /></p>
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



export default SearchRenaultKadjar;