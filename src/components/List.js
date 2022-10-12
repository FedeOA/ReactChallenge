import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container} from 'react-bootstrap';
import {useState , useEffect} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'

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
        
            <Container className='m-box child h300 col-sm-8 col-xs-12 pl-pr' >
            <br></br>
            <br></br>
                    <Row xs={1} md={2} className="g-4" style={{position:""}} >
                        
                    {
                       newList.map((oneNew,idx)=>{   
                            return(
                            
                                <Col key={idx} style={{width:"320px"}} >
                                    <Card style={{columnCount:"3"}}>
                                    <Card.Title ><p style={{display:"flex",justifyContent:"center",fontSize:"30px",fontWeight:"600",fontFamily:"Serif"}}>{oneNew.name}</p></Card.Title>
                                    <Card.Img variant="top" src="https://cohorte-agosto-38d749a7.s3.amazonaws.com/1661519321851-LOGO-SOMOS_MAS.png" />
                                    <Card.Body>
                                        
                                        
                                        <div className="btn-toolbar" role="toolbar">
                                            <div className="btn-group" role="group">
                                            <Link to={`/update?newId=${oneNew.id}`} className="btn btn-primary">Update</Link>
                                            </div>
                                            <div className="col-sm-1 col-xs-1 col-md-1 col-lg-1"></div>
                                            <div className="btn-group" role="group">
                                                <Link to={`/detalle?newId=${oneNew.id}`} className="btn btn-primary">Detail</Link>
                                            </div>
                                        </div>
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