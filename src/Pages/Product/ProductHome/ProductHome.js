import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../../Product/Product';

const ProductHome = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://afternoon-inlet-87445.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            const slice = data.slice(0, 6)
            setProducts(slice)});
    },[])
    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-4 ">
            {products.map(product=><Product
            key = {product._id}
            product = {product}
            ></Product>)}
            </Row>
        </div>
    );
};

export default ProductHome;