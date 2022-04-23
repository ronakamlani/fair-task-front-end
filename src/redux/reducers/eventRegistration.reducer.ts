import {  EventRegistrationReduxInterface } from "../../interface/redux/EventRegistrationRedux.Interface";
import { EVENT_REGISTRATION_INIT, EVENT_REGISTRATION_FAILED, EVENT_REGISTRATION_SUCCESS } from "../type";

const initialState:EventRegistrationReduxInterface = {
    loading: false,
};
const eventRegistration = (state = initialState, action:any) => {
    switch (action.type) {
        case  EVENT_REGISTRATION_INIT:
            return {
                ...state,
                loading: true,
            };
        case  EVENT_REGISTRATION_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case EVENT_REGISTRATION_FAILED:
            return {
                ...state,
                loading:false,
            };
        default:{
            return state;
        }
    }
};
    
export default eventRegistration;