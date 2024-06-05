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
import About from './Pages/About';
import Estimate from './Pages/Estimate'
import Solutions from './Pages/Solutions'
import Formation from './Pages/Training'
import Shop from './Pages/Shop'
import ProduitPage from './Pages/ProduitPage';
import Contact from './Pages/Contact';
import Error404 from './Pages/Error404';
import FormationDetails from './Pages/FormationDetails';
// import Infographie from './Components/Services/INFOGRAPHIE/Infographie';
// import Videomontage from './Components/Services/Videomontage/Videomontage';
// import AccesControl from './Components/Services/AccesControl/AccesControl';
// import Cablagereseau from './Components/Services/Cablagereseau/Cablagereseau';
// import Conceptionweb from './Components/Services/Conceptionweb/Conceptionweb';
// import Emarketing from './Components/Services/Emarketing/Emarketing';
// import Telecom from './Components/Services/Telecom/Telecom';
// import Videosurveillance from './Components/Services/Videosurveillence/Videosurveillance';
// import Maintenance from './Components/Services/Maintenance/Maintenance';
import SolutionDetails from './Pages/SolutionDetails';





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


                <Route path='/solutions' element={ <Solutions/> }>
                    {/* <Route path='/solutions/infographie' element={ <Infographie/> } />
                    <Route path='/solutions/controls-d-acces' element={ <AccesControl/> } />
                    <Route path='/solutions/cablage-reseau' element={ <Cablagereseau/> } />
                    <Route path='/solutions/conception-web' element={ <Conceptionweb/> } />
                    <Route path='/solutions/maintenance' element={ <Maintenance/> } />
                    <Route path='/solutions/e-marketing' element={ <Emarketing/> } />
                    <Route path='/solutions/montagevideo' element={ <Videomontage/> } />
                    <Route path='/solutions/telecommunication' element={ <Telecom/> } />
                    <Route path='/solutions/video-surveillence' element={ <Videosurveillance/> } /> */}
                </Route>
                
                <Route path='/formations' element={ <Formation/> }>
                    {/* <Route path='/formations/infographie' element={ <Infographie/> } />
                    <Route path='/formations/bureautique' element={ <AccesControl/> } />
                    <Route path='/formations/montage-video' element={ <Cablagereseau/> } />
                    <Route path='/formations/programmation' element={ <Conceptionweb/> } />
                    <Route path='/formations/cablage-reseau' element={ <Maintenance/> } />
                    <Route path='/formations/electricite' element={ <Emarketing/> } /> */}
                </Route>


                    <Route path='/formations/details' element={ <FormationDetails/> } />
                    <Route path='/solutions/details' element={ <SolutionDetails/> } />
                <Route path='/formations' element={ <Formation/> } />
                <Route path='/boutique' element={ <Shop/> } />

                <Route path='/product/:id' element={ <ProduitPage/> } />

                <Route path='/ProduitPage' element={ <ProduitPage/> } />
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
