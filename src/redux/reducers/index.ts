import { combineReducers } from "redux";
import collectionReducer from "./collection.reducer";
import eventRegistrationReducer from './eventRegistration.reducer';

export default combineReducers({
    collectionReducer,
    eventRegistrationReducer,
});