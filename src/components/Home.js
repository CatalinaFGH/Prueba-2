import './Home.css';
import logo1AfpCapital from './logo1AfpCapital.svg'
import {
  Link 
   } from "react-router-dom";

const Home = () => {
    return (
      <div className="home-container">
          <img src={logo1AfpCapital} alt="logo1" className="yellow-logo"/>
           <Link to="/list"><button className="the-button">ENTER</button></Link>
      </div>
    );
  }

  export default Home;