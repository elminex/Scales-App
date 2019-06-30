import React from 'react';
import './Form.scss';

const Form = ({ countChange, typeChange }) => (
  <>
    <form className="form">
      <label className="form__input-label" htmlFor="AccCount">
        Maksymalna ilość znaków:
        <input id="AccCount" className="form__input-number" type="number" max="7" min="0" placeholder="5" onChange={countChange} />
      </label>
      <label className="form__input-label" htmlFor="AllAcc">
        Wszystkie znaki
        <input id="AllAcc" className="form__input" type="radio" name="znaki" value="all" defaultChecked onChange={typeChange} />
      </label>
      <label className="form__input-label" htmlFor="SharpsOnly">
        Tylko krzyżyki
        <input id="SharpsOnly" className="form__input" type="radio" name="znaki" value="sharps" onChange={typeChange} />
      </label>
      <label className="form__input-label" htmlFor="FlatsOnly">
        Tylko bemole
        <input id="FlatsOnly" className="form__input" type="radio" name="znaki" value="flats" onChange={typeChange} />
      </label>
    </form>
  </>
);

export default Form;
