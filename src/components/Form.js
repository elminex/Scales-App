import React from 'react';
import PropTypes from 'prop-types';
import './Form.scss';
import Sharp from './Sharp';
import Flat from './Flat';

const Form = ({
  countChange, typeChange, signsCount, flatsSelected, sharpsSelected,
}) => (
  <>
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
        <div className="form__number-container">
          <label className="form__number-label" htmlFor="AccCount1">
            1
            <input id="AccCount1" className="form__input" type="radio" value="1" name="liczba znaków" onChange={countChange} />
          </label>
          <label className="form__number-label" htmlFor="AccCount2">
            2
            <input id="AccCount2" className="form__input" type="radio" value="2" name="liczba znaków" onChange={countChange} />
          </label>
          <label className="form__number-label" htmlFor="AccCount3">
            3
            <input id="AccCount3" className="form__input" type="radio" value="3" name="liczba znaków" onChange={countChange} />
          </label>
          <label className="form__number-label" htmlFor="AccCount4">
            4
            <input id="AccCount4" className="form__input" type="radio" value="4" name="liczba znaków" onChange={countChange} />
          </label>
          <label className={`${signsCount === 5 ? 'form__number-label selected' : 'form__number-label'}`} htmlFor="AccCount5">
            5
            <input id="AccCount5" className="form__input" type="radio" value="5" defaultChecked name="liczba znaków" onChange={countChange} />
          </label>
          <label className="form__number-label" htmlFor="AccCount6">
            6
            <input id="AccCount6" className="form__input" type="radio" value="6" name="liczba znaków" onChange={countChange} />
          </label>
        </div>
      </div>
    </form>
  </>
);

Form.propTypes = {
  countChange: PropTypes.func.isRequired,
  typeChange: PropTypes.func.isRequired,
  signsCount: PropTypes.number.isRequired,
  flatsSelected: PropTypes.bool.isRequired,
  sharpsSelected: PropTypes.bool.isRequired,
};

export default Form;
