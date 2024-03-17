import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
      </div>

      <h1 className="homeTitle">browse by property type</h1>
    </div>
  );
};

export default Home