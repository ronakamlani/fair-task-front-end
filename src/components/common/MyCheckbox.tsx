import { MycheckboxInterface } from "../../interface/common/MyCheckboxProps.interface"

export const Mycheckbox = ({
    text,
    errorMessage,
    id,
    register,
    className="w-4 h-4 bg-gray1 rounded border border-gray1 focus:ring-0 focus:ring-dark1 ",
    labelClassName="font-normal text-dark1 "+ (errorMessage != undefined?"text-red-400 dark:text-red-400":""),
    ...inputProps
    
}:MycheckboxInterface)=>{
    return(
        <div className="flex justify-between">
          <div className="flex items-start">
            <div className="text-sm">
              <label
                htmlFor={id}
                className={labelClassName }
              >
                {text}
              </label>
            </div>
            <div className="flex items-center h-5 ml-4">
              <input
                id={id}
                type="checkbox"
                aria-describedby={id}
                className={className}
                {...register}
                {...inputProps}
              />
            </div>
          </div>
        </div>
    );
}