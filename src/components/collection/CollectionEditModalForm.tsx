
import { RemindMeModalFormIProps } from "../../interface/props/RemindMeModalFormIProps";
import { useForm } from "react-hook-form";
import { MyInput } from "../common/MyInput";

import MyButton from "../common/MyButton";
import MyDateTimePicker from "../common/MyDateTimePicker";
import { useEffect } from "react";
import { isBeforeXminsDates } from "../../utility/date";
import { CollectionModalProps } from "../../interface/props/CollectionModalProps";
import { CollectionEditFormInterface } from "../../interface/forms/CollectionEditForm.interface";
import moment from "moment";


const CollectionEditModalForm = ({collection,loading,doSubmit}:CollectionModalProps)=>{
    const { register, handleSubmit,setValue, control, formState: { errors } } = useForm();


    useEffect(() => {
      register("launchDate", {
        validate: (date:Date) => { if(!date){ return true; } return isBeforeXminsDates(date,30) }, 
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

    const today = moment().add(30,"minutes");
    const startingDate = collection.launchDate?new Date(collection.launchDate) : today.toDate()

    return(
        <form className="px-5 pb-2 space-y-4 lg:px-5 sm:pb-5 xl:pb-5" onSubmit={handleSubmit(onLocalSubmit)}>
        <h3 className=" font-medium text-gray-900 text-base tracking-tight pt-6 leading-4 text-dark1">
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
          startingDate={startingDate} 
        />
        {errors.errorMessage?.message}
        <hr className="border-dark-gray2" />
        <div className="flex-row-reverse	flex">
          <MyButton 
            type="submit"
            isLoading={loading}
            buttonStyle="secondary"
            name={"Save"}        
            className="text-dark1 border border-dark1 border-2 bg-gray1 hover:bg-dark-gray2 focus:ring-4 focus:outline-none focus:ring-dark-gray1 font-medium rounded-lg text-sm px-8 py-2 text-center"
          />
        </div>
      </form>
    )
}


export default CollectionEditModalForm;