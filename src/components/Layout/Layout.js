import React, {useState} from 'react';
import Form from "../Form/Form";
import Table from "../Table/Table";
import Charts from "../Chart/Chart";


const Layout = () => {

    const [showData, setShowData] = useState(false);
    const [logData, setLogData] = useState({});
    const [chartData, setChartData] = useState({});

    const onSubmit = (success, data) => {
        if (success) {
            setShowData(true);
        }else{

        }

        console.log(showData);
    };

    const onReset = () => {
        setShowData(false);
    };

    return (
        <div className='maintain-window-height min-height overflow-y-auto bg-gray-100 text-gray-500 mt-28'>
            <div className="flex-grow container mx-auto sm:px-4 pt-6 pb-8">
                <Form onSubmit={onSubmit} onReset={onReset}/>

                <div className={showData ? 'flex flex-wrap -mx-4' : 'hidden'}>
                    <Table/>
                    <Charts/>

                </div>
            </div>
        </div>

    );
};

export default Layout;