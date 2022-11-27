import './App.css';
import {Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import Menu from './Components/Menu/Menu'
import Worktime from './Components/WorkTime/Worktime';
import Info from './Components/Infor/Info';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className='Container'>
      <Navbar/>
      <Home/>
      <Menu/>
      <Worktime/>
      <Info/>
      <Footer/>

    </div>
  );
}

export default App;