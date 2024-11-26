import React, { useState } from "react";
import validator from 'validator'

// component imports
import H2Header from './components/H2Header';
import TextInput from './components/TextInput';
import CheckButton from './components/CheckButton';

const App = () => {

    const [creditCardNumber, setCreditCardNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errorMessageColour, setErrorMessageColour] = useState('');
  
    const handleChange = (event) => {
      setCreditCardNumber(event.target.value);
    }
  
    const checkCreditCardNumber = (event) => {
      event.preventDefault();
      // handle search logic here
      console.log(`Searching for ${creditCardNumber}...`);
      console.log(`${creditCardNumber}`);
      if (validator.isCreditCard(`${creditCardNumber}`)) {
        setErrorMessage('Valid credit card number');
        setErrorMessageColour('black');
      } else {
        setErrorMessage('Invalid credit card number');
        setErrorMessageColour('red');
      }
    }
  
  return (
    <div>
      <H2Header textContent="Check Credit Card Number" />
      <TextInput 
        placeholder="type credit card number..." 
        name="CCNumInp"
        value={creditCardNumber}
        onChange={handleChange}
      />
      <CheckButton onClick={checkCreditCardNumber} />
      <p style={{
        fontWeight: 'bold',
        color: errorMessageColour,
      }}>
        {errorMessage}
      </p>
    </div>
  );
}

export default App