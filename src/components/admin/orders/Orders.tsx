import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import OrderRow from './OrderRow';
import { getOrdersState } from '../../../store/selectors';
import {
  fetchOrders,
  fetchOrdersWithCriteria,
  SearchCriteria,
  updateOrder,
} from '../../../actions';
import { IOrder, OrderStatus } from '../../../types';
import TablePaginationActions from './TablePaginationActions';
import OrderSearch from './OrderSearch';

const Orders = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(30);

  const dispatch = useDispatch();
  const { loading, orders, totalElements } = useSelector(getOrdersState);

  useEffect(() => {
    dispatch(fetchOrders(page, rowsPerPage));
  }, [dispatch, rowsPerPage, page]);

  if (!orders || loading) return <div>Loading...</div>;

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleOnOrderChanged = (updatedOrder: IOrder) => {
    dispatch(updateOrder(updatedOrder));
  };

  const handleOnSearch = (searchCriteria: SearchCriteria) => {
    dispatch(fetchOrdersWithCriteria(searchCriteria));
  };

  return (
    <>
            <OrderSearch onSearch={handleOnSearch}/>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible custom pagination table">
                    <TableHead>
                        <TableRow>
                            <TableCell/>
                            <TableCell>#</TableCell>
                            <TableCell align="right">Nome</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">total</TableCell>
                            <TableCell align="right">Criada em</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsPerPage > 0 && orders.map((order: IOrder) => (
                            <OrderRow
                                key={order.id}
                                order={order}
                                handleUpdateOrder={handleOnOrderChanged}/>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[30, 40, 50, { label: 'All', value: -1 }]}
                                colSpan={3}
                                count={totalElements}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                  inputProps: { 'aria-label': 'rows per page' },
                                  native: true,
                                }}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
    </>
  );
};
export default Orders;


export const orderStatusConfig = {
  [OrderStatus.RECEIVED]: { text: 'Recebida', color: '#cfd3ce' },
  [OrderStatus.PROCESSING]: { text: 'Em processamento', color: '#b8de6f' },
  [OrderStatus.SHIPPED]: { text: 'Enviada', color: '#b2deec' },
  [OrderStatus.CANCELLED]: { text: 'cancelada', color: '#ffda77' },
};
