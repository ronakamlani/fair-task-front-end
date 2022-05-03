import { CollectionInterface } from "../collection.interfact";
import { EventFormInterface } from "../forms/EventFormInterface.interfac";

export interface RemindMeModalIProps{
    isOpen:boolean,
    loading?:boolean,
    closeMe:React.MouseEventHandler<HTMLButtonElement|HTMLDivElement>,
    doSubmit:(data:EventFormInterface)=>void,
    collection:CollectionInterface|null
}