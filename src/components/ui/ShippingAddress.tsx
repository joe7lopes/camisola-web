import React from 'react';
import {InputGroup, FormControl, Row, Col} from 'react-bootstrap';


interface IProps {
    readonly?: boolean
}

const ShippingAddress = ({readonly = false}: IProps) => (
    <>
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="label-address">Morada</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder="Morada" disabled={readonly} />
        </InputGroup>
        <Row>
            <Col sm={12} md={6}>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Localidade</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder="Lisboa" disabled={readonly} />
                </InputGroup>
            </Col>
            <Col sm={12} md={6}>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                            Codigo Postal
                </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder="1000-004" disabled={readonly} />
                </InputGroup>
            </Col>
        </Row>
    </>
)

export default ShippingAddress;