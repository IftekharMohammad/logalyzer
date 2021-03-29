import React from 'react';
import logo from '../../assets/images/logo.svg';

const Footer = () => {
    return (
        <footer>
            <div className="flex items-center ">
                <div className="px-20 py-10 w-full">

                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 sm:col-span-6 md:col-span-6">
                            <div className="flex flex-col p-4">
                                <div className="flex flex-shrink-0 items-center rounded-xl">
                                    <img src={logo} style={{height: "100px"}} alt="BeezyAPI" />
                                </div>
                                <div className="flex flex-grow">
                                    <div className="ml-32 text-lg text-yellow-500">
                                        Log Analysis Made Easy
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 sm:col-span-6 md:col-span-6 pull-right">
                            <div className="flex flex-row p-4">
                                <div className="flex flex-col mt-16 flex-grow mx-auto">
                                    <div className="text-sm text-yellow-500 mb-4 text-right">All Right Reserved &copy; 2021</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
);
};

export default Footer;