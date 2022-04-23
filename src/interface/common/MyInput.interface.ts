
export interface MyInputProps{
    id:string,
    labelText?:string,
    labelClass?:string,
    type:"email"|"text"|"date"|"time"
    defaultValue?:string,
    register:any,
    className?:string,
    placeholder?:string,
    errorMessage?:string,
    
}