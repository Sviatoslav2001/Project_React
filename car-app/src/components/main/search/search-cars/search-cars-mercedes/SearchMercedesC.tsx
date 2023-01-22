import searchCar from "../../../../interfaces/searchCar.dao";
import '../../../../../styles/search.scss'
import { Link } from "react-router-dom";

interface IProps {
    searchCarList: (cars: searchCar) => void;
}



const SearchMercedesC = () => {

        const MercedesC300 = {
            carName: 'Mercedes',
            carModel: 'C 300',
            carPrice: 25000,
            carYear: 2017
        }

    return (
        <div>
        <div className="container-search-cars-list">
            <p className="image-car"><img src='https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2016/12/2017-Mercedes-Benz-C300-4MATIC-coupe-103.jpg?crop=0.869xw:0.711xh;0.128xw,0.278xh&resize=1200:*' alt="" /></p>
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



export default SearchMercedesC;