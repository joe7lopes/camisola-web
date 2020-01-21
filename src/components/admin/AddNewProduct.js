import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Col, Button } from 'react-bootstrap';
import PreviewImages from './PreviewImages';
import ProductPrice from './ProductPrice';

const AddNewProduct = ({ sizes }) => {
  const [priceSize, setPriceSizes] = useState(convertSizes(sizes));
  const [images, setImages] = useState([]);
  const nameRef = React.createRef();
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);

    const selectedImages = files.map((file) => ({
      name: file.name,
      image: file,
      url: URL.createObjectURL(file),
    }));
    setImages([...images, ...selectedImages]);
  };

  const handleOnDeleteImage = (img) => {
    const newImages = images.filter((image) => image !== img);
    setImages(newImages);
  };

  const handleDefaultImageChanged = (img) => {
    const newImages = images.map((i) => {
      if (i === img) {
        return { ...img, isDefault: true };
      }
      return { ...i, isDefault: false };
    });
    setImages(newImages);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const newProduct = { priceSize, images };
    console.log('final save', newProduct);
  };

  const handleOnPriceChanged = (newPrice, index) => {
    const priceToUpdate = { ...priceSize[index] };
    priceToUpdate.price = newPrice;

    const newPriceSizes = [...priceSize];
    newPriceSizes[index] = priceToUpdate;

    setPriceSizes(newPriceSizes);
  };

  const handleOnPriceSizeDelete = (priceToDelete) => {
    setPriceSizes(priceSize.filter((p) => p !== priceToDelete));
  };

  return (
    <div className="c-body">
      <h3>Adicionar Produto</h3>
      <Form onSubmit={handleOnSubmit}>
        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label column sm={2}>
                Nome
              </Form.Label>
              <Form.Control type="text" ref={nameRef}placeholder="Nome do produto" />
            </Form.Group>
            <ProductPrice
            priceSize={priceSize}
            handleOnPriceChanged={handleOnPriceChanged}
            handleOnDelete={handleOnPriceSizeDelete}
            />
          </Col>
          <Col>
            <PreviewImages
              images={images}
              handleFileUpload={handleFileUpload}
              handleOnDeleteImage={handleOnDeleteImage}
              handleDefaultImageChanged={handleDefaultImageChanged}
            />
          </Col>
        </Form.Row>
        <Button type="submit" size="lg" className="m-t-lg">
          Salvar
        </Button>
      </Form>
    </div>
  );
};

const convertSizes = (sizes) => sizes.map((size) => ({ size, price: 35 }));

const mapStateToProps = ({ settings }) => ({
  sizes: settings.sizes,
});

export default connect(mapStateToProps, null)(AddNewProduct);
