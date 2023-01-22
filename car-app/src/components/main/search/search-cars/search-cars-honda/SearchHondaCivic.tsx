import searchCar from "../../../../interfaces/searchCar.dao";
import '../../../../../styles/search.scss'
import { Link } from "react-router-dom";

interface IProps {
    searchCarList: (cars: searchCar) => void;
}



const SearchHondaCivic = () => {

        const MercedesC300 = {
            carName: 'Honda',
            carModel: 'Civic',
            carPrice: 14000,
            carYear: 2019
        }

    return (
        <div>
        <div className="container-search-cars-list">
            <p className="image-car"><img src='https://cdn.motor1.com/images/mgl/AkBE9P/s1/new-honda-civic-e-hev-hybrid-europe.jpg' alt="" /></p>
            <p>{MercedesC300.carName}</p>
            <p>{MercedesC300.carModel}</p>
            <p>{MercedesC300.carPrice} $</p>
            <p>{MercedesC300.carYear}</p>
            {/* <button onClick={SearchCarName}>Click</button> */}
        </div>
        <Link className='' to={'/searchhonda'}><button className='search-cars-styles'>Повернутися назад</button></Link>
        </div>
    )
}



export default SearchHondaCivic;