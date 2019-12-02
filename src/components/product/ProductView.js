import React from 'react';

function ProductView() {
  const renderFooter = () => {
    return (
      <div className="columns is-mobile m-t-xxs">
        <div className="column">$45</div>
        <div className="column">
          <button type="button" className="button is-primary">
            Ver
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="box" style={{ padding: '0.5rem' }}>
      <figure className="image">
        <img
          style={{ height: '16rem' }}
          alt="imagesss"
          src="https://camisola10.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-28-at-16.54.576-1.jpeg"
        />
      </figure>
      <div className="m-t-sm">Camisola benfica xxxx</div>
      {renderFooter()}
    </div>
  );
}

export default ProductView;
