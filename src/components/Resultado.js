import {useState , useEffect} from "react";
import axios from 'axios';
import { Container,Card} from 'react-bootstrap';

function Resultado(){

    let token=localStorage.getItem('token');
    let listR=[]
    
    let query=new URLSearchParams(window.location.search);
    let keyword=query.get('keyword');

    const [resultList, setResultList] = useState([]);

    const instance = axios.create({
        baseURL: 'http://localhost:8080/v1',
        timeout: 1000,
        headers: {'Authorization': 'Bearer '+token}
    });


    useEffect(() => {
       
        instance.get('/contacts')
            .then(response=>{
                const apiData=response.data;
                
                apiData.forEach(obj => {
                    
                    if (obj.email===keyword){
  
                        listR.push(obj);
                        
                    }
                    
                });
                setResultList(listR)
                
           })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[setResultList]);

    return(
        <>

            <Container>
            
            <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Contacts 
            </h1>

            {
            resultList.map((oneResult,idx)=>{   
                 return(
                    <>
                     <Card>
                     <Card.Header>{oneResult.email}</Card.Header>
                     <Card.Body>
                         <blockquote className="blockquote mb-0">
                         <p>
                             {' '}
                             {oneResult.message}{' '}
                         </p>
                         <footer className="blockquote-footer">
                             Name <cite title="Source Title">{oneResult.name}</cite>
                         </footer>
                         <footer className="blockquote-footer">
                             Phone <cite title="Source Title">{oneResult.phone}</cite>
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
}export default Resultado