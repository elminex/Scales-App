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

  start(e) {
    this.props.getScale();
    e.target.classList.add('disabled');
    e.target.disabled = true;
  }

  render() {
    const scaleArr = ['G-dur', 'F-dur', 'D-dur', 'B-dur', 'A-dur', 'Es-dur', 'E-dur', 'As-dur', 'H-dur', 'Des-dur', 'Fis-dur', 'Ges-dur', 'Cis-dur', 'Ces-dur', 'C-dur'];
    const wheelElements = scaleArr.map((scale, index) => (
      <li key={index} className="number">
        <label htmlFor={`${scale}Input`}>
          <input type="radio" name="pit" value={scale} />
          <span className="pit">{scale}</span>
        </label>
      </li>
    ));
    return (
      <div className="main">
        <div className="plate" id="plate">
          <ul className="inner">
            {wheelElements}
            <div className={this.state.style} onTransitionEnd={() => this.resetArrow()} />
          </ul>
          <div className="data">
            <button type="button" className="btn" onClick={e => this.start(e)}>Losuj</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Wheel;
