
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
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {collections.map((collection:CollectionInterface)=>{
                return(
                    <CollectionGrid
                        key={"collection"+collection.id}
                        collection={collection}
                        onReminderClicked={onReminderClicked}
                        onEditClicked={onEditClicked}
                    />
                )
            })}
            
            
        </div>
    );
}



export default CollectionList;