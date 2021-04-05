import React, {useState, useImperativeHandle} from "react";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import "./CustomDateTimePicker.css"

const CustomDateTimePicker = ({refs, parentFieldName, onSelect, minDate, maxDate}) => {
    const [date, setDate] = useState(null);

    useImperativeHandle(refs, () => ({

        resetData() {
            setDate(null);
            onSelect(parentFieldName, "");
        }


    }));

    const processDate = (data) => {
        setDate(data);
        onSelect(parentFieldName, data);

    };

    return (

        <>
            <DatePicker
                className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                selected={date}
                onChange={date => processDate(date)}
                timeInputLabel="Time:"
                dateFormat="MMM d kk:mm:ss"
                minDate={minDate ? minDate : null}
                maxDate={maxDate ? maxDate : null}
                showTimeInput
            />
            <div className="absolute left-3 top-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
            </div>
        </>
    );
}

export default CustomDateTimePicker;