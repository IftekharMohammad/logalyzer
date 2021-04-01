import React from 'react';
import Tooltip from "../Blocks/Tooltip/Tooltip";

const Tables = ({logData}) => {

    const makeHighlightedString = (txt, positions) => {
        let log = (' ' + txt).slice(1);

        positions.slice().reverse()
            .forEach(function (item) {
                log = [log.slice(0, item["toPosition"]), '</span>', log.slice(item["toPosition"])].join('');
                log = [log.slice(0, item["fromPosition"]), '<span class="text-yellow-400">', log.slice(item["fromPosition"])].join('');
            });
        return log
    }

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

                    {logData['data'] && logData['data'].length > 0 ? (
                        logData['data'].map(function (data, index) {
                            return (
                                <div key={index}
                                     className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                                    <div className="w-2/5 xl:w-1/4 px-4 flex items-center">
                                        <span className="text-lg">{data["datetime"]}</span>
                                    </div>

                                    <div className="flex w-3/5 md:w/12">
                                        <p dangerouslySetInnerHTML={{__html: makeHighlightedString(data["message"], data["highlightText"])}}>
                                        </p>
                                    </div>
                                </div>
                            )
                        })) : (
                        <div className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                            <div className="w-2/5 xl:w-1/4 px-4 flex items-center">
                                <span className="text-lg"></span>
                            </div>

                            <div className="flex w-3/5 md:w/12">
                                No Data Found
                            </div>
                        </div>
                    )
                    }


                </div>


            </div>
        </div>
    );
};

export default Tables;