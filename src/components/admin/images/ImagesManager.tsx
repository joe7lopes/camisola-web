import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Snackbar } from '@material-ui/core';
import PhotoCardSelector from '../../PhotoCardSelector';
import { getAllProductImages, imageManager } from '../../../store/selectors';
import { fetchImages } from '../../../actions';
import { IImage } from '../../../types';
import { deleteImages, uploadImages } from '../../../actions/images';
import Alert, { AlertType } from '../../ui/Alert';


interface ISelectableImage extends IImage{
    checked: boolean
}

const transformImages = (imagesArg: IImage[]) => imagesArg.map((img) => ({
  ...img,
  checked: false,
}));


const ImagesManager = () => {
  const images = useSelector(getAllProductImages);
  const request = useSelector(imageManager);
  const dispatch = useDispatch();
  const [selectedImages, setSelectedImages] = useState<ISelectableImage[]>([]);
  const [imagesToUpload, setImagesToUpload] = useState();
  const [open, setOpen] = React.useState(false);


  useEffect(() => {
    if (request.error || request.data) {

      setOpen(true);
    }
  }, [request]);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

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
      .map((img) => img.id);
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
                        disabled={request.loading
                        || (imagesToUpload === undefined || imagesToUpload.leading > 0)}
                        onClick={onUpload}>Upload Image</Button>
                </div>

                <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)}>
                    <Alert type={request.data ? AlertType.SUCCESS : AlertType.ERROR}>
                        {request.data ? 'Imagem guardada com sucesso!' : request.error}
                    </Alert>
                </Snackbar>


                <div className="col col-11 row m-b-md">
                    {selectedImages.map((img, i) => (
                        <PhotoCardSelector
                            className="m-l-sm m-b-sm"
                            key={`${img.id + i}`}
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
