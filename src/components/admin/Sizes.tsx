import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getSettingsSizes } from '../../store/selectors';
import { saveSizes as saveSizesAction } from '../../actions';

const Sizes = () => {
  const dispatch = useDispatch();
  const saveSizes = (sizes: string[]) => dispatch(saveSizesAction(sizes));
  const sizes = useSelector(getSettingsSizes);
  const [availableSizes, setAvailableSizes] = useState(sizes);

  const handleOnValueChange = (event: any, index: number) => {
    const value = event.target.value.toUpperCase();
    const newSizes = [...availableSizes];
    newSizes[index] = value;
    setAvailableSizes(newSizes);
  };

  const addRow = () => {
    setAvailableSizes([...availableSizes, 'new size']);
  };

  const deleteRow = (size: string) => {
    const newSizes = availableSizes.filter((s) => s !== size);
    setAvailableSizes(newSizes);
  };

  const save = (e: any) => {
    e.preventDefault();
    saveSizes(availableSizes);
  };

  return (
        <div>
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
};

export default Sizes;
