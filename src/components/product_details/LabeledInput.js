import React from 'react';

const LabeledInput = ({ label, children }) => (
  <div className="c-flex-center">
    <span className="m-r-md">{label}</span>
    {children}
  </div>
);

export default LabeledInput;
