import { MyImageIProps } from "../../interface/common/MyImageIProps.interface";

const MyImage = ({image}:MyImageIProps)=>{
    return (
        <div className=" md:w-1/3 w-1/2 p-2">
            <img src={image.src} className="blur-sm hover:blur-none transition-all duration-1500 myImage" />
        </div>
    );
} 

export default MyImage;