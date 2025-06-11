import { useEffect, useState } from 'react';
import './digitalClock.css';

function DigitalClock() {
    const [hour, setHour] = useState("00")
    const [minute, setminute] = useState("00")
    const [second, setsecond] = useState("00")

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setHour(String(now.getHours()).padStart(2, '0'));
            setminute(String(now.getMinutes()).padStart(2, '0'));
            setsecond(String(now.getSeconds()).padStart(2, '0'));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='digital-clock-container'>
            <h1>Digital Clock</h1>
            <div>
                <div className="Display">
                    <span className="Hour">{hour}:</span>
                    <span className="Minute">{minute}:</span>
                    <span className="Second">{second}</span>
                </div>
            </div>
        </div>
    )
}

export default DigitalClock