import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../actions';
import { getAllProductImages } from '../store/selectors';

const ImagesManager = () => {
  const dispatch = useDispatch();
  const images = useSelector(getAllProductImages);

  useEffect(() => {
    dispatch(fetchImages());
  }, []);

  return (
        <div>
            <h3>Images Manager</h3>
            {images.map((img) => (
                <div key={img.name}>
                <Image src={img.url} style={{ width: 171, height: 180 }} thumbnail />
                </div>
            ))}
        </div>
  );
};

export default ImagesManager;
