
export interface CommonButtonInterface{
    name : string,
    type? : "button" | "submit" | "reset",
    buttonStyle?:"primary"|"secondary",
    className?:string,
    onClick?:React.MouseEventHandler<HTMLButtonElement>,
    isLoading?:boolean,
}