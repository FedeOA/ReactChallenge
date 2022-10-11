import axios from 'axios';
import {useState , useEffect} from "react";
import {Card,Container,Row} from 'react-bootstrap';
import Buscador from './Buscador';


function Contact(){

    let token=localStorage.getItem('token');

    const [contactList, setContactList] = useState([]);

    const instance = axios.create({
        baseURL: 'http://localhost:8080/v1',
        timeout: 1000,
        headers: {'Authorization': 'Bearer '+token}
    });


    useEffect(() => {
       
        instance.get('/contacts')
            .then(response=>{
                const apiData=response.data;
                setContactList(apiData);
                console.log(apiData);
           })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[setContactList]);

    return(
        <>
        
        <Container>
            
            <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Contacts 
            </h1>

            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Buscador></Buscador>
            </div>
                <br></br>
                {
                   contactList.map((oneContact,idx)=>{   
                        return(
                           <>
                            <Card>
                            <Card.Header>{oneContact.email}</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    {oneContact.message}{' '}
                                </p>
                                <footer className="blockquote-footer">
                                    Name <cite title="Source Title">{oneContact.name}</cite>
                                </footer>
                                <footer className="blockquote-footer">
                                    Phone <cite title="Source Title">{oneContact.phone}</cite>
                                </footer>
                                 
                                </blockquote>
                            </Card.Body>
                            </Card>
                           <br></br>
                           </> 
                        )
                        
                    })    
                }  
                         
            </Container>
        
    
    </>   

    
    );

}
export default Contact;