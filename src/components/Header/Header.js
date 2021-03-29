import React from 'react';
import logo from '../../assets/images/logo.svg';


const Header = () => {
    return (
        <>
            {/*<header className="sticky z-20 w-full xl:px-0">*/}
            {/*    <div*/}
            {/*        className="navbar fixed-top navbar-expand-sm navbar-light bg-light flex items-center justify-between flex-wrap bg-white lg:px-12 shadow border-solid border-t-2 border-yellow-400 text-yellow-600">*/}
            {/*        <a className="navbar-brand" href="/">*/}
            {/*            <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">*/}
            {/*            <span className="font-semibold text-xl tracking-tight">*/}
            {/*                <img className='p-4' src={logo} style={{maxWidth: '200px'}} alt="Logalyzer"/>*/}
            {/*            </span>*/}
            {/*            </div>*/}
            {/*        </a>*/}

            {/*        <div className='md:w-full sm:w-full flex max-w-screen-xl'>*/}
            {/*            <small> Log Analysis Made Easy </small>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</header>*/}


            <div className="w-full  shadow border-solid border-t-2 border-yellow-400 text-yellow-500 bg-white fixed top-0 animated z-40">
                <div
                    className="flex flex-col  px-20 mx-auto md:items-center md:justify-between md:flex-row">
                    <div className="p-4 flex flex-row items-center justify-between">
                        <a href="/" className="tracking-widest rounded-lg focus:outline-none focus:shadow-outline">
                            <img className='p-4' src={logo} style={{maxWidth: '200px'}} alt="Logalyzer"/>
                        </a>

                    </div>

                    <div className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row bg-white">
                        Log Analysis Made Easy
                    </div>
                </div>
            </div>
        </>


    );
};

export default Header;

