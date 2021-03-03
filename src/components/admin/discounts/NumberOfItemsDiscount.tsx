import React from 'react';
import { InputAdornment, TextField } from '@material-ui/core';
import EuroIcon from '@material-ui/icons/Euro';

const NumberOfItemsDiscount = ({ numberOfItems, discount , setNumberOfItems, setDiscount}: any) => {
  return (
        <form autoComplete="off">
            <TextField label="Numero de produtos" value={numberOfItems} variant="outlined" onChange={(e: any) => setNumberOfItems(e.target.value)}/>
            <MoneyInput label="Desconto" value={discount} onChange={(e: any) => setDiscount(e.target.value)} />
        </form>
  );
};

export default NumberOfItemsDiscount;


const MoneyInput = ({ label, value, onChange }: any) => <TextField
    onChange={onChange}
    label={label}
    value={value}
    variant="outlined"
    InputProps={{
      startAdornment: (
            <InputAdornment position="start">
                <EuroIcon/>
            </InputAdornment>
      ),
    }}
/>;
