import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Shop from "./Components/Shop";
import Header from './Components/Header';
import Footer from "./Components/Footer";
import Services from './Components/Services';
import Courses from './Components/Courses';
import Team from './Components/Team';
import Register from './Components/Register';
import Home from './Components/Home';
import './App.css';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     
      <Header/>
       <Routes>
          <Route path='/' element= {<Home/>}></Route>
          <Route path='/Services' element= {<Services/>}></Route>
          <Route path='/Courses' element= {<Courses/>}></Route>
          <Route path='/Shop' element= {<Shop/>}></Route>
          <Route path='/Team' element= {<Team/>}></Route>
          <Route path='/Register' element= {<Register/>}></Route>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
