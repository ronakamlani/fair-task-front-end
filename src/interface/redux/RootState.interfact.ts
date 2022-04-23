import { CollectionReduxInterface } from "./CollectionRedux.interfact";
import { EventRegistrationReduxInterface } from "./EventRegistrationRedux.Interface";

export interface RootStateInterfact{
    collectionReducer : CollectionReduxInterface,
    eventRegistrationReducer : EventRegistrationReduxInterface
}