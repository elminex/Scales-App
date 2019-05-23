import React from 'react';
import Wheel from './components/Wheel';
import data from './data';
import Staff from './components/Staff';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signsType: "all",
      signsCount: 5,
      selectedScale: undefined,
      selectedAcc: undefined,
      wheelVisible: true,
    }
  }
  countChangeHandler(e) {
    const newValue = e.target.value;
    this.setState({
      signsCount: newValue
    });
  }
  typeChangeHandler(e) {
    if (e.target.checked === true) {
      const newValue = e.target.value;
      this.setState({
        signsType: newValue,
      })
    }
  }
  accNumber() {
    let filteredScales;
    switch (this.state.signsType) {
      case "flats":
        filteredScales = data.scales.filter((element) => {
          if (element.flats !== false && element.flats <= this.state.signsCount) {
            return element;
          }
        });
        break;
      case "sharps":
        filteredScales = data.scales.filter((element) => {
          if (element.sharps !== false && element.sharps <= this.state.signsCount) {
            return element;
          }
        });
        break;
      default:
        filteredScales = data.scales.filter((element) => {
          if ((element.sharps || element.flats) <= this.state.signsCount) {
            return element;
          }
        });
    }
    return filteredScales;
  }
  setAccidentals(scale) {
    let scaleAcc;
    if (scale.sharps === false) {
      scaleAcc = data.flats.filter((elem, index) => {
        return (index <= (scale.flats - 1))
      })
    } else {
      scaleAcc = data.sharps.filter((elem, index) => {
        return (index <= (scale.sharps - 1))
      });
    }
    return scaleAcc;
  }
  getScale() {
    let filteredScales = this.accNumber();
    let random = Math.floor((Math.random() * filteredScales.length));
    let selectedScale = filteredScales[random];
    let accidentals = this.setAccidentals(selectedScale);
    this.setState({ selectedScale, selectedAcc: accidentals });
  }

  getUpdate(value) {
    this.setState({ wheelVisible: value })
  }
  reset() {
    this.setState({
        signsType: "all",
        signsCount: 5,
        selectedScale: undefined,
        selectedAcc: undefined,
        wheelVisible: true,
    })
  }

  render() {
    const wheelVisible = this.state.wheelVisible;
    let content;
    if (wheelVisible === true) {
      content =
        <div className="inner-container">
          <Form countChange={this.countChangeHandler.bind(this)} typeChange={this.typeChangeHandler.bind(this)} />
          <Wheel getScale={this.getScale.bind(this)} scale={this.state.selectedScale} update={this.getUpdate.bind(this)} />
        </div>
    } else {
      content =
        <Staff signs={this.state.selectedAcc} scale={this.state.selectedScale.name} flats={this.state.selectedScale.flats} reset={this.reset.bind(this)} />
    }
    return (
      <div className="container">
        <header className="header">
          <h1>Wylosuj gamę!!</h1>
        </header>
        {content}
      </div>
    )
  }
}

export default App;
