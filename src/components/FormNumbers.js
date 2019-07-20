import React from 'react';
import PropTypes from 'prop-types';

const FormNumbers = ({ countChange, signsCount }) => {
  const buttons = [1, 2, 3, 4, 5, 6];
  return (
    <ul className="form__number-container">
      {buttons.map(number => (
        <li>
          <label className={number === 5 ? `${signsCount === 5 ? 'form__number-label selected' : 'form__number-label'}` : 'form__number-label'} htmlFor={`AccCount${number}`}>
            {number}
            <input id={`AccCount${number}`} className="form__input" type="radio" value={number} name="liczba znaków" onChange={countChange} />
          </label>
        </li>
      ))
      }
    </ul>
  );
};

export default FormNumbers;

FormNumbers.propTypes = {
  countChange: PropTypes.func.isRequired,
  signsCount: PropTypes.number.isRequired,
};
