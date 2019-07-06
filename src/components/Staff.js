import React from 'react';
import PropTypes from 'prop-types';
import staff from '../images/staff-small.svg';
import './Staff.scss';

const Staff = ({
  flats, scale, signClick, success, checkSign,
}) => {
  if (flats === false) {
    return (
      <div className="signs">
        <h2 className="signs__title">{` ${scale}!`}</h2>
        <div className="signs__key-wrapper">
          <h3 className="signs__key-info">Zaznacz znaki tej gamy</h3>
          <div className="signs__key-overlay">
            <img className="signs__key" src={staff} alt="Pięciolinia, na której umieszczone są znaki chromatyczne do uzupełnienia." />
            <button type="button" className="signs__sharp-1" onClick={(e) => { if (!success) { signClick('fis', e.target); } }} />
            <button type="button" className="signs__sharp-2" onClick={(e) => { if (!success) { signClick('cis', e.target); } }} />
            <button type="button" className="signs__sharp-3" onClick={(e) => { if (!success) { signClick('gis', e.target); } }} />
            <button type="button" className="signs__sharp-4" onClick={(e) => { if (!success) { signClick('dis', e.target); } }} />
            <button type="button" className="signs__sharp-5" onClick={(e) => { if (!success) { signClick('ais', e.target); } }} />
            <button type="button" className="signs__sharp-6" onClick={(e) => { if (!success) { signClick('eis', e.target); } }} />
          </div>
          <button type="button" className="signs__button" onClick={checkSign}>Sprawdź</button>
        </div>
      </div>
    );
  }
  return (
    <div className="signs">
      <h2 className="signs__title">{` ${scale}!`}</h2>
      <div className="signs__key-wrapper">
        <h3 className="signs__key-info">Zaznacz znaki tej gamy</h3>
        <div className="signs__key-overlay">
          <img className="signs__key" src={staff} alt="Pięciolinia, na której umieszczone są znaki chromatyczne do uzupełnienia." />
          <button type="button" className="signs__flat-1" onClick={(e) => { if (!success) { signClick('b', e.target); } }} />
          <button type="button" className="signs__flat-2" onClick={(e) => { if (!success) { signClick('es', e.target); } }} />
          <button type="button" className="signs__flat-3" onClick={(e) => { if (!success) { signClick('as', e.target); } }} />
          <button type="button" className="signs__flat-4" onClick={(e) => { if (!success) { signClick('des', e.target); } }} />
          <button type="button" className="signs__flat-5" onClick={(e) => { if (!success) { signClick('ges', e.target); } }} />
          <button type="button" className="signs__flat-6" onClick={(e) => { if (!success) { signClick('ces', e.target); } }} />
        </div>
        <button type="button" className="signs__button" onClick={checkSign}>Sprawdź</button>
      </div>
    </div>
  );
};

Staff.propTypes = {
  flats: PropTypes.bool.isRequired,
  scale: PropTypes.shape({
    name: PropTypes.string.isRequired,
    flats: PropTypes.number.isRequired,
    sharps: PropTypes.bool.isRequired,
    rotation: PropTypes.number.isRequired,
  }).isRequired,
  signClick: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
  checkSign: PropTypes.func.isRequired,
};

export default Staff;
