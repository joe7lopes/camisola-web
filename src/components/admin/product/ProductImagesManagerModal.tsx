import React, { useState } from 'react';
import {
  Button, Modal,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PhotoCardSelector from '../../PhotoCardSelector';
import { IImage } from '../../../types';
import { getAllProductImages } from '../../../store/selectors';
import { fetchImages } from '../../../actions';

interface IProps {
    visible: boolean,
    productImages: IImage[],
    onSelect: (images: IImage[]) => void,
    onClose: () => void
}

const ProductImagesManagerModal = ({
  visible, productImages, onSelect, onClose,
}: IProps) => {
  const dispatch = useDispatch();
  const allImages = useSelector(getAllProductImages);
  const [selectedImages, setSelectedImages] = useState(productImages);

  const handleOnSelect = (index: number) => {
    const copy = [...selectedImages.slice(0, index), ...selectedImages.slice(index + 1)];
    setSelectedImages(copy);
  };

  const handleOnSelectAllImages = (index: number) => {
    const copyProductImages = [...selectedImages];
    copyProductImages.push(allImages[index]);
    setSelectedImages(copyProductImages);
  };

  const loadAllPhotos = () => {
    dispatch(fetchImages());
  };

  const handleOnOk = () => {
    onSelect(selectedImages);
    onClose();
  };

  return (
        <Modal show={visible} onHide={onClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Select photos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="c-flex-wrap">
                {selectedImages.map((img, i) => (
                    <PhotoCardSelector
                        className="m-l-sm m-b-sm"
                        key={img.id}
                        imageUrl={img.url}
                        checked={true}
                        onChange={() => handleOnSelect(i)}/>
                ))}
                </div>
                <Button onClick={loadAllPhotos}>View all Photos</Button>
                <div className="c-flex-wrap">
                {allImages.map((img, i) => (
                    <PhotoCardSelector
                        className="m-l-sm m-b-sm"
                        key={img.id}
                        imageUrl={img.url}
                        checked={false}
                        onChange={() => handleOnSelectAllImages(i)}/>
                ))}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='success' onClick={handleOnOk}>
                    OK
                </Button>
            </Modal.Footer>
        </Modal>);
};

export default ProductImagesManagerModal;
