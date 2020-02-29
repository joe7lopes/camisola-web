import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { removeCartItem } from '../../actions';
import { ICartItem } from '../../types';
import { Dispatch, bindActionCreators } from 'redux';

interface IProps {
    item: ICartItem,
    removeItem: (item: ICartItem) => void
}

const CartItem = ({ item, removeItem }: IProps) => (
    <tr>
        <td>Thumbnail + product description</td>
        <td>{`${item.price} €`}</td>
        <td>{`${item.price} €`}</td>
        <td>
            <Button variant="danger" onClick={() => removeItem(item)}>X</Button>
        </td>
    </tr>
)


const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ removeItem: removeCartItem }, dispatch);

export default connect(null, mapDispatchToProps)(CartItem);