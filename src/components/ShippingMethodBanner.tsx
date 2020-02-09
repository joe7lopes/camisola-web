import React from 'react';
import cttImage from '../assets/cttCorreios.png';

const ShippingMethodBanner = () => (
    <div className="m-b-sm">
        <img style={style} alt="metodo de envio" src={cttImage} />
    </div>
)

const style = {
    height: 'auto',
    width: '100%',
    borderRadius: '0.25rem'
}

export default ShippingMethodBanner;
