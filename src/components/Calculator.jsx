import Display from "./Display"
import Button from "./Button";
import { useState } from "react";


function Calculator() {
    const [currDisplayValue, updateDisplay] = useState("")

    function updateValue(event, insertion) {
        let newValue = currDisplayValue;
        if (insertion === "c") {
            newValue = "";
        } else if (insertion === "d") {
            newValue = newValue.slice(0,-1)
        } else if (insertion === "=") {
            newValue = eval(currDisplayValue);
        } else {
            newValue = newValue + insertion
        }
        updateDisplay(newValue);
    };

    return <div className="calculator">
                <form>
                    <span className="calculator-label">
                        just another calculator
                    </span>
                    <Display value={currDisplayValue}></Display>
                    <section>
                        <Button value="AC" role="clear" handleClick={event => updateValue(event, "c")}/>
                        <Button value="DEL" role="delete" handleClick={event => updateValue(event, "d")}/>
                        <Button value="%" role="percent" handleClick={event => updateValue(event, "%")}/>
                        <Button value="÷" role="divide" handleClick={event => updateValue(event, "/")}/>
                    </section>
                    <section>
                        <Button value="7" role="number" handleClick={event => updateValue(event, "7")}/>
                        <Button value="8" role="number" handleClick={event => updateValue(event, "8")}/>
                        <Button value="9" role="number" handleClick={event => updateValue(event, "9")}/>
                        <Button value="X" role="multiply"  handleClick={event => updateValue(event, "*")}/>
                    </section>
                    <section>
                        <Button value="4" role="number" handleClick={event => updateValue(event, "4")}/>
                        <Button value="5" role="number" handleClick={event => updateValue(event, "5")}/>
                        <Button value="6" role="number" handleClick={event => updateValue(event, "6")}/>
                        <Button value="-" role="subtract" handleClick={event => updateValue(event, "-")}/>
                    </section>
                    <section>
                        <Button value="1" role="number" handleClick={event => updateValue(event, "1")}/>
                        <Button value="2" role="number" handleClick={event => updateValue(event, "2")}/>
                        <Button value="3" role="number" handleClick={event => updateValue(event, "3")}/>
                        <Button value="+" role="add" handleClick={event => updateValue(event, "+")}/>
                    </section>
                    <section>
                        <Button value="0" role="number" handleClick={event => updateValue(event, "0")}/>
                        <Button value="." role="punctuate" handleClick={event => updateValue(event, ".")}/>
                        <Button value="=" role="equals" handleClick={event => updateValue(event, "=")}/>
                    </section>
                </form>
            </div>
};

export default Calculator;