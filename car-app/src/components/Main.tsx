import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './main/signIn/SignIn';
import SignUp from './main/signUp/SignUp';
import '../styles/header.scss'
import Content from './main/body/Content';
import Header from './main/header/Header';
import SeacrhCar from './main/search/Search';
import Error from './main/error/Error';
import SearchMercedes from './main/search/search-cars/search-cars-mercedes/SearchMercedes';
import SearchRenault from './main/search/search-cars/search-cars-renault/SearchRenault';
import SearchNissan from './main/search/search-cars/search-cars-nissan/SearchNissan';
import SearchHonda from './main/search/search-cars/search-cars-honda/SearchHonda';
import SearchWolkswagen from './main/search/search-cars/search-cars-wolkswagen/SearchWolkswagen';
import SearchMercedesC from './main/search/search-cars/search-cars-mercedes/SearchMercedesC';
import SearchMercedesGLE from './main/search/search-cars/search-cars-mercedes/SearchMercedesGLE';
import SearchMercedesE from './main/search/search-cars/search-cars-mercedes/SearchMercedesE';
import SearchMercedesG from './main/search/search-cars/search-cars-mercedes/SearchMercedesG';
import SearchMercedesMaybach from './main/search/search-cars/search-cars-mercedes/SearchMercedesMaybach';
import SearchRenaultKoleos from './main/search/search-cars/search-cars-renault/SearchRenaultKoleos';
import SearchRenaultKadjar from './main/search/search-cars/search-cars-renault/SearchRenaultKadjar';
import SearchRenaultDuster from './main/search/search-cars/search-cars-renault/SearchRenaultDuster';
import SearchRenaultClio from './main/search/search-cars/search-cars-renault/SearchRenaultClio';
import SearchRenaultMegane from './main/search/search-cars/search-cars-renault/SearchRenaultMegane';
import SearchHondaAccord from './main/search/search-cars/search-cars-honda/SearchHondaAccord';
import SearchHondaCivic from './main/search/search-cars/search-cars-honda/SearchHondaCivic';
import SearchHondaPilot from './main/search/search-cars/search-cars-honda/SearchHondaPilot';
import SearchHondaCRV from './main/search/search-cars/search-cars-honda/SearchHondaCRV';
import SearchHondaHRV from './main/search/search-cars/search-cars-honda/SearchHondaHRV';
import SearchNissanRogue from './main/search/search-cars/search-cars-nissan/SearchNissanRogue';
import SearchNissanQuashqai from './main/search/search-cars/search-cars-nissan/SearchNissanQashqai';
import SearchNissanJuke from './main/search/search-cars/search-cars-nissan/SearchNissanJuke';
import SearchNissanLeaf from './main/search/search-cars/search-cars-nissan/SearchNissanLeaf';
import SearchNissanNavara from './main/search/search-cars/search-cars-nissan/SearchNissanNavara';
import SearchWolkswagenCC from './main/search/search-cars/search-cars-wolkswagen/SearchWolkswagenCC';
import SearchWolkswagenGolf from './main/search/search-cars/search-cars-wolkswagen/SearchWolkswagenGolf';
import SearchWolkswagenJetta from './main/search/search-cars/search-cars-wolkswagen/SearchWolkswagenJetta';
import SearchWolkswagenPassat from './main/search/search-cars/search-cars-wolkswagen/SearchWolkswagenPassat';
import SearchWolkswagenPolo from './main/search/search-cars/search-cars-wolkswagen/SearchWolkswagenPolo';


const Main = () => {
    return (
        <div className='main-container'>
            <Header />
                <Routes>
                    <Route path='/' element={<Content />}></Route>
                    <Route path='/signin' element={<SignIn />}></Route>
                    <Route path='/signup' element={<SignUp />}></Route>
                    <Route path='/search' element={<SeacrhCar />}></Route>
                    <Route path='*' element={<Error />}></Route>



                    <Route path='/searchmercedes' element={<SearchMercedes />}></Route>
                    <Route path='/searchmercedescclass' element={<SearchMercedesC />}></Route>
                    <Route path='/searchmercedesgleclass' element={<SearchMercedesGLE />}></Route>
                    <Route path='/searchmercedesgclass' element={<SearchMercedesG />}></Route>
                    <Route path='/searchmercedeseclass' element={<SearchMercedesE />}></Route>
                    <Route path='/searchmercedesmaybach' element={<SearchMercedesMaybach />}></Route>



                    <Route path='/searchrenault' element={<SearchRenault />}></Route>
                    <Route path='/searchrenaultkoleos' element={<SearchRenaultKoleos />}></Route>
                    <Route path='/searchrenaultkadjar' element={<SearchRenaultKadjar />}></Route>
                    <Route path='/searchrenaultduster' element={<SearchRenaultDuster />}></Route>
                    <Route path='/searchrenaultclio' element={<SearchRenaultClio />}></Route>
                    <Route path='/searchrenaultmegane' element={<SearchRenaultMegane />}></Route>



                    <Route path='/searchnissan' element={<SearchNissan />}></Route>
                    <Route path='/searchnissanrogue' element={<SearchNissanRogue />}></Route>
                    <Route path='/searchnissanquashqai' element={<SearchNissanQuashqai />}></Route>
                    <Route path='/searchnissanjuke' element={<SearchNissanJuke />}></Route>
                    <Route path='/searchnissanleaf' element={<SearchNissanLeaf />}></Route>
                    <Route path='/searchnissannavara' element={<SearchNissanNavara />}></Route>



                    <Route path='/searchhonda' element={<SearchHonda />}></Route>
                    <Route path='/searchhondaaccord' element={<SearchHondaAccord />}></Route>
                    <Route path='/searchhondacivic' element={<SearchHondaCivic />}></Route>
                    <Route path='/searchhondapilot' element={<SearchHondaPilot />}></Route>
                    <Route path='/searchhondacrv' element={<SearchHondaCRV />}></Route>
                    <Route path='/searchhondahrv' element={<SearchHondaHRV />}></Route> 




                    <Route path='/searchwolkswagen' element={<SearchWolkswagen />}></Route>        
                    <Route path='/searchwolkswagenpassat' element={<SearchWolkswagenPassat />}></Route> 
                    <Route path='/searchwolkswagenjetta' element={<SearchWolkswagenJetta />}></Route> 
                    <Route path='/searchwolkswagengolf' element={<SearchWolkswagenGolf />}></Route> 
                    <Route path='/searchwolkswagenpolo' element={<SearchWolkswagenPolo />}></Route> 
                    <Route path='/searchwolkswagencc' element={<SearchWolkswagenCC />}></Route>          
                      
                </Routes>
        </div>
    )
}


export default Main;