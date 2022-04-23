import { CollectionInterface } from "../collection.interfact";
import { CollectionEditFormInterface } from "../forms/CollectionEditForm.interface";
import { EventFormInterface } from "../forms/EventFormInterface.interfac";

export interface CollectionEditFormProps{
    collection:CollectionInterface;
    loading?:boolean,
    doSubmit:(data:CollectionEditFormInterface)=>void
}