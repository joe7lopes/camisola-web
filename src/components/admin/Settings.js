import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveSizes as saveSizesAction } from '../../actions';

function Settings({ sizes, saveSizes }) {
  const [availableSizes, setAvailableSizes] = useState(sizes);

  const handleOnValueChange = (event, index) => {
    const value = event.target.value.toUpperCase();
    const newSizes = [...availableSizes];
    newSizes[index] = value;
    setAvailableSizes(newSizes);
  };

  const addRow = () => {
    setAvailableSizes([...availableSizes, 'new size']);
  };

  const deleteRow = (size) => {
    const newSizes = availableSizes.filter((s) => s !== size);
    setAvailableSizes(newSizes);
  };

  const save = (e) => {
    e.preventDefault();
    saveSizes(availableSizes);
  };

  return (
    <div className="c-body">
      <h1>Settings page</h1>
      <h3>Tamanhos</h3>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Size</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {availableSizes.map((size, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>
                <input
                  type="text"
                  value={size}
                  onChange={(e) => handleOnValueChange(e, i)}
                />
              </td>
              <td>
                <Button variant="danger" onClick={() => deleteRow(size)}>
                  X
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button type="button" onClick={addRow}>
        Add Size
      </Button>
      <Button className="m-l-lg" variant="warning" type="submit" onClick={save}>
        Save
      </Button>
    </div>
  );
}

const mapStateToProps = ({ settings }) => ({
  sizes: settings.sizes,
});

const actionCreators = { saveSizes: saveSizesAction };

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
