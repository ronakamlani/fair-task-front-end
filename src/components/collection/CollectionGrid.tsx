import Link from "next/link";
import { CollectionComponentProps } from "../../interface/props/CollectionComponentProps";
import { getRedableDate } from "../../utility/date";
import MyButton from "../common/MyButton";

const CollectionGrid = ({collection,onReminderClicked,onEditClicked}:CollectionComponentProps)=>{
    
    
    return(
    <div >
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{collection.name}</div>
            <p className="text-gray-700 text-base">
                Contest is at : {collection.launchDate? 
                    (<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{getRedableDate(collection.launchDate) }</span>)
                    :(<span className="inline-block bg-yellow-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Comming soon.</span>)}
            </p>
            </div>
            <div className="px-6 pt-4 pb-2 text-center">
                <MyButton 
                    name={"Remember Me"} 
                    onClick={()=>{
                        onReminderClicked(collection)
                    }}
                />
                {" "}
                <MyButton 
                    name={"Edit"}
                    buttonStyle="secondary"
                    onClick={()=>{
                        onEditClicked(collection)
                    }}
                />
                
            </div>
        </div>
    </div>
    )
}

export default CollectionGrid;