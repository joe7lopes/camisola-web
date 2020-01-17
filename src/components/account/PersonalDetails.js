import React from 'react';
import {
  InputGroup, FormControl, Card, Row, Col,
} from 'react-bootstrap';

function PersonalDetails({
  firstNameRef,
  lastNameRef,
  emailRef,
  phoneRef,
  addressRef,
  locationRef,
  postalCodeRef,
}) {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Nome</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl ref={firstNameRef} placeholder="Nome..." />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Apelido</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl ref={lastNameRef} placeholder="Apelido..." />
            </InputGroup>
          </Col>
        </Row>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl ref={emailRef} placeholder="exemplo@mail.com" />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Telefone</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl ref={phoneRef} placeholder="91xxx" />
        </InputGroup>

        <span className="c-text-mutted">(Morada de envio padrão)</span>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="label-address">Morada</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl ref={addressRef} placeholder="Morada" />
        </InputGroup>
        <Row>
          <Col>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Localidade</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl ref={locationRef} placeholder="Lisboa" />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  Codigo Postal
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl ref={postalCodeRef} placeholder="1000-004" />
            </InputGroup>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

PersonalDetails.displayName = 'PersonalDetails';

export default PersonalDetails;
