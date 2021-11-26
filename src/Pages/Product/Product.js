import React from 'react';
import { Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Product = ({product}) => {
    const {_id,  productName, productPrice, description, image } = product;
    return (
      <div className="container  ">
        <Col>
          <Card>
            <Card.Img variant="top" src={image} width="100%" height="200px" />
            <Card.Body>
              <Card.Title>{productName}</Card.Title>
              <b>Price {productPrice} $</b>
              <p>Description: {description.slice(0,100)} </p>
              <Link to={`/purchase/${_id}`}>
                <button style={{width:"60%", backgroundColor:"yellow", border:'2px solid blue', padding:'5px 5px', borderRadius:'5px', fontWeight:'700' }}>
                  BUY NOW: {productName.slice(0,10)}
                </button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
};

export default Product;