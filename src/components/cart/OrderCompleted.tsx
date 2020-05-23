import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { getCompletedOrderId, showOrderCompleted } from '../../store/selectors';
import { resetCart } from '../../actions';
import path from '../../routes/path';

const OrderCompleted = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const visible = useSelector(showOrderCompleted);
  const orderId = useSelector(getCompletedOrderId);
  const [showModal, setShowModal] = useState(visible);

  useEffect(() => {
    setShowModal(visible);
  }, [visible]);

  const handleOnClose = () => {
    dispatch(resetCart());
    history.push(path.HOME);
  };

  return (
        <Modal
            show={showModal}
            size="lg"
            centered
            onHide={handleOnClose}>
            <Modal.Header closeButton style={{ background: 'lightgreen' }}>
                <Modal.Title>
                    Obrigado pela sua compra
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    A sua Encomenda <span className="c-text-bold">#{orderId}</span> foi criada e está actualmente a ser processada.
                </p>
                <p>Se tiver alguma duvida não hesite em contactar.</p>
                <h5>Obrigado</h5>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleOnClose}>Fechar</Button>
            </Modal.Footer>
        </Modal>
  );
};

export default OrderCompleted;
