import React from 'react';
import Tooltip from "../Blocks/Tooltip/Tooltip";
import {Chart} from 'react-charts'


const Charts = ({chartData}) => {

    const processChartData = (chartData) => {
        let charts = chartData["histogram"] ? chartData["histogram"] : []
        console.log(charts)
        let plotPoints = []
        charts.forEach( (val, index) => {
            console.log(val)
            plotPoints.push([index, val["count"]])
        })
        return plotPoints
    }

    const processedData = processChartData(chartData);
    console.log(processedData)

    const data = React.useMemo(
        () => [
            {
                label: 'Log Chart',
                data: processedData ? processedData : [[1,2],[2,4]]
            }
        ],
        []
    )

    const axes = React.useMemo(
        () => [
            {primary: true, type: 'time', position: 'bottom'},
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
                    <div className="text-center px-6 py-4 overflow-hidden overflow-x-auto">
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