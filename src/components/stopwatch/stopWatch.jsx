import { useEffect, useState, useRef } from 'react';
import './stopWatch.css';



function StopWatch(){
    const [hour, sethour] = useState(0)
    const [minute, setminute] = useState(0)
    const [second, setsecond] = useState(0)
    const [millisecond, setMillisecond] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const [hasStarted, setHasStarted] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            // Start the interval if isRunning is true
            intervalRef.current = setInterval(() => {
                setMillisecond(prevMillisecond => {
                    if (prevMillisecond === 99) {
                        setsecond(prevSecond => {
                            if (prevSecond === 59) {
                                setminute(prevMinute => {
                                    if (prevMinute === 59) {
                                        sethour(prevHour => prevHour + 1);
                                        return 0;
                                    }
                                    return prevMinute + 1;
                                });
                                return 0;
                            }
                            return prevSecond + 1;
                        });
                        return 0;
                    }
                    return prevMillisecond + 1;
                });
            }, 10);

            // Cleanup function for this specific interval
            return () => {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            };
        } else {
            // If not running, ensure any existing interval is cleared
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
    }, [isRunning]);

    
    function start () {
        setIsRunning(true);
        setHasStarted(true);
                   
    }
    
    function pause () {
        setIsRunning(false); // useEffect will handle clearing the interval
    }

    function resume () {
        setIsRunning(true);
    }
    
    function end () {
        setIsRunning(false); // useEffect will handle clearing the interval
        sethour(0);
        setminute(0);
        setsecond(0);
        setMillisecond(0);
        setHasStarted(false);
    }

        const formatNumber = (num) => {
            return num.toString().padStart(2, '0');
        }


    return(
        <div className='StopWatchCotainer'>
            <h1 className='StopWatchHeader'>Stop Watch</h1>            <div className='Timer'>
                <span className='Hour'>{formatNumber(hour)}</span>
                <span className='Minute'>{formatNumber(minute)}</span>
                <span className='Second'>{formatNumber(second)}</span>
                <span className='Millisecond'>{formatNumber(millisecond)}</span>
                <div className='StopWatchButtons'>                    <button
                        onClick={start}
                        className='Start'
                        disabled={isRunning || hour !== 0 || minute !== 0 || second !== 0 || millisecond !== 0}
                    >
                        Start
                    </button>

                    {isRunning || !hasStarted ? (
                        <button
                            onClick={pause}
                            className='Pause'
                            disabled={!hasStarted}
                        >
                            Pause
                        </button>
                    ) : (                        <button
                            onClick={resume}
                            className='Resume'
                            disabled={hour === 0 && minute === 0 && second === 0 && millisecond === 0}
                        >
                            Resume
                        </button>
                    )}

                    <button
                        onClick={end}
                        className='Stop'
                        disabled={!hasStarted}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )

}

export default StopWatch