import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, clickHandler } = props;

  const handleClick = (e) => {
    e.preventDefault();
    clickHandler(e.target.innerText);
  };

  return (
    <button type="button" style={{ height: '30px', width: '50px' }} onClick={handleClick}>{ name }</button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
