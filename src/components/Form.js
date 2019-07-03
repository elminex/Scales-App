import React from 'react';
import './Form.scss';

const Form = ({
  countChange, typeChange, signsType, signsCount,
}) => {
  let allSelected = true;
  let flatsSelected;
  let sharpsSelected;

  switch (signsType) {
    case 'flats':
      flatsSelected = true;
      allSelected = false;
      sharpsSelected = false;
      break;
    case 'sharps':
      sharpsSelected = true;
      flatsSelected = false;
      allSelected = false;
      break;
    default:
      allSelected = true;
      sharpsSelected = false;
      flatsSelected = false;
      break;
  }
  return (
    <>
      <form className="form">
        <div className="form__type-wrapper">
          Wybierz typ gamy:
          <label className={`${allSelected ? 'form__input-label-acc sharp-flat selected' : 'form__input-label-acc sharp-flat'}`} htmlFor="AllAcc">
            <input id="AllAcc" className="form__input" type="radio" name="znaki" value="all" defaultChecked onChange={typeChange} />
          </label>
          <label className={`${sharpsSelected ? 'form__input-label-acc sharp selected' : 'form__input-label-acc sharp'}`} htmlFor="SharpsOnly">
            <input id="SharpsOnly" className="form__input" type="radio" name="znaki" value="sharps" onChange={typeChange} />
          </label>
          <label className={`${flatsSelected ? 'form__input-label-acc flat selected' : 'form__input-label-acc flat'}`} htmlFor="FlatsOnly">
            <input id="FlatsOnly" className="form__input" type="radio" name="znaki" value="flats" onChange={typeChange} />
          </label>
        </div>
        <div className="form__number-wrapper">
          Wybierz maksymalną ilośc znaków:
          <label className="form__input-label-number" htmlFor="AccCount1">
            1
            <input id="AccCount1" className="form__input" type="radio" value="1" name="liczba znaków" onChange={countChange} />
          </label>
          <label className="form__input-label-number" htmlFor="AccCount2">
            2
            <input id="AccCount2" className="form__input" type="radio" value="2" name="liczba znaków" onChange={countChange} />
          </label>
          <label className="form__input-label-number" htmlFor="AccCount3">
            3
            <input id="AccCount3" className="form__input" type="radio" value="3" name="liczba znaków" onChange={countChange} />
          </label>
          <label className="form__input-label-number" htmlFor="AccCount4">
            4
            <input id="AccCount4" className="form__input" type="radio" value="4" name="liczba znaków" onChange={countChange} />
          </label>
          <label className={`${signsCount === 5 ? 'form__input-label-number selected' : 'form__input-label-number'}`} htmlFor="AccCount5">
            5
            <input id="AccCount5" className="form__input" type="radio" value="5" defaultChecked name="liczba znaków" onChange={countChange} />
          </label>
          <label className="form__input-label-number" htmlFor="AccCount6">
            6
            <input id="AccCount6" className="form__input" type="radio" value="6" name="liczba znaków" onChange={countChange} />
          </label>
          <label className="form__input-label-number" htmlFor="AccCount7">
            7
            <input id="AccCount7" className="form__input" type="radio" value="7" name="liczba znaków" onChange={countChange} />
          </label>
        </div>

      </form>
    </>
  );
};

export default Form;
