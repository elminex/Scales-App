import React from 'react';
import './Modal.scss';

const Modal = ({
  text, toggleModal, success, reset, visible,
}) => {
  if (success) {
    return (
      <div className={`modal__background ${visible ? 'modal--visible' : 'modal--hidden'}`}>
        <div className="modal__content">
          <p className="modal__text">{text}</p>
          <button type="button" className="modal__button" onClick={() => { reset(); toggleModal(); }}>Nowe losowanie</button>
        </div>
      </div>
    );
  }
  return (
    <div className={`modal__background ${visible ? 'modal--visible' : 'modal--hidden'}`}>
      <div className="modal__content">
        <p className="modal__text">{text}</p>
        <button type="button" className="modal__button" onClick={toggleModal}>Spróbuj ponownie</button>
      </div>
    </div>
  );
};

export default Modal;
