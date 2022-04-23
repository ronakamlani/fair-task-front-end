import { MycheckboxInterface } from "../../interface/common/MyCheckboxProps.interface"

export const Mycheckbox = ({
    text,
    errorMessage,
    id,
    register,
    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 ",
    labelClassName="font-medium text-gray-900 dark:text-gray-300 "+ (errorMessage != undefined?"text-red-400 dark:text-red-400":""),
    ...inputProps
    
}:MycheckboxInterface)=>{
    return(
        <div className="flex justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id={id}
                type="checkbox"
                aria-describedby={id}
                className={className}
                {...register}
                {...inputProps}
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor={id}
                className={labelClassName }
              >
                {text}
              </label>
            </div>
          </div>
        </div>
    );
}