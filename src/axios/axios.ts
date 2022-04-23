import axios from "axios";

//axios.defaults.baseURL = `${process.env.API_BASE}`;

export const getAxios = (url:string,data?:any)=>{
    //console.log("url",url);
    return axios.get(url,{
        data:data,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const postAxios = (url:string,data?:any)=>{
    return axios.post(url,data,{
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    });
}