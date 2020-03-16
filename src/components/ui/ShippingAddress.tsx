import React from 'react';
import {
  InputGroup, FormControl, Row, Col,
} from 'react-bootstrap';

interface IProps {
    readonly?: boolean,
    street?: string,
    city?: string,
    postalCode?: string
}

const ShippingAddress = ({
  readonly = false, street, city, postalCode,
}: IProps) => (
  <>
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="label-address">Morada</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder="Morada" name="street" disabled={readonly} value={street}/>
        </InputGroup>
        <Row>
            <Col sm={12} md={6}>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Localidade</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder="Lisboa" name="city" value={city} disabled={readonly} />
                </InputGroup>
            </Col>
            <Col sm={12} md={6}>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                            Codigo Postal
                </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder="1000-004" name="postalCode" value={postalCode} disabled={readonly} />
                </InputGroup>
            </Col>
        </Row>
  </>
);

export default ShippingAddress;
