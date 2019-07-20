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
      <label className={`${sharpsSelected ? 'form__input-label-acc sharp selected' : 'form__input-label-acc sharp'}`} htmlFor="SharpsOnly">
        <Sharp />
        <input id="SharpsOnly" className="form__input" type="checkbox" name="znaki" value="sharps" checked={sharpsSelected} onChange={typeChange} />
      </label>
      <label className={`${flatsSelected ? 'form__input-label-acc flat selected' : 'form__input-label-acc flat'}`} htmlFor="FlatsOnly">
        <Flat />
        <input id="FlatsOnly" className="form__input" type="checkbox" name="znaki" value="flats" checked={flatsSelected} onChange={typeChange} />
      </label>
    </div>
    <div className="form__number-wrapper">
      <span className="form__number-text">Ilość znaków</span>
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
