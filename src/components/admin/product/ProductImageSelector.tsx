import React from 'react';
import { IImage } from '../../../types';
import {Image, Form, Button} from 'react-bootstrap';
interface IProps {
    images: IImage[]
}

const ProductImageSelector = ({ images }: IProps) => {
  const a = 'a';
  return (
      <div>
        <div>
            {images.map((img) => (
                <div key={img.name}>
                <Image src={img.url} style={{width: 171, height:180}} thumbnail />
                <Form.Check
                type='radio'
                label="default ?"/>
                </div>
            ))}
        </div>
          <Button className="m-t-md">Adicionar Foto</Button>
      </div>
  );
};

export default ProductImageSelector;
