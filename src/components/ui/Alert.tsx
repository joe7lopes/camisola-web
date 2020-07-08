import React from 'react';
import { Alert as AlertB } from 'react-bootstrap';

export enum AlertType {
    ERROR="danger",
    SUCCESS="success"
}

interface IProps {
    type: AlertType,
    errorMessage: string,
    successMessage: string,
    className?: string
}

const Alert = ({
  type, errorMessage, successMessage, className,
}: IProps) => (
        <AlertB className={className} variant={type}>
            { type === AlertType.ERROR && errorMessage}
            { type === AlertType.SUCCESS && successMessage}
        </AlertB>
);

export default Alert;
