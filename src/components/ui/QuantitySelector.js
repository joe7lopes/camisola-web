import React from 'react';

const QuantatySelector = () => (
  <div className="c-quantity_selector">
    <input type="text" readOnly style={{ border: 'none' }}/>
    <div>
      <div className="c-quantity_selector--button">+</div>
      <div className="c-quantity_selector--button" style={{ borderTop: '1px solid #ccc' }}>-</div>
    </div>
  </div>
);

export default QuantatySelector;
