import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PhotoCardSelector from '../../PhotoCardSelector';
import { IImage } from '../../../types';
import { getAllProductImages } from '../../../store/selectors';
import { fetchImages } from '../../../actions';


interface ISelectableImage extends IImage {
    checked: boolean
}

interface IProps {
    visible: boolean,
    productImages: IImage[],
    onSelect: (images: IImage[]) => void,
    onClose: () => void
}

const transformImages = (allImagesArg: IImage[], productImagesArg: IImage[]) => {
  const productImageIds = productImagesArg.map((img) => img.id);
  return allImagesArg.map((img) => ({
    ...img,
    checked: productImageIds.includes(img.id),
  }));
};

const ProductImagesManagerModal = ({ visible, productImages, onSelect, onClose }: IProps) => {
  const dispatch = useDispatch();
  const allImages = useSelector(getAllProductImages);
  const [images, setImages] = useState<ISelectableImage[]>([]);


  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  useEffect(() => {
    setImages(transformImages(allImages, productImages));
  }, [allImages, productImages]);


  const handleOnSelect = (index: number) => {
    const copy = [...images];
    copy[index].checked = !copy[index].checked;
    setImages(copy);
  };

  const handleOnOk = () => {
    const selectedImages = images
      .filter((img) => img.checked);
    onSelect(selectedImages);
    onClose();
  };

  return (
      <Modal show={visible} onHide={onClose}>
          <Modal.Header closeButton>
              <Modal.Title>Select photos</Modal.Title>
          </Modal.Header>
                <div className="m-b-md">
                    {images.map((img, i) => (
                        <PhotoCardSelector
                            className="m-l-sm m-b-sm"
                            key={img.id}
                            imageUrl={img.url}
                            checked={img.checked}
                            onChange={() => handleOnSelect(i)}/>
                    ))}
            </div>
          <Modal.Footer>
                <Button variant='success' onClick={handleOnOk}>
                    OK
                </Button>
          </Modal.Footer>
      </Modal>);
};

export default ProductImagesManagerModal;
