import React from 'react';

const CustomButton = ({ bgColorClass, textColorClass, borderColorClass, mode, onClick }) => {

    // Mode Can Be => [Filled, Border, Flat, Gradient, Relief, Round]

    const generateClass = (bgColorClass, textColorClass, borderColorClass, mode) => {
        if(mode == 'ghost'){

        }
    }

    return (
        <button
            className="bg-yellow-500 flex justify-center items-center text-white px-4 py-3 rounded-md focus:outline-none">Create
        </button>
    );
}

export default CustomButton;