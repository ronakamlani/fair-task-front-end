
import { CollectionInterface } from "../../interface/collection.interfact";
import { CollectionListIprops } from "../../interface/props/CollectionListIprops.interfact";
import { ColletionListComponentPropsInterfact } from "../../interface/props/CollectionListComponentProps.interfact";
import CollectionGrid from "./CollectionGrid";
import Loading from "../common/Loading";


const CollectionList = ({collections,onReminderClicked,onEditClicked}:ColletionListComponentPropsInterfact)=>{

    console.log(collections)
    
    if(!collections ||  collections.length <=0 ){
        return (
            <Loading />
        )
    }

    return(
        <div className="flex flex-wrap mb-4">
            {collections.map((collection:CollectionInterface)=>{
                return(
                    <div className="md:w-1/3 w-full mb-4 px-2"
                    key={"collection"+collection.id}
                    >
                    <CollectionGrid
                        collection={collection}
                        onReminderClicked={onReminderClicked}
                        onEditClicked={onEditClicked}
                    />
                    </div>
                )
            })}
            
            
        </div>
    );
}



export default CollectionList;