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
                className="block mb-2 text-sm font-normal text-dark1"
            >{labelText}
            </label>
            <Controller
                name={name}
                
                control={control}
                render={({ field: { value, onChange } }) => {
                    return (
                        <DatePicker
                            className="bg-gray1 border border-dark-gray1 text-sm rounded-sm focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5  placeholder-gray-400 text-dark1"
                            selected={value}
                            showTimeInput
                            dateFormat="Pp"
                            onChange={onChange} />
                    );
                } } />
            <div className="text-red-400" style={{marginTop:10}}>{errorMessage}</div>
        </>            
    );
}

export default MyDateTimePicker;