import { MyInputProps } from "../../interface/common/MyInput.interface";

export const MyInput = ({
    id,
    labelText,
    labelClass="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white",
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