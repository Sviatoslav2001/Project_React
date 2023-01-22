import searchCar from "../../../../interfaces/searchCar.dao";
import '../../../../../styles/search.scss'
import { Link } from "react-router-dom";

interface IProps {
    searchCarList: (cars: searchCar) => void;
}



const SearchHondaHRV = () => {

        const MercedesC300 = {
            carName: 'Honda',
            carModel: 'HR-V',
            carPrice: 18000,
            carYear: 2021
        }

    return (
        <div>
        <div className="container-search-cars-list">
            <p className="image-car"><img src='https://upload.wikimedia.org/wikipedia/commons/6/60/Honda_HR-V_Hybrid_1X7A0388.jpg' alt="" /></p>
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



export default SearchHondaHRV;