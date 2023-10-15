
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Contact from './Pages/Contact';
import Navbar from './container/Navbar';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Project from './Pages/Project';
import Footer from './container/Footer';

import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      
      
        <Routes>

        < Route exact path="/"
            element=<Home/>
            />
        <Route exact path='/education'
          element=<Education/>
          />
          <Route exact path='/experience'
          element=<Experience/>
          />

          <Route exact path='/project'
           element= <Project/>
           />
          
          < Route exact path="/contact"
            element=<Contact/>
            />
        </Routes>
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
