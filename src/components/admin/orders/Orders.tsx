import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useDispatch, useSelector } from 'react-redux';
import { IOrder } from '../../../types';
import { fetchOrders } from '../../../actions';
import { getOrdersState } from '../../../store/selectors';
import OrderDetails from './OrderDetails';


const Orders = () => {
  const dispatch = useDispatch();
  const { loading, orders } = useSelector(getOrdersState);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
        <TableContainer component={Paper}>
            {loading && <div>A carregar encomendas...</div>}
            <Table aria-label="collapsible table">
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
                    {orders && orders.map((order: IOrder) => (
                      <Row key={order.id} order={order}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
  );
};
export default Orders;

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row(props: { order: IOrder }) {
  const { order } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">{order.id}</TableCell>
                <TableCell align="right">{`${order.shippingAddress.firstName} ${order.shippingAddress.lastName}`}</TableCell>
                <TableCell align="right">{order.status}</TableCell>
                <TableCell align="right">{order.total} €</TableCell>
                <TableCell align="right">{order.createdAt}</TableCell>
            </TableRow>
             <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <OrderDetails order={order}/>
                        </Box>
                    </Collapse>
                </TableCell>
             </TableRow>
        </React.Fragment>
  );
}
