import React, { useState } from 'react';
import './style.css';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const validateInput = () => {
    // Check if num1 and num2 are not empty and are valid numbers
    if (num1.trim() === '' || num2.trim() === '' || isNaN(num1) || isNaN(num2)) {
      setError('Invalid input. Please enter valid numbers.');
      return false;
    }
    return true;
  };

  const performOperation = (operation) => {
    if (validateInput()) {
      const num1Float = parseFloat(num1);
      const num2Float = parseFloat(num2);

      let resultValue;

      switch (operation) {
        case 'add':
          resultValue = num1Float + num2Float;
          break;
        case 'subtract':
          resultValue = num1Float - num2Float;
          break;
        case 'multiply':
          resultValue = num1Float * num2Float;
          break;
        case 'divide':
          if (num2Float === 0) {
            setError('Division by zero is not allowed.');
            return;
          }
          resultValue = num1Float / num2Float;
          break;
        default:
          setError('Invalid operation.');
          return;
      }

      setResult(`Result: ${resultValue}`);
      setError('');
    }
  };

  return (
    <div class="center">
      <input
        type="text"
        placeholder="Enter number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      /><br></br>
      <input
        type="text"
        placeholder="Enter number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div>
      <table>
        <tr>
            <td>
      <button onClick={() => performOperation('add')}>+</button>
      <button onClick={() => performOperation('subtract')}>-</button>
      <button onClick={() => performOperation('multiply')}>*</button>
      <button onClick={() => performOperation('divide')}>/</button>
      </td>
      </tr>
      </table>
      </div>
      <input
        type="text"
        placeholder="result"
        value={result}
        onChange={(e) => setResult(e.target.value)}
      />
      {error && <div className="error">{error}</div>}
      {result && <div className="result">{result}</div>}
    </div>
  );
}

export default Calculator;
