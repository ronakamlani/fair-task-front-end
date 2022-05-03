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
        <form className="px-5 pb-2 space-y-4 lg:px-5 sm:pb-5 xl:pb-5" onSubmit={handleSubmit(onLocalSubmit)}>
        <h3 className=" font-medium text-gray-900 text-base tracking-tight pt-6 leading-4 text-dark1">
          <span className="font-extralight">Get reminder about</span> <span className="font-semibold">
            {collection.name}
          </span>
        </h3>
        <MyInput
          id="email"
          labelText="Email*"
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
        <hr className="border-dark-gray2" />
        <div className="flex-row-reverse	flex">
          <MyButton 
            type="submit"
            name={"Login"}        
            isLoading={loading}
            className="text-dark1 border border-dark1 border-2 bg-gray1 hover:bg-dark-gray2 focus:ring-4 focus:outline-none focus:ring-dark-gray1 font-medium rounded-lg text-sm px-8 py-2 text-center"
          />
        </div>
      </form>
    )
}

export default RemindMeModalForm;