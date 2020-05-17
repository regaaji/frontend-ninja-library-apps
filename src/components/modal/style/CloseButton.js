import React from 'react';
import { css } from 'glamor';
import { Link } from 'react-router-dom';

function CloseButton({ closeToast, type, ariaLabel }) {
  const styles = css({
    color: '#000',
    fontWeight: 'bold',
    fontSize: '18px',
    background: 'transparent',
    outline: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    opacity: '0.7',
    transition: '.3s ease',
    alignSelf: 'flex-start',
    ':hover, :focus': {
      opacity: 1
    }
  });
  return (
    <Link
      {...styles}
      type="button"
      to="#"
      onClick={closeToast}
      aria-label={ariaLabel}
    >
      ✖
    </Link>
  );
}

export default CloseButton;