import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import path from '../../routes/path';
import { IRootState } from '../../types';

const headers = ['# Encomenda', 'Data', 'Estado', 'Total', ''];

interface IProps {
  orders: any[]
}

const OrderHistory = ({ orders }: IProps) => (
    <div>
      <Table responsive hover>
        <thead>
          <tr>
            {headers.map((h) => <th key={h}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>20-10-2020</td>
            <td>Em processamento</td>
            <td>40</td>
            <td>
              <Link to={path.ORDER_SUMMARY(1)}>Detalhes</Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
);

const mapStateToProps = ({ account }: IRootState) => ({
  orders: account.orders,
});

export default connect(mapStateToProps)(OrderHistory);
