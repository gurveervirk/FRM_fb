import './App.css';
import './comps/styles.css';
// import Data from'./comps/Read_json';
import Navigation from './comps/Navigation';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Vac from './comps/Vac';
import Vac_Admin from './comps/Vac_Admin';
import Fac from './comps/Fac';
import Rec from './comps/Rec';
import Home from './comps/Home';
import Home_Admin from './comps/Home_Admin';
import Applications from './comps/Applications';
import Inbox from './comps/Inbox';
import Det from './comps/Det';
import Det_Admin from './comps/Det_Admin';
import Not from './comps/Not';
// import Testing from './comps/Testing';
function App() {
  return (
    <div>
      {/* <Testing/> */}
      {/* <Data/> */}
      <Router>
      <Navigation/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Home_Admin" element={<Home_Admin/>} />
      <Route path="/Applications" element={<Applications/>} />
      <Route path="/Inbox" element={<Inbox/>} />
      <Route path="/det" element={<Det/>} />
      <Route path="/Not" element={<Not/>} />
      <Route path="/Rec" element={<Rec/>} />
      <Route path="/Fac" element={<Fac/>} />
      <Route path="/Vac" element={<Vac/>} />
      <Route path="/Vac_Admin" element={<Vac_Admin/>} />
      <Route path="/employ" element={<Det_Admin/>} />
      </Routes>
      </Router>
    </div>
  );
}
export default App;
