import axios from "axios";
import React from "react";

function Login(){

    const submitHandler = e =>{
       
        e.preventDefault();
       
        const username = e.target.username.value;
        const password = e.target.password.value;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(username===''|| password===''){
            
            console.log("los campos no pueden estar vacios");
            return;
        }

        if (username !== '' &&  !regexEmail.test(username)){

            console.log("Debe escribir una direccion de correo electronico valida")
            return;
        }

        if (username !== 'challenge@alkemy.org'||password!=='react'){
            console.log("credenciales invalidas");
            return;
        }
        
        console.log("Ok. Estamos listos para enviar la informacion");
        axios
        .post('http://localhost:8080/auth/login',{ username, password })
        .then(res=>{
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