import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchSettings } from '../../actions';

function Settings({ fetchSizes }) {
  const addRow = () => {
    fetchSizes();
  };

  return (
    <div className="c-body">
      <h1>Settings page</h1>
      <h3>Tamanhos</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
          </tr>
        </tbody>
      </Table>
      <Button type="button" onClick={addRow}>Add row</Button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchSizes: () => dispatch(fetchSettings),
});

export default connect(null, { fetchSizes: mapDispatchToProps })(Settings);
