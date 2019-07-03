import React from 'react';
import staff from './images/kluczS.png';
import './Staff.scss';

const Staff = ({
  flats, reset, scale, signClick, success, checkSign,
}) => {
  if (flats === false) {
    return (
      <div className="signs">
        <h2 className="signs__title">
          Wylosowana gama to
          <span className="signs__title--lg">{` ${scale}!`}</span>
        </h2>
        <div className="signs__key-wrapper">
          <h3 className="signs__key-info">Wybierz właściwe znaki a następnie kliknij &quot;Sprawdź znaki&quot;.</h3>
          <div className="signs__key-overlay">
            <img className="signs__key" src={staff} alt="Pięciolinia, na której umieszczone są znaki chromatyczne do uzupełnienia." />
            <button type="button" className="signs__sharp-1" onClick={(e) => { if (success === false) { signClick('fis', e.target); } }} />
            <button type="button" className="signs__sharp-2" onClick={(e) => { if (success === false) { signClick('cis', e.target); } }} />
            <button type="button" className="signs__sharp-3" onClick={(e) => { if (success === false) { signClick('gis', e.target); } }} />
            <button type="button" className="signs__sharp-4" onClick={(e) => { if (success === false) { signClick('dis', e.target); } }} />
            <button type="button" className="signs__sharp-5" onClick={(e) => { if (success === false) { signClick('ais', e.target); } }} />
            <button type="button" className="signs__sharp-6" onClick={(e) => { if (success === false) { signClick('eis', e.target); } }} />
            <button type="button" className="signs__sharp-7" onClick={(e) => { if (success === false) { signClick('his', e.target); } }} />
          </div>
          <button type="button" className="signs__button" onClick={checkSign}>Sprawdź znaki</button>
        </div>
        <button type="button" className="signs__button" onClick={reset}>Losuj ponownie</button>
      </div>
    );
  }
  return (
    <div className="signs">
      <h2 className="signs__title">
        Wylosowana gama to
        <span className="signs__title--lg">{` ${scale}!`}</span>
      </h2>
      <div className="signs__key-wrapper">
        <h3 className="signs__key-info">Wybierz właściwe znaki a następnie kliknij &quot;Sprawdź znaki&quot;.</h3>
        <div className="signs__key-overlay">
          <img className="signs__key" src={staff} alt="Pięciolinia, na której umieszczone są znaki chromatyczne do uzupełnienia." />
          <button type="button" className="signs__flat-1" onClick={(e) => { if (success === false) { signClick('b', e.target); } }} />
          <button type="button" className="signs__flat-2" onClick={(e) => { if (success === false) { signClick('es', e.target); } }} />
          <button type="button" className="signs__flat-3" onClick={(e) => { if (success === false) { signClick('as', e.target); } }} />
          <button type="button" className="signs__flat-4" onClick={(e) => { if (success === false) { signClick('des', e.target); } }} />
          <button type="button" className="signs__flat-5" onClick={(e) => { if (success === false) { signClick('ges', e.target); } }} />
          <button type="button" className="signs__flat-6" onClick={(e) => { if (success === false) { signClick('ces', e.target); } }} />
          <button type="button" className="signs__flat-7" onClick={(e) => { if (success === false) { signClick('fes', e.target); } }} />
        </div>
        <button type="button" className="signs__button" onClick={checkSign}>Sprawdź znaki</button>
      </div>
      <button type="button" className="signs__button" onClick={reset}>Losuj ponownie</button>
    </div>
  );
};

export default Staff;
