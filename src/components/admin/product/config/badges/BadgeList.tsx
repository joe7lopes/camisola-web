import React from 'react';
import { TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { IBadge } from '../../../../../types';

interface IProps {
    badges: IBadge[],
    onChange: (index: number, value: string) => void,
    onDelete: (badge: IBadge) => void
}

const BadgeList = ({ badges, onChange, onDelete }: IProps) => (
        <div>
            {badges.map((badge, index) => <div key={badge.id} className="m-t-md">
                    <TextField
                        label="Nome do badge"
                        variant="outlined"
                        value={badge.name}
                        onChange={(e) => onChange(index, e.target.value)}
                    />
                    <Button
                        className="m-l-lg"
                        variant="danger"
                        onClick={() => onDelete(badge)}>
                        Eliminar
                    </Button>
                </div>)}
        </div>
);


export default BadgeList;
