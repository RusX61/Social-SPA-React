// import React, {Component} from "react";
import './App.css';
import Header from './Components/Header/Header'
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Messages from "./Components/Messages/Messages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Subscriptions from "./Components/Subscriptions/Subscriptions";
import Settings from "./Components/Settings/Settings";

const App = () => {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <Nav />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/subscriptions" element={<Subscriptions/>}/>
                    <Route path="/messages" element={<Messages/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>

            <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
