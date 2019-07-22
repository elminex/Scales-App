import React from 'react';
import PropTypes from 'prop-types';
import './Form.scss';
import Sharp from './Sharp';
import Flat from './Flat';
import FormNumbers from './FormNumbers';

const Form = ({
  countChange, typeChange, signsCount, flatsSelected, sharpsSelected,
}) => (
  <form className="form">
    <div className="form__type-wrapper">
      <span className="form__type-text">Gamy z:</span>
      <label className={sharpsSelected ? 'form__type-button selected' : 'form__type-button'} htmlFor="SharpsOnly">
        <Sharp sharpsSelected={sharpsSelected} />
        <Sharp sharpsSelected={sharpsSelected} />
        <Sharp sharpsSelected={sharpsSelected} />
        <input id="SharpsOnly" className="form__input" type="checkbox" name="znaki" value="sharps" checked={sharpsSelected} onChange={typeChange} />
      </label>
      <label className={flatsSelected ? 'form__type-button selected' : 'form__type-button'} htmlFor="FlatsOnly">
        <Flat flatsSelected={flatsSelected} />
        <Flat flatsSelected={flatsSelected} />
        <Flat flatsSelected={flatsSelected} />
        <input id="FlatsOnly" className="form__input" type="checkbox" name="znaki" value="flats" checked={flatsSelected} onChange={typeChange} />
      </label>
    </div>
    <div className="form__number-wrapper">
      <span className="form__number-text">Do ilu znaków?</span>
      <FormNumbers countChange={countChange} signsCount={signsCount} />
    </div>
  </form>
);

Form.propTypes = {
  countChange: PropTypes.func.isRequired,
  typeChange: PropTypes.func.isRequired,
  signsCount: PropTypes.number.isRequired,
  flatsSelected: PropTypes.bool.isRequired,
  sharpsSelected: PropTypes.bool.isRequired,
};

export default Form;
