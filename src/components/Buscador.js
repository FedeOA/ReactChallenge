import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom'

function Buscador(){

    const history = useNavigate();

    const submitHandler= e =>{
        e.preventDefault();
        const keyword= e.currentTarget.keyword.value.trim();
        console.log(keyword);

        if (keyword.length===0){
           
            swal("Tienes que escribir el mail de algun usuario","", "warning")

        }else{

            e.currentTarget.keyword.value=' ';
            history(`/results?keyword=${keyword}`)
        }
    }

    return (

       <form className="d-flex align-items-center" onSubmit={submitHandler}>
        <label className="form-label d-block mb-0 mx-2">
            <input className="form-control" type="text" name="keyword" placeholder="Buscar.."></input>
        </label>
        <button className="btn btn-success " type="submit">Buscar</button>
       </form>
    );

}export default Buscador;