import React from 'react';
import PropTypes from 'prop-types';
import staff from '../images/staff-small.svg';
import './Staff.scss';
import data from '../data';

const Staff = ({
  flats, scale, signClick, success, checkSign,
}) => {
  let buttons;
  if (flats === false) {
    buttons = data.sharps.map((sharp, index) => <button key={index} type="button" className={`signs__sharp-${index + 1}`} onClick={(e) => { if (!success) { signClick(`${sharp}`, e.target); } }} />);
  } else {
    buttons = data.flats.map((flat, index) => <button key={index} type="button" className={`signs__flat-${index + 1}`} onClick={(e) => { if (!success) { signClick(`${flat}`, e.target); } }} />);
  }
  return (
    <div className="signs">
      <h2 className="signs__title">{` ${scale}!`}</h2>
      <div className="signs__key-wrapper">
        <h3 className="signs__key-info">Zaznacz znaki tej gamy</h3>
        <div className="signs__key-overlay">
          <img className="signs__key" src={staff} alt="Pięciolinia, na której umieszczone są znaki chromatyczne do uzupełnienia." />
          {buttons}
        </div>
        <button type="button" className="signs__button" onClick={checkSign}>Sprawdź</button>
      </div>
    </div>
  );
};

Staff.propTypes = {
  flats: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]).isRequired,
  scale: PropTypes.string.isRequired,
  signClick: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
  checkSign: PropTypes.func.isRequired,
};

export default Staff;
