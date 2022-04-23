import { RemindMeModalFormIProps } from "../../interface/props/RemindMeModalFormIProps";
import { useForm } from "react-hook-form";
import { MyInput } from "../common/MyInput";
import { Mycheckbox } from "../common/MyCheckbox";
import MyButton from "../common/MyButton";
import { EventFormInterface } from "../../interface/forms/EventFormInterface.interfac";


const RemindMeModalForm = ({collection,doSubmit,loading}:RemindMeModalFormIProps)=>{
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onLocalSubmit = (data:any) => {
      const formData: EventFormInterface = {
        email : data.email,
        collectionId : collection.id,
      };
      //console.log("createEventSubmit",createEventSubmit);
      doSubmit(formData);
    };

    return(
        <form className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" onSubmit={handleSubmit(onLocalSubmit)}>
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          <span className="font-extralight">Get reminder about</span> <span className="font-extrabold">
            {collection.name}
          </span>
        </h3>
        <MyInput
          id="email"
          labelText="Email"
          type="email"
          defaultValue=""
          register={register("email", {
            required: "Please type your email address.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address."
            }
          })}
          placeholder="name@company.com"
          errorMessage={errors.email?.message}
        />
        <Mycheckbox 
          text="AGREE TO OUR TERMS & CONDITIONS"
          id="rememberMe"
          register={register("rememberMe", { required: "Please agree terms and conditions" })}
          errorMessage={errors.rememberMe}
        />
        <MyButton 
          type="submit"
          name={"Confirm"}        
          isLoading={loading}
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        />
      </form>
    )
}

export default RemindMeModalForm;