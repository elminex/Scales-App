import React from 'react';
import Wheel from './components/Wheel';
import data from './data';
import Staff from './components/Staff';
import Form from './components/Form';
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
    this.state = {
      signsType: 'all',
      signsCount: 5,
      selectedScale: undefined,
      selectedAcc: undefined,
      wheelVisible: true,
    };
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
    });
  }

  start(e) {
    this.getScale();
    e.target.classList.add('disabled');
    e.target.disabled = true;
  }

  render() {
    const { wheelVisible, selectedScale, selectedAcc } = this.state;
    let content;
    if (wheelVisible === true) {
      content = (
        <div className="inner-container">
          <Form countChange={this.countChangeHandler} typeChange={this.typeChangeHandler} start={this.start} />
          <Wheel getScale={this.getScale} scale={selectedScale} update={this.getUpdate} />
        </div>
      );
    } else {
      content = (
        <Staff
          signs={selectedAcc}
          scale={selectedScale.name}
          flats={selectedScale.flats}
          reset={this.reset}
        />
      );
    }
    return (
      <>
        <header className="header">
          <h1>Wylosuj gamę!!</h1>
        </header>
        {content}
      </>
    );
  }
}

export default App;
