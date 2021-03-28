import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

interface IStamptingProps {
  onNameChange: React.FormEventHandler<HTMLInputElement>,
  onNumberChange: (value: string) => void
}

const MAX_NAME_LENGTH = 12;
const MAX_NUMBER_LENGTH = 2;

export const Stamping = ({ onNameChange, onNumberChange }: IStamptingProps) => {
  const [number, setNumber] = useState('');

  const onNumberChanged = (value: string) => {
    if (value === '') {
      setNumber(value);
      onNumberChange(value);
    // eslint-disable-next-line no-restricted-globals
    } else if (value.length <= MAX_NUMBER_LENGTH && !isNaN(Number(value))) {
      setNumber(value);
      onNumberChange(value);
    }
  };

  return (
  <React.Fragment>
    <Form.Group className="m-t-md">
      <Form.Label className="">Nome <span className="text-muted">(máx. {MAX_NAME_LENGTH})</span></Form.Label>
      <Form.Control
        type="text"
        placeholder="Nome a estampar"
        maxLength={MAX_NAME_LENGTH}
        onChange={onNameChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Label className="">Número <span className="text-muted">(máx. {MAX_NUMBER_LENGTH})</span></Form.Label>
      <Form.Control
        type="text"
        placeholder="Numero a estampar"
        value={number}
        onChange={(e: any) => onNumberChanged(e.target.value)}
      />
    </Form.Group>
  </React.Fragment>
  );
};

export default Stamping;
