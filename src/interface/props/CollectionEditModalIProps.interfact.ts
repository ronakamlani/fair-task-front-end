import { CollectionInterface } from "../collection.interfact";
import { CollectionEditFormInterface } from "../forms/CollectionEditForm.interface";

export interface CollectionEditModalIProps{
    isOpen:boolean,
    closeMe:React.MouseEventHandler<HTMLButtonElement>,
    doSubmit:(data:CollectionEditFormInterface)=>void,
    loading?:boolean,
    collection:CollectionInterface|null
}