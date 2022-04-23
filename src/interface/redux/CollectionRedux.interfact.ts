import { CollectionInterface } from "../collection.interfact";

export interface CollectionReduxInterface{
    collections: CollectionInterface[],
    loading: boolean,
}