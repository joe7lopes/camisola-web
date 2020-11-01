import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';

export enum AlertType {
    ERROR="error",
    SUCCESS="success",
    WARNING="warning",
    INFO="info",
}

interface IProps {
    type: AlertType,
}

const Alert: React.FunctionComponent<IProps> = (props: IProps) => <MuiAlert elevation={6} variant="filled" severity={props.type} {...props} />;

export default Alert;
