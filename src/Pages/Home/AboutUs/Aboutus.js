import React from 'react';
import './AboutUs.css'
import img from '../../../image/logo.png'
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';


const Aboutus = () => {
    return (
        <>
        <Navigation></Navigation>
            <div className = "about-wrapper container mt-5">
      <div className = "about-left">
        <div className = "about-left-content">
          <div>
            <div className = "shadow">
              <div className = "about-img">
                <img src = {img} alt = "about image"/>
              </div>
            </div>

            <h2>Welcome To</h2>
            <h3>SIMBA STORE</h3>
          </div>

          <ul className = "icons">
            <li><img src="https://i.ibb.co/8bpzYdq/facebook.png" alt="" /></li>
            <li><img src="https://i.ibb.co/FmKG5tk/twitter.png" alt="" /></li>
            <li><img src="https://i.ibb.co/RcXVVMH/instragram.png" alt="" /></li>
            <li><img src="https://i.ibb.co/KNyPdTw/link.png" alt="" /></li>
          </ul>
        </div>
        
      </div>

      <div className = "about-right">
        <h1>Hello<span>!</span></h1>
        <h2>Here's who WE are what do</h2>
       

        <div className = "about-para">
          <p>We are looking for an organized, experienced store keeper to be responsible for all stock, staff management, and planning promotional campaigns for the store.

To be successful as a store keeper you must be able to multitask and perform under pressure while remaining professional with customers. A good store keeper is able to manage stock by keeping a record of sales and ordering the required replacement items, occasionally making new product purchases that consumers may enjoy.</p>
          <p>Learn about the key requirements, duties, responsibilities, and skills that should be in a store manager job description.!</p>
        </div>
        <div className="credit">❤</div>
      </div>
    </div>

    <Footer></Footer>
        </>
    );
};

export default Aboutus;