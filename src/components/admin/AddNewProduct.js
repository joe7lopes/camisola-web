import React, { useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import EditProduct from './EditProduct';
import EditProductSize from './EditProductSize';
import { size } from '../../config';

const AddNewProduct = () => {
  const defaultSelectedSize = Object.keys(size).map((s) => ({
    size: s,
    price: 35,
  }));
  const [sizes, setSizes] = useState(defaultSelectedSize);
  const [images, setImages] = useState([]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);

    const selectedImages = files.map((file) => ({
      name: file.name,
      image: file,
      url: URL.createObjectURL(file),
    }));

    setImages([...images, ...selectedImages]);
  };

  const handleOnDelete = (sizeToRemove) => {
    const updatedSizes = sizes.filter((s) => s !== sizeToRemove);
    setSizes(updatedSizes);
  };

  const renderSizes = () => sizes.map((s, i) => (
      <EditProductSize
        key={i}
        size={s.size}
        price={s.price}
        handleOnChange={(e) => console.log(e)}
        handleOnDelete={() => handleOnDelete(s)}
      />
  ));

  const handleOnAdd = () => {};

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const newProduct = { size, images };
    console.log('final save', newProduct);
  };

  return (
    <div>
      <h3>Adicionar Produto</h3>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group>
          <Form.Label column sm={2}>
            Nome
          </Form.Label>
          <Form.Control type="text" placeholder="Nome do produto" />
        </Form.Group>
        {renderSizes()}
        <div>
          <Button onClick={handleOnAdd}>Adicionar tamanho</Button>
        </div>
        <input type="file" id="multi" onChange={handleFileUpload} multiple />
        <Card>
          <EditProduct images={images} />
        </Card>
        <Button type="submit" size="lg" className="m-t-lg">
          Salvar
        </Button>
      </Form>
    </div>
  );
};

export default AddNewProduct;
