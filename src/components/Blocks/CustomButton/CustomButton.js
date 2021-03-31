import React from 'react';

const CustomButton = ({text, bgColorClass, textColorClass, borderColorClass, mode, onClick }) => {

    // Mode Can Be => [filled, border, flat, relief, round]

    const generateClass = (bgColorClass, textColorClass, borderColorClass, mode) => {

        if(mode === 'filled'){
            return "focus:outline-none " + textColorClass + " text-sm py-2.5 px-5 rounded-md " + bgColorClass + " hover:" + bgColorClass + " hover:shadow-lg";
        }  else if(mode === 'border') {
            return "focus:outline-none " + textColorClass + " text-sm py-2.5 px-5 rounded-md border " + borderColorClass + " hover:" + bgColorClass;
        } else if(mode === 'flat') {
            return "focus:outline-none " + textColorClass + " text-sm py-2.5 px-5 rounded-md hover:" + bgColorClass;
        } else if(mode === 'relief') {
            return "focus:outline-none " + textColorClass + " text-sm py-2.5 px-5 border-b-4 " + borderColorClass + " rounded-md " + bgColorClass + " hover:" + bgColorClass;
        } else if(mode === 'round') {
            return "focus:outline-none " + textColorClass + " text-sm py-2.5 px-5 rounded-full border "+ borderColorClass +" hover:"+bgColorClass;
        }

    };

    return (
        <button
            className={generateClass(bgColorClass, textColorClass, borderColorClass, mode)} onClick={onClick}> {text}
        </button>

    );
};

CustomButton.defaultProps = {
    text: "Success",
    bgColorClass: "bg-blue-500",
    textColorClass: "text-white",
    borderColorClass: "",
    mode: "filled",
    onClick: console.log('Implement Click')
};

export default CustomButton;