import React from 'react';
import PropTypes from 'prop-types';

const Flat = ({ flatsSelected }) => (
  <>
    <svg className={flatsSelected ? 'form__input-acc selected' : 'form__input-acc'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 13" version="1">
      <path d="M3.22 8.38c0 .57-.22 1.12-.8 1.86A9.36 9.36 0 0 1 .55 12V8.57c.16-.4.4-.72.7-.97.31-.25.62-.37.94-.37.52 0 .85.3 1 .88l.02.27zm-.08-2.4c-.43 0-.87.12-1.31.35a5.4 5.4 0 0 0-1.27.96V.02H0v12.45c0 .35.1.53.29.53.1 0 .25-.1.45-.22.59-.34.95-.58 1.34-.82.46-.28.96-.6 1.63-1.25.47-.46.8-.93 1.01-1.4.2-.48.31-.95.31-1.41 0-.69-.18-1.18-.55-1.47-.41-.3-.86-.45-1.34-.45z" />
    </svg>

  </>
);

Flat.propTypes = {
  flatsSelected: PropTypes.bool.isRequired,
};

export default Flat;
