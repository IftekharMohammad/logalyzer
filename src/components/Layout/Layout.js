import React, {useState} from 'react';
import Form from "../Form/Form";
import DataShow from "../DataShow/DataShow";


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
                    <div className="w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col">
                        <div
                            className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
                            <div className="border-b">
                                <div className="flex justify-between px-6 -mb-px">
                                    <h3 className="text-blue-dark py-4 font-normal text-lg">Your Portfolio</h3>
                                    <div className="flex">
                                        <button type="button" tooltip='hello'
                                                className="appearance-none py-4 text-blue-dark border-b border-blue-dark mr-3">
                                            List
                                        </button>
                                        <button type="button"
                                                className="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark">
                                            Chart
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div className='overflow-hidden overflow-y-auto max-35'>
                                <div className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                                    <div className="w-2/5 xl:w-1/4 px-4 flex items-center">
                                        <div className="rounded-full bg-grey inline-flex mr-3">
                                            <svg className="fill-current text-white h-8 w-8 block"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38">
                                                <g fillRule="evenodd">
                                                    <path
                                                        d="M12.29 28.04l1.29-5.52-1.58.67.63-2.85 1.64-.68L16.52 10h5.23l-1.52 7.14 2.09-.74-.58 2.7-2.05.8-.9 4.34h8.1l-.99 3.8z"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <span className="text-lg">Litecoin</span>
                                    </div>
                                    <div className="hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center">
                                        <div className="bg-grey h-2 w-2 rounded-full mr-2"></div>
                                        0%
                                    </div>
                                    <div className="flex w-3/5 md:w/12">
                                        <div className="w-1/2 px-4">
                                            <div className="text-right">
                                                0.0000 LTC
                                            </div>
                                        </div>
                                        <div className="w-1/2 px-4">
                                            <div className="text-right text-grey">
                                                CA$0.00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="bg-white border-t border-b sm:rounded sm:border shadow">
                            <div className="border-b">
                                <div className="flex justify-between px-6 -mb-px">
                                    <h3 className="text-blue-dark py-4 font-normal text-lg">Your Portfolio</h3>
                                    <div className="flex">
                                        <button type="button" tooltip='hello'
                                                className="appearance-none py-4 text-blue-dark border-b border-blue-dark mr-3">
                                            List
                                        </button>
                                        <button type="button"
                                                className="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark">
                                            Chart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="text-center px-6 py-4">
                                    <div className="py-8">
                                        <div className="mb-4">
                                            <svg className="inline-block fill-current text-grey h-16 w-16"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path
                                                    d="M11.933 13.069s7.059-5.094 6.276-10.924a.465.465 0 0 0-.112-.268.436.436 0 0 0-.263-.115C12.137.961 7.16 8.184 7.16 8.184c-4.318-.517-4.004.344-5.974 5.076-.377.902.234 1.213.904.959l2.148-.811 2.59 2.648-.793 2.199c-.248.686.055 1.311.938.926 4.624-2.016 5.466-1.694 4.96-6.112zm1.009-5.916a1.594 1.594 0 0 1 0-2.217 1.509 1.509 0 0 1 2.166 0 1.594 1.594 0 0 1 0 2.217 1.509 1.509 0 0 1-2.166 0z"/>
                                            </svg>
                                        </div>
                                        <p className="text-2xl text-grey-darker font-medium mb-4">No buys or sells
                                            yet</p>
                                        <p className="text-grey max-w-xs mx-auto mb-6">You've successfully linked a
                                            payment method and can start buying digital currency.</p>
                                        <div>
                                            <button type="button"
                                                    className="bg-blue hover:bg-blue-dark text-white border border-blue-dark rounded px-6 py-4">Buy
                                                now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Layout;