import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import path from '../../routes/path';

const headers = ['# Encomenda', 'Data', 'Estado', 'Total', ''];

function OrderHistory() {
  return (
    <div>
      <h3>Encomendas</h3>
      <Table responsive hover className="m-t-md">
        <thead>
          <tr>
           {renderTableHeaders()}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>20-10-2020</td>
            <td>Em processamento</td>
            <td>40</td>
            <td>
                <Link to={path.ORDER_SUMMARY}>Detalhes</Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

const renderTableHeaders = () => headers.map((h) => <th key={h}>{h}</th>);

export default OrderHistory;
