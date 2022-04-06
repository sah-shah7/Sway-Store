import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import HomePageBody from "../../components/HomePageBody/HomePageBody";
import Footer from "../../components/Footer/Footer";
import './HomePage.css'


const HomePage = () => {
  return (
    <div className="page-wrapper">
      <NavBar />
        <HomePageBody/>
        <Footer/>
    </div>
  );
};

export default HomePage;
