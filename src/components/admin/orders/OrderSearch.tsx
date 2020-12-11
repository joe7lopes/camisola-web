import React, { useState } from 'react';
import {
  Button, Grid, Paper, TextField,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { SearchCriteria } from '../../../actions';


interface IProps {
  onSearch: (searchCriteria: SearchCriteria) => void
}

export default function OrderSearch({ onSearch } : IProps) {
  const [orderId, setOrderId] = useState();
  const [name, setName] = useState();
  const [createdAt, setCreatedAt] = useState();

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    onSearch({
      orderId,
      name,
      createdAt: createdAt ? new Date(createdAt).toISOString() : undefined,
    });
  };

  return (
        <Paper>

          <form noValidate autoComplete="off" onSubmit={handleFormSubmit}>
            <Grid container justify="space-around" className="p-lg">
            <TextField label="Encomenda #" value={orderId || ''} onChange={(e) => setOrderId(e.target.value)}/>
            <TextField label="Nome" value={name || ''} onChange={(e) => setName(e.target.value)} />
              <TextField
                  label="Criada em"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={createdAt || ''}
                  onChange={(e) => setCreatedAt(e.target.value)}
              />
              <Button
                  variant="contained"
                  color="primary"
                  startIcon={<SearchIcon />}
                  type="submit"
              >
                Procurar
              </Button>
            </Grid>
          </form>
        </Paper>
  );
}
