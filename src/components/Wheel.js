import React from 'react';
import '../style.scss';
import './Arrow.scss';
import './Wheel.scss';

class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: 'arrow',
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.scale !== this.props.scale) {
      if (prevProps !== undefined) {
        const rotationValue = this.props.scale.rotation;
        const newState = `arrow rotation-${rotationValue}`;
        this.setState({ style: newState });
      }
    }
  }

  setArrow() {
    this.setState({ style: 'arrow' });
  }

  resetArrow() {
    setTimeout(() => {
      this.props.update(false);
      this.setArrow();
    }, 2000);
  }

  render() {
    const scaleArr = ['G-dur', 'F-dur', 'D-dur', 'B-dur', 'A-dur', 'Es-dur', 'E-dur', 'As-dur', 'H-dur', 'Des-dur', 'Fis-dur', 'Ges-dur', 'Cis-dur', 'Ces-dur', 'C-dur'];
    const wheelElements = scaleArr.map((scale, index) => (
      <li key={index} className="wheel__scale-field">
        <label htmlFor={`${scale}Input`}>
          <input type="radio" name="pit" value={scale} />
          <span className="wheel__scale-name">{scale}</span>
        </label>
      </li>
    ));
    return (
      <div className="wheel__wrapper">
        <ul className="wheel__content">
          {wheelElements}
          <div className={this.state.style} onTransitionEnd={() => this.resetArrow()} />
        </ul>
        <div className="wheel__center-overlay">
          <button type="button" className="wheel__center-button" onClick={this.props.start}>Losuj</button>
        </div>
      </div>
    );
  }
}

export default Wheel;
