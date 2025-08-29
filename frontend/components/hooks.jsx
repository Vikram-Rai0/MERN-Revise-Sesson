import React from 'react'
import { useState } from "react"
const Hooks = () => {
    const [table, setTable] = useState(
        {
            num1: "",
            num2: "",
            operator: "+"
        }
    );
    const [result, setResult] = useState(null);

    const handleChange = (e) => {

        setTable({
            ...table,
            [e.target.name]: e.target.value
        })
        console.log(table);
    }
    const handleCalculate = () => {
        const { num1, num2, operator } = table;
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        let res = 0;

        switch (operator) {
            case "+":
                res = n1 + n2;
                break;

            case "-":
                res = n1 - n2;

                break;
            case "*":
                res = n1 * n2;


                break;
            case "/":
                res = n1 != 0 ? n1 / n2 : "cannot divide by zero";

                break;
            default:
                res = "Invalid operation!"
        }
        setResult(res);
    }
    return (
        <div>
            <div className="calculator flex">
                <input type="int" name="num1"
                    placeholder='enter any num' value={table.num1} onChange={handleChange} />
                <select name="operator" value={table.operator} id="" onChange={handleChange}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input type="int" placeholder="endter any num " name="num2" value={table.num2} onChange={handleChange} />

                <button onClick={handleCalculate}>Calculate</button>
                {result != null && (
                    <p>result : {result}</p>
                )}
            </div>
        </div>
    );
};
export default Hooks;