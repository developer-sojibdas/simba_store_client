import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductHome from '../../Product/ProductHome/ProductHome';
import ReviewPage from '../../ReviewPage/ReviewPage';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';



const Home = () => {
    return (
        <>
        <Navigation></Navigation>
        <Container className="mt-5">
            <Row>
                <Col sm={12} lg={5}>
                    <h1>We provide best quality sunglasses </h1>
                    <p>All products featured in this article are independently selected by our editors. If you buy something through our retail links, we may earn an affiliate commission. As an Amazon Associate, we earn from qualifying purchases. This comes at no extra cost for you and supports our team to create more content. Read our earnings disclaimer to learn more.</p>
                    <Link to='/products'><button style={{width:"20%", backgroundColor:"yellow", border:'2px solid blue', padding:'5px, 5px', borderRadius:'5px' }} >Explore</button></Link>
                </Col>
                <Col sm={12} lg={7}>
                    <img className="img-fluid" src="https://cdn.luxe.digital/media/2021/04/15133604/best-sunglasses-men-luxe-digital.jpg" alt="" />
                </Col>
            </Row>
           
        </Container>

        <Container className="mt-5">
            <h1 style={{ fontWeight:'700'}}>Most Populer Sunglasses</h1>
            <Row>
                <Col>
                <Card>
        <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/02/80/59/34/240_F_280593442_2xiTxqvq7ZgB9VzaNIPAZPv4OFEuotkh.jpg" />
        <Card.Body>
          <Card.Title>Summer tropical beach sunglasses</Card.Title>
          <Card.Text>
            TRelated Words runs on several different algorithms which compete to get their results higher in the list. 
          </Card.Text>
        </Card.Body>
      </Card>
                </Col>
                <Col>
                <Card>
        <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/02/65/11/03/240_F_265110335_ZuLSXNIFhmrJKOCWQ769eu03XGlQwWrL.jpg" />
        <Card.Body>
          <Card.Title>Mature woman with beach sunglasses</Card.Title>
          <Card.Text>
          The vectors of the words in your query are compared to a huge database of of pre-computed vectors
          </Card.Text>
        </Card.Body>
      </Card>
                </Col>
                <Col>
                <Card>
        <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/01/82/71/74/360_F_182717493_aD44ZKsfHvGYgKcadhNGR1SDVjrudQ64.jpg" />
        <Card.Body>
          <Card.Title>Summer vacation concept. Sunglasses</Card.Title>
          <Card.Text>
          As well as finding words related to other words, you can enter phrases and it should give you related
          </Card.Text>
        </Card.Body>
      </Card>
                </Col>
            </Row>
        </Container>

        <Container>
          <h2>OUR PRODUCTS</h2>
          {/* <Products></Products> */}
          <ProductHome></ProductHome>

          <ReviewPage></ReviewPage>
        </Container>

        <Footer></Footer>
        </>
        
    );
};

export default Home;