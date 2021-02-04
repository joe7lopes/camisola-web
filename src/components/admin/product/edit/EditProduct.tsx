import React, { useState } from 'react';
import {
  Button, Form, FormControl, InputGroup,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct, IUpdateProduct } from '../../../../types';
import { LoadingButton } from '../../../ui';
import { deleteProduct, updateProduct } from '../../../../actions';
import {
  getAdminUIError, getSettingsSizes, isUpdateProductSuccess, isUpdatingProduct,
} from '../../../../store/selectors';
import Alert, { AlertType } from '../../../ui/Alert';
import ProductCategorySelector from './ProductCategorySelector';
import ProductSizeSelector from './ProductSizeSelector';
import ProductImagesManagerModal from '../ProductImagesManagerModal';
import RichText from '../../../ui/RichText';

interface IProps {
    product: IProduct
}

const EditProduct = ({ product }: IProps) => {
  const [isCustomizable, setIsCustomizable] = useState(product.customizable);
  const [isVisible, setIsVisible] = useState(product.visible);
  const [defaultPrice, setDefaultPrice] = useState(product.defaultPrice);
  const [productName, setProductName] = useState(product.name);
  const [categories, setCategories] = useState(product.categories);
  const [images, setImages] = useState(product.images);
  const [description, setDescription] = useState(product.description);
  const [imagesModalVisible, setImagesModalVisible] = useState(false);
  const [sizes, setSizes] = useState(product.sizes);
  const availableSizes = useSelector(getSettingsSizes);
  const isUpdating = useSelector(isUpdatingProduct);
  const error = useSelector(getAdminUIError);
  const success = useSelector(isUpdateProductSuccess);
  const dispatch = useDispatch();

  const handleOnSubmit = (event: any) => {
    event.preventDefault();

    const imageIds = images.map((img) => img.id);

    const newProduct: IUpdateProduct = {
      id: product.id,
      name: productName,
      categories,
      sizes,
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
                <h3 className="m-t-lg m-b-lg">categorias</h3>
                <ProductCategorySelector
                    selectedCategories={product.categories}
                    onChange={(categories1) => setCategories(categories1)}/>
                <h3 className="m-t-lg m-b-lg">Sizes</h3>
                <ProductSizeSelector
                    availableSizes={availableSizes}
                    selectedSizes={product.sizes}
                    onChange={(sizes1) => setSizes(sizes1)}/>
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
                        <InputGroup.Text>Preço a mostrar</InputGroup.Text>
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
                {(error || success) && <Alert type={error ? AlertType.ERROR : AlertType.SUCCESS}>
                    {error ? `Error updating product ${error}` : 'Produto actualizado'}
                </Alert>}
            </Form>
        </div>
  );
};

export default EditProduct;
