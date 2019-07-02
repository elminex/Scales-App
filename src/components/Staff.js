import React from 'react';
import staff from './images/kluczS.png';
import './Staff.scss';

class Staff extends React.Component {
  constructor(props) {
    super(props);
    this.compareArrays = this.compareArrays.bind(this);
    this.state = {
      text: 'Wybierz właściwe znaki a następnie kliknij "Sprawdź znaki".',
      success: false,
    };
    this.clickedArr = [];
    this.controlArr = [];
  }

  clickHandle(sign, target) {
    target.classList.toggle('selected');
    if (this.clickedArr.includes(sign)) {
      this.clickedArr = this.clickedArr.filter(value => value !== sign);
    } else {
      this.clickedArr.push(sign);
    }
  }

  compareArrays() {
    this.controlArr = [];
    const correct = this.props.signs;
    const userSelected = this.clickedArr;
    if (correct.length === userSelected.length) {
      correct.forEach(el1 => userSelected.forEach((el2) => {
        if (el1 === el2) this.controlArr.push(el1);
      }));
      if (this.controlArr.length === correct.length) {
        this.setState({ text: 'Bardzo dobrze, brawo!', success: true });
      } else {
        this.setState({ text: 'Zaznaczono złe znaki przy kluczu.' });
      }
    } else {
      this.setState({ text: 'Ilość zaznaczonych znaków się nie zgadza.' });
    }
  }

  render() {
    const { text, success } = this.state;
    const { flats, reset, scale } = this.props;
    if (flats === false) {
      return (
        <div className="signs">
          <h2 className="signs__title">
            Wylosowana gama to
            <span className="signs__title--lg">{` ${scale}!`}</span>
          </h2>
          <div className="signs__key-wrapper">
            <h3 className="signs__key-info">{text}</h3>
            <div className="signs__key-overlay">
              <img className="signs__key" src={staff} alt="Pięciolinia, na której umieszczone są znaki chromatyczne do uzupełnienia." />
              <button type="button" className="signs__sharp-1" onClick={(e) => { if (success === false) { this.clickHandle('fis', e.target); } }} />
              <button type="button" className="signs__sharp-2" onClick={(e) => { if (success === false) { this.clickHandle('cis', e.target); } }} />
              <button type="button" className="signs__sharp-3" onClick={(e) => { if (success === false) { this.clickHandle('gis', e.target); } }} />
              <button type="button" className="signs__sharp-4" onClick={(e) => { if (success === false) { this.clickHandle('dis', e.target); } }} />
              <button type="button" className="signs__sharp-5" onClick={(e) => { if (success === false) { this.clickHandle('ais', e.target); } }} />
              <button type="button" className="signs__sharp-6" onClick={(e) => { if (success === false) { this.clickHandle('eis', e.target); } }} />
              <button type="button" className="signs__sharp-7" onClick={(e) => { if (success === false) { this.clickHandle('his', e.target); } }} />
            </div>
            <button type="button" className="signs__button" onClick={this.compareArrays}>Sprawdź znaki</button>
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
          <h3 className="signs__key-info">{text}</h3>
          <div className="signs__key-overlay">
            <img className="signs__key" src={staff} alt="Pięciolinia, na której umieszczone są znaki chromatyczne do uzupełnienia." />
            <button type="button" className="signs__flat-1" onClick={(e) => { if (success === false) { this.clickHandle('b', e.target); } }} />
            <button type="button" className="signs__flat-2" onClick={(e) => { if (success === false) { this.clickHandle('es', e.target); } }} />
            <button type="button" className="signs__flat-3" onClick={(e) => { if (success === false) { this.clickHandle('as', e.target); } }} />
            <button type="button" className="signs__flat-4" onClick={(e) => { if (success === false) { this.clickHandle('des', e.target); } }} />
            <button type="button" className="signs__flat-5" onClick={(e) => { if (success === false) { this.clickHandle('ges', e.target); } }} />
            <button type="button" className="signs__flat-6" onClick={(e) => { if (success === false) { this.clickHandle('ces', e.target); } }} />
            <button type="button" className="signs__flat-7" onClick={(e) => { if (success === false) { this.clickHandle('fes', e.target); } }} />
          </div>
          <button type="button" className="signs__button" onClick={this.compareArrays}>Sprawdź znaki</button>
        </div>
        <button type="button" className="signs__button" onClick={reset}>Losuj ponownie</button>
      </div>
    );
  }
}

export default Staff;
