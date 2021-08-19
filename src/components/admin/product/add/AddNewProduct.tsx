import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Form, FormControl, InputGroup,
} from 'react-bootstrap';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { createProduct } from '../../../../actions';
import {
  getBadges,
  getSettingsCategories,
  getSettingsSizes,
} from '../../../../store/selectors';
import {
  IBadge,
  ICreateProduct, IImage, IProductSize,
} from '../../../../types';
import { LoadingButton } from '../../../ui';
import ProductImagesManagerModal from '../ProductImagesManagerModal';
import Alert, { AlertType } from '../../../ui/Alert';
import RichText from '../../../ui/RichText';
import { getAdminProduct } from '../../../../store/selectors/adminProduct';

interface ICategories {
    name: string,
    checked: boolean,
    displayName: string
}

const AddNewProduct = () => {
  const sizes = useSelector(getSettingsSizes);
  const categories = useSelector(getSettingsCategories);
  const badges = useSelector(getBadges);
  const { loading, error, data } = useSelector(getAdminProduct);
  const dispatch = useDispatch();
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<ICategories[]>([]);
  const [selectedBadges, setSelectedBadges] = useState<IBadge[]>([]);
  const [images, setImages] = useState<IImage[]>([]);
  const [description, setDescription] = useState('');
  const [defaultPrice, setDefaultPrice] = useState(30);
  const [productName, setProductName] = useState('');
  const [imagesModalVisible, setImagesModalVisible] = useState(false);
  const [customizable, setCustomizable] = useState(false);
  const [visible, setVisible] = useState(false);
  const [prebooking, setPrebooking] = useState(false);


  const handleOnSubmit = (event: any) => {
    event.preventDefault();

    const newCategories = selectedCategories
      .map((c) => c.name);

    const newSizes: IProductSize[] = selectedSizes.map((s) => ({ size: s, price: defaultPrice }));

    const imageIds = images.map((img) => img.id);

    const newProduct: ICreateProduct = {
      name: productName,
      categories: newCategories,
      sizes: newSizes,
      images: imageIds,
      badges: selectedBadges,
      customizable,
      visible,
      prebooking,
      defaultPrice,
      description,
    };

    dispatch(createProduct(newProduct));
  };

  const handleOnSizesChanged = (values: any) => {
    setSelectedSizes(values);
  };

  const handleOnCategoryChanged = (values: any) => {
    setSelectedCategories(values);
  };

  const handleOnBadgeChanged = (values: any) => {
    setSelectedBadges(values);
  };

  return (
        <div className="c-body p-lg">
            <h3>Adicionar Produto</h3>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Label column sm={2}>
                        Nome
                    </Form.Label>
                    <Form.Control required type="text" placeholder="Nome do produto"
                                  onChange={(e: any) => setProductName(e.target.value)}/>
                </Form.Group>
                <div className="m-t-lg">
                    <Autocomplete
                        multiple
                        options={sizes}
                        onChange={(e, value) => handleOnSizesChanged(value)}
                        renderInput={(params) => (
                            <TextField {...params} variant="outlined" label="Tamanhos"/>
                        )}
                    />
                    <span className="text-muted">Ex: XS, S, M</span>
                </div>
                <div className="m-t-lg">
                    <Button onClick={() => setImagesModalVisible(true)}>Images</Button>
                    <ProductImagesManagerModal
                        visible={imagesModalVisible}
                        onClose={() => setImagesModalVisible(false)}
                        productImages={images}
                        onSelect={setImages}
                    />
                </div>
                <div className="m-t-lg m-b-lg">
                    <Autocomplete
                        multiple
                        options={categories}
                        getOptionLabel={(option) => option.name}
                        onChange={(e, value) => handleOnCategoryChanged(value)}
                        renderInput={(params) => (
                            <TextField {...params} variant="outlined" label="Categorias"/>
                        )}
                    />
                    <span className="text-muted">Ex: Benfica, camisolas, fatos de treino</span>
                </div>
                <div className="m-t-lg m-b-lg">
                    <Autocomplete
                        multiple
                        options={badges}
                        getOptionLabel={(option) => option.name}
                        onChange={(e, value) => handleOnBadgeChanged(value)}
                        renderInput={(params) => (
                            <TextField {...params} variant="outlined" label="Badges"/>
                        )}
                    />
                    <span className="text-muted">Ex: liga nos, etc..</span>
                </div>
                <RichText
                    text={description}
                    onChange={setDescription}/>
                <InputGroup className="m-t-lg m-b-md">
                    Produto estampavel ?
                    <InputGroup.Checkbox
                        checked={customizable}
                        onChange={() => setCustomizable(!customizable)}/>
                </InputGroup>
                <InputGroup className="m-b-md">
                    Produto visivel ?
                    <InputGroup.Checkbox
                        checked={visible}
                        onChange={() => setVisible(!visible)}/>
                </InputGroup>
                <InputGroup className="m-b-md">
                    Pré reserva ?
                    <InputGroup.Checkbox
                        checked={prebooking}
                        onChange={() => setPrebooking(!prebooking)}/>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Preço</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl required type="number" value={`${defaultPrice}`}
                                 onChange={(e: any) => setDefaultPrice(e.target.value)}/>
                </InputGroup>
                {(error || data)
                && <Alert type={error ? AlertType.ERROR : AlertType.SUCCESS}>
                    {error ? `Error ao criar product ${error}` : 'Produto guardado'}
                </Alert>}
                <LoadingButton
                    type="submit"
                    className="m-t-lg"
                    disabled={loading}
                    isLoading={loading}
                    size='lg'>
                    Salvar
                </LoadingButton>
            </Form>
        </div>
  );
};


export default AddNewProduct;
