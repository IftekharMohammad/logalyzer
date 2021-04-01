import React, {useState, useRef} from 'react';
import Tooltip from '../Blocks/Tooltip/Tooltip';
import CustomDateTimePicker from '../Blocks/CustomDateTimePicker/CustomDateTimePicker';
import CustomButton from '../Blocks/CustomButton/CustomButton';
import SimpleReactValidator from 'simple-react-validator';


const Form = ({onSubmit, onReset}) => {

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [phase, setPhase] = useState("");

    const [errorMessages, setErrorMessage] = useState({});

    const simpleValidator = useRef(new SimpleReactValidator());

    const startRef = useRef();
    const endRef = useRef();

    const setDateParameters = (fieldName, data) => {

        if (fieldName === "startDate") {
            setStartDate(data);
        }

        if (fieldName === "endDate") {
            setEndDate(data);
        }

    };

    const resetData = () => {
        startRef.current.resetData();
        endRef.current.resetData();
        setPhase("")
        onReset();
        setErrorMessage(simpleValidator.current.getErrorMessages());
    };

    const submitForm = () => {
        let success = false;
        let payload = null;
        if (simpleValidator.current.allValid()) {
            success = true;

            payload = {
                datetimeFrom: startDate,
                datetimeUntil: endDate,
                phrase: phase
            }

        } else {
            console.log(simpleValidator.current.getErrorMessages());
            setErrorMessage(simpleValidator.current.getErrorMessages());
        }

        onSubmit(success, payload);
    };

    return (

        <div className="bg-white border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6">
            <div className="border-b px-6">
                <div className="flex justify-between -mb-px">
                    <div className="text-blue-dark py-4 text-lg">
                        Analyze Log File
                    </div>
                    <div className="flex py-4 text-sm">
                        <Tooltip
                            tooltipText={'Please provide start and end date along with search keyword to analysis log'}
                            bgClass='bg-white' textClass='text-yellow-400' shadow={true} direction='right'/>
                    </div>
                </div>
            </div>

            <div className="lg:flex">
                <div className="w-full md:w-1/3 text-center py-8">
                    <div className="border-r">
                        <div className="flex flex-col">
                            <label className="leading-loose">Start Datetime</label>
                            <div className="relative m-4 focus-within:text-gray-600 text-gray-400">
                                <CustomDateTimePicker refs={startRef} parentFieldName="startDate"
                                                      onSelect={setDateParameters}/>
                                {simpleValidator.current.message('startDateTime', startDate, 'required', {className: 'hidden'})}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 text-center py-8">
                    <div className="border-r">
                        <div className="flex flex-col">
                            <label className="leading-loose">End Datetime</label>
                            <div className="relative m-4 focus-within:text-gray-600 text-gray-400">
                                <CustomDateTimePicker refs={endRef} parentFieldName="endDate"
                                                      onSelect={setDateParameters}/>
                                {simpleValidator.current.message('endDateTime', endDate, 'required', {className: 'hidden'})}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/3 text-center py-8">
                    <div className="flex flex-col">
                        <label className="leading-loose">Phase</label>
                        <div className="relative m-4 focus-within:text-gray-600 text-gray-400">
                            <input type="text" value={phase} onChange={(e) => {
                                setPhase(e.target.value)
                            }}
                                   className="pr-4 pl-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                   placeholder="Crash"/>

                            {simpleValidator.current.message('phrase', phase, 'required|min:2|max:50', {className: 'hidden'})}

                        </div>
                    </div>
                </div>
            </div>

            <div className={errorMessages && Object.keys(errorMessages).length > 0 ? 'w-full mb-10' : 'hidden'}>
                {Object.keys(errorMessages).map(function (key) {
                    return <div key={key}
                                className={errorMessages[key] ? 'bg-red-100 text-red-400 mx-20 text-xs rounded-sm mt-1 font-semibold py-1 px-3 ' : 'hidden'}>
                        <i aria-hidden="true" className="fa fa-info-circle text-red-500 mr-2"/>
                        {errorMessages[key]}
                    </div>
                })}

            </div>

            <div className="border-t px-6">

                <div className="py-4 flex items-center justify-center space-x-4">
                    <CustomButton text={'Reset'} mode={'border'} bgColorClass={'bg-gray-100'}
                                  textColorClass={'text-gray-400'} borderColorClass={'border-gray-400'}
                                  onClick={resetData}
                    />

                    <CustomButton text={'Submit'} mode={'filled'} bgColorClass={'bg-yellow-400'}
                                  textColorClass={'text-white'} borderColorClass={'border-yellow-400'}
                                  onClick={submitForm}
                    />

                </div>
            </div>
        </div>

    );
};

export default Form;