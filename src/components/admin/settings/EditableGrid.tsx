import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';

interface IProps {
    title: string,
    addButtonTitle:string,
    headers: string[],
    values:string[][],
    onChange: (result:any)=>void
}

const EditableGrid = ({
  title, addButtonTitle, headers, values, onChange,
} :IProps) => {
  const [data, setData] = useState(values);

  const addRow = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    const extraFields = headers.reduce((acc, curr) => [...acc, curr], []);
    const newData = [...data, extraFields];
    setData(newData);
  };

  const deleteRow = (index: number) => {
    const newData = data.filter((_: any, i:number) => i !== index);
    setData(newData);
    onChange(newData);
  };

  const handleOnChange = (event:any, i:number) => {
    const value = event.target.value.toUpperCase();
    const newData = [...data];
    newData[i] = [value];
    setData(newData);
    onChange(newData);
  };

  return (
        <div>
            <h3>{title}</h3>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>#</th>
                    {headers.map((h:string, i:number) => <th key={i}>{h}</th>)}
                    <th>Option</th>
                </tr>
                </thead>
                <tbody>
                {data.map((v, i:number) => (
                    <tr key={i}>
                        <td>{i}</td>
                        {v.map((el, k) => (
                            <td key={k}>
                                <input
                                    key={i}
                                    type="text"
                                    value={el}
                                    onChange={(e) => handleOnChange(e, i)}
                                />
                            </td>

                        ))}

                        <td>
                            <Button variant="danger" onClick={() => deleteRow(i)}>
                                X
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <Button type="button" onClick={addRow}>
                {addButtonTitle}
            </Button>
        </div>
  );
};

export default EditableGrid;
