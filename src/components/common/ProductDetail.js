import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      <div>product detail page of {id}</div>
    </div>
  );
}

export default ProductDetail;
