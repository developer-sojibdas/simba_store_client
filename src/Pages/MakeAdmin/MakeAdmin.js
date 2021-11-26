import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { Alert, Button} from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)
    
    const hanldeOnBlur = e =>{
        setEmail(e.target.value);
    }


    const handleAdmin = e =>{
        const user = {email}

        fetch('https://afternoon-inlet-87445.herokuapp.com/users/admin', {
            method: 'put',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data => {
            if(data.modifiedCount){
                
                setSuccess(true);
            }
        })
            e.preventDefault();
            e.target.reset();
            console.log(email);
    }

    return (
        <div>
            <h2>Make An Admin</h2>
            <form onSubmit={handleAdmin}>
            <TextField sx ={{width:'60%'}}
            label="Email" 
            type="email" 
            variant="standard"
            onBlur = {hanldeOnBlur}
            />
            <button style={{ backgroundColor:"yellow", border:'2px solid blue', padding:'5px 5px', borderRadius:'5px', color:'black' }} type="submit">Add Admin</button>
            </form>
       
            {success && <Alert severity="success">Made Admin Succeffully</Alert>}
        </div>
    );
};

export default MakeAdmin;