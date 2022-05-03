
import Head from "next/head";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import CollectionEditMeModal from "../src/components/collection/CollectionEditModal";

import CollectionList from "../src/components/collection/CollectionList";
import ReminderMeModal from "../src/components/collection/RemindMeModal";
import DefaultTheme from "../src/components/theme/DefaultTheme";
import { CollectionInterface } from "../src/interface/collection.interfact";
import { CollectionEditFormInterface } from "../src/interface/forms/CollectionEditForm.interface";
import { EventFormInterface } from "../src/interface/forms/EventFormInterface.interfac";
import { CollectionListIprops } from "../src/interface/props/CollectionListIprops.interfact";
import { RootStateInterfact } from "../src/interface/redux/RootState.interfact";
import { doSubmitEditCollection, getAll } from "../src/redux/actions/collection";
import { createEvent } from "../src/redux/actions/eventRegistration";

const Collection = ({collectionReducer,getAll,createEventSubmit,eventRegistrationReducer,doSubmitEditCollection}:CollectionListIprops,)=>{

    const [isRemindMeOpen,setRemindMeOpen]=useState(false);
    const [isEditMeOpen,setEditMeOpen]=useState(false);
    const [collection,setCollection] = useState<CollectionInterface|null>(null);

    useEffect( ()=>{
        getAll();
    },[]);

    useEffect(()=>{
        if(collectionReducer.collections.length > 0 && isEditMeOpen){
            setEditMeOpen(false);
        }
    },[collectionReducer.collections]);

    const reminderMeClose = () =>{
        setRemindMeOpen(false);
    }

    const editMeClose = () =>{
        setEditMeOpen(false);
    }

    //console.log("collection",collectionReducer)

    const onReminderClicked = (collection:CollectionInterface)=>{
        setCollection(collection)
        setRemindMeOpen(true);
    }

    const onEditClicked  = (collection:CollectionInterface)=>{
        setCollection(collection)
        setEditMeOpen(true);
    }


    return(
        <DefaultTheme>
            <Head>
                <title>Remind me - Task 1</title>
            </Head>
            <h2 className="mt-10 mb-10 text-lg text-yellow-900 font-bold	">Remind me </h2>
            <CollectionList 
                collections={collectionReducer.collections}
                onReminderClicked={onReminderClicked}
                onEditClicked={onEditClicked}
            />
            <ReminderMeModal 
                isOpen={isRemindMeOpen}
                closeMe={reminderMeClose}
                collection={collection}
                doSubmit={createEventSubmit}
                loading={eventRegistrationReducer.loading}
                
            />
            <CollectionEditMeModal 
                isOpen={isEditMeOpen}
                closeMe={editMeClose}
                collection={collection}
                doSubmit={doSubmitEditCollection}
                loading={collectionReducer.loading}
            />
        </DefaultTheme>
    )
}

const mapStateToProps = (state:RootStateInterfact) => {
    //console.log("state",state);
    return {
        collectionReducer: state.collectionReducer,
        eventRegistrationReducer: state.eventRegistrationReducer,
    }
};

const mapDispatchToProps = (dispatch:any)=> {
    return {
        getAll : ()=>{
            dispatch(getAll())
        },
        createEventSubmit : (data:EventFormInterface)=>{
            dispatch(createEvent(data) )
        },
        doSubmitEditCollection: (data:CollectionEditFormInterface)=>{
            dispatch(doSubmitEditCollection(data))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Collection);