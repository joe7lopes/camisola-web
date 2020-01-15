import React from 'react';
import { Figure } from 'react-bootstrap';

function EditProduct({ images }) {
  return (
    <div>
      <div></div>
      {renderImagesPreview(images)}
    </div>
  );
}

const renderImagesPreview = (images) => images.map((img) => (
    <div key={img.name}>
      <Figure>
        <Figure.Image width={256} src={img.url} />
      </Figure>
      Imagem Padrao
      <input type="radio" />
    </div>
));

export default EditProduct;
