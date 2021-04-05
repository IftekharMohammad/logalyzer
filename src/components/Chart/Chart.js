import React from 'react';
import Tooltip from "../Blocks/Tooltip/Tooltip";
import {Line} from 'react-chartjs-2';


const Charts = ({chartData}) => {

    const processChartData = (chartData) => {
        let charts = chartData["histogram"] ? chartData["histogram"] : []
        let plotPointTexts = []
        let plotPoints = []
        charts.forEach((val, index) => {
            plotPointTexts.push(val["datetime"])
            plotPoints.push(val["count"])
        })

        return {
            labels: plotPointTexts,
            datasets: [
                {
                    label: 'Log Occurrences',
                    data: plotPoints,
                    fill: false,
                    pointBorderWidth: 3,
                    pointHoverRadius: 5,
                    borderColor: 'rgb(251, 191, 35)',
                    pointBackgroundColor: '#827280',
                },
            ],
        }
    }


    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    }
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
                            minWidth: '680px',
                            minHeight: '300px'
                        }}>
                            <Line data={processChartData(chartData)} options={options}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Charts;