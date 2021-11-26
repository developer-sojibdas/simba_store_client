import React, { useState } from 'react';
import { Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link  , useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const SignUp = () => {
    const { user, registerUser , isLoading , authError } = useAuth();
    const [loginData, setLoginData] = useState({})

    const history = useHistory()

    const hanldeOnBlur = e =>{
        const field = e.target.name;
        const value  = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{

        if(loginData.password !== loginData.password2){
           alert('password not match')
            return
        }


        registerUser(loginData.email, loginData.password, loginData.name, history )

        e.preventDefault();
    }
    return (
        <Container>
            
           <Row  style={{height: 'calc(100vh-56px)', display:'flex', alignItems:'center'}}>
                <Col style={{boxShadow:'0 0 5px gray', padding: '12% 10%', borderRadius:'1%'}} sm={12} lg={5}>
                    <h1 style={{color:'hotPink'}}>Register Now</h1>
                { !isLoading && <Form onSubmit = {handleLoginSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      
                        <Form.Control name="name" onBlur={hanldeOnBlur}  type="text" placeholder="Your Name" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        
                        <Form.Control  name="email" onBlur={hanldeOnBlur}  type="email" required placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    
                        <Form.Control name="password" onBlur={hanldeOnBlur} type="password" required placeholder="Password" />
                   
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    
                        <Form.Control name="password2" onBlur={hanldeOnBlur} type="password" placeholder="ReType Password" />
                   
                    </Form.Group>

                    <button  style={{width:"60%", backgroundColor:"yellow", border:'2px solid blue', padding:'5px 5px', borderRadius:'5px' }} variant="primary" type="submit">
                        SIGNUP
                    </button>
                </Form>}
                {
                    user?.email && <h3 className="text-success">User Created successfully</h3>
                }
                {
                    isLoading &&   <Spinner animation="grow" variant="primary" /> 
                }
                
                {authError && <h3 className="text-danger">{authError}</h3> }
                <p>Already Registered ? <Link to ="/login">Please Login</Link></p>
                
                </Col>
                <Col sm={12} lg={7}>
                    <img className="img-fluid" src="https://i.ibb.co/02jB9NJ/4957136.jpg" alt="This is login images" />
                </Col>
           </Row>
          
        </Container>
    );
};

export default SignUp;