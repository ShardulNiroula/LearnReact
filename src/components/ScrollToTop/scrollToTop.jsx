import './ScrollToTop.css';

function ScrollToTop() {
    function top() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
return (
        <div>
            <button onClick={top} className='ScrollToTop'>^</button>
        </div>
    )
}

export default ScrollToTop