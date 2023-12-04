import Header from './Components/Header/Header';
import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Header/Nav.js'
import { CustomCursor } from './Components/Cursor/index.jsx';
import About from './Components/About/About.jsx';
import Formation from './Components/Formation/Formation.jsx';
import Services from './Components/Services/Services.jsx';
import Parallax from './Components/Parallax/Parallax.jsx'
import Projet from './Components/Projet/Projet.jsx';
function App() {
  return (
    <div className="App">
      <CustomCursor/>
      <Header/>
      <Nav/>
      <About/>
      <Formation/>
      <Services/>
      <Parallax/>
      <Projet/>
    </div>
  );
}

export default App;
