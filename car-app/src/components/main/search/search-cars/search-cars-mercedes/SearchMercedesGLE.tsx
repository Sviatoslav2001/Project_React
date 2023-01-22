import searchCar from "../../../../interfaces/searchCar.dao";
import '../../../../../styles/search.scss'
import { Link } from "react-router-dom";

interface IProps {
    searchCarList: (cars: searchCar) => void;
}



const SearchMercedesC300 = () => {

        const MercedesC300 = {
            carName: 'Mercedes',
            carModel: 'GLE',
            carPrice: 55000,
            carYear: 2019
        }

    return (
        <div>
        <div className="container-search-cars-list">
            <p className="image-car"><img src='https://img.mercedes-benz-kiev.com/data/lineup/gle-2019/mercedes-benz-gle-2019-22.jpg' alt="" /></p>
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