import searchCar from "../../../../interfaces/searchCar.dao";
import '../../../../../styles/search.scss'
import { Link } from "react-router-dom";

interface IProps {
    searchCarList: (cars: searchCar) => void;
}



const SearchMercedesC300 = () => {

        const MercedesC300 = {
            carName: 'Mercedes',
            carModel: 'Maybach',
            carPrice: 225000,
            carYear: 2021
        }

    return (
        <div>
        <div className="container-search-cars-list">
            <p className="image-car"><img src='https://focus.ua/static/storage/originals/a/cd/25e8207dac1c13d5c5315dfcff947cda.jpg' alt="" /></p>
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