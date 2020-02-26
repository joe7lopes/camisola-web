import React from 'react';
import { Button, Table } from 'react-bootstrap';

const Sizes = ({
  availableSizes, addRow, deleteRow, handleOnValueChange,
}:any) => (
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
                {availableSizes.map((size:string, i:number) => (
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
        </div>
);

export default Sizes;
