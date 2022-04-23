import { CollectionEditFormInterface } from "../forms/CollectionEditForm.interface";
import { EventFormInterface } from "../forms/EventFormInterface.interfac";
import { CollectionReduxInterface } from "../redux/CollectionRedux.interfact";
import { EventRegistrationReduxInterface } from "../redux/EventRegistrationRedux.Interface";

export interface CollectionListIprops{
    collectionReducer:CollectionReduxInterface,
    eventRegistrationReducer:EventRegistrationReduxInterface,
    getAll:Function,
    createEventSubmit:(data:EventFormInterface)=>void,
    doSubmitEditCollection:(data:CollectionEditFormInterface)=>void,
}