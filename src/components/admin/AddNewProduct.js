import React, { useState } from 'react';
import {
  Row, Form, Card, Button,
} from 'react-bootstrap';
import EditProduct from './EditProduct';
import EditProductSize from './EditProductSize';

const AddNewProduct = () => {
  const [images, setImages] = useState([]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const formData = new FormData();
    const uploadedImages = [];

    files.forEach((file, i) => {
      formData.append(i, file);
      uploadedImages.push({
        name: file.name,
        image: file,
        url: URL.createObjectURL(file),
      });
    });

    setImages([...images, ...uploadedImages]);
  };

  return (
    <div>
      <h3>Adicionar Produto</h3>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Nome
        </Form.Label>
        <Form.Control type="text" placeholder="Nome do produto" />
      </Form.Group>
      <Form.Group as={Row}>
        <EditProductSize />
      </Form.Group>
      <input type="file" id="multi" onChange={handleFileUpload} multiple />
      <Card>
        <EditProduct images={images} />
      </Card>
      <Button size="lg" className="m-t-lg">
        Salvar
      </Button>
    </div>
  );
};

export default AddNewProduct;
