import React, { useState } from 'react';
import {  Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuth from '../../../hooks/useAuth';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, isLoading, authError, signInWithGoogle} = useAuth();
    

    const location = useLocation();
    const history = useHistory();

    const hanldeOnChange = e =>{
        const field = e.target.name;
        const value  = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    // google handle 
    const handleGoogleSignIn =  () =>{
        signInWithGoogle(location, history )
    }

    return (
        <>
        <Navigation></Navigation>
        <Container>
           <Row  style={{height: 'calc(100vh-56px)', display:'flex', alignItems:'center'}}>
                <Col style={{boxShadow:'0 0 5px gray', padding: '12% 10%', borderRadius:'1%'}} sm={12} lg={5}>
                    <h1 style={{color:'hotPink'}}>Login Now</h1>
                <Form onSubmit = {handleLoginSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name="email" onChange={hanldeOnChange} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control name="password" onChange={hanldeOnChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <button  style={{width:"100%", backgroundColor:"yellow", border:'2px solid blue', padding:'5px, 5px', borderRadius:'5px' }} variant="primary" type="submit">
                        LOGIN
                    </button>
                    {
                    user?.email && <h3 className="text-success">Login Successfully</h3>
                }
                {
                    isLoading &&   <Spinner animation="grow" variant="primary" /> 
                }
                
                {authError && <h3 className="text-danger">{authError}</h3> }
                </Form>
                <p>New User ? <Link to  ='/signup'>Register Now</Link> </p>
                <p className="text-center mt-2">_______________________OR_______________________</p>
                <button  style={{width:"100%", backgroundColor:"yellow", border:'2px solid blue', padding:'5px 5px', borderRadius:'5px', color:'black' }} onClick={handleGoogleSignIn} className="btn btn-primary"> <FontAwesomeIcon style={{color:'black'}} icon={faGoogle} /> Log in with Google</button>
                </Col>
                <Col sm={12} lg={7}>
                    <img className="img-fluid" src="https://i.ibb.co/02jB9NJ/4957136.jpg" alt="This is login images" />
                </Col>
           </Row>
          
        </Container>
        </>
    );
};

export default Login;