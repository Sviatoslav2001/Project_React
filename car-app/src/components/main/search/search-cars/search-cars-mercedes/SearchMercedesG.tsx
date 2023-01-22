import searchCar from "../../../../interfaces/searchCar.dao";
import '../../../../../styles/search.scss'
import { Link } from "react-router-dom";

interface IProps {
    searchCarList: (cars: searchCar) => void;
}



const SearchMercedesC300 = () => {

        const MercedesC300 = {
            carName: 'Mercedes',
            carModel: 'G-Class',
            carPrice: 95000,
            carYear: 2022
        }

    return (
        <div>
        <div className="container-search-cars-list">
            <p className="image-car"><img src='https://i.infocar.ua/i/12/5432/1400x936.jpg' alt="" /></p>
            <p>{MercedesC300.carName}</p>
            <p>{MercedesC300.carModel}</p>
            <p>{MercedesC300.carPrice} $</p>
            <p>{MercedesC300.carYear}</p>
            {/* <button onClick={SearchCarName}>Click</button> */}
        </div>
        <Link className='' to={'/searchmercedes'}><button className='search-cars-styles'>Повернутися назад</button></Link>
        </div>
    )
}



export default SearchMercedesC300;