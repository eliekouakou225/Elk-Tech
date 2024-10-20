import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';                       
import { Cursor } from 'react-creative-cursor';
import { useMediaQuery } from 'react-responsive';

//------import css
import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-creative-cursor/dist/styles.css';


//-----import Components
import Nav from './Components/Header/Nav';
import Footer from './Components/Footer/Footer'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop.js';


import { Puff } from 'react-loader-spinner';


// Lazy loading des composants

const Home = React.lazy(() => import('./Pages/Home'));
const Estimate = React.lazy(() => import('./Pages/Estimate'));
const Shop = React.lazy(() => import('./Pages/Shop'));
const Contact = React.lazy(() => import('./Pages/Contact'));
const Error404 = React.lazy(() => import('./Pages/Error404'));

const SolutionPage = React.lazy(() => import('./Pages/SolutionPage'));
const SolutionDetails = React.lazy(() => import('./Pages/SolutionDetail'));

const CategoryMikrotik = React.lazy(() => import('./Components/Products/Mikrotik/CategoryMikrotik.jsx'));
const MikrotikDetail = React.lazy(() => import('./Components/Products/Mikrotik/MikrotikDetail.jsx'));

const CategoryNetwork = React.lazy(() => import('./Components/Products/Network/CategoryNetwork.jsx'));
const NetworkDetail = React.lazy(() => import('./Components/Products/Network/NetworkDetail.jsx'));

const CategoryAccessories = React.lazy(() => import('./Components/Products/Accessories/CategoryAccessories.jsx'));
const AccessoriesDetail = React.lazy(() => import('./Components/Products/Accessories/AccessoriesDetail.jsx'));

const TrainingPage = React.lazy(() => import('./Pages/TrainingPage'));
const TrainingDetail = React.lazy(() => import('./Pages/trainingDetail'));


//-----import pages
// import Home from './Pages/Home';
// import Estimate from './Pages/Estimate';
// import Shop from './Pages/Shop';
// import Contact from './Pages/Contact';
// import Error404 from './Pages/Error404';

// import SolutionPage from './Pages/SolutionPage';
// import SolutionDetails from './Pages/SolutionDetail';

// import CategoryMikrotik from './Components/Products/Mikrotik/CategoryMikrotik.jsx';
// import MikrotikDetail from './Components/Products/Mikrotik/MikrotikDetail.jsx';

// import CategoryNetwork from './Components/Products/Network/CategoryNetwork.jsx';
// import NetworkDetail from './Components/Products/Network/NetworkDetail.jsx';

// import CategoryAccessories from './Components/Products/Accessories/CategoryAccessories.jsx';
// import AccessoriesDetail from './Components/Products/Accessories/AccessoriesDetail.jsx';

// import TrainingPage from './Pages/TrainingPage';
// import TrainingDetail from './Pages/trainingDetail';




const App = () => {
    const isPC = useMediaQuery({ minWidth: 992 });
  return ( 
        <>
       
        <BrowserRouter> 
        <ScrollToTop /> 
        {isPC && <div className="mobile-only">
            <Cursor isGelly={true} />
            </div>}
        <header>
            <Nav/>
        </header> 
            <Suspense fallback={<Puff visible={true} height="80" width="80" color="#4fa94d" ariaLabel="Chargement en cour..." wrapperStyle={{}} wrapperClass="" />}>
            <ScrollToTop /> 
            <Routes>

                <Route path='/' element={ <Home/> } />
                <Route path='/devis' element={ <Estimate/> } />
                
                
                {/* Road to solutions */} 
                <Route path='/solutions' element={ <SolutionPage/> }/>
                <Route path='/solutions/:title' element={<SolutionDetails/>} /> 

                {/* Road to  trainings */}
                <Route path='/formations' element={ <TrainingPage/>} />
                <Route path='/formations/:title' element={ <TrainingDetail/> } />

              
                <Route path='/boutique' element={ <Shop/> } />
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
            </Suspense>

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
