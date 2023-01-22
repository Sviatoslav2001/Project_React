import searchCar from "../../../../interfaces/searchCar.dao";
import '../../../../../styles/search.scss'
import { Link } from "react-router-dom";

interface IProps {
    searchCarList: (cars: searchCar) => void;
}



const SearchHondaAccord = () => {

        const MercedesC300 = {
            carName: 'Honda',
            carModel: 'Accord',
            carPrice: 22000,
            carYear: 2019
        }

    return (
        <div>
        <div className="container-search-cars-list">
            <p className="image-car"><img src='https://ukrautoprom.com.ua/wp-content/uploads/2020/10/2021-honda-accord-hybrid-silver-exterior.x23313.jpg' alt="" /></p>
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



export default SearchHondaAccord;