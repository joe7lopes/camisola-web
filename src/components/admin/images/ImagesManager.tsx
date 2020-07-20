import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PhotoCardSelector from '../../PhotoCardSelector';
import { getAllProductImages } from '../../../store/selectors';
import { fetchImages } from '../../../actions';
import { IImage } from '../../../types';
import {deleteImages, uploadImages} from '../../../actions/images';


interface ISelectableImage extends IImage{
    checked: boolean
}

const transformImages = (imagesArg: IImage[]) => imagesArg.map((img) => ({
  ...img,
  checked: false,
}));


const ImagesManager = () => {
  const images = useSelector(getAllProductImages);
  const dispatch = useDispatch();
  const [selectedImages, setSelectedImages] = useState<ISelectableImage[]>([]);
  const [imagesToUpload, setImagesToUpload] = useState();


  useEffect(() => {
    dispatch(fetchImages());
  }, []);

  useEffect(() => {
    setSelectedImages(transformImages(images));
  }, [images]);

  const handleFileUpload = (e: any) => {
    const files = Array.from(e.target.files);
    const imgs = files.map((file: any) => ({
      name: file.name,
      file,
    }));

    setImagesToUpload(imgs);
  };

  const onSelectPhoto = (i: any) => {
    const copy = [...selectedImages];
    copy[i].checked = !copy[i].checked;
    setSelectedImages(copy);
  };

  const onUpload = () => {
    dispatch(uploadImages(imagesToUpload));
  };

  const onDelete = () => {
    const imageIds = selectedImages
      .filter((img) => img.checked)
      .map((img) => img.name);
    dispatch(deleteImages(imageIds));
  };

  return (
        <div>
            <div className="row">
                <div className="m-b-md">
                    <input
                        type="file"
                        id="multi"
                        onChange={handleFileUpload}
                        multiple/>
                    <Button
                        onClick={onUpload}>Upload Image</Button>
                </div>
                <div className="col col-11 row m-b-md">
                    {selectedImages.map((img, i) => (
                        <PhotoCardSelector
                            className="m-l-sm m-b-sm"
                            key={`${img.name + i}`}
                            imageUrl={img.url}
                            checked={img.checked}
                            onChange={() => onSelectPhoto(i)}/>
                    ))}
                </div>

                <div className="col col-1">
                    <Button
                        variant="danger"
                        onClick={onDelete}>delete</Button>
                </div>
            </div>
        </div>);
};

export default ImagesManager;
