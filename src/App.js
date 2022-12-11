import React from "react";
import './App.css';
import Header from './Components/Header/Header'
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Messages/Dialogs";
import Community from "./Components/Community/Community";
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
                    <Route path="/profile" element={
                        <Profile profilePage={props.appState.profilePage}/>}
                    />
                    <Route path="/community" element={
                        <Community communityPage={props.appState.communityPage}/>}
                    />
                    <Route path="/dialogs" element={
                        <Dialogs messagesPage={props.appState.messagesPage}/>}
                    />
                    <Route path="/settings" element={
                        <Settings settingsPage={props.appState.settingsPage}/>}
                    />
                </Routes>
            </div>
            <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
