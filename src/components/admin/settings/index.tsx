import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Spinner, Form } from 'react-bootstrap';
import EditableGrid from './EditableGrid';
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
  const [sizes, setSizes] = useState();

  useEffect(() => {
    if (!isFetching) {
      setIsLoading(false);
      setSettings(settingsSelector);
    }
  }, [isFetching, settingsSelector]);


  const onSizesChanged = (result:any) => {
    const values = result.flat();
    setSizes(values);
  };

  const save = (e: any) => {
    e.preventDefault();
    const newSettings = {
      ...settings,
      sizes,
    };
    dispatch(updateSettings(newSettings));
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

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const sizeValues = settings.sizes.reduce((acc, curr) => [...acc, [curr]], []);
  return (
        <div className="c-body">
            <h1>Settings page</h1>
            <Form onSubmit={save}>
                <EditableGrid
                    title="Tamanhos"
                    addButtonTitle="Add size"
                    headers={['Tamanho']}
                    values={sizeValues}
                    onChange={onSizesChanged}
                    />
                <Form.Group>
                    <Form.Label>Preco padrao dos productos</Form.Label>
                    <Form.Control type="string" placeholder="Preco padrao em euros" value={`${productDefaultPrice}`}
                                  onChange={handleDefaultPrice}/>
                    <Form.Text className="text-muted">
                        Para Atribuir um preco default ao produto na sua criacao.
                    </Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Preco estampagem</Form.Label>
                    <Form.Control type="string" placeholder="12euros ??" value={`${stampingExtraCost}`}
                                  onChange={handleDefaultStamping}/>
                </Form.Group>

                {isSavingSettings
                  ? <SavingButton/>
                  : <NormalSaveButton/>
                }
            </Form>
        </div>
  );
};

export default Settings;

const NormalSaveButton = () => (
    <Button className="m-l-lg m-t-lg m-b-lg" variant="warning" type="submit">
        Save
    </Button>
);

const SavingButton = () => (
    <Button className="m-l-lg m-t-lg m-b-lg" variant="warning" type="submit" disabled>
        Saving <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
    />
    </Button>
);
