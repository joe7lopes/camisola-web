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
              <FormControl name="firstName" placeholder="Nome..." required/>
            </InputGroup>
          </Col>
          <Col sm={12} md={6}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Apelido</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl name="lastName" placeholder="Apelido..." required />
            </InputGroup>
          </Col>
        </Row>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl name="email" placeholder="exemplo@mail.com" required/>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Telefone/ whatsApp</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl name="phone" placeholder="91xxx" required/>
        </InputGroup>

        <span className="c-text-muted">(Morada de envio)</span>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="label-address">Morada</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl name="address" placeholder="Morada" required/>
        </InputGroup>
        <Row>
          <Col sm={12} md={6}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Localidade</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl name="city" placeholder="Lisboa" required/>
            </InputGroup>
          </Col>
          <Col sm={12} md={6}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  Codigo Postal
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl name="postCode" placeholder="1000-004" required/>
            </InputGroup>
          </Col>
        </Row>
      <Form.Check type="checkbox" name="createAccount" label="Crie conta, habilite-se a ganhar um vale de desconto." />
      </Card.Body>
    </Card>
)

export default ShipmentAddress;