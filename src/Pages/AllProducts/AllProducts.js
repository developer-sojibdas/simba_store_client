import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Products from '../Shared/Products/Products';

const AllProducts = () => {
    return (
        <>
        <Navigation></Navigation>
            <Container>
            <h2>Oru ALL Products</h2>
          <Products></Products>
            
        </Container>
        <Footer></Footer>
        </>
    );
};

export default AllProducts;