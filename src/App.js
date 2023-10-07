
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './container/Navbar';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
      <Home/>
        <Routes>
          
          < Route exact path=''
            element=''/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
