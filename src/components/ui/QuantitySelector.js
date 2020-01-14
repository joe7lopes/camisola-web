import React, { useState } from 'react';

const QuantatySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (newQuantity) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
  };

  return (
    <div className="c-quantity_selector">
      <input
        type="text"
        readOnly
        style={{ border: 'none', width: '100%', textAlign: 'center' }}
        value={quantity}/>
      <div>
        <button
          className="c-quantity-button"
          type="button"
          onClick={() => handleChange(quantity + 1)}>
          +
        </button>
        <button
          className="c-quantity-button"
          type="button"
          onClick={() => handleChange(quantity - 1)}>
          -
        </button>
      </div>
    </div>
  );
};

export default QuantatySelector;
