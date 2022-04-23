import { MyImageInterface } from "../../interface/common/MyImageInterface.interface";
import { ImageListIProps } from "../../interface/props/ImageListIProps";
import MyImage from "./MyImage";

const MyImageList= ({images}:ImageListIProps)=>{
    return(
        <div className="flex h-screen">
            <div className="m-auto flex-row flex flex-wrap">
                {images.map( (image:MyImageInterface,i)=>{
                    return (<MyImage
                        key={"image-"+i}
                        image={image}
                    />)
                })
                }
            </div>
        </div>
    )
};

export default MyImageList;