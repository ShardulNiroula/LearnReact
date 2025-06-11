import AuthPage from './components/authPage/auth';
import Calculator from './components/Calculator/calculator';
import CalculatorWithButtons from './components/Calculator/calculatorButtonsUI';
import DigitalClock from './components/digitalClock/digitalClock';
import Form from './components/Forms/form';
import ScrollToBottom from './components/ScrollToBottom/ScrollToBottom';
import ScrollToTop from './components/ScrollToTop/scrollToTop';
import StopWatch from './components/stopwatch/stopWatch';
import TypeSpeedTester from './components/typeSpeed/speedTester';
import './css/App.css'


function App() {
  return (
    <div>
      <div>
        <Calculator />
      </div>
      <hr></hr>
      <div>
        <CalculatorWithButtons />
      </div>
    <hr></hr>
    <div>
      <DigitalClock />
    </div>
    <hr></hr>
    <div>
      <Form />
    </div>
    <hr></hr>
    <div>
      <ScrollToTop />
    </div>
    <div>
      <ScrollToBottom />
    </div>
    <hr></hr>
    <div>
      <AuthPage />
    </div>
    <hr></hr>
    <div>
      <StopWatch />
    </div>
    <hr></hr>
    <div>
      <TypeSpeedTester />
    </div>
    

    </div>
  )
}

export default App
