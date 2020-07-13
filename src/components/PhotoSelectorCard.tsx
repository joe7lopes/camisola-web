import React from 'react';
import { Form, Image } from 'react-bootstrap';

interface IProps {
    imageUrl: string,
    checked: boolean,
    onChange: () => void,
    className?: string,
}

const PhotoSelectorCard = ({
  imageUrl, checked, onChange, className,
}: IProps) => (
    <div className={className} style={{ backgroundColor: 'white', width: '14rem', height: '16rem' }}>
        <Image src={imageUrl} thumbnail/>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Form.Check type="checkbox"
                        checked={checked}
                        onChange={onChange}/>
        </div>
    </div>
);

export default PhotoSelectorCard;
