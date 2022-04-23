import { postAxios } from "../../axios/axios";
import { EventFormInterface } from "../../interface/forms/EventFormInterface.interfac";
import { EVENT_REGISTRATION_FAILED, EVENT_REGISTRATION_INIT, EVENT_REGISTRATION_SUCCESS } from "../type";

import { toast } from 'react-toastify';

export const createEvent = (formData:EventFormInterface) => {
    return async (dispatch:any) => {
        try{
            dispatch({
                type : EVENT_REGISTRATION_INIT,
            });
            
            console.log(`${process.env.API_BASE}/event-registration/create`,formData);
            const {data} = await postAxios(`${process.env.API_BASE}/event-registration/create`,formData);
            console.log("Data",data);

            dispatch({
                type:EVENT_REGISTRATION_SUCCESS,
            });

            toast.info("Event Booked");

        }
        catch(error:any){
            if (error.response) {
                // Request made and server responded
                
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                toast.error(error.response.data.message);
              } else if (error.request) {
                // The request was made but no response was received
                toast.error(error.message);
              } else {
                // Something happened in setting up the request that triggered an Error
                //console.log('Error', error.message);
                toast.error(error.message);

              }

            dispatch({
                type:EVENT_REGISTRATION_FAILED, 
            });
        }
    };
  
};