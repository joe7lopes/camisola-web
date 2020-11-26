import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Avatar from '@material-ui/core/Avatar';
import { CircularProgress, Button } from '@material-ui/core';
import { IProduct } from '../../../../types';
import { getDefaultImage } from '../../../utils';


export interface IProps {
    products: IProduct[],
    onSave: (orderedProducts:IProduct[]) => void,
}

export default function OrderProductsTable({ products, onSave }: IProps) {
  const loading = false;
  const [orderedProducts, setOrderedProducts] = useState(products);

  const moveItem = (currentPosition: number, newPosition: number) => {
    const copy = [...orderedProducts];
    const itemToReplace = orderedProducts[newPosition];
    copy[newPosition] = orderedProducts[currentPosition];
    copy[currentPosition] = itemToReplace;
    setOrderedProducts(copy);
  };

  return (
    <>
            <TableContainer component={Paper}>
                <Table aria-label="simple dense table">
                    <TableBody>
                        {orderedProducts.map((p, i) => (
                            <TableRow key={p.id}>
                                <TableCell>
                                    <div className="c-flex">
                                        {i !== 0
                                            && <IconButton size="small" onClick={() => moveItem(i, i - 1)}>
                                                <ArrowUpwardIcon/>
                                            </IconButton>
                                        }
                                        { i !== orderedProducts.length - 1
                                            && <IconButton size="small" onClick={() => moveItem(i, i + 1)}>
                                                <ArrowDownwardIcon/>
                                            </IconButton>
                                        }
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Avatar variant="square" alt={p.name} src={getDefaultImage(p.images)}/>
                                </TableCell>
                                <TableCell>
                                    {p.name}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button
                variant="contained"
                style={{ marginTop: '2rem' }}
                color="primary"
                size="large"
                disabled={loading}
                onClick={() => onSave(orderedProducts)}
            >
                {loading && <CircularProgress size={14}/>}
                {!loading && 'Save'}
            </Button>

    </>
  );
}
