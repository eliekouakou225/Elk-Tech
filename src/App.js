import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';                       
import { Cursor } from 'react-creative-cursor';
import { useMediaQuery } from 'react-responsive';

//------import css
import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-creative-cursor/dist/styles.css';



//-----import Components
import Nav from './Components/Header/Nav';
// import { CustomCursor } from './Components/Cursor/index.jsx';
import Footer from './Components/Footer/Footer'
// import ScrollToTopButton from './Components/GoUpButton/GoUpButton'

//-----import pages
import Home from './Pages/Home';
import About from './Pages/About.jsx';
import Estimate from './Pages/Estimate'
import Shop from './Pages/Shop'
// import ProduitDetail from './Pages/ProductDetail';
import Contact from './Pages/Contact';
import Error404 from './Pages/Error404';

import SolutionPage from './Pages/SolutionPage';
import SolutionDetails from './Pages/SolutionDetail';
import WifiServices from './Pages/WifiServices';

import CategoryMikrotik from './Components/Products/Mikrotik/CategoryMikrotik.jsx';
import MikrotikDetail from './Components/Products/Mikrotik/MikrotikDetail.jsx';

import CategoryNetwork from './Components/Products/Network/CategoryNetwork.jsx';
import NetworkDetail from './Components/Products/Network/NetworkDetail.jsx';

import CategoryAccessories from './Components/Products/Accessories/CategoryAccessories.jsx';
import AccessoriesDetail from './Components/Products/Accessories/AccessoriesDetail.jsx';

import TrainingPage from './Pages/TrainingPage';
import TrainingDetail from './Pages/trainingDetail';




const App = () => {
    const isPC = useMediaQuery({ minWidth: 992 });
  return ( 
        <>
        
        <BrowserRouter> 
        {isPC && <div className="mobile-only">
            <Cursor isGelly={true} />
            </div>}
        <header>
            <Nav/>
        </header>
            {/* <CustomCursor/> */}  
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/apropos' element={ <About/> } />
                <Route path='/devis' element={ <Estimate/> } />

                {/* Road to solutions */} 
                <Route path='/solutions' element={ <SolutionPage/> }/>
                <Route path='/solutions/wifi' element={ <WifiServices/> }/>
                <Route path='/solutions/:title' element={<SolutionDetails/>} />

                {/* Road to  trainings */}
                <Route path='/formations' element={ <TrainingPage/>} />
                <Route path='/formations/:title' element={ <TrainingDetail/> } />

              
                <Route path='/boutique' element={ <Shop/> } />
                {/* <Route path='/boutique/:title' element={ <ProduitDetail/> } /> */}

                <Route path='/boutique/categorie/mikrotik' element={ <CategoryMikrotik/> } />
                <Route path='/boutique/categorie/mikrotik/:title' element={ <MikrotikDetail/> } />

                <Route path='/boutique/categorie/reseau' element={ <CategoryNetwork/> } />
                <Route path='/boutique/categorie/reseau/:title' element={ <NetworkDetail/> } />

                <Route path='/boutique/categorie/accessoires' element={ <CategoryAccessories/> } />
                <Route path='/boutique/categorie/accessoires/:title' element={ <AccessoriesDetail/> } />

                <Route path='/contact' element={ <Contact/> } />
                <Route path='/404' element={ <Error404/> } />
                <Route path='/*' element={ <Error404/> } />
            </Routes>
            {/* <Footer/> */}
        <footer>
            <Footer/>
        </footer>
        </BrowserRouter>
        {/* <ScrollToTopButton /> */}
        </>
  );
};

export default App;
