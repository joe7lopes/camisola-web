import React from 'react';
import {
  InputGroup, FormControl, Card, Row, Col,
} from 'react-bootstrap';
import { ShippingAddress } from '../ui';

const PersonalDetails = () => {
  // const user = useSelector(getUser);
  const user = {
    firstName: 'fisss', lastName: 'asd', email: 'asdsd', phone: 'adsd',
  };
  return (
        <Card>
            <Card.Body>
                <Row>
                    <Col sm={12} md={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Nome</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl placeholder="Nome..." name="firstName" value={user?.firstName}/>
                        </InputGroup>
                    </Col>
                    <Col sm={12} md={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Apelido</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl placeholder="Apelido..." name="lastName" value={user?.lastName}/>
                        </InputGroup>
                    </Col>
                </Row>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl value={user?.email} readOnly/>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Telefone</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder="91xxx" name="phone" value={user?.phone}/>
                </InputGroup>

                <span className="c-text-muted">(Morada de envio padrão)</span>
                <ShippingAddress />
            </Card.Body>
        </Card>
  );
};

PersonalDetails.displayName = 'PersonalDetails';

export default PersonalDetails;
