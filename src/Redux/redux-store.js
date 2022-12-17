import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import communityReducer from "./community-reducer";
import settingsReducer from "./settings-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    communityPage: communityReducer,
    messagesPage: messagesReducer,
    settingsPage: settingsReducer
});

let store = createStore(reducers);

export default store;