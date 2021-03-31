import React from 'react';
import Tooltip from "../Blocks/Tooltip/Tooltip";
import {Chart} from 'react-charts'


const Charts = () => {
    const data = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
                label: 'Series 2',
                data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
            }
        ],
        []
    )

    const axes = React.useMemo(
        () => [
            {primary: true, type: 'linear', position: 'bottom'},
            {type: 'linear', position: 'left'}
        ],
        []
    )
    return (
        <div className="w-full lg:w-1/2 px-4">
            <div className="bg-white border-t border-b sm:rounded sm:border shadow">
                <div className="border-b">
                    <div className="flex justify-between px-6 -mb-px">
                        <div className="text-blue-dark py-4 text-lg">
                            Chart
                        </div>
                        <div className="flex py-4 text-sm">
                            <Tooltip
                                tooltipText={'All the log with the phrase will be shown here as a chart with number of occurrence'}
                                bgClass='bg-white' textClass='text-yellow-400' shadow={true} direction='left'/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-center px-6 py-4">
                        <div className="py-8" style={{
                            width: '680px',
                            height: '250px'
                        }}>
                            <Chart data={data} axes={axes}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Charts;