// StickyButton.jsx
import React from 'react';

const StickyButton = ({ quantity, onClick }) => {
  return (
    <button className="fixed-bottom-button" onClick={onClick}>
      Your Order ({quantity})
    </button>
  );
};

export default StickyButton;
