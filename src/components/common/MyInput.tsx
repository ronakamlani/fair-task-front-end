import { MyInputProps } from "../../interface/common/MyInput.interface";

export const MyInput = ({
    id,
    labelText,
    labelClass="block mb-2 text-sm font-normal text-dark1",
    className="bg-gray1 border border-dark-gray1 text-sm rounded-sm focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5  placeholder-gray-400 text-dark1",
    register,
    errorMessage,
    ...inputprops
    }:MyInputProps) =>{
    return(
        <div>
          <label
            htmlFor={id}
            className={labelClass}
          >
            {labelText}
          </label>
          <input  
            className={className}
            {...register}
            {...inputprops}
          />
          <span className="text-red-400">{errorMessage}</span>
        </div>
    );
}