import React from 'react';
import Tooltip from '../Blocks/Tooltip/Tooltip';

const Form = () => {
    return (

        <div className="bg-white border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6">
                <div className="border-b px-6">
                    <div className="flex justify-between -mb-px">
                        <div className="text-blue-dark py-4 text-lg">
                            Analyze Log File
                        </div>
                        <div className="flex py-4 text-sm">
                            <Tooltip tooltipText={'Please provide start and end date along with search keyword to analysis log'} bgClass='bg-white' textClass='text-yellow-400' shadow={true} direction='right'/>
                        </div>
                    </div>
                </div>

                <div className="lg:flex">
                    <div className="w-full md:w-1/3 text-center py-8">
                        <div className="border-r">
                            <div className="flex flex-col">
                                <label className="leading-loose">Start Date</label>
                                <div className="relative m-4 focus-within:text-gray-600 text-gray-400">
                                    <input type="text"
                                           className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                           placeholder="25/02/2020"/>
                                    <div className="absolute left-3 top-2">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 text-center py-8">
                        <div className="border-r">
                            <div className="flex flex-col">
                                <label className="leading-loose">End Date</label>
                                <div className="relative m-4 focus-within:text-gray-600 text-gray-400">
                                    <input type="text"
                                           className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                           placeholder="25/02/2020"/>
                                    <div className="absolute left-3 top-2">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 text-center py-8">
                        <div className="flex flex-col">
                            <label className="leading-loose">Phase</label>
                            <div className="relative m-4 focus-within:text-gray-600 text-gray-400">
                                <input type="text"
                                       className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                       placeholder="25/02/2020"/>
                                <div className="absolute left-3 top-2">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-t px-6">
                    <div className="py-4 flex items-center justify-center space-x-4">
                        <button
                            className="flex justify-center items-center text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                            Reset
                        </button>
                        <button
                            className="bg-yellow-500 flex justify-center items-center text-white px-4 py-3 rounded-md focus:outline-none">Create
                        </button>
                    </div>
                </div>
            </div>

    );
};

export default Form;