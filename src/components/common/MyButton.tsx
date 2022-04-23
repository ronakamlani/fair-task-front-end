import { CommonButtonInterface } from "../../interface/Button.interface";



const MyButton = ({
    type="button",
    buttonStyle="primary",
    name,
    className,
    onClick,
    isLoading,
}:CommonButtonInterface)=>{
    
    let myClassName  = "";

    if(className){
        myClassName = className;
    }
    else if(buttonStyle == "primary"){
        myClassName='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
    }
    else if(buttonStyle == "secondary"){
        myClassName='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded';
    }

    if(isLoading){
        myClassName += " bg-gray-200 hover:bg-gray:200";
    }

    return(
        <button 
            type={type}
            disabled={isLoading}
            className={myClassName}
            onClick={onClick}
            >
            {name}
        </button>
    );
}

export default MyButton;