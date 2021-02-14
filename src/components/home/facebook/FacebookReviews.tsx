import React from 'react';
import { useSelector } from 'react-redux';
import { Paper } from '@material-ui/core';
import { IRootState } from '../../../types';

const FacebookReviews = () => {
  const facebookReviews = useSelector((state: IRootState) => state.homePage.facebookReviews);

  if (facebookReviews.loading) {
    return <div>loading...</div>;
  }

  if (facebookReviews.error || facebookReviews.reviews.length === 0) {
    return null;
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return `${date.getHours()}:${date.getMinutes()} ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  };

  return (
        <div>
            <h4 className="m-t-md">
                Opinião dos clientes
            </h4>
            {facebookReviews.reviews.map((review, id) => (
                <Paper elevation={3} key={id} className="m-t-md p-xs c-text-sm">
                    {review.review_text}
                    <div className="m-t-sm c-text-muted c-text-right">
                        <small>{formatDate(review.created_time)}</small>
                    </div>
                </Paper>
            ))}

        </div>
  );
};

export default FacebookReviews;
