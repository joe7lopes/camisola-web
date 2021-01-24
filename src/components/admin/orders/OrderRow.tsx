import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import OrderDetails from './OrderDetails';
import { orderStatusConfig } from './Orders';
import { IOrder } from '../../../types';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

interface IProps {
    order: IOrder,
    handleUpdateOrder: (updatedOrder: IOrder) => void
}

export default function OrderRow({ order, handleUpdateOrder }: IProps) {
  const [open, setOpen] = useState(false);
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
                <TableCell align="right"
                           style={{ backgroundColor: orderStatusConfig[order.status].color }}>
                    {orderStatusConfig[order.status].text}
                </TableCell>
                <TableCell align="right">{order.total} €</TableCell>
                <TableCell align="right">{order.createdAt}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <OrderDetails order={order} handleUpdateOrder={handleUpdateOrder}/>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
  );
}
