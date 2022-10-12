import axios from 'axios';
import {useEffect,useState} from 'react'
import "../css/DetailNews.css";
import { Container } from 'react-bootstrap';

function DetailNew(){

let query= new URLSearchParams(window.location.search);

let newId=query.get('newId');

let token=localStorage.getItem('token');

const instance = axios.create({
    baseURL: 'http://localhost:8080/v1',
    timeout: 1000,
    headers: {'Authorization': 'Bearer '+token}
});
  
const [newData, setNewData] = useState([]);

useEffect(() => {
   
    instance.get(`/news/${newId}`)
        .then(response=>{
            const apiData=response.data;
            setNewData(apiData);

       })
// eslint-disable-next-line react-hooks/exhaustive-deps
},[newId]);


return(

<>

        
        <div style={{position:"relative", top:"1em", left:"-30em"}}>
            <h1 className="text">{newData.name} </h1>
          <img className="img" src="https://cohorte-agosto-38d749a7.s3.amazonaws.com/1661519321851-LOGO-SOMOS_MAS.png"></img>
          <Container>
          <h3 className='text' style={{position:"relative", top:"-13em", left:"10em",fontFamily:"Arial"}}>{newData.content}</h3>
          </Container>
        </div>      
   

</>




)

}export default DetailNew;