import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import useAuth from '../../hooks/useAuth';



const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();


  const onSubmit = (data) => {
    

    axios
      .post("https://afternoon-inlet-87445.herokuapp.com/reviews", data)

      .then((res) => {
        if (res.data.insertedId) {
          alert('Added Successfull');

          reset();
        }
      });
  };
 
    return (
        <div className="add-services ">
            <h2>Add Your Review</h2>
            <form onSubmit={handleSubmit(onSubmit)} className=" shadow-lg w-75 mt-5 py-5 mx-auto">
        <input  {...register("email")} placeholder={user.email} required></input>
        <input {...register('number')} placeholder="Rating out of 5" required/>
        <textarea {...register("description")} placeholder="Description" required /> <br />
        <button  style={{ backgroundColor:"yellow", border:'2px solid blue', padding:'5px 5px', borderRadius:'5px' }} type="submit">ADD TO DATABASE </button>
        <br />
       
       <Link to ="/home"> <button  style={{ backgroundColor:"yellow", border:'2px solid blue', padding:'5px 5px', borderRadius:'5px' }}>Back</button></Link>
        
      </form>
        </div>
    );
};

export default Review;