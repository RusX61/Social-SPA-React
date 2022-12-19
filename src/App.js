import React from "react";
import './App.css';
import Header from './Components/Header/Header'
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/Profile/Profile";
import Messages from "./Components/Messages/Messages";
import Community from "./Components/Community/Community";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegForm from "./Components/RegForm/RegForm";
import DialogContainer from "./Components/Messages/DialogContainer";
const App = (props) => {

  return (
      <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={
                        <Profile store={props.store}
                                 dispatch={props.dispatch}
                        />}
                    />
                    <Route path="/community" element={
                        <Community communityPage={props.state.communityPage}/>}
                    />
                    <Route path="/dialogs" exact={true} element={
                        <Messages messagesPage={props.state.messagesPage}/>}
                    />
                    <Route path="/dialog/:id"  element={
                        <DialogContainer store={props.store}/>}
                    />
                    <Route path="/settings" element={
                        <Settings settingsPage={props.state.settingsPage}/>}
                    />
                    <Route path="/" element={<RegForm />}/>
                </Routes>
            </div>
            <Footer />
        </div>
      </BrowserRouter>

  );
}

export default App;
