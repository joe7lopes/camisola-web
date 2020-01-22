import React from 'react';
import { Button } from 'react-bootstrap';

export default function ActionButton({
  children,
  className,
  type = 'button',
  onClick,
  disabled,
}) {
  const buttonClass = `${className}`;
  return (
    <Button
      className={buttonClass}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}
