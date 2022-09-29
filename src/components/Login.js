import axios from "axios";
import React from "react";
import swal from 'sweetalert';

function Login(){

    const submitHandler = e =>{
       
        e.preventDefault();
       
        const username = e.target.username.value;
        const password = e.target.password.value;
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
            console.log(res.data);
        })
       
    }

    return (
        <>
            <h2>Formulario de Login</h2>
            <form onSubmit={submitHandler}>
                <label>
                    <span>Correo electronico:</span> <br/>
                    <input type= "text" name="username" />
                </label>
                <br/>
                <label>
                    <span>password:</span> <br/>
                    < input type="password" name="password"/>
                </label>
                <br/>
                <button type="submit">Ingresar</button>
            </form>
        </>

    )

}

export default Login;