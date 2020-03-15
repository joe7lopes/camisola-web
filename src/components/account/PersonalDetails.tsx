import React from 'react';
import {
  InputGroup, FormControl, Card, Row, Col,
} from 'react-bootstrap';
import { ShippingAddress } from '../ui';

interface IProps {
  firstName?: string,
  lastName?: string,
  email?: string,
  phone?: string,
  address?: string,
  location?: string,
  postalCode?: string,
}

function PersonalDetails({
  firstName,
  lastName,
  email,
  phone,
  address,
  location,
  postalCode,

}: IProps) {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col sm={12} md={6}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Nome</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl placeholder="Nome..." />
            </InputGroup>
          </Col>
          <Col sm={12} md={6}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Apelido</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl placeholder="Apelido..." />
            </InputGroup>
          </Col>
        </Row>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="exemplo@mail.com" />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Telefone</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="91xxx" />
        </InputGroup>

        <span className="c-text-muted">(Morada de envio padrão)</span>
        <ShippingAddress />
      </Card.Body>
    </Card>
  );
}

PersonalDetails.displayName = 'PersonalDetails';

export default PersonalDetails;
