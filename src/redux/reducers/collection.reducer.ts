import { CollectionReduxInterface } from "../../interface/redux/CollectionRedux.interfact";
import { COLLECTION_EDIT_SUCCESS, COLLECTION_LOADING, COLLECTION_SUCCESS } from "../type";

const initialState:CollectionReduxInterface = {
  collections: [],
  loading: false,
};

const collectionReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case COLLECTION_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    
    case COLLECTION_EDIT_SUCCESS:
      return{
        ...state,
        collections : state.collections.map((collection)=>{
            if(collection.id == action.collection.id){
              return action.collection;
            }
            return collection;
        })
      }
    case COLLECTION_SUCCESS:
      
      return {
        ...state,
        loading: false,
        collections: action.collections
      };

    default:
      return state;
  }
};

export default collectionReducer;