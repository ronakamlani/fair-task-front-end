import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { MyDateTimePickerProps } from "../../interface/props/MyDateTimePickerProps";
import { isBeforeDates } from "../../utility/date";
import { setDefaultResultOrder } from "dns";

const MyDateTimePicker = ({
    name,
    labelText,
    control,
    errorMessage,
    startingDate,
}:MyDateTimePickerProps)=>{


    return (
        <>
            <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >{labelText}
            </label>
            <Controller
                name={name}
                
                control={control}
                render={({ field: { value, onChange } }) => {
                    return (
                        <DatePicker
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            selected={value}
                            showTimeSelect
                            dateFormat="Pp"
                            onChange={onChange} />
                    );
                } } />
            <div className="text-red-400" style={{marginTop:10}}>{errorMessage}</div>
        </>            
    );
}

export default MyDateTimePicker;