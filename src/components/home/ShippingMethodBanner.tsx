import React from 'react';

const ShippingMethodBanner = () => (
    <div className="m-b-sm">
        <img style={style} alt="metodo de envio" src="https://camisola-backend.s3-eu-west-1.amazonaws.com/cttCorreios.png" />
    </div>
);

const style = {
  height: 'auto',
  width: '100%',
  borderRadius: '0.25rem',
};

export default ShippingMethodBanner;
