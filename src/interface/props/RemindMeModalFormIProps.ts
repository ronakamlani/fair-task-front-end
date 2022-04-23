import { CollectionInterface } from "../collection.interfact";
import { EventFormInterface } from "../forms/EventFormInterface.interfac";

export interface RemindMeModalFormIProps{
    collection:CollectionInterface;
    loading?:boolean,
    doSubmit:(data:EventFormInterface)=>void
}