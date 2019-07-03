import React from 'react';
import Wheel from './components/Wheel';
import data from './data';
import Staff from './components/Staff';
import Form from './components/Form';
import Modal from './components/Modal';
import './style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.reset = this.reset.bind(this);
    this.countChangeHandler = this.countChangeHandler.bind(this);
    this.typeChangeHandler = this.typeChangeHandler.bind(this);
    this.getScale = this.getScale.bind(this);
    this.getUpdate = this.getUpdate.bind(this);
    this.start = this.start.bind(this);
    this.compareArrays = this.compareArrays.bind(this);
    this.accClickHandle = this.accClickHandle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.checkSign = this.checkSign.bind(this);
    this.state = {
      signsType: 'all',
      signsCount: 5,
      selectedScale: undefined,
      selectedAcc: undefined,
      wheelVisible: true,
      modalVisible: false,
      text: '',
      success: false,
    };
    this.clickedArr = [];
    this.controlArr = [];
  }

  setAccidentals(scale) {
    let scaleAcc;
    if (scale.sharps === false) {
      scaleAcc = data.flats.filter((elem, index) => (index <= (scale.flats - 1)));
    } else {
      scaleAcc = data.sharps.filter((elem, index) => (index <= (scale.sharps - 1)));
    }
    return scaleAcc;
  }

  getScale() {
    const filteredScales = this.accNumber();
    const random = Math.floor((Math.random() * filteredScales.length));
    const selectedScale = filteredScales[random];
    const accidentals = this.setAccidentals(selectedScale);
    this.setState({ selectedScale, selectedAcc: accidentals });
  }

  getUpdate(value) {
    this.setState({ wheelVisible: value });
  }

  accClickHandle(sign, target) {
    target.classList.toggle('selected');
    if (this.clickedArr.includes(sign)) {
      this.clickedArr = this.clickedArr.filter(value => value !== sign);
    } else {
      this.clickedArr.push(sign);
    }
  }

  compareArrays() {
    this.controlArr = [];
    const { selectedAcc } = this.state;
    const userSelected = this.clickedArr;
    if (selectedAcc.length === userSelected.length) {
      selectedAcc.forEach(el1 => userSelected.forEach((el2) => {
        if (el1 === el2) this.controlArr.push(el1);
      }));
      if (this.controlArr.length === selectedAcc.length) {
        this.setState({ text: 'Bardzo dobrze, brawo!', success: true });
      } else {
        this.setState({ text: 'Zaznaczono złe znaki przy kluczu.' });
      }
    } else {
      this.setState({ text: 'Ilość zaznaczonych znaków się nie zgadza.' });
    }
  }

  checkSign() {
    this.compareArrays();
    this.toggleModal();
  }

  accNumber() {
    const { signsType, signsCount } = this.state;
    let filteredScales;
    switch (signsType) {
      case 'flats':
        filteredScales = data.scales.filter(element => (
          element.flats !== false && element.flats <= signsCount));
        break;
      case 'sharps':
        filteredScales = data.scales.filter(element => (
          element.sharps !== false && element.sharps <= signsCount));
        break;
      default:
        filteredScales = data.scales.filter(element => (
          element.sharps || element.flats) <= signsCount);
    }
    return filteredScales;
  }

  typeChangeHandler(e) {
    if (e.target.checked === true) {
      const newValue = e.target.value;
      this.setState({
        signsType: newValue,
      });
    }
  }

  countChangeHandler(e) {
    const newValue = e.target.value;
    this.setState({
      signsCount: newValue,
    });
  }

  reset() {
    this.setState({
      signsType: 'all',
      signsCount: 5,
      selectedScale: undefined,
      selectedAcc: undefined,
      wheelVisible: true,
      success: false,
    });
    this.clickedArr = [];
    this.controlArr = [];
  }

  start(e) {
    this.getScale();
    e.target.classList.add('disabled');
    e.target.disabled = true;
  }

  toggleModal() {
    const { modalVisible } = this.state;
    this.setState({ modalVisible: !modalVisible });
  }

  render() {
    const {
      wheelVisible, selectedScale, text, success, modalVisible,
    } = this.state;
    let content;
    if (wheelVisible === true) {
      content = (
        <div className="inner-container">
          <Form countChange={this.countChangeHandler} typeChange={this.typeChangeHandler} />
          <Wheel scale={selectedScale} update={this.getUpdate} start={this.start} />
        </div>
      );
    } else {
      content = (
        <Staff
          flats={selectedScale.flats}
          reset={this.reset}
          scale={selectedScale.name}
          signClick={this.accClickHandle}
          success={success}
          checkSign={this.checkSign}
        />
      );
    }
    return (
      <>
        <header className="header">
          <h1>Wylosuj gamę!!</h1>
        </header>
        <Modal
          text={text}
          toggleModal={this.toggleModal}
          success={success}
          reset={this.reset}
          visible={modalVisible}
        />
        {content}
      </>
    );
  }
}

export default App;
