import React, { useState, useEffect } from 'react';
import './calcUI.css';

function CalculatorWithButtons() {
    const [show, setShow] = useState(0)
    const inputRef = React.useRef(null);

    function display(event) {
        const number = event.target.innerText;
        if (number === "C") {
            setShow(0);
        } else {
            setShow(prev => (prev === 0 ? number : prev + number));
        }
        // Keep focus on the input field after button click
        inputRef.current.focus();
    }

    function submit() {
        try {
            // eslint-disable-next-line no-eval
            const result = eval(show);
            setShow(result);
        } catch {
            setShow("Error");
        }
    } function change(e) {
        setShow(e.target.value)
    }

    /**
     * Handles keyboard events in the input field
     * Executes the calculation when Enter key is pressed
     * @param {React.KeyboardEvent} e - The keyboard event object
     */    function handleKeyPress(e) {
        // Check if the pressed key is 'Enter'
        if (e.key === 'Enter') {
            // Prevent default form submission behavior
            e.preventDefault();

            // Call the submit function to perform calculation
            submit();
        }
    }

    // Focus the input field when the component mounts
    useEffect(() => {
        // Focus on the input element
        inputRef.current.focus();
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div className="calculator-container">
            <div className="calculator-wrapper">
                <h1 className="calculator-title">Calculator</h1>
                <div className="Calculator">
                    <div className="display">
                        <input
                            ref={inputRef}
                            onChange={change}
                            onKeyDown={handleKeyPress}
                            type="text"
                            value={show}
                            className="displayText"
                        />
                    </div>
                    <div className="buttons">
                        <button onClick={display} className="button">7</button>
                        <button onClick={display} className="button">8</button>
                        <button onClick={display} className="button">9</button>
                        <button onClick={display} className="button operator">/</button>
                        <button onClick={display} className="button">4</button>
                        <button onClick={display} className="button">5</button>
                        <button onClick={display} className="button">6</button>
                        <button onClick={display} className="button operator">*</button>
                        <button onClick={display} className="button">1</button>
                        <button onClick={display} className="button">2</button>
                        <button onClick={display} className="button">3</button>
                        <button onClick={display} className="button operator">-</button>
                        <button onClick={display} className="button">0</button>
                        <button onClick={display} className="button">.</button>
                        <button onClick={submit} className="button equals">=</button>
                        <button onClick={display} className="button operator">+</button>
                        <button onClick={display} className="clear">C</button>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default CalculatorWithButtons