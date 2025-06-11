import './ScrollToBottom.css';
import { useEffect } from 'react';

function ScrollToBottom() {
    useEffect(() => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }, []);
    function bottom (){
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
    return (
        <div>
            <button onClick={bottom} className='ScrollToBottom'>v</button>
        </div>
    )
}

export default ScrollToBottom