import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container} from 'react-bootstrap';
import {useState , useEffect} from "react";
import axios from 'axios';


function List(){

    let token=localStorage.getItem('token');

    const [newList, setNewList] = useState([]);

    const instance = axios.create({
        baseURL: 'http://localhost:8080/v1',
        timeout: 1000,
        headers: {'Authorization': 'Bearer '+token}
    });
      
    
    useEffect(() => {
       
        instance.get('/news')
            .then(response=>{
                const apiData=response.data.content;
                setNewList(apiData);
                console.log(apiData);
           })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[setNewList]);
    
    
    return (
        <>
        
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">News</h1>
                    <Row xs={1} md={2} className="g-4">
                    {
                       newList.map((oneNew,idx)=>{   
                            return(
                            
                                <Col key={idx}>
                                    <Card>
                                    <Card.Img variant="top" src="https://cohorte-agosto-38d749a7.s3.amazonaws.com/1661519321851-LOGO-SOMOS_MAS.png" />
                                    <Card.Body>
                                        <Card.Title>{oneNew.name}</Card.Title>
                                        <Card.Text>
                                        {oneNew.image}
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })    
                    }  
                    </Row>      
                            
                </Container>
            
        
        </>
    )
}
export default List;