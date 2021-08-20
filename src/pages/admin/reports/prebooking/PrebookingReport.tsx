import React, {useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useDispatch, useSelector} from "react-redux";
import {fetchPreBookingsReport} from "./actions";
import {IRootState} from "../../../../types";

export const PrebookingReport = () => {
    const dispatch = useDispatch();
    const {loading, data} = useSelector((state: IRootState) => {
    return {
        loading: state.adminNew.reports.prebooking.loading,
        data: state.adminNew.reports.prebooking.data
    }}
    );

    useEffect(() => {
        dispatch(fetchPreBookingsReport());
    }, [dispatch]);

    if (!data || loading) return <div>Loading...</div>;

    return (
        <>
            <div>Pré-Reservas</div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Camisola</TableCell>
                            <TableCell align="right">Tamanho</TableCell>
                            <TableCell align="right">quantidade</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, i) => (
                            <TableRow key={row.productName+i}>
                                <TableCell component="th" scope="row">{row.productName}</TableCell>
                                <TableCell align="right">{row.size}</TableCell>
                                <TableCell align="right">{row.quantity}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default PrebookingReport;
