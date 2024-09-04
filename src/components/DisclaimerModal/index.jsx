import React from "react";

 
const DisclaimerModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
 
    return (
        <div onClick={onClose} className="flex justify-center top-0 left-0 fixed w-full h-full backdrop-blur transition-all">
            <div className="bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 h-auto w-1/2 p-2 m-auto " >
                {children}
            </div>
        </div>
    );
};
 
export default DisclaimerModal;