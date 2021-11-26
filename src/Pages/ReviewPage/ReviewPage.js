import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import RveviewShow from './ReviewShow/RveviewShow';

const ReviewPage = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://afternoon-inlet-87445.herokuapp.com/reviews').then(res => res.json()).then(data => setReviews(data));
    },[])
    return (
        <div className="mt-5">
            <h1>Users Review</h1>
            <Row xs={1} md={2} lg={3} className="g-4 ">
            {reviews.map(review=><RveviewShow
            key = {review._id}
            review = {review}
            ></RveviewShow>)}
            </Row>
        </div>
    );
};

export default ReviewPage;