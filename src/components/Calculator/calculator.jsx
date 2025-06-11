import { useState } from "react"
import "./calc.css"


function Calculator (){
    const [firstNumber, setFirstNumber] = useState(0)
    const [secondNumber, setSecondNumber] = useState(0)
    const [result, setResult] = useState("")
    const number1 = parseFloat(firstNumber)
    const number2 = parseFloat(secondNumber)

    function add() {
        if (isNaN(number1) || isNaN(number2)) {
            setResult("Please enter valid numbers");
            return;
        }
        setResult(number1 + number2);
    }
    function substract() {
        if (isNaN(number1) || isNaN(number2)) {
            setResult("Please enter valid numbers");
            return;
        }
        setResult(number1 - number2);
    }
    function multiply() {
        if (isNaN(number1) || isNaN(number2)) {
            setResult("Please enter valid numbers");
            return;
        }
        setResult(number1 * number2);
    }
    function divide() {
        if (isNaN(number1) || isNaN(number2)) {
            setResult("Please enter valid numbers");
            return;
        }
        if (number2 === 0) {
            setResult("Cannot divide by zero");
            return;
        }
        setResult(number1 / number2);
    }


    return (
        <div className="Calc-Container">
            <h1 className="Header">Calculator</h1>
            <input className="first-number" onChange={((e) => (
                setFirstNumber(e.target.value)
            ))}  type="text" placeholder="Input one number" value = {firstNumber}/>
            <input className="second-number" onChange={((e) => (
                setSecondNumber(e.target.value)
                ))} type="text" placeholder="Input Anoher Number" value = {secondNumber} />
            <button className="add" onClick={add}>Add</button>
            <button className="substract" onClick={substract}>Substract</button>
            <button className="multiply" onClick={multiply}>Multiply</button>
            <button className="divide"onClick={divide}>Divide</button>
            <div>
                {result}
            </div>
        </div>

    )
}

export default Calculator