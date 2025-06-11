import { useEffect, useRef, useState } from 'react';
import './speedTester.css';

function TypeSpeedTester () {
    const [speedValue, setSpeedValue] = useState("")
    const [count, setCount] = useState(0)
    const [startTime, setStartTime] = useState(null)
    const [maxWpm, setMaxWpm] = useState(0)
    const countRef = useRef(null)
    const textareaRef = useRef(null)


    function speedInput(event) {
        if (!startTime && event.target.value.length > 0) {
            setStartTime(Date.now())
        }
        setSpeedValue(event.target.value)
    }    useEffect(() => {
        countRef.current = count;
        
        // Update max WPM if current count is higher
        if (count > maxWpm) {
            setMaxWpm(count);
        }
    }, [count, maxWpm]);
    
    // Keep textarea focused
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    }, []);

    useEffect(() => {
        let interval = null;
        if (speedValue.length > 0) {
            interval = setInterval(() => {
                const words = speedValue.trim().split(/\s+/).filter(Boolean).length;
                if (words > 0) {
                    const elapsedTimeInMinutes = (Date.now() - startTime) / 60000; // Convert ms to minutes
                    const wpm = Math.round(words / elapsedTimeInMinutes);
                    setCount(wpm);
                }
            }, 500); // Update more frequently for smoother display
        } else {
            setCount(0);
            setStartTime(null);
        }
        return () => clearInterval(interval);
    }, [speedValue, startTime]);        function clear () {
            setSpeedValue("");
            setCount(0);
            setStartTime(null);
            // Don't reset maxWpm to keep track of the best score
            // Focus the textarea again
            if (textareaRef.current) {
                textareaRef.current.focus();
            }
        }

    return (
        <div className='container'>
            <h1 className='header'>Type Speed Tester</h1>
            <div className='inputArea'>                <textarea
                    onChange={speedInput}
                    className='writeHere'
                    rows={5}
                    placeholder='Write to check your speed'
                    value={speedValue}
                    ref={textareaRef}
                    autoFocus
                />                <div className='result'>
                    <h1 className='resultHeader'>Speed: {count} words /Minute</h1>
                    <h4 className='maxValue'> Max Words per minute : {maxWpm}</h4>
                    <button className='clearBtn' onClick={clear}>Clear</button>
                </div>
            </div>
        </div>
    )
    
}

export default TypeSpeedTester