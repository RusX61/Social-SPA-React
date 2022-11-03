// import React, {Component} from "react";
import './App.css';
import Posts from "./Components/Posts";
import Header from './Components/Header'
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Profile from "./Components/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
        <Header />
        <Nav />
        <Profile />
        <Posts />
        <Footer />
    </div>
  );
}

export default App;
