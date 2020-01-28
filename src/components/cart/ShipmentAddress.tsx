import React from 'react';
import {Row, Col, Card, InputGroup, FormControl, Form} from 'react-bootstrap';

const ShipmentAddress = () => (
    <Card className="m-xs">
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

        <span className="c-text-mutted">(Morada de envio padrão)</span>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="label-address">Morada</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="Morada" />
        </InputGroup>
        <Row>
          <Col sm={12} md={6}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Localidade</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl placeholder="Lisboa" />
            </InputGroup>
          </Col>
          <Col sm={12} md={6}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  Codigo Postal
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl placeholder="1000-004" />
            </InputGroup>
          </Col>
        </Row>
      <Form.Check type="checkbox" label="Crie conta, habilite-se a ganhar um vale de desconto." />
      </Card.Body>
    </Card>
)

export default ShipmentAddress;