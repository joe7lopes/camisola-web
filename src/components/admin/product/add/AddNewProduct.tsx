import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Form, FormControl, InputGroup,
} from 'react-bootstrap';
import { createProduct } from '../../../../actions';
import { getSettingsCategories, getSettingsSizes, isSavingNewProduct } from '../../../../store/selectors';
import {
  ICreateProduct, IImage, IProductCategory, IProductSize,
} from '../../../../types';
import ProductPrice from './ProductPrice';
import { LoadingButton } from '../../../ui';
import ProductImagesManagerModal from '../ProductImagesManagerModal';

interface ICategories {
    name: string,
    checked: boolean,
    displayName: string
}

const AddNewProduct = () => {
  const sizes = useSelector(getSettingsSizes);
  const categories = useSelector(getSettingsCategories);
  const isSaving = useSelector(isSavingNewProduct);
  const dispatch = useDispatch();
  const [availableSizes, setAvailableSizes] = useState<IProductSize[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<ICategories[]>([]);
  const [images, setImages] = useState<IImage[]>([]);
  const [isCustomizable, setIsCustomizable] = useState(false);
  const [defaultPrice, setDefaultPrice] = useState(30);
  const [productName, setProductName] = useState('');
  const [imagesModalVisible, setImagesModalVisible] = useState(false);

  useEffect(() => {
    setSelectedCategories(convertCategories(categories));
    setAvailableSizes(convertSizes(sizes));
  }, [categories, sizes]);

  const handleOnSubmit = (event: any) => {
    event.preventDefault();

    const newCategories = selectedCategories
      .filter((c) => c.checked)
      .map((c) => c.name);

    const imageIds = images.map((img) => img.id);

    const newProduct: ICreateProduct = {
      name: productName,
      categories: newCategories,
      sizes: availableSizes,
      images: imageIds,
      isCustomizable,
      defaultPrice,
    };

    dispatch(createProduct(newProduct));
  };

  const handleOnPriceChanged = (newPrice: number, index: number) => {
    const priceToUpdate = { ...availableSizes[index] };
    priceToUpdate.price = newPrice;
    const newPriceSizes = [...availableSizes];
    newPriceSizes[index] = priceToUpdate;
    setAvailableSizes(newPriceSizes);
  };

  const handleOnPriceSizeDelete = (priceToDelete: IProductSize) => {
    setAvailableSizes(availableSizes.filter((p) => p !== priceToDelete));
  };

  const handleOnCategoryChanged = (index: number) => {
    const newCategories = [...selectedCategories];
    newCategories[index].checked = !newCategories[index].checked;
    setSelectedCategories(newCategories);
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
                <ProductPrice
                    priceSize={availableSizes}
                    handleOnPriceChanged={handleOnPriceChanged}
                    handleOnDelete={handleOnPriceSizeDelete}
                />
               <div>
                   <Button onClick={() => setImagesModalVisible(true)}>show Images</Button>
                   <ProductImagesManagerModal
                       visible={imagesModalVisible}
                       onClose={() => setImagesModalVisible(false)}
                       productImages={images}
                       onSelect={setImages}
                   />
               </div>
                <h3 className="m-t-lg m-b-lg">categorias</h3>
                {selectedCategories.map((c, i) => (
                    <div key={c.name}>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Checkbox
                                    checked={c.checked}
                                    onChange={() => handleOnCategoryChanged(i)}/>
                            </InputGroup.Prepend>
                            <FormControl aria-label="Text input with checkbox" value={c.name} readOnly/>
                        </InputGroup>
                    </div>
                ))}

                <InputGroup className="mb-3">
                    Produto estampavel ?
                    <InputGroup.Checkbox
                        checked={isCustomizable}
                        onChange={() => setIsCustomizable(!isCustomizable)}/>
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
                    disabled={isSaving}
                    isLoading={isSaving}
                    size='lg'>
                    Salvar
                </LoadingButton>
            </Form>
        </div>
  );
};

const convertSizes = (sizes: string[]) => sizes.map((size) => ({ size, price: 30 }));

const convertCategories = (categories: IProductCategory[]) => categories
  .map((c) => ({ ...c, checked: false }));

export default AddNewProduct;
