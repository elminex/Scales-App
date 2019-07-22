import React from 'react';
import Wheel from './components/Wheel';
import data from './data';
import Staff from './components/Staff';
import Form from './components/Form';
import Modal from './components/Modal';
import Header from './components/Header';

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
      signsCount: 5,
      selectedScale: undefined,
      selectedAcc: undefined,
      wheelVisible: true,
      modalVisible: false,
      text: '',
      success: false,
      flatsSelected: true,
      sharpsSelected: true,
    };
    this.clickedArr = [];
    this.controlArr = [];
    this.previousSelected = undefined;
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
    const selectedScale = filteredScales[random] || filteredScales;
    const accidentals = this.setAccidentals(selectedScale);
    this.setState({ selectedScale, selectedAcc: accidentals });
  }

  getUpdate(value) {
    this.setState({ wheelVisible: value });
  }

  accClickHandle(sign, target) {
    target.classList.toggle('selected-sign');
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
    const { signsCount, flatsSelected, sharpsSelected } = this.state;
    let filteredScales;
    if (sharpsSelected && !flatsSelected) {
      filteredScales = data.scales.filter(element => (
        element.sharps !== false && element.sharps <= signsCount));
    } else if (!sharpsSelected && flatsSelected) {
      filteredScales = data.scales.filter(element => (
        element.flats !== false && element.flats <= signsCount));
    } else if (sharpsSelected && flatsSelected) {
      filteredScales = data.scales.filter(element => (
        element.sharps || element.flats) <= signsCount);
    } else {
      filteredScales = data.scales[0];
    }
    return filteredScales;
  }

  typeChangeHandler(e) {
    const checkboxValue = e.target.checked;
    if (e.target.value === 'sharps') {
      this.setState({ sharpsSelected: checkboxValue });
    } else {
      this.setState({ flatsSelected: checkboxValue });
    }
  }

  countChangeHandler(e) {
    if (this.previousSelected !== undefined) {
      this.previousSelected.parentNode.classList.remove('selected');
    }
    e.target.parentNode.classList.add('selected');
    this.previousSelected = e.target;
    const newValue = parseInt(e.target.value, 10);
    this.setState({
      signsCount: newValue,
    });
  }

  reset() {
    this.setState({
      sharpsSelected: true,
      flatsSelected: true,
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
      wheelVisible,
      selectedScale,
      text,
      success,
      modalVisible,
      signsCount,
      sharpsSelected,
      flatsSelected,
    } = this.state;
    let content;
    if (wheelVisible === true) {
      content = (
        <div className="inner-container">
          <Form
            countChange={this.countChangeHandler}
            typeChange={this.typeChangeHandler}
            signsCount={signsCount}
            sharpsSelected={sharpsSelected}
            flatsSelected={flatsSelected}
          />
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
        <Header />
        <div className="container">
          <Modal
            text={text}
            toggleModal={this.toggleModal}
            success={success}
            reset={this.reset}
            visible={modalVisible}
          />
          {content}
        </div>
      </>
    );
  }
}

export default App;
