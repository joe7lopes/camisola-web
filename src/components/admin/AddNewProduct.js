import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import PreviewImages from './PreviewImages';
import NewProductSize from './NewProductSize';
import { size } from '../../config';

const AddNewProduct = () => {
  const defaultSelectedSize = Object.keys(size).map((s) => ({
    size: s,
    price: 35,
  }));
  const [sizes, setSizes] = useState(defaultSelectedSize);
  const [images, setImages] = useState([]);
  const [defaultImage, setDefaultImage] = useState(null);

  const handleOnDelete = (sizeToRemove) => {
    const updatedSizes = sizes.filter((s) => s !== sizeToRemove);
    setSizes(updatedSizes);
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);

    const selectedImages = files.map((file) => ({
      name: file.name,
      image: file,
      url: URL.createObjectURL(file),
    }));
    setDefaultImage(selectedImages[0]);
    setImages([...images, ...selectedImages]);
  };

  const handleOnDeleteImage = (img) => {
    const newImages = images.filter((image) => image !== img);
    setImages(newImages);
  };

  const handleDefaultImageChanged = (img) => {
    setDefaultImage(img);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const imagesToSave = images.filter((i) => i !== defaultImage);
    const formattedImages = [
      ...imagesToSave,
      { ...defaultImage, isDefault: true },
    ];
    const newProduct = { size, images: formattedImages };
    console.log('final save', newProduct);
  };

  return (
    <div>
      <h3>Adicionar Produto</h3>
      <Form onSubmit={handleOnSubmit}>
        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label column sm={2}>
                Nome
              </Form.Label>
              <Form.Control type="text" placeholder="Nome do produto" />
            </Form.Group>
            <NewProductSize
              sizes={sizes}
            />
            <div>
              <Button>Adicionar tamanho</Button>
            </div>
          </Col>
          <Col>
            <PreviewImages
              images={images}
              defaultImage={defaultImage}
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

export default AddNewProduct;
