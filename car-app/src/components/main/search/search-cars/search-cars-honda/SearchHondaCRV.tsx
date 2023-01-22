import searchCar from "../../../../interfaces/searchCar.dao";
import '../../../../../styles/search.scss'
import { Link } from "react-router-dom";

interface IProps {
    searchCarList: (cars: searchCar) => void;
}



const SearchHondaCRV = () => {

        const MercedesC300 = {
            carName: 'Honda',
            carModel: 'CR-V',
            carPrice: 27000,
            carYear: 2021
        }

    return (
        <div>
        <div className="container-search-cars-list">
            <p className="image-car"><img src='https://www.ixbt.com/img/n1/news/2022/11/4/photo_2022-12-01_07-24-01_large.jpg' /></p>
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



export default SearchHondaCRV;