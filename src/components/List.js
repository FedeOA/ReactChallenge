import {useNavigate} from 'react-router-dom';

function List(){

    const history=useNavigate();
    
    const token=localStorage.getItem('item');

    if(token===null){
        
        history("/localhost:3000/login")
    }

    return (

        <h2>Listado</h2>

    )


}
export default List;