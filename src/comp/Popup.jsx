// PopupModal.jsx
import React from 'react';

const PopupModal = ({ isOpen, onClose, orderItems, totalPrice }) => {
  return (
    <div className={`popup-modal ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <h2>Your Order</h2>
        <ul>
          {orderItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.quantity}
            </li>
          ))}
        </ul>
        <div>Total Price: ₹{totalPrice}</div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopupModal;
