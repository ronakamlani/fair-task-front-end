
import { RemindMeModalFormIProps } from "../../interface/props/RemindMeModalFormIProps";
import { useForm } from "react-hook-form";
import { MyInput } from "../common/MyInput";

import MyButton from "../common/MyButton";
import MyDateTimePicker from "../common/MyDateTimePicker";
import { useEffect } from "react";
import { isBeforeDates } from "../../utility/date";
import { CollectionModalProps } from "../../interface/props/CollectionModalProps";
import { CollectionEditFormInterface } from "../../interface/forms/CollectionEditForm.interface";


const CollectionEditModalForm = ({collection,loading,doSubmit}:CollectionModalProps)=>{
    const { register, handleSubmit,setValue, control, formState: { errors } } = useForm();


    useEffect(() => {
      register("launchDate", {
        validate: (date:Date) => { if(!date){ return true; } return isBeforeDates(date) }, 
      });
    });

    useEffect(()=>{
      if (collection) {
        setValue("name",collection.name);
        if(collection.launchDate){
          setValue("launchDate", new Date(collection.launchDate));
        }
            
      }
    },[collection])
    

    const onLocalSubmit = (data:any) => {
      const formData:CollectionEditFormInterface = {
        id : collection.id,
        name : data.name,
        launchDate : data.launchDate,  
      }
      
      doSubmit(formData);
    };

    return(
        <form className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" onSubmit={handleSubmit(onLocalSubmit)}>
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          <span className="font-extralight">Edit : </span> <span className="font-extrabold">
            {collection.name}
          </span>
        </h3>
        <MyInput
          id="name"
          labelText="Name"
          type="text"
          defaultValue={collection.name}
          register={register("name", {
            required: "Please Enter Collection Name.",
            minLength:{
                value:2,
                message:"Min 3 chars."
            },
            maxLength:{
                value : 50,
                message:"Maximum 50 chars allows",
            },
          })}
          placeholder="Collection Name"
          errorMessage={errors.name?.message}
        />


        <MyDateTimePicker 
          labelText="Launch Date"
          name={"launchDate"}
          control={control}
          errorMessage={errors.launchDate?"Past date is not allows.":""}
          startingDate={collection.launchDate?new Date(collection.launchDate) : new Date()} 
        />
        {errors.errorMessage?.message}
        
        <MyButton 
          type="submit"
          isLoading={loading}
          buttonStyle="secondary"
          name={"Save"}        
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        />
      </form>
    )
}


export default CollectionEditModalForm;