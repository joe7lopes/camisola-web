import React from 'react';
import {
  InputGroup, FormControl, Row, Col,
} from 'react-bootstrap';

interface IProps {
    readonly?: boolean
}

const ShippingAddress = ({
  readonly = false,
}: IProps) => {
  const user = { address: { street: 'street', city: 'city', postalCode: '223' } };
  return (
    <>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="label-address">Morada</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="Morada" name="street" disabled={readonly} value={user?.address?.street}/>
            </InputGroup>
            <Row>
                <Col sm={12} md={6}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Localidade</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl placeholder="Lisboa" name="city" value={user?.address?.city} disabled={readonly} />
                    </InputGroup>
                </Col>
                <Col sm={12} md={6}>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                Codigo Postal
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl placeholder="1000-004" name="postalCode" value={user?.address?.postalCode} disabled={readonly} />
                    </InputGroup>
                </Col>
            </Row>
    </>
  );
};

export default ShippingAddress;
