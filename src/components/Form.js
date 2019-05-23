import React from 'react';
import './Form.css';

class Form extends React.Component {
  render() {
    return (
      <>
        <form className="form">
          <label className="form__input-label">Maksymalna ilość znaków:<input className="form__input-number" type="number" max="7" min="0" placeholder="5" onChange={this.props.countChange} /></label>
          <label className="form__input-label">Wszystkie znaki<input className="form__input" type="radio" name="znaki" value="all" defaultChecked onChange={this.props.typeChange} /></label>
          <label className="form__input-label">Tylko krzyżyki<input className="form__input" type="radio" name="znaki" value="sharps" onChange={this.props.typeChange} /></label>
          <label className="form__input-label">Tylko bemole<input className="form__input" type="radio" name="znaki" value="flats" onChange={this.props.typeChange} /></label>
        </form>
      </>
    )
  }
}

export default Form;