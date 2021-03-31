import React, {useState} from 'react';
import Form from "../Form/Form";
import Table from "../Table/Table";
import Charts from "../Chart/Chart";


const Layout = () => {

    const [showData, setShowData] = useState(false);

    const onSubmit = () => {
        console.log('sdsd');
        setShowData(true);

        console.log(showData);
    };

    return (
        <div className='maintain-window-height min-height overflow-y-auto bg-gray-100 text-gray-500 mt-28'>
            <div className="flex-grow container mx-auto sm:px-4 pt-6 pb-8">
                <Form onSubmit={onSubmit}/>

                <div className={showData ? 'flex flex-wrap -mx-4' : 'hidden'}>
                    <Table/>
                    <Charts/>

                </div>
            </div>
        </div>

    );
};

export default Layout;