import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@material-ui/core/Box';
import NumberOfItemsDiscount from './NumberOfItemsDiscount';
import { LoadingButton } from '../../ui';

interface INumberOfItemsRule {
    numberOfItems: number,
    discount: number
}

const Discounts = () => {
  const newRow: INumberOfItemsRule = { numberOfItems: 0, discount: 0 };
  const [rules, setRules] = useState<INumberOfItemsRule[]>([]);

  const updateNumberOfItems = (value: number, index: number) => {
    const copy = [...rules];
    copy[index].numberOfItems = value;
    setRules(copy);
  };

  const updateDiscount = (value: number, index: number) => {
    const copy = [...rules];
    copy[index].discount = value;
    setRules(copy);
  };

  const deleteRule = (index: number) => {
    const copy = [...rules];
    copy.splice(index, 1);
    setRules(copy);
  };

  const saveRules = () => {
    console.log(rules);
  };

  return (
        <div>
            <h3>Descontos</h3>

            <Button variant="contained" color="primary" onClick={() => setRules([...rules, newRow])}>
                Adicionar regra
            </Button>
            {rules.map((rule, i: number) => (
                <div key={i} className=" m-t-lg c-flex">
                    <NumberOfItemsDiscount
                        numberOfItems={rule.numberOfItems}
                        setNumberOfItems={(items: number) => updateNumberOfItems(items, i)}
                        setDiscount={(discount: number) => updateDiscount(discount, i)}
                        discount={rule.discount}/>
                    <Box className="m-l-lg">
                        <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            startIcon={<DeleteIcon/>}
                            onClick={() => deleteRule(i)}>
                            Eliminar
                        </Button>
                    </Box>
                </div>
            ))}
            {rules.length > 0
            && <div>
                <LoadingButton className="m-t-lg" isLoading={false} type="button" onClick={saveRules}>
                    Guardar
                </LoadingButton>
            </div>
            }
        </div>
  );
};

export default Discounts;
