import searchCar from "../../../../interfaces/searchCar.dao";
import '../../../../../styles/search.scss'
import { Link } from "react-router-dom";

interface IProps {
    searchCarList: (cars: searchCar) => void;
}



const SearchRenaultMegane = () => {

        const MercedesC300 = {
            carName: 'Renault',
            carModel: 'Megane',
            carPrice: 14000,
            carYear: 2018
        }

    return (
        <div>
        <div className="container-search-cars-list">
            <p className="image-car"><img src='https://www.autocentre.ua/wp-content/uploads/2020/02/2020-renault-megane-facelift-45-871x572-c-default.jpg' alt="" /></p>
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



export default SearchRenaultMegane;