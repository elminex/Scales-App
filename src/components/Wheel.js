import React from 'react';
import PropTypes from 'prop-types';
import './Wheel.scss';

class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: 'wheel__content',
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.scale !== this.props.scale) {
      if (prevProps !== undefined) {
        const rotationValue = this.props.scale.rotation;
        const newState = `wheel__content rotation-${rotationValue}`;
        this.setState({ style: newState });
      }
    }
  }

  resetArrow() {
    setTimeout(() => {
      this.props.update(false);
    }, 2000);
  }

  render() {
    const scaleArr = ['G-dur', 'F-dur', 'D-dur', 'B-dur', 'A-dur', 'Es-dur', 'E-dur', 'As-dur', 'H-dur', 'Des-dur', 'Fis-dur', 'Ges-dur', 'C-dur'];
    const wheelElements = scaleArr.map((scale, index) => (
      <li key={index} className="wheel__scale-field">
        <label htmlFor={`${scale}Input`}>
          <input id={`${scale}Input`} type="radio" name="pit" value={scale} />
          <span className="wheel__scale-name">{scale}</span>
        </label>
      </li>
    ));
    return (
      <div className="wheel__wrapper">
        <div className="wheel__pointer" />
        <ul className={this.state.style} onTransitionEnd={() => this.resetArrow()}>
          {wheelElements}
        </ul>
        <div className="wheel__center-overlay">
          <button type="button" className="wheel__center-button" onClick={this.props.start}>losuj gamę</button>
        </div>
      </div>
    );
  }
}

Wheel.propTypes = {
  scale: PropTypes.shape({
    name: PropTypes.string.isRequired,
    flats: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
    ]).isRequired,
    sharps: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
    ]).isRequired,
    rotation: PropTypes.number.isRequired,
  }),
  update: PropTypes.func.isRequired,
  start: PropTypes.func.isRequired,
};

export default Wheel;
