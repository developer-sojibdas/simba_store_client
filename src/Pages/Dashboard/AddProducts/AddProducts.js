import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import './AddProducts.css'
import { Button } from 'react-bootstrap';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    

    axios
      .post("https://afternoon-inlet-87445.herokuapp.com/products", data)

      .then((res) => {
        if (res.data.insertedId) {
          alert('Added Successfull');

          reset();
        }
      });
  };
    return (
        <div className="add-services ">
            <h2>Add Your Products</h2>
            <form onSubmit={handleSubmit(onSubmit)} className=" shadow-lg w-75 mt-5 py-5 mx-auto">
      
        <input {...register("productName")} placeholder="Product Name" required/>
        <textarea {...register("description")} placeholder="Description" required />
        <input
          type="number"
          {...register("productPrice")}
          placeholder=" Price" required
        />
        <input {...register("image")} placeholder="Add Image" />
        <button style={{ backgroundColor:"yellow", border:'2px solid blue', padding:'5px 5px', borderRadius:'5px', color:'black' }} type="submit">ADD TO DATABASE </button>
        <br />
       
       <Link to ="/home"> <button style={{ backgroundColor:"yellow", border:'2px solid blue', padding:'5px 5px', borderRadius:'5px', color:'black' }} >Back</button></Link>
        
      </form>
        </div>
    );
};

export default AddProducts;