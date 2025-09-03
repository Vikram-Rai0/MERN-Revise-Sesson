import React, { useState } from "react";

const Calculator = () => {
  const [table, setTable] = useState({
    num1: "",
    num2: "",
    operator: "+",
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setTable({
      ...table,
      [e.target.name]: e.target.value,
    });
  };

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
        res = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
        break;
      default:
        res = "Invalid operation!";
    }
    setResult(res);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-gray-600 p-6 rounded-2xl shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-200">
          🧮 Simple Calculator
        </h1>

        <div className="flex gap-3 mb-4">
          <input
            type="number"
            name="num1"
            placeholder="Enter number"
            value={table.num1}
            onChange={handleChange}
            className="w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <select
            name="operator"
            value={table.operator}
            onChange={handleChange}
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 "
          >
            <option value="+" className="text-gray-700">+</option>
            <option value="-" className="text-gray-700">-</option>
            <option value="*" className="text-gray-700">*</option>
            <option value="/" className="text-gray-700">/</option>
          </select>

          <input
            type="number"
            name="num2"
            placeholder="Enter number"
            value={table.num2}
            onChange={handleChange}
            className="w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Calculate
        </button>

        {result !== null && (
          <div className="mt-4 p-3 bg-gray-50 border rounded-lg text-center">
            <p className="text-lg font-semibold text-gray-700">
              Result: <span className="text-blue-600">{result}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
