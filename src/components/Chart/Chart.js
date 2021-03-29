import React from 'react';
import {curveCatmullRom} from 'd3-shape';

import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries
} from 'react-vis';

const Chart = () => {
    const data = [
        {x: 0, y: 8},
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 3, y: 9},
        {x: 4, y: 1},
        {x: 5, y: 7},
        {x: 6, y: 6},
        {x: 7, y: 3},
        {x: 8, y: 2},
        {x: 9, y: 0}
    ];

    return (

        // <div className="col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-2 xl:col-span-2">
        //     <div className="bg-white shadow-lg rounded-lg px-4 py-6 mx-4 my-4">
        //         <XYPlot width={500} height={500}>
        //             <HorizontalGridLines style={{stroke: '#B7E9ED'}}/>
        //             <VerticalGridLines style={{stroke: '#B7E9ED'}}/>
        //             <XAxis
        //                 title="Datetime"
        //                 style={{
        //                     line: {stroke: '#ADDDE1'},
        //                     ticks: {stroke: '#ADDDE1'},
        //                     text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
        //                 }}
        //             />
        //             <YAxis title="Phase Count"/>
        //             <LineSeries
        //                 className="first-series"
        //                 data={[{x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 15}, {x: 4, y: 12}]}
        //                 style={{
        //                     strokeLinejoin: 'round',
        //                     strokeWidth: 4
        //                 }}
        //             />
        //             <LineSeries className="second-series" data={null}/>
        //             <LineSeries
        //                 className="third-series"
        //                 curve={'curveMonotoneX'}
        //                 data={[{x: 1, y: 10}, {x: 2, y: 4}, {x: 3, y: 2}, {x: 4, y: 15}]}
        //                 strokeDasharray="7, 3"
        //             />
        //             <LineSeries
        //                 className="fourth-series"
        //                 curve={curveCatmullRom.alpha(0.5)}
        //                 data={[{x: 1, y: 7}, {x: 2, y: 11}, {x: 3, y: 9}, {x: 4, y: 2}]}
        //             />
        //         </XYPlot>
        //     </div>
        // </div>

        <div className="col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-2 xl:col-span-2">
            <div className="bg-white shadow-lg rounded-lg px-4 py-6 mx-4 my-4">
                <div className="max-w-md mx-auto">
                        <h2 className="leading-relaxed">Analyze Log File</h2>
                        <div className="flex items-center space-x-5">
                            <div
                                className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i
                            </div>
                            <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                <p className="text-sm text-gray-500 font-normal leading-relaxed">
                                    Lorem ipsum, dolor
                                    sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <XYPlot width={500} height={500}>
                    <HorizontalGridLines style={{stroke: '#B7E9ED'}}/>
                    <VerticalGridLines style={{stroke: '#B7E9ED'}}/>
                    <XAxis
                        title="Datetime"
                        style={{
                            line: {stroke: '#ADDDE1'},
                            ticks: {stroke: '#ADDDE1'},
                            text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                        }}
                    />
                    <YAxis title="Phase Count"/>
                    <LineSeries
                        className="first-series"
                        data={[{x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 15}, {x: 4, y: 12}]}
                        style={{
                            strokeLinejoin: 'round',
                            strokeWidth: 4
                        }}
                    />
                    <LineSeries className="second-series" data={null}/>
                    <LineSeries
                        className="third-series"
                        curve={'curveMonotoneX'}
                        data={[{x: 1, y: 10}, {x: 2, y: 4}, {x: 3, y: 2}, {x: 4, y: 15}]}
                        strokeDasharray="7, 3"
                    />
                    <LineSeries
                        className="fourth-series"
                        curve={curveCatmullRom.alpha(0.5)}
                        data={[{x: 1, y: 7}, {x: 2, y: 11}, {x: 3, y: 9}, {x: 4, y: 2}]}
                    />
                </XYPlot>
                    </div>
            </div>
        </div>
    );
};

export default Chart;