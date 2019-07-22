import React from 'react';
import PropTypes from 'prop-types';

const FormNumbers = ({ countChange, signsCount }) => {
  const buttons = [1, 2, 3, 4, 5, 6];
  return (
    <ul className="form__number-container">
      {buttons.map((number, index) => (
        <li key={index}>
          <label className={number === 5 ? `${signsCount === 5 ? 'form__number-button selected' : 'form__number-button'}` : 'form__number-button'} htmlFor={`AccCount${number}`}>
            {number}
            <input id={`AccCount${number}`} className="form__input" type="radio" value={number} name="liczba znaków" onChange={countChange} />
          </label>
        </li>
      ))
      }
    </ul>
  );
};

FormNumbers.propTypes = {
  countChange: PropTypes.func.isRequired,
  signsCount: PropTypes.number.isRequired,
};

export default FormNumbers;
