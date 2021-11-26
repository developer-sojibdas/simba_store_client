import React, { useEffect, useState } from 'react';
import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Purchase = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    const {user} = useAuth();
    const initialInfo = {ownerName: user.displayName, email: user.email, phone:'' }
    const [bokkingInfo, setBookingInfo] = useState(initialInfo);


   
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bokkingInfo};
        newInfo[field]=value;
        setBookingInfo(newInfo);
    }


    const handleProductConfirm = e =>{
        const clientOrder = {
            ...bokkingInfo,
            productName,
            image,
            productPrice
        }

       fetch('https://afternoon-inlet-87445.herokuapp.com/orders', {
           method: 'post',
           headers: {
               'content-type' : 'application/json'
           },
           body:JSON.stringify(clientOrder)
       })
       .then(res => res.json())
       .then(data => {
           if(data.insertedId){
            alert('Order Successfully')
           }
       })

        e.preventDefault();
        e.target.reset();
       
    }


    // destactirn productiD
    const {productName, productPrice, image} = product;

   useEffect(()=>{
       fetch(`https://afternoon-inlet-87445.herokuapp.com/products/${productId}`)
       .then(res => res.json())
       .then(data => setProduct(data));
   }, [])
    return (
        <>
            <Container>
            <form onSubmit ={handleProductConfirm}>
      <Card style={{ width: '18rem' }} className="mx-auto mt-5">
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{productName}</Card.Title>
    <Card.Text> Product Price: 
       {productPrice} $
    </Card.Text>
  </Card.Body>
  <ListGroup  className="list-group-flush">
    <ListGroupItem  name="email" onBlur={handleOnBlur} >{user.email}</ListGroupItem>
    <input name="ownerName" onBlur={handleOnBlur}  className="mb-2" type="text"  id="" placeholder="Enter Your Name" required /> 
   
   <input name="phone" onBlur={handleOnBlur} type="number"  id="" placeholder="Mobile Number" required/>


    
  </ListGroup>

    <button  type="submit">Booking Confirm </button>
    

</Card>
    </form>
    <Link to = "/products"><button  style={{width:"60%", backgroundColor:"yellow", border:'2px solid blue', padding:'5px 5px', borderRadius:'5px' }} >Go Back</button></Link>
            </Container>
        </>
    );
};

export default Purchase;