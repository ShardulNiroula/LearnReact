import Data from "./data";
import React, { useState } from "react";
import './index.css';




function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiple, setEnableMultiple] = useState(false);
    const [multipleSelected, setMultipleSelected] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        setMultipleSelected(prev => {
            const isCurrentlySelected = prev.includes(getCurrentId);
            if (isCurrentlySelected) {
                // Remove the id if it's already selected
                return prev.filter(id => id !== getCurrentId);
            } else {
                // Add the id if it's not selected
                return [...prev, getCurrentId];
            }
        });
    }



    return (
        <div>
            <button 
                onClick={() => {
                    setEnableMultiple(!enableMultiple);
                    // Reset selections when switching modes
                    setSelected(null);
                    setMultipleSelected([]);
                }} 
                className="change-accordian-btn"
            >
                {enableMultiple ? 'Switch to Single Mode' : 'Switch to Multiple Mode'}
            </button>
            <div className="wrapper">
                <div className="accordian">
                    {
                        Data && Data.length > 0 ?
                            Data.map((dataItem, index) => (
                                <div className="item" key={index}>
                                    <div onClick={enableMultiple ?
                                        () => handleMultiSelection(dataItem.id) :
                                        () => handleSingleSelection(dataItem.id)} className="title">
                                        <h3>{dataItem.question}</h3>
                                        <span>+</span>
                                    </div>                                    {
                                        (enableMultiple 
                                            ? multipleSelected.includes(dataItem.id)
                                            : selected === dataItem.id
                                        ) ? (
                                            <div className="content">{dataItem.answer}</div>
                                        ) : null
                                    }
                                </div>
                            ))
                            : <div>No Data Found!</div>
                    }
                </div>
            </div>
        </div>
    );
}
export default Accordian;