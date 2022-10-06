import axios from "axios";
import React from "react";
import swal from 'sweetalert';
import {useNavigate,Navigate} from 'react-router-dom';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

function Login(){

    const history = useNavigate();

    const submitHandler = ev =>{
       
        ev.preventDefault();
       
        const username = ev.target.username.value;
        const password = ev.target.password.value;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(username===''|| password===''){
            
            swal("los campos no pueden estar vacios","", "error")
            return;
        }

        if (username !== '' &&  !regexEmail.test(username)){

            swal("Ingrese un correo valido","example@gmail.com", "error")
            return;
        }

        if (username !== 'challenge@alkemy.org'||password!=='react'){
            swal("credenciales invalidas","", "warning")
            return;
        }
        
        console.log("Ok. Estamos listos para enviar la informacion");
       
        axios
        .post('http://localhost:8080/auth/login',{ username, password })
        .then(res=>{
            swal("Perfecto. Ingresaste con éxito","","success")
            const tokenRecibido=res.data.token;
            localStorage.setItem('token',tokenRecibido);
            history("/news");
        });

        
       
    }

        let token=localStorage.getItem('token');
        
        return (
            <>
                {token && <Navigate to ="/news"/>}
            
             <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Admin Login</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="username"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" />
                            </Form.Group>

                            <Button variant="success btn-block" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2021 Masud Rana. All Rights Reserved.</h6>
            </Container>
        </>
    );
};
export default Login;