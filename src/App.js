import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

//------import css
import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


//-----import Components
import Nav from './Components/Header/Nav';
// import { CustomCursor } from './Components/Cursor/index.jsx';
import Footer from './Components/Footer/Footer'


//-----import pages
import Home from './Pages/Home';
import About from './Pages/About';
import Estimate from './Pages/Estimate'
import Solutions from './Pages/Solutions'
import Formation from './Pages/Formation'
import Shop from './Pages/Shop'
import Login from './Pages/Login'
import Single from './Pages/Single';
import Contact from './Pages/Contact';


const App = () => {
  return (
        <>
        <BrowserRouter> 
        <header>
            <Nav/>
        </header>
            {/* <CustomCursor/> */} 
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/apropos' element={ <About/> } />
                <Route path='/devis' element={ <Estimate/> } />
                <Route path='/solutions' element={ <Solutions/> } />
                <Route path='/formations' element={ <Formation/> } />
                <Route path='/boutique' element={ <Shop/> } />
                <Route path='/single' element={ <Single/> } />
                <Route path='/connexion' element={ <Login/> } />
                <Route path='/contact' element={ <Contact/> } />
            </Routes>
            {/* <Footer/> */}
        </BrowserRouter>
        <footer>
            <Footer/>
            
        </footer>
        </>
  );
};

export default App;
