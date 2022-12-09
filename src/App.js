import React from "react";
import './App.css';
import Header from './Components/Header/Header'
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Messages/Dialogs";
import Subscriptions from "./Components/Subscriptions/Subscriptions";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {

  return (
      <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <Nav />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile postData={props.postData} bio={props.bio}/>}/>
                    <Route path="/subscriptions" element={<Subscriptions/>}/>
                    <Route path="/dialogs" element={<Dialogs names={props.names} messages={props.messages}/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
            <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
