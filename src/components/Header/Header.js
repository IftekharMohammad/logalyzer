import React from 'react';
import logo from '../../assets/images/logo.svg';


const Header = () => {
    return (
        <>
            <div className="w-full  shadow border-solid border-t-2 border-yellow-400 text-yellow-500 bg-white fixed top-0 animated z-40">
                <div
                    className="flex flex-col  px-20 mx-auto md:items-center md:justify-between md:flex-row">
                    <div className="p-4 flex flex-row items-center justify-between">
                        <a href="/" className="tracking-widest rounded-lg focus:outline-none focus:shadow-outline">
                            <img className='p-4' src={logo} style={{maxWidth: '200px'}} alt="Logalyzer"/>
                        </a>

                    </div>

                    <div id='slug' className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row bg-white">
                        Log Analysis Made Easy
                    </div>
                </div>
            </div>
        </>


    );
};

export default Header;

