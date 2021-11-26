import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ProductsManage = () => {

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://afternoon-inlet-87445.herokuapp.com/products').then(res => res.json()).then(data => setProducts(data));
    },[])


    //delete mathod

    const handleDelete = id =>{
        const url = `https://afternoon-inlet-87445.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'delete'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                window.confirm('Are you sure Delete is Item')
                const remaining = products.filter(product =>  product._id !== id);
                setProducts(remaining);
                
            }
           
        } )

    }

    return (
        <div>
            <h2>Manage All Products</h2>
            <Table striped bordered hover>
  <thead>
    <tr>
     
      <th>Image</th>
      <th>Product Name</th>
      <th>Email</th>
      <th>Price</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
      {
          products.map(product => <tr 
          key={product._id}
          > 
       
      <td><img width="100px" height="50px" src={product.image} alt="" /></td>
      <td>{product.productName}</td>
      <td>{product.email}</td>
      <td>{product.productPrice}$</td>
      <td><button style={{backgroundColor:"red" , border:"none", padding:'5px 10px', color:"white", borderRadius:"5px"}} onClick={()=> handleDelete(product._id)}>Delete</button></td>
          </tr>)
      }
  </tbody>
</Table>
        </div>
    );
};

export default ProductsManage;