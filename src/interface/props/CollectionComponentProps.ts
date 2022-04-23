import { CollectionInterface } from "../collection.interfact";

export interface CollectionComponentProps{
    collection : CollectionInterface,
    onReminderClicked:(collection:CollectionInterface)=>void,
    onEditClicked:(collection:CollectionInterface)=>void,
}