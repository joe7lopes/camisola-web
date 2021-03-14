import React from 'react';
import {
  Row, Col, Card, InputGroup, FormControl,
} from 'react-bootstrap';

const ShipmentAddress = ({ onChange, formValues }: any) => (
    <Card className="m-xs">
        <Card.Body>
            <Row>
                <Col sm={12} md={6}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Nome</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name="firstName"
                                     placeholder="Nome..."
                                     onChange={onChange}
                                     isValid={formValues.firstName.isValid}
                                     isInvalid={!formValues.firstName.isValid}/>
                    </InputGroup>
                </Col>
                <Col sm={12} md={6}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Apelido</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            name="lastName"
                            placeholder="Apelido..."
                            onChange={onChange}
                            isValid={formValues.lastName.isValid}
                            isInvalid={!formValues.lastName.isValid}/>
                    </InputGroup>
                </Col>
            </Row>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    name="email"
                    placeholder="email"
                    onChange={onChange}
                    isValid={formValues.email.isValid}
                    isInvalid={!formValues.email.isValid}/>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Telefone/ whatsApp</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    name="phone"
                    placeholder="Telefone"
                    onChange={onChange}
                    isValid={formValues.phone.isValid}
                    isInvalid={!formValues.phone.isValid}/>
            </InputGroup>

            <span className="c-text-muted">(Morada de envio)</span>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="label-address">Morada</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    name="address"
                    placeholder="Morada"
                    onChange={onChange}
                    isValid={formValues.address.isValid}
                    isInvalid={!formValues.address.isValid}/>
            </InputGroup>
            <Row>
                <Col sm={12} md={6}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Localidade</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            name="city"
                            placeholder="localidade"
                            onChange={onChange}
                            isValid={formValues.city.isValid}
                            isInvalid={!formValues.city.isValid}/>
                    </InputGroup>
                </Col>
                <Col sm={12} md={6}>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                Codigo Postal
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            name="postCode"
                            placeholder=""
                            onChange={onChange}
                            isValid={formValues.postCode.isValid}
                            isInvalid={!formValues.postCode.isValid}/>
                    </InputGroup>
                </Col>
            </Row>
        </Card.Body>
    </Card>
);

export default ShipmentAddress;
