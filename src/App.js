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

import SolutionDetails from './Pages/SolutionDetails';
// import Data from './Pages/Data';

// import dataJson from './Assets/Data/Data.json'; 




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

                </Route>
                
                <Route path='/formations' element={ <Formation/> }>
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
