import searchCar from "../../../../interfaces/searchCar.dao";
import '../../../../../styles/search.scss'
import { Link } from "react-router-dom";

interface IProps {
    searchCarList: (cars: searchCar) => void;
}



const SearchRenaultDuster = () => {

        const MercedesC300 = {
            carName: 'Renault',
            carModel: 'Duster',
            carPrice: 13000,
            carYear: 2018
        }

    return (
        <div>
        <div className="container-search-cars-list">
            <p className="image-car"><img src='https://upload.wikimedia.org/wikipedia/commons/8/88/Dacia_Duster_II_Facelift_IMG_6331.jpg' alt="" /></p>
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



export default SearchRenaultDuster;