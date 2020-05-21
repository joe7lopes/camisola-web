import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

interface IProps {
    isLoading: boolean,
    children?: any,
    className?: string,
    disabled?: boolean,
    type: any,
    onClick?:any,
    size? : any
}

const LoadingButton = ({
  isLoading,
  children,
  className,
  disabled,
  type,
  onClick,
  size = 'sm',
}: IProps) => (
    <Button
        type={type}
        className={className}
        disabled={disabled}
        onClick={onClick}
        size={size}>
        {children}
        {isLoading && <Spinner
          className="m-l-sm"
          as="span"
          animation="border"
          role="status"
        />}
    </Button>
);

export default LoadingButton;
