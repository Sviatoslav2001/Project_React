import searchCar from "../../../../interfaces/searchCar.dao";
import '../../../../../styles/search.scss'
import { Link } from "react-router-dom";

interface IProps {
    searchCarList: (cars: searchCar) => void;
}



const SearchHondaPilot = () => {

        const MercedesC300 = {
            carName: 'Honda',
            carModel: 'Pilot',
            carPrice: 38000,
            carYear: 2020
        }

    return (
        <div>
        <div className="container-search-cars-list">
            <p className="image-car"><img src='https://upload.wikimedia.org/wikipedia/commons/e/ea/2019_Honda_Pilot_EX-L_3.5L_front_1.5.19.jpg' alt="" /></p>
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



export default SearchHondaPilot;