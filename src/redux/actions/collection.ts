import { toast } from "react-toastify";
import { getAxios, postAxios } from "../../axios/axios";
import { CollectionEditFormInterface } from "../../interface/forms/CollectionEditForm.interface";
import { COLLECTION_EDIT_SUCCESS, COLLECTION_LOADING, COLLECTION_SUCCESS } from "../type";

export const getAll = () => {
    return (async (dispatch:any) => {
        try{
            //console.log(`${process.env.API_BASE}/collection`);
            const {data} = await getAxios(`${process.env.API_BASE}/collection`);

            dispatch({
                type:COLLECTION_SUCCESS,
                collections : data.data.collections,
            });
        }
        catch(e:any){
            //TODO
        }
    });
  
};

export const doSubmitEditCollection = (formData:CollectionEditFormInterface)=>{
    return (async (dispatch:any) => {
        try{
            //console.log(`${process.env.API_BASE}/update`);
            dispatch({
                type:COLLECTION_LOADING,
                loading:true,
            });
            const response = await postAxios(`${process.env.API_BASE}/collection/update/${formData.id}`,formData);
            
            console.log("data",response.data);
            if(response.data.status == 0){
                dispatch({
                    type : COLLECTION_EDIT_SUCCESS,
                    collection : response.data.data.collection,
                })
                toast.info("Saved  Successfully.");
            }
            else{
                toast.error("Save failed");
            }
        }
        catch(error:any){
            //TODO
            if (error.response) {
                // Request made and server responded
                
                // console.log(error.response.data);
                // console.log(error.response.status);
                // console.log(error.response.headers);
                toast.error(error.response.data.error);
              } else if (error.request) {
                // The request was made but no response was received
                toast.error(error.message);
              } else {
                // Something happened in setting up the request that triggered an Error
                //console.log('Error', error.message);
                toast.error(error.message);

              }
            
        }
        finally{
            dispatch({
                type:COLLECTION_LOADING,
                loading:false,
            });
        }
    });
}