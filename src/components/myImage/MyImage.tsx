import { useState } from "react";
import { MyImageIProps } from "../../interface/common/MyImageIProps.interface";

const MyImage = ({image}:MyImageIProps)=>{

    const [isBlur,setBlur] = useState(false);

    const onTapImage = ()=>{
        setBlur(true)
    }

    return (
        <img src={image.src} className={"task2-img blur-sm transition-all duration-1500 myImage mb-10" + (isBlur?" blur-none":"")}
            onClick={onTapImage}
            style={{marginRight:image.marginRight}}
        />
    );
} 

export default MyImage;