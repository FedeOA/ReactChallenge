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
            
            <div  style={{backgroundImage:`url("https://cohorte-agosto-38d749a7.s3.amazonaws.com/1661519321851-LOGO-SOMOS_MAS.png")`}}>
                {token && <Navigate to ="/news"/>}
        
             <Container >
             <br></br><br></br><br></br><br></br><br></br>
                <Row className="mt-5" >
                    
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg" style={{backgroundColor:"#8a4379",borderRadius:"15px",borderColor:"black",width:"400px",height:"350px"}}>
                        <Form onSubmit={submitHandler} >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label><h5>Email address</h5></Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="username"/>
                            </Form.Group>
                            <br></br><br></br>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label><h5>Password</h5></Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" />
                            </Form.Group>
                            <br></br>
                            <Button variant="success btn-block" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                    
                </Row>
                <h6 className="mt-5 p-5 text-center text-secondary " >Copyright © 2022 Somos mas All. Rights Reserved.</h6>
            </Container>
            </div>
        

    );
};
export default Login;