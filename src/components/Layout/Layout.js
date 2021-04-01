import React, {useState} from 'react';
import Form from "../Form/Form";
import Table from "../Table/Table";
import Charts from "../Chart/Chart";

import Loader from "../Blocks/Loader/Loader";
import ErrorView from "../ErrorView/ErrorView";

import axios from "axios";


const Layout = () => {

    const [showData, setShowData] = useState(false);
    const [logData, setLogData] = useState({});
    const [chartData, setChartData] = useState({});

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const onSubmit = (success, data) => {
        if (success) {

            axios.post('http://localhost:8080/api/data', data, {headers: {"Access-Control-Allow-Origin": "*"}})
                .then(function (response) {
                    setLogData(response);
                    axios.post('http://localhost:8080/api/histogram', data, {headers: {"Access-Control-Allow-Origin": "*"}})
                        .then(function (responseChart) {
                            setChartData(response);
                            setIsLoaded(true);
                        })
                        .catch(function (error) {
                            setIsLoaded(true);
                            setError(error);
                            console.log(error);
                        });
                })
                .catch(function (error) {
                    setIsLoaded(true);
                    setError(error);
                    console.log(error);
                });

            setShowData(true);
        } else {

        }

        console.log(showData);
    };

    const onReset = () => {
        setShowData(false);
    };

    if (error) {
        return (
            <>
                <ErrorView/>
            </>
        );
    } else if (!isLoaded) {
        return (
            <>
                <Loader/>
            </>
        );
    } else {
        return (
            <>
                <div className='maintain-window-height min-height overflow-y-auto bg-gray-100 text-gray-500 mt-28'>
                    <div className="flex-grow container mx-auto sm:px-4 pt-6 pb-8">
                        <Form onSubmit={onSubmit} onReset={onReset}/>

                        <div className={showData ? 'flex flex-wrap -mx-4' : 'hidden'}>
                            <Table logData={logData}/>
                            <Charts chartData={chartData}/>

                        </div>
                    </div>
                </div>
            </>
        );
    }

};

export default Layout;