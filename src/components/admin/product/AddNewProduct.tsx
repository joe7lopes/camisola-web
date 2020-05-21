import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import { createProduct } from '../../../actions';
import {getSettingsCategories, getSettingsSizes, isSavingNewProduct} from '../../../store/selectors';
import {
  ICreateProduct, ImageRequest, IProductCategory, IProductSize,
} from '../../../types';
import ProductPrice from './ProductPrice';
import PreviewImages from './PreviewImages';
import { LoadingButton } from '../../ui';

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
  const [images, setImages] = useState<ImageRequest[]>([]);
  const [isCustomizable, setIsCustomizable] = useState(false);
  const [defaultPrice, setDefaultPrice] = useState(35);
  const [productName, setProductName] = useState('');

  useEffect(() => {
    setSelectedCategories(convertCategories(categories));
    setAvailableSizes(convertSizes(sizes));
  }, [categories, sizes]);


  const handleFileUpload = (e: any) => {
    const files = Array.from(e.target.files);
    const selectedImages = files.map((file: any) => ({
      name: file.name,
      url: URL.createObjectURL(file),
      file,
      default: false,
    }));

    setImages([...images, ...selectedImages]);
  };

  const handleOnDeleteImage = (img: ImageRequest) => {
    const newImages = images.filter((image) => image !== img);
    setImages(newImages);
  };

  const handleDefaultImageChanged = (img: ImageRequest) => {
    const newImages = images.map((i) => {
      if (i === img) {
        return { ...img, default: true };
      }
      return { ...i, default: false };
    });
    setImages(newImages);
  };

  const handleOnSubmit = (event: any) => {
    event.preventDefault();

    const newCategories = selectedCategories
      .filter((c) => c.checked)
      .map((c) => c.name);

    const hasDefaultImage = images.filter((img) => img.default).length > 0;
    const imagesToSave = images;
    if (images.length > 0 && !hasDefaultImage) {
      imagesToSave[0].default = true;
    }

    const newProduct: ICreateProduct = {
      name: productName,
      categories: newCategories,
      sizes: availableSizes,
      images: imagesToSave,
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
                <PreviewImages
                    images={images}
                    handleFileUpload={handleFileUpload}
                    handleOnDeleteImage={handleOnDeleteImage}
                    handleDefaultImageChanged={handleDefaultImageChanged}
                />
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

const convertSizes = (sizes: string[]) => sizes.map((size) => ({ size, price: 35 }));

const convertCategories = (categories: IProductCategory[]) => categories
  .map((c) => ({ ...c, checked: false }));

export default AddNewProduct;
