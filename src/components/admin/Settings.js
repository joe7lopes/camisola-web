import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSettings } from '../../actions';

function Settings(props) {
  const addRow = () => {
    props.fetchSettings();
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

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchSettings }, dispatch);

export default connect(null, mapDispatchToProps)(Settings);
