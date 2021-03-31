import React from 'react';
import Tooltip from "../Blocks/Tooltip/Tooltip";

const Tables = () => {
    return (
        <div className="w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col">
            <div
                className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
                <div className="border-b">
                    <div className="flex justify-between px-6 -mb-px">
                        <div className="text-blue-dark py-4 text-lg">
                            Log Data
                        </div>
                        <div className="flex py-4 text-sm">
                            <Tooltip
                                tooltipText={'All the log with the phrase will be shown here with the phrases highlighted'}
                                bgClass='bg-white' textClass='text-yellow-400' shadow={true} direction='left'/>
                        </div>

                    </div>
                </div>


                <div className='overflow-hidden overflow-y-auto max-35'>
                    <div className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                        <div className="w-2/5 xl:w-1/4 px-4 flex items-center">
                            <span className="text-lg">Mar 12 12:13:15</span>
                        </div>

                        <div className="flex w-3/5 md:w/12">
                            Text Will Be Here
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Tables;