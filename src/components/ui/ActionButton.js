import React from 'react';
import { Button } from 'react-bootstrap';

export default function ActionButton({
  children,
  className,
  type = 'button',
  onClick,
}) {
  const buttonClass = `${className}`;
  return (
    <Button className={buttonClass} type={type} onClick={onClick}>
      {children}
    </Button>
  );
}
