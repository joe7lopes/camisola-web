import React, { useState } from 'react';
import {
  Button, Form, FormControl, InputGroup,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { IProduct, IUpdateProduct } from '../../../../types';
import { LoadingButton } from '../../../ui';
import { deleteProduct, updateProduct } from '../../../../actions';
import {
  getBadges,
  getSettingsCategories,
  getSettingsSizes,
  isUpdatingProduct,
} from '../../../../store/selectors';
import Alert, { AlertType } from '../../../ui/Alert';
import ProductImagesManagerModal from '../ProductImagesManagerModal';
import RichText from '../../../ui/RichText';
import { getAdminProduct } from '../../../../store/selectors/adminProduct';

interface IProps {
    product: IProduct
}

const EditProduct = ({ product }: IProps) => {
  const dispatch = useDispatch();
  const availableSizes = useSelector(getSettingsSizes);
  const availableCategories = useSelector(getSettingsCategories).map((c) => c.name);
  const allBadges = useSelector(getBadges);
  const isUpdating = useSelector(isUpdatingProduct);
  const { error, data } = useSelector(getAdminProduct);
  const [isCustomizable, setIsCustomizable] = useState(product.customizable);
  const [isVisible, setIsVisible] = useState(product.visible);
  const [defaultPrice, setDefaultPrice] = useState(product.defaultPrice);
  const [productName, setProductName] = useState(product.name);
  const [categories, setCategories] = useState(product.categories);
  const [badges, setBadges] = useState(product.badges);
  const [images, setImages] = useState(product.images);
  const [description, setDescription] = useState(product.description);
  const [imagesModalVisible, setImagesModalVisible] = useState(false);
  const [sizes, setSizes] = useState(product.sizes.map((s) => s.size));


  const handleOnSubmit = (event: any) => {
    event.preventDefault();

    const imageIds = images.map((img) => img.id);
    const newSizes = sizes.map((s) => ({ size: s, price: defaultPrice }));

    const newProduct: IUpdateProduct = {
      id: product.id,
      name: productName,
      categories,
      sizes: newSizes,
      badges,
      imageIds,
      isCustomizable,
      isVisible,
      defaultPrice,
      description,
    };

    dispatch(updateProduct(newProduct));
  };

  return (
        <div>
            <div className="row">
                <div>
                    <h3 className="col-auto">Editar Produto {product.name}</h3>
                    <div className="c-text-muted">product id: {product.id}</div>
                </div>
                <Button
                    variant="danger"
                    onClick={() => dispatch(deleteProduct(product.id))}> Eliminar</Button>
            </div>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Label column sm={2}>
                        Nome
                    </Form.Label>
                    <Form.Control
                        required type="text"
                        placeholder="Nome do produto"
                        value={productName}
                        onChange={(e: any) => setProductName(e.target.value)}/>
                </Form.Group>

                <div className="m-t-lg">
                    <Autocomplete
                        multiple
                        options={availableCategories}
                        value={categories}
                        onChange={(e, value) => setCategories(value)}
                        renderInput={(params) => (
                            <TextField {...params} variant="outlined" label="categories"/>
                        )}
                    />
                </div>
                <div className="m-t-lg">
                    <Autocomplete
                        multiple
                        options={availableSizes}
                        value={sizes}
                        onChange={(e, value) => setSizes(value)}
                        renderInput={(params) => (
                            <TextField {...params} variant="outlined" label="sizes"/>
                        )}
                    />
                </div>
                <div className="m-t-lg">
                    <Autocomplete
                        multiple
                        options={allBadges}
                        value={badges}
                        getOptionLabel={(option) => option.name}
                        onChange={(e, value) => setBadges(value)}
                        renderInput={(params) => (
                            <TextField {...params} variant="outlined" label="Badges"/>
                        )}
                    />
                </div>
                <Button
                    className="m-t-lg m-b-lg"
                    onClick={() => setImagesModalVisible(true)}>
                    Images
                </Button>
                <ProductImagesManagerModal
                    visible={imagesModalVisible}
                    productImages={images}
                    onSelect={setImages}
                    onClose={() => setImagesModalVisible(false)}/>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descriçao</Form.Label>
                    <RichText
                        text={description}
                        onChange={setDescription}/>
                </Form.Group>

                <InputGroup className="mb-3">
                    Produto estampavel ?
                    <InputGroup.Checkbox
                        checked={isCustomizable}
                        onChange={() => setIsCustomizable(!isCustomizable)}/>
                </InputGroup>
                <InputGroup className="mb-3">
                    Produto visivel ?
                    <InputGroup.Checkbox
                        checked={isVisible}
                        onChange={() => setIsVisible(!isVisible)}/>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Preço</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl type="number" value={`${defaultPrice}`}
                                 onChange={(e: any) => setDefaultPrice(e.target.value)}/>
                </InputGroup>
                <LoadingButton
                    type="submit"
                    className="m-t-lg"
                    disabled={isUpdating}
                    isLoading={isUpdating}
                    size='lg'>
                    Update
                </LoadingButton>
                {(error || data)
                && <Alert type={error ? AlertType.ERROR : AlertType.SUCCESS}>
                    {error ? `Error ao criar product ${error}` : 'Produto guardado'}
                </Alert>}
            </Form>
        </div>
  );
};

export default EditProduct;
