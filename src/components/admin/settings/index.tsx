import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Spinner, Form } from 'react-bootstrap';
import Sizes from './Sizes';
import { getSettings, isFetchingSettings, isUpdatingSettings } from '../../../store/selectors';
import { Loading } from '../../index';
import { updateSettings } from '../../../actions';

const Settings = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(isFetchingSettings);
  const settingsSelector = useSelector(getSettings);
  const isSavingSettings = useSelector(isUpdatingSettings);
  const [isLoading, setIsLoading] = useState(true);
  const [settings, setSettings] = useState(settingsSelector);

  useEffect(() => {
    if (!isFetching) {
      setIsLoading(false);
      setSettings(settingsSelector);
    }
  }, [isFetching]);

  const handleOnValueChange = (event: any, index: number) => {
    const value = event.target.value.toUpperCase();
    const newSizes = [...settings.sizes];
    newSizes[index] = value;
    setSettings((prevState) => ({
      ...prevState,
      sizes: newSizes,
    }));
  };

  const addRow = () => {
    setSettings((prevState) => ({
      ...prevState,
      sizes: [...prevState.sizes, 'Enter new size'],
    }
    ));
  };

  const deleteRow = (size: string) => {
    const newSizes = settings.sizes.filter((s) => s !== size);
    setSettings((prevState) => ({
      ...prevState,
      sizes: newSizes,
    }
    ));
  };

  const save = (e: any) => {
    e.preventDefault();
    dispatch(updateSettings(settings));
  };

  const handleDefaultPrice = (event: any) => {
    const newPrice = event.target.value;
    setSettings((prevState) => ({
      ...prevState,
      productDefaultPrice: newPrice,
    }
    ));
  };

  const handleDefaultStamping = (event: any) => {
    const newPrice = event.target.value;
    setSettings((prevState) => ({
      ...prevState,
      stampingExtraCost: newPrice,
    }
    ));
  };

  if (isLoading) return <Loading/>;

  const { productDefaultPrice, stampingExtraCost } = settings;

  return (
        <div className="c-body">
            <h1>Settings page</h1>
            <Form onSubmit={save}>
                <Sizes
                    availableSizes={settings.sizes}
                    addRow={addRow}
                    deleteRow={deleteRow}
                    handleOnValueChange={handleOnValueChange}/>
              <Form.Group >
                <Form.Label>Preco padrao dos productos</Form.Label>
                <Form.Control type="string" placeholder="Preco padrao em euros" value={`${productDefaultPrice}`} onChange={handleDefaultPrice} />
                <Form.Text className="text-muted">
                  Para Atribuir um preco default ao produto na sua criacao.
                </Form.Text>
              </Form.Group>

              <Form.Group >
                <Form.Label>Preco padrao dos productos</Form.Label>
                <Form.Control type="string" placeholder="Preco padrao em euros" value={`${stampingExtraCost}`} onChange={handleDefaultStamping} />
                <Form.Text className="text-muted">
                  Para Atribuir um preco default ao produto na sua criacao.
                </Form.Text>
              </Form.Group>
                {isSavingSettings
                  ? <SavingButton />
                  : <NormalSaveButton />
                }
            </Form>
        </div>
  );
};

export default Settings;

const NormalSaveButton = () => (
    <Button className="m-l-lg" variant="warning" type="submit">
        Save
    </Button>
);

const SavingButton = () => (
    <Button className="m-l-lg" variant="warning" type="submit" disabled>
        Saving <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
    />
    </Button>
);
